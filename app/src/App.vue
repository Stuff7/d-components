<script setup lang="ts">
import * as components from "d-components";
import DIcon from "d-components/DIcon";
import DInput from "d-components/DInput";
import DSelect from "d-components/DSelect";
import DSwitch from "d-components/DSwitch";
import { ref } from "vue";
import { keysOf } from "~/utils";

const componentKeys = keysOf(components);
const selectedComponent = ref<typeof componentKeys[number]>("DIcon");

const input = ref(5);
const options = Array.from({ length: 10 }, (_, i) => ({ label: `Number ${i + 1}` }));
const select = ref(options[5]);
const toggle = ref(true);
</script>

<template>
  <main :class="$style.App">
    <aside :class="$style.Sidebar">
      <button
        v-for="component of componentKeys"
        :key="component"
        @click="selectedComponent = component"
      >
        {{ component }}
      </button>
    </aside>
    <article :class="$style.Component">
      <component :is="components[selectedComponent]" />
      <d-icon name="exclamation-triangle" />
      <d-input
        v-model="input"
        type="number"
        label="Test"
      />
      <d-select
        v-model="select"
        :options="options"
        value-key="label"
      />
      <d-switch v-model="toggle" />
    </article>
  </main>
</template>

<style lang="scss" module>
.App {
  padding: var(--spacing-nm-100);
  display: grid;
  grid-template-columns: max-content 1fr;
  gap: var(--spacing-nm-100);
  padding: 0 var(--spacing-nm-100);

  .Sidebar {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-nm-100);
    padding: var(--spacing-nm-100);
  }

  .Component {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
