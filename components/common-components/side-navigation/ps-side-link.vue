<template>
  <ps-link class="ps-side-link__outer" :to="to">
    <p
      :class="
        browsed
          ? 'ps-side-link__inner ps-side-link__browsedInner'
          : 'ps-side-link__inner'
      "
    >
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
    &:hover {
      border-left: 2px solid $color-default-blue;
    }
  }
  &__inner {
    font-family: $en-font;
    font-size: 20px;
    font-weight: 300;
    color: $color-default-black;
    display: inline-block;
    padding-left: 12px;
    text-transform: uppercase;
  }
  &__browsedInner {
    color: $color-dark-blue;
  }
}
</style>
