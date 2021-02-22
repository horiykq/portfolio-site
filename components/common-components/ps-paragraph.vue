<template>
  <p class="ps-paragraph">
    <slot />
  </p>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({})
</script>

<style lang="scss" scoped>
$block: '.ps-paragraph';
#{$block} {
  @include font-size(1.6);
}
</style>
