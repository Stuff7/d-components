<script lang="ts">
const flowOptions = ["column", "row", "row-reverse", "column-reverse"].map(label => ({ label, value: label }));
</script>

<script setup lang="ts">
import { ref } from "vue";
import DSwitch from "d-components/DSwitch";
import DSelect from "d-components/DSelect";
import DInput from "d-components/DInput";
import DStage from "~/components/DStage.vue";

const checked = ref(false);
const disabled = ref(false);
const disabledColor = ref("#888888");
const enabledStatusLabel = ref("Enabled");
const disabledStatusLabel = ref("Disabled");
const flowDirection = ref(flowOptions[0]);
const width = ref("25vw");
</script>

<template>
  <d-stage>
    <template #regular>
      <d-switch
        v-model="checked"
        :disabled="disabled"
        :style="{
          '--switch-disabled-background': disabledColor,
          '--switch-flex-direction': flowDirection.value,
          '--switch-width': width,
        }"
      />
    </template>
    <template #default-controls>
      <p>Disabled</p>
      <d-switch v-model="disabled" />
      <p>Disabled Color</p>
      <input
        v-model="disabledColor"
        type="color"
      >
      <p>Width</p>
      <d-input
        v-model="width"
        label="Any css width unit."
      />
    </template>
    <template #with-children>
      <d-switch
        v-model="checked"
        :disabled="disabled"
        :style="{
          '--switch-disabled-background': disabledColor,
          '--switch-flex-direction': flowDirection.value,
          '--switch-width': width,
        }"
      >
        <p v-if="checked">
          {{ enabledStatusLabel }}
        </p>
        <p v-else>
          {{ disabledStatusLabel }}
        </p>
      </d-switch>
    </template>
    <template #with-children-controls>
      <p>Flow Direction</p>
      <d-select
        v-model="flowDirection"
        :options="flowOptions"
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
