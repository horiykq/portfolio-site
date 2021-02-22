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
  font-weight: 300;
  @include font-size(1.6);
  @include mq_sp {
    font-weight: 400;
  }
}
</style>
