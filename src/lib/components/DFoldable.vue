<script setup lang="ts">
defineProps<{ folded: boolean }>();
</script>

<template>
  <div :class="{ [$style.DFoldable]: true, [$style.folded]: folded }">
    <div :class="$style.content">
      <slot :content-class="$style.defaultContent" />
    </div>
  </div>
</template>

<style module lang="scss">
@use "miscfe/font.scss";
@use "@lib/style/color";

.DFoldable {
  display: grid;
  overflow: hidden;
  grid-template-rows: 1fr;
  height: fit-content;
  $fold-duration: var(--dfoldable-speed, 0.25s);
  transition: grid-template-rows $fold-duration;

  .defaultContent {
    background: var(--dc__color-text);
    color: var(--dc__color-background);
    padding: var(--dc__spacing-nm-100);
  }

  .content {
    align-self: end;
    min-height: 0;
    visibility: visible;
    transition: visibility $fold-duration;
  }

  &.folded {
    grid-template-rows: 0fr;

    .content {
      pointer-events: none;
      visibility: hidden;
    }
  }
}
</style>
