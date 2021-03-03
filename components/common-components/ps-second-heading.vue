<template>
  <h2 :class="computedClass">
    <slot />
  </h2>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    useEnFont: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      computedClass: this.useEnFont
        ? 'ps-second-heading ps-second-heading__enFont'
        : 'ps-second-heading',
    }
  },
})
</script>

<style lang="scss" scoped>
$block: '.ps-second-heading';
#{$block} {
  font-weight: 300;
  @include font-size(2.4);
  &__enFont {
    font-family: $en-font;
  }
}
</style>
