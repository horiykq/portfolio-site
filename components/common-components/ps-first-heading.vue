<template>
  <h1 class="ps-first-heading">
    <slot />
    <div class="ps-first-heading__decoration" />
    <span class="ps-first-heading__jpHeading">
      {{ jpHeading }}
    </span>
  </h1>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    jpHeading: {
      type: String,
      required: true,
    },
  },
})
</script>

<style lang="scss" scoped>
$block: '.ps-first-heading';
#{$block} {
  font-size: 24px;
  font-weight: 400;
  font-family: $en-font;
  &__decoration {
    display: inline-block;
    width: 32px;
    height: 1px;
    background: $color-default-black;
    margin: 0 2px 6px 32px;
  }
  &__jpHeading {
    font-family: $jp-font;
    font-size: 20px;
  }
}
</style>
