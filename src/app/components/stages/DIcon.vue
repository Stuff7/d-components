<script lang="ts">
import { iconKeys } from "d-components/DIcon.vue";

const iconOptions = iconKeys.map((key) => ({
  label: key,
  value: key,
}));
</script>

<script setup lang="ts">
import { ref } from "vue";
import DIcon from "d-components/DIcon.vue";
import DSelect from "d-components/DSelect.vue";
import DInput from "d-components/DInput.vue";
import DStage from "@app/components/DStage.vue";

const selectedIcon = ref(iconOptions[0]);
const color = ref("#888888");
const fontSize = ref("25vw");
</script>

<template>
  <d-stage>
    <d-icon
      :name="selectedIcon.value"
      :style="{ color, fontSize }"
    />
    <template #default-controls>
      <p>Name</p>
      <d-select
        v-model="selectedIcon"
        :options="iconOptions"
      >
        <d-icon :name="selectedIcon.label" />
        <p>{{ selectedIcon.label }}</p>
      </d-select>
      <p>Color</p>
      <input
        v-model="color"
        type="color"
      >
      <p>Size</p>
      <d-input
        v-model="fontSize"
        label="Any css font-size unit."
      />
    </template>
  </d-stage>
</template>
