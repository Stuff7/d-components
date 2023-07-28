<script setup lang="ts">
import { computed, ref } from "vue";
import DFoldable from "d-components/DFoldable.vue";
import DInput from "d-components/DInput.vue";
import DSwitch from "d-components/DSwitch.vue";
import DStage from "@app/components/DStage.vue";

const childCount = ref(5);
const foldDuration = ref("0.25s");
const children = computed(() => Array.from({ length: childCount.value }).map(crypto.randomUUID.bind(crypto)));
const usingCustomContent = ref(false);
const contentStyle = ref("");
const usingCustomDuration = ref(false);
const folded = ref(false);
const foldedText = computed(() => `Click here to ${folded.value ? "unfold" : "fold"}`);
</script>

<template>
  <d-stage>
    <d-foldable
      v-slot="{ contentClass }"
      :folded="folded"
      :class="$style.DFoldable"
      :label="foldedText"
      :style="usingCustomDuration ? { '--dfoldable-speed': foldDuration } : null"
    >
      <div
        :class="usingCustomContent ? undefined : contentClass"
        :style="usingCustomContent ? contentStyle: undefined"
      >
        <div
          v-for="id, i of children"
          :key="id"
          :class="$style.child"
        >
          Child #{{ i + 1 }}
        </div>
      </div>
    </d-foldable>
    <template #default-controls>
      <p>Folded</p>
      <d-switch v-model="folded" />
      <p>Elements</p>
      <d-input
        v-model="childCount"
        type="number"
        label="Only numbers."
      />
      <p>Custom Fold Duration</p>
      <d-switch v-model="usingCustomDuration" />
      <template v-if="usingCustomDuration">
        <p>Fold Duration</p>
        <d-input
          v-model="foldDuration"
          label="Any css time unit."
        />
      </template>
      <p>Custom Content Style</p>
      <d-switch v-model="usingCustomContent" />
      <template v-if="usingCustomContent">
        <p>Content Style</p>
        <d-input
          v-model="contentStyle"
          textarea
          :style="{ '--input-resize': 'vertical' }"
          label="Any css properties."
        />
      </template>
    </template>
  </d-stage>
</template>

<style module lang="scss">
.DFoldable {
  .child {
    padding: var(--spacing-nm-100);
    display: flex;
    justify-content: center;
    align-items: center;
    border-inline: 2px solid var(--color-accent);
  }
}
</style>
