<script setup lang="ts">
import { ref } from "vue";
import DIcon from "d-components/DIcon.vue";
import DTooltip from "d-components/DTooltip.vue";
import DInput from "d-components/DInput.vue";
import DStage from "@app/components/DStage.vue";

const tooltipText = ref("This is the tooltip.");
</script>

<template>
  <d-stage>
    <template #just-text>
      <div :class="$style.Tooltip">
        Hover over this to see the tooltip.
        <d-tooltip>{{ tooltipText }}</d-tooltip>
      </div>
    </template>
    <template #with-custom-content>
      <div :class="$style.Tooltip">
        Hover over this to see the tooltip.
        <d-tooltip>
          <span style="display: flex; gap: var(--spacing-nm-100);">
            <d-icon name="trash" />
            <i>{{ tooltipText }}</i>
          </span>
        </d-tooltip>
      </div>
    </template>
    <template #default-controls>
      <p>Tooltip Text</p>
      <d-input
        v-model="tooltipText"
        label="Text"
      />
    </template>
  </d-stage>
</template>

<style module lang="scss">
.Tooltip {
  height: fit-content;
  background: var(--color-accent);
  color: var(--color-background-1);
}
</style>
