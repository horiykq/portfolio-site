<template>
  <h1 class="ps-first-heading"><slot /></h1>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({})
</script>

<style lang="scss" scoped>
$block: '.ps-first-heading';
#{$block} {
  font-size: 24px;
}
</style>
