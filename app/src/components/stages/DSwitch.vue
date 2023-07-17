<script lang="ts">
const flowOptions = ["row", "column", "row-reverse", "column-reverse"].map(label => ({ label, value: label }));
</script>

<script setup lang="ts">
import { ref } from "vue";
import DSwitch from "d-components/DSwitch";
import DSelect from "d-components/DSelect";
import DInput from "d-components/DInput";
import DStage from "~/components/DStage.vue";

const enabled = ref(false);
const disabledColor = ref("#888888");
const showStatusLabel = ref(false);
const enabledStatusLabel = ref("Enabled");
const disabledStatusLabel = ref("Disabled");
const flowDirection = ref(flowOptions[0]);
const width = ref("25vw");
</script>

<template>
  <d-stage>
    <d-switch
      v-slot="{ checked }"
      v-model="enabled"
      :style="{
        '--switch-disabled-background': disabledColor,
        '--switch-flex-direction': flowDirection.value,
        '--switch-width': width,
      }"
    >
      <template v-if="showStatusLabel">
        <p v-if="checked">
          {{ enabledStatusLabel }}
        </p>
        <p v-else>
          {{ disabledStatusLabel }}
        </p>
      </template>
    </d-switch>
    <template #default-controls>
      <p>Disabled Color</p>
      <input
        v-model="disabledColor"
        type="color"
      >
      <p>Status Label</p>
      <d-switch v-model="showStatusLabel" />
      <p>Flow Direction</p>
      <d-select
        v-model="flowDirection"
        :options="flowOptions"
      />
      <p>Width</p>
      <d-input
        v-model="width"
        label="Any css width unit."
      />
      <p>Enabled Status Label</p>
      <d-input
        v-model="enabledStatusLabel"
        label="Enabled Label"
      />
      <p>Disabled Status Label</p>
      <d-input
        v-model="disabledStatusLabel"
        label="Disabled Label"
      />
    </template>
  </d-stage>
</template>
