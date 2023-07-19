<script setup lang="ts">
import { ref } from "vue";
import DInput from "d-components/DInput.vue";
import DStage from "~/components/DStage.vue";

const textInput = ref("");
const numberInput = ref(0);
const label = ref("This is a label");
</script>

<template>
  <d-stage>
    <template #text>
      <d-input
        v-model="textInput"
        type="text"
        :label="label"
      />
    </template>
    <template #number>
      <d-input
        v-model="numberInput"
        type="number"
        :label="label"
      />
    </template>
    <template #default-controls>
      <p>Label</p>
      <d-input v-model="label" />
    </template>
  </d-stage>
</template>
