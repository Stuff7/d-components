<script setup lang="ts">
import { computed, ref } from "vue";
import DInput from "@lib/components/DInput.vue";
import DSelect from "@lib/components/DSelect.vue";
import DSwitch from "@lib/components/DSwitch.vue";
import DIcon from "@lib/components/DIcon.vue";
import DStage from "@app/components/DStage.vue";

const optionCount = ref(10);
const options = computed(() => Array.from({ length: optionCount.value }).map((_, i) => ({
  label: `Option #${i}`,
  value: i.toString(),
})));
const selectedOption = ref(options.value[0]);
const width = ref("auto");
const disabled = ref(false);
</script>

<template>
  <d-stage>
    <template #regular>
      <d-select
        v-model="selectedOption"
        :options="options"
        :style="{
          '--select-width': width,
        }"
        :disabled="disabled"
      />
    </template>
    <template #custom>
      <d-select
        v-slot="{ focused }"
        v-model="selectedOption"
        :options="options"
        :style="{
          '--select-width': width,
        }"
        :disabled="disabled"
      >
        <div :class="{ [$style.CustomSelect]: true, [$style.focused]: focused }">
          <d-icon
            :class="$style.icon"
            name="trash"
          />
          <p>You can have <b>any</b> components here</p>
          <b>{{ selectedOption.label }}</b>
        </div>
      </d-select>
    </template>
    <template #default-controls>
      <p>Disabled</p>
      <d-switch v-model="disabled" />
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

<style lang="scss" module>
.CustomSelect {
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: 1fr 1fr;
  gap: var(--spacing-nm-100);
  border-block: 1px solid var(--color-background-1);

  &.focused b {
    color: var(--color-background-1);
  }

  .icon {
    grid-row: span 2;
    align-self: center;
    font-size: var(--p-nm-200);
  }
}
</style>
