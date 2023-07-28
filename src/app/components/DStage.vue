<script setup lang="ts">
import { computed, onMounted, onUpdated, ref, useSlots } from "vue";
import { keysOf } from "@app/utils";
import DSelect from "d-components/DSelect.vue";

const slots = useSlots();
const variants = ref(getSlots());
const variantOptions = computed(() => variants.value.map((variant) => {
  return { label: typeof variant === "string" ? variant.replaceAll("-", " ") : variant, value: variant };
}));
const selectedVariant = ref<typeof variantOptions.value[number]>();

onMounted(() => {
  if (!selectedVariant.value) {
    selectedVariant.value = variantOptions.value[0];
  }
});

onUpdated(() => {
  const newSlots = getSlots();
  if (JSON.stringify(newSlots) !== JSON.stringify(variants.value)) {
    variants.value = newSlots;
  }
});

function getSlots() {
  return keysOf(slots).filter((slot) => typeof slot === "string" && !slot.endsWith("-controls"));
}
</script>

<template>
  <article
    v-if="selectedVariant"
    :class="$style.DStage"
  >
    <section :class="$style.topbar">
      <p>Variant</p>
      <d-select
        v-model="selectedVariant"
        :options="variantOptions"
      />
    </section>
    <section :class="$style.preview">
      <slot :name="selectedVariant.value" />
    </section>
    <section :class="$style.controls">
      <h1 :class="$style.name">
        Name
      </h1><h1 :class="$style.control">
        Control
      </h1>
      <slot
        v-if="selectedVariant.value !== 'default'"
        name="default-controls"
      />
      <slot :name="`${selectedVariant.value}-controls`" />
    </section>
  </article>
</template>

<style lang="scss" module>
.DStage {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: max-content 1fr max-content;
  height: 100%;
  max-height: 100vh;
  background: var(--color-background-3);
  gap: 1px;

  > section {
    padding: var(--spacing-nm-100);
    background: var(--color-background-1);
  }

  .topbar {
    display: grid;
    gap: var(--spacing-nm-100);
    grid-template-columns: auto 1fr;
    align-items: center;
  }

  .preview {
    display: grid;
    justify-content: center;
    overflow-y: auto;
  }

  .controls {
    display: grid;
    grid-template-columns: clamp(6rem, 20%, 12rem) 1fr;
    grid-template-rows: 1fr;
    align-items: center;
    row-gap: var(--spacing-nm-100);

    > .name, > .control {
      font-weight: bold;
      border-bottom: 1px solid var(--color-background-3);
      padding-block: var(--spacing-nm-100);
    }

    > p, .name {
      grid-column: 1;
      padding-block: var(--spacing-nm-100);
    }

    > :not(p), .control {
      grid-column: 2;
    }
  }
}
</style>
