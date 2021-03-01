<template>
  <header class="ps-page-header">
    <slot />
  </header>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({})
</script>

<style lang="scss" scoped>
$block: '.ps-page-header';
#{$block} {
  font-family: $en-font;
  text-transform: uppercase;
  text-align: center;
  font-weight: 300;
  padding: 8px 0;
  @include font-size(2.8);
  @include mq-pc() {
    display: none;
  }
}
</style>
