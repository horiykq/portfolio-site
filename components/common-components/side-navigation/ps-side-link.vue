<template>
  <ps-link :to="to">
    <p :class="browsed ? 'ps-side-link ps-side-link__browsed' : 'ps-side-link'">
      {{ label }}
    </p>
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
    browsed: {
      type: Boolean,
      default: false,
    },
  },
})
</script>

<style lang="scss" scoped>
$block: '.ps-side-link';
#{$block} {
  font-size: 20px;
  font-weight: 300;
  color: $color-default-black;
  display: inline-block;
  margin: 6.4px 0;
  padding-left: 12px;
  text-transform: uppercase;
  transition: 0.4s all;
  border-left: 2px solid $color-white;
  &:hover {
    border-left: 2px solid $color-default-blue;
  }
  &__browsed {
    color: $color-dark-blue;
  }
}
</style>
