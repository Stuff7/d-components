<script setup lang="ts">
import { computed, ref } from "vue";
import DInput from "d-components/DInput";
import DSelect from "d-components/DSelect";
import DStage from "~/components/DStage.vue";

const optionCount = ref(10);
const options = computed(() => Array.from({ length: optionCount.value }).map((_, i) => ({
  label: `Option #${i}`,
  value: i.toString(),
})));
const selectedOption = ref(options.value[0]);
const width = ref("auto");
</script>

<template>
  <d-stage>
    <d-select
      v-model="selectedOption"
      :options="options"
      :style="{
        '--select-width': width,
      }"
    />
    <template #default-controls>
      <p>Option Count</p>
      <d-input
        v-model="optionCount"
        type="number"
        label="Number of options"
      />
      <p>Width</p>
      <d-input
        v-model="width"
        label="Any css width unit"
      />
    </template>
  </d-stage>
</template>
