<script setup generic="SelectOption extends Record<Indexable, unknown>" lang="ts">
import type { StyleValue } from "vue";
import DIcon from "~/components/DIcon.vue";
import { isIndexable } from "~/utils";

const emit = defineEmits<{ (e: "update:modelValue", modelValue: SelectOption): void }>();
const props = withDefaults(defineProps<{
  options: readonly SelectOption[],
  modelValue: SelectOption,
  labelKey?: keyof SelectOption,
  valueKey?: keyof SelectOption,
  styleKey?: keyof SelectOption,
}>(), {
  labelKey: "label",
  valueKey: "value",
  styleKey: "style",
});

function selectChange({ target }: Event) {
  if (target instanceof HTMLSelectElement) {
    const modelValue = props.options.find(option => option[props.valueKey] === target.value);
    if (modelValue) {
      emit("update:modelValue", modelValue);
    }
  }
}

function indexableOrUndefined(this: keyof SelectOption, option: SelectOption) {
  const value = option[this];
  if (isIndexable(value)) {
    return value;
  }
}

const getValue = indexableOrUndefined.bind(props.valueKey) as typeof indexableOrUndefined;
const getLabel = indexableOrUndefined.bind(props.labelKey) as typeof indexableOrUndefined;
const getStyle = (option: SelectOption): StyleValue | undefined => {
  const style = option[props.styleKey];
  if ((typeof style === "object" && style) || typeof style === "string") {
    return style as StyleValue;
  }
};
</script>

<template>
  <div :class="$style.DSelect">
    <select
      v-if="options.length"
      :class="$style.nativeSelect"
      :value="getValue(modelValue)"
      @change="selectChange"
    >
      <option
        v-for="option of options"
        :key="getValue(option)"
        :value="getValue(option)"
        :selected="getValue(option) === getValue(modelValue)"
        :style="getStyle(option)"
      >
        {{ getLabel(option) }}
      </option>
    </select>
    <button :class="$style.toggle">
      <slot :selected="modelValue">
        {{ getLabel(modelValue) }}
      </slot>
      <d-icon
        name="chevron-down"
        size="var(--p-sm-100)"
      />
    </button>
  </div>
</template>

<style module lang="scss">
.DSelect {
  position: relative;
  width: var(--select-width, max-content);

  .toggle {
    cursor: pointer;
    outline: 0;
    border: 0;
    background: var(--select-button-background, var(--dc__color-text));
    border: var(--select-border, 0);
    border-radius: var(--select-border-radius, var(--dc__radius-nm-100));
    color: var(--select-button-color, var(--dc__color-background));
    padding: var(--dc__spacing-nm-100);
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--dc__spacing-nm-100);
    font-size: var(--dc__p-nm-100);
    pointer-events: none;
    width: var(--select-width, max-content);
  }

  .nativeSelect {
    appearance: none;
    opacity: 0;
    position: absolute;
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    z-index: 1;
    pointer-events: all;
    cursor: pointer;
  }
}
</style>
