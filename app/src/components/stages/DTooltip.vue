<script setup lang="ts">
import { ref } from "vue";
import DIcon from "d-components/DIcon.vue";
import DTooltip from "d-components/DTooltip.vue";
import DInput from "d-components/DInput.vue";
import DStage from "~/components/DStage.vue";

const tooltipText = ref("This is the tooltip.");
</script>

<template>
  <d-stage>
    <template #just-text>
      <h1>
        Hover over this to see the tooltip.
        <d-tooltip>{{ tooltipText }}</d-tooltip>
      </h1>
    </template>
    <template #with-custom-content>
      <h1>
        Hover over this to see the tooltip.
        <d-tooltip>
          <span style="display: flex; gap: var(--spacing-nm-100);">
            <d-icon name="trash" />
            <i>{{ tooltipText }}</i>
          </span>
        </d-tooltip>
      </h1>
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
