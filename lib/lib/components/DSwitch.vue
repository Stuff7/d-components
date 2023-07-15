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

  .toggle {
    --width: var(--switch-width, 3rem);
    width: var(--width);
    height: calc(var(--width) * 0.5);
    background: var(--switch-disabled-background, var(--dc__color-text));
    display: block;
    border-radius: calc(var(--width) * 0.5);
    pointer-events: none;
    position: relative;

    &::after {
      content: "";
      position: absolute;
      top: calc(var(--width) * 0.025);
      left: calc(var(--width) * 0.025);
      width: calc(var(--width) * 0.45);
      height: calc(var(--width) * 0.45);
      background: var(--dc__color-background);
      border-radius: calc(var(--width) * 0.45);
      transition: 0.3s;
    }
  }


  &:active .toggle::after {
    width: calc(var(--width) * 0.65);
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

    &:checked + .toggle {
      background: var(--dc__color-accent);

      &::after {
        left: calc(100% - calc(var(--width) * 0.025));
        transform: translateX(-100%);
      }
    }
  }
}
</style>
