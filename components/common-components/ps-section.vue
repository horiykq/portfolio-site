<template>
  <div class="ps-section">
    <slot />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({})
</script>

<style lang="scss" scoped>
$block: '.ps-section';
#{$block} {
  display: inline-block;
  width: 100%;
}
</style>
