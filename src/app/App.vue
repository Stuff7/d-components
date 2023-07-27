<script setup lang="ts">
import DAside from "@app/components/DAside.vue";
import * as stages from "@app/components/stages";
import { keysOf } from "./utils";
import { ref } from "vue";

const stageKeys = keysOf(stages);
const selectedStage = ref(stageKeys[0]);
</script>

<template>
  <main :class="$style.App">
    <d-aside
      v-model="selectedStage"
      :stage-keys="stageKeys"
    />
    <component :is="stages[selectedStage]" />
  </main>
</template>

<style lang="scss" module>
.App {
  display: grid;
  grid-template-columns: max-content 1fr;
  height: 100vh;
}
</style>
