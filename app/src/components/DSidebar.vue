<script setup lang="ts" generic="T extends string">
defineProps<{ stageKeys: T[], modelValue: T }>();
defineEmits<{ (e: "update:modelValue", v: T): void }>();
</script>

<template>
  <aside :class="$style.DSidebar">
    Sidebar
    <button
      v-for="stageKey of stageKeys"
      :key="stageKey"
      :class="{ [$style.Stage]: true, [$style.selected]: modelValue === stageKey }"
      @click="$emit('update:modelValue', stageKey)"
    >
      {{ stageKey }}
    </button>
  </aside>
</template>

<style lang="scss" module>
.DSidebar {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-nm-100);
  padding: var(--spacing-nm-100);
  border: 1px solid var(--color-text-1);
  min-width: clamp(8rem, 20vw, 10rem);

  .Stage.selected {
    pointer-events: none;
    background: var(--color-accent);
  }
}
</style>
