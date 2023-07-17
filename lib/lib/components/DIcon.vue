<script lang="ts">
import { keysOf } from "~/utils";

export const iconMap = {
  "exclamation-triangle": '"\u{f071}"',
  "plus": '"\u{2b}"',
  "trash": '"\u{f2ed}"',
  "chevron-down": '"\u{f078}"',
  "check": '"\u{f00c}"',
  "angle-double-right": '"\u{f101}"',
};

export const iconKeys = keysOf(iconMap);

export type IconName = typeof iconKeys[number];
</script>

<script setup lang="ts">
defineProps<{ name: keyof typeof iconMap }>();
</script>

<template>
  <i
    :class="$style.DIcon"
    :style="{ '--icon-unicode': iconMap[name] }"
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
