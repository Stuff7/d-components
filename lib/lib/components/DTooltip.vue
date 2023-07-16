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
import useHover from "~/composables/hover";
import useIntersectionObserver from "~/composables/intersection";
import useMousePosition from "~/composables/mouse-position";

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
    v-if="isHovering"
    :to="tooltipLayerId"
  >
    <div
      ref="tooltipRef"
      role="tooltip"
      :style="{
        '--tooltip-x': `${x}px`,
        '--tooltip-y': `${y}px`,
        '--tooltip-position-x': `calc(${calculatedPosition.x})`,
        '--tooltip-position-y': `calc(${calculatedPosition.y})`,
      }"
    >
      <slot />
    </div>
  </Teleport>
  <span
    v-if="!parentRef"
    ref="anchorRef"
  />
</template>

<style scoped lang="scss">
@use "~/style/font";
@use "~/style/color";

div {
  position: absolute;
  left: var(--tooltip-x);
  top: var(--tooltip-y);
  pointer-events: none;
  background: var(--dc__color-background);
  color: var(--dc__color-text);
  box-shadow: 0 0 font.rem(10) 0 var(--dc__color-background);
  border-radius: var(--dc__radius-nm-100);
  padding: var(--dc__spacing-nm-100);
  width: max-content;
  max-width: clamp(font.rem(220), 80vw, font.rem(900));
  transform: translate(var(--tooltip-position-x), var(--tooltip-position-y));
}

span {
  display: none;
}
</style>
