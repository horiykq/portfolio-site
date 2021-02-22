<template>
  <ps-link
    :class="
      browsed
        ? 'ps-side-link__outer ps-side-link__browsedOuter'
        : 'ps-side-link__outer'
    "
    :to="to"
  >
    <p class="ps-side-link__inner">
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
  &__outer {
    margin: 6.4px 0;
    transition: 0.4s all;
    border-left: 2px solid $color-white;
    color: $color-default-black;
    &:hover {
      color: $color-dark-blue;
    }
  }
  &__browsedOuter {
    border-left: 2px solid $color-default-blue;
  }
  &__inner {
    font-family: $en-font;
    font-weight: 300;
    display: inline-block;
    padding-left: 12px;
    text-transform: uppercase;
    @include font-size(2);
  }
}
</style>
