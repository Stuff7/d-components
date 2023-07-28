<script lang="ts">
const tooltipLayerId = "#tooltip-layer";
let tooltipLayer = document.querySelector(tooltipLayerId);
if (!tooltipLayer) {
  tooltipLayer = document.createElement("div");
  tooltipLayer.setAttribute("id", tooltipLayerId.slice(1));
  document.body.appendChild(tooltipLayer);
}
</script>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import type { Option } from "miscfe/types";
import useHover from "@lib/composables/hover";
import useIntersectionObserver from "@lib/composables/intersection";
import useMousePosition from "@lib/composables/mouse-position";

const props = defineProps<{ for?: string }>();

onMounted(() => {
  parentRef.value = props.for ? document.querySelector(props.for) : anchorRef.value?.parentElement || null;
});

const { x, y } = useMousePosition();
const calculatedPosition = ref({ x: "1rem", y: "1rem" });
const [isHovering, parentRef] = useHover();
const anchorRef = ref<Option<HTMLElement>>(null);
const tooltipRef = useIntersectionObserver((entry) => {
  if (entry.intersectionRatio < 1) {
    const { boundingClientRect: tooltipRect, intersectionRect } = entry;
    let { x: positionX, y: positionY } = calculatedPosition.value;
    if (tooltipRect.right !== intersectionRect.right) {
      positionX = "-100% - 1rem";
    } else if (tooltipRect.left !== intersectionRect.left) {
      positionX = "1rem";
    }
    if (tooltipRect.top !== intersectionRect.top) {
      positionY = "1rem";
    } else if (tooltipRect.bottom !== intersectionRect.bottom) {
      positionY = "-100% - 1rem";
    }
    calculatedPosition.value = { x: positionX, y: positionY };
  }
}, { root: tooltipLayer });
</script>

<template>
  <Teleport
    :to="tooltipLayerId"
  >
    <Transition
      :enter-active-class="$style.popIn"
      :leave-active-class="$style.popIn"
      :enter-from-class="$style.popOut"
      :leave-to-class="$style.popOut"
    >
      <div
        v-if="isHovering"
        ref="tooltipRef"
        role="tooltip"
        :class="$style.Tooltip"
        :style="{
          '--tooltip-x': `${x}px`,
          '--tooltip-y': `${y}px`,
          '--tooltip-position-x': `calc(${calculatedPosition.x})`,
          '--tooltip-position-y': `calc(${calculatedPosition.y})`,
        }"
      >
        <slot />
      </div>
    </Transition>
  </Teleport>
  <span
    v-if="!parentRef"
    ref="anchorRef"
    :class="$style.TooltipAnchor"
  />
</template>

<style module lang="scss">
@use "miscfe/font.scss";
@use "@lib/style/color";

.Tooltip {
  position: absolute;
  left: var(--tooltip-x);
  top: var(--tooltip-y);
  pointer-events: none;
  background: var(--dc__color-background);
  color: var(--dc__color-text);
  box-shadow: 0 0 font.rem(10) 0 var(--dc__color-background);
  border: 1px solid var(--dc__color-text);
  border-radius: var(--dc__radius-nm-100);
  padding: var(--dc__spacing-nm-100);
  width: max-content;
  max-width: clamp(font.rem(220), 80vw, font.rem(900));
  translate: var(--tooltip-position-x) var(--tooltip-position-y);
  transition: scale 0.12s ease;

  &.popIn {
    scale: 1.2;
  }

  &.popOut {
    scale: 0;
  }
}

.TooltipAnchor {
  display: none;
}
</style>
