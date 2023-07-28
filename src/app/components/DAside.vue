<script setup lang="ts" generic="T extends string">
import DIcon from "d-components/DIcon.vue";

defineProps<{ stageKeys: T[], modelValue: T }>();
defineEmits<{ (e: "update:modelValue", v: T): void }>();
</script>

<template>
  <aside :class="$style.DAside">
    <h1 :class="$style.title">
      <b>DComponents</b>
    </h1>
    <button
      v-for="stageKey of stageKeys"
      :key="stageKey"
      :class="{ [$style.stage]: true, [$style.selected]: modelValue === stageKey }"
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
.DAside {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-nm-100);
  background: var(--color-background-2);
  padding-left: var(--spacing-nm-200);
  min-width: clamp(8rem, 20vw, 10rem);
  color: var(--color-accent);
  border-right: 1px solid var(--color-background-3);

  .title {
    padding-block: var(--spacing-nm-100);
    padding-right: var(--spacing-nm-100);
    font-size: calc(var(--p-nm-100) * 1.4);
  }

  .stage {
    font-size: var(--p-nm-100);
    border-radius: var(--radius-nm-100) 0 0 var(--radius-nm-100);
    padding: var(--spacing-nm-100);
    text-align: left;
    font-weight: 600;
    background: transparent;
    color: var(--color-text-1);
    display: grid;
    grid-template-columns: auto 1fr auto;
    gap: var(--spacing-nm-100);
    --focus-outline: var(--color-accent);

    &:focus {
      outline: 1px solid var(--focus-outline);
    }

    &:hover {
      background: var(--color-text-2);
      color: var(--color-background-2);
    }

    &.selected {
      pointer-events: none;
      background: var(--color-accent);
      color: var(--color-background-2);
      --focus-outline: var(--color-text-1);
    }
  }
}
</style>
