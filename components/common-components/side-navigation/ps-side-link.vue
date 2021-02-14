<template>
  <ps-link :to="to">
    <p class="ps-side-link">{{ label }}</p>
  </ps-link>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    to: {
      type: String,
      default: null,
    },
    label: {
      type: String,
      default: null,
    },
  },
})
</script>

<style lang="scss" scoped>
$block: '.ps-side-link';
#{$block} {
  font-size: 18px;
  color: $color-default-black;
}
</style>
