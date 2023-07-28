<script setup lang="ts">
defineEmits<{ (e: "update:modelValue", value: string): void }>();
defineProps<{ modelValue: boolean }>();
</script>

<template>
  <div :class="$style.DSwitch">
    <input
      :class="$style.nativeInput"
      type="checkbox"
      :checked="modelValue"
      v-bind="$attrs"
      @change="$emit('update:modelValue', ($event.target as HTMLInputElement).checked)"
    >
    <label :class="$style.toggle" />
    <slot :checked="modelValue" />
  </div>
</template>

<style module lang="scss">
.DSwitch {
  display: flex;
  align-items: center;
  position: relative;
  flex-direction: var(--switch-flex-direction, row);
  gap: var(--dc__spacing-nm-100);
  user-select: none;
  height: fit-content;
  width: fit-content;

  .toggle {
    --width: var(--switch-width, 3rem);
    --padding: calc(var(--width) * 0.025);
    outline: var(--padding) solid var(--dc__color-background);
    padding: var(--padding);
    width: calc(var(--width) + var(--padding) * 2);
    background: var(--switch-disabled-background, var(--dc__color-text));
    display: block;
    border-radius: calc(var(--width) * 0.5);
    pointer-events: none;
    position: relative;

    &::after {
      content: "";
      display: block;
      width: calc(var(--width) * 0.5);
      height: calc(var(--width) * 0.5);
      background: var(--dc__color-background);
      border-radius: calc(var(--width) * 0.45);
      transform: translateX(0);
      transition: width 0.3s, transform 0.3s;
    }
  }


  .nativeInput {
    cursor: pointer;
    outline: 0;
    border: 0;
    height: 0;
    width: 0;
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    user-select: none;

    &:disabled {
      cursor: not-allowed;

      + .toggle {
        opacity: 0.5;
      }
    }

    &:focus + .toggle {
      background: var(--dc__color-background);
      outline-color: var(--dc__color-accent);
      &::after {
        background: var(--dc__color-accent);
      }
    }

    &:checked + .toggle {
      background: var(--dc__color-accent);

      &::after {
        background: var(--dc__color-background);
        transform: translateX(calc(var(--width) * 0.5));
      }
    }
  }

  &:active .nativeInput {
    &:not(:disabled) + .toggle::after {
      width: calc(var(--width) * 0.65);
    }

    &:disabled + .toggle::after {
      transform: translateX(calc(var(--width) * 0.15));
    }

    &:checked + .toggle::after {
      transform: translateX(calc(var(--width) * 0.35));
    }
  }

}
</style>
