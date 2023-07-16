<script setup lang="ts">
import { ref } from "vue";
import DIcon from "~/components/DIcon.vue";

const NUMBER_PATTERN = /^-?(\d+\.?\d*|\d*\.?\d+)$/;
const emit = defineEmits<{ (e: "update:modelValue", value: string): void }>();
const props = withDefaults(
  defineProps<{
    label?: string,
    modelValue: string | number,
    type?: "text" | "number",
    textarea?: boolean,
  }>(),
  { label: "", type: "text" },
);

const inputText = ref(props.modelValue);
const inputError = ref<Option<string>>(null);
const buzz = ref(false);

function validateInput(event: Event) {
  inputError.value = null;
  const prevValue = inputText.value;
  const { target } = event;
  if (!(target instanceof HTMLInputElement || target instanceof HTMLTextAreaElement)) {
    return;
  }

  inputText.value = target.value;
  if (props.type === "text" || NUMBER_PATTERN.test(`${target.value}0`)) {
    emit("update:modelValue", target.value);
  } else {
    inputText.value = prevValue;
    inputError.value = "Only numbers!";
    buzz.value = true;
  }
}
</script>

<template>
  <div
    :class="{ [$style.DInput]: true, [$style.buzz]: buzz }"
    :data-error="inputError"
    @animationend="buzz = false"
  >
    <component
      :is="textarea ? 'textarea' : 'input'"
      :class="$style.input"
      type="text"
      :value="inputText"
      placeholder=" "
      v-bind="$attrs"
      @input="validateInput"
    />
    <label :class="$style.label">{{ label }}</label>
    <p
      v-if="inputError"
      :class="$style.error"
    >
      <d-icon name="exclamation-triangle" />
      {{ inputError }}
    </p>
  </div>
</template>

<style module lang="scss">
.DInput {
  position: relative;
  display: inline-flex;
  align-items: center;
  font-size: var(--dc__p-nm-100);

  &:hover {
    .input {
      border-bottom-color: var(--dc__color-text);
    }

    .label {
      color: var(--dc__color-text);
    }
  }

  .label {
    pointer-events: none;
    position: absolute;
    font-size: var(--dc__p-nm-100);
    font-weight: bold;
    bottom: 50%;
    translate: 0 50%;
    color: var(--dc__color-text);
    padding: 0 var(--dc__spacing-nm-100);
    transition: bottom .3s, font-size .3s, translate .3s, padding .3s, color .3s;
    text-transform: var(--input-label-text-transform, initial);
  }

  .error {
    pointer-events: none;
    position: absolute;
    top: 0;
    right: 0;
    margin: 0;
    color: var(--dc__color-error);
    font-size: calc(var(--dc__p-nm-100) * 0.75);
    white-space: nowrap;
  }

  .input {
    outline: 0;
    border: 0;
    display: inline-block;
    width: 100%;
    padding: calc(var(--dc__spacing-nm-100) * 1.5) var(--dc__spacing-nm-100);
    color: var(--dc__color-text);
    background: transparent;
    font-size: var(--dc__p-nm-100);
    border: 0;
    border-radius: 0;
    border-bottom: 2px solid;
    border-bottom-color: var(--dc__color-text);
    transition: border .3s, text-indent .3s;

    &:focus, &:active, &:not(:placeholder-shown) {
      border-bottom-color: var(--dc__color-accent);

      & + .label {
        bottom: var(--dc__radius-nm-100);
        translate: 0;
        padding: 0;
        font-size: calc(var(--dc__p-nm-100) * 0.75);
        color: var(--dc__color-accent);
      }
    }
  }

  textarea.input {
    resize: var(--input-resize, inherit);
  }

  &[data-error] {
    &.buzz {
      animation: buzz 0.82s cubic-bezier(.36,.07,.19,.97) both;
    }

    .input {
      border-bottom-color: var(--dc__color-error);

      & + .label {
        color: var(--dc__color-error);
      }
    }
  }
}

@keyframes buzz {
  10%, 90% {
    transform: translate3d(-1px, 0, 0);
  }

  20%, 80% {
    transform: translate3d(2px, 0, 0);
  }

  30%, 50%, 70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%, 60% {
    transform: translate3d(4px, 0, 0);
  }
}
</style>