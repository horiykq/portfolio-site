<template>
  <a class="ps-normal-link" :href="href">
    <slot />
  </a>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    href: {
      type: String,
      required: true,
    },
  },
})
</script>

<style lang="scss" scoped>
$block: '.ps-normal-link';
#{$block} {
  text-decoration: none;
  color: $color-default-black;
  display: inline-block;
}
</style>
