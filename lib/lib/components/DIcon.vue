<script setup lang="ts">
defineProps<{ name: keyof typeof ICON_MAP }>();

const ICON_MAP = {
  "exclamation-triangle": '"\u{f071}"',
  "plus": '"\u{2b}"',
  "trash": '"\u{f2ed}"',
  "chevron-down": '"\u{f078}"',
};

export type IconName = keyof typeof ICON_MAP;
</script>

<template>
  <i
    :class="$style.DIcon"
    :style="{ '--icon-unicode': ICON_MAP[name] }"
  />
</template>

<style module lang="scss">
@use "~/style/font";

@include font.load-single-style-font("FontAwesome", $font-family: "Font Awesome");

.DIcon {
  font-family: "Font Awesome";
  font-style: normal;

  &::after {
    content: var(--icon-unicode);
  }
}
</style>
