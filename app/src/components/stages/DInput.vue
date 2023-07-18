<script setup lang="ts">
import { ref } from "vue";
import DInput from "d-components/DInput";
import DSwitch from "d-components/DSwitch";
import DStage from "~/components/DStage.vue";

const textInput = ref("");
const numberInput = ref(0);
const label = ref("This is a label");
const disabled = ref(false);
</script>

<template>
  <d-stage>
    <template #text>
      <d-input
        v-model="textInput"
        type="text"
        :label="label"
        :disabled="disabled"
      />
    </template>
    <template #number>
      <d-input
        v-model="numberInput"
        type="number"
        :label="label"
        :disabled="disabled"
      />
    </template>
    <template #default-controls>
      <p>Label</p>
      <d-input v-model="label" />
      <p>Disabled</p>
      <d-switch v-model="disabled" />
    </template>
  </d-stage>
</template>
