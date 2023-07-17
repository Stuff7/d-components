<script lang="ts">
import { iconKeys } from "d-components/DIcon";

const iconOptions = iconKeys.map((key) => ({
  label: key,
  value: key,
}));
</script>

<script setup lang="ts">
import { ref } from "vue";
import DIcon, { type IconName } from "d-components/DIcon";
import DSelect from "d-components/DSelect";
import DInput from "d-components/DInput";
import DStage from "~/components/DStage.vue";

const name = ref<IconName>(iconOptions[0]);
const color = ref("#ffffff");
const fontSize = ref("25vw");
</script>

<template>
  <d-stage>
    <d-icon
      :name="name.value"
      :style="{ color, fontSize }"
    />
    <template #default-controls>
      <p>Name</p>
      <d-select
        v-model="name"
        :options="iconOptions"
      />
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
