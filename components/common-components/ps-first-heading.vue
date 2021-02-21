<template>
  <h1 class="ps-first-heading">
    <div class="ps-first-heading__decoration" />
    <slot />
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
    height: 2px;
    background: $color-default-blue;
    margin: 0 16px 8px 0;
  }
  &__jpHeading {
    font-family: $jp-font;
    font-size: 20px;
    font-weight: 300;
    margin-left: 12px;
  }
}
</style>
