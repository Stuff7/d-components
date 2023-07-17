<script setup lang="ts">
import DSidebar from "~/components/DSidebar.vue";
import * as stages from "~/components/stages";
import { keysOf } from "./utils";
import { ref } from "vue";

const stageKeys = keysOf(stages);
const selectedStage = ref(stageKeys[0]);
</script>

<template>
  <main :class="$style.App">
    <d-sidebar
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
  gap: var(--spacing-nm-100);
  padding: var(--spacing-nm-100);
  height: 100vh;
}
</style>
