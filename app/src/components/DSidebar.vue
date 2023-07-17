<script setup lang="ts" generic="T extends string">
import DIcon from "d-components/DIcon";

defineProps<{ stageKeys: T[], modelValue: T }>();
defineEmits<{ (e: "update:modelValue", v: T): void }>();
</script>

<template>
  <aside :class="$style.DSidebar">
    DComponents
    <button
      v-for="stageKey of stageKeys"
      :key="stageKey"
      :class="{ [$style.Stage]: true, [$style.selected]: modelValue === stageKey }"
      @click="$emit('update:modelValue', stageKey)"
    >
      <d-icon name="angle-double-right" />
      {{ stageKey }}
      <d-icon
        v-if="modelValue === stageKey"
        name="check"
      />
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
  font-weight: 900;
  color: var(--color-accent);

  .Stage {
    font-size: var(--p-nm-100);
    border-radius: var(--radius-nm-100);
    padding: var(--spacing-nm-100);
    text-align: left;
    font-weight: 600;
    background: var(--color-text-1);
    color: var(--color-background-1);
    display: grid;
    grid-template-columns: auto 1fr auto;
    gap: var(--spacing-nm-100);

    &:hover {
      opacity: 0.85;
    }

    &.selected {
      pointer-events: none;
      background: var(--color-accent);
    }
  }
}
</style>
