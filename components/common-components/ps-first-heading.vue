<template>
  <h1 class="ps-first-heading">
    <div class="ps-first-heading__decoration" />
    <slot />
    <br class="ps-first-heading__spBreak" />
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
  @include font-size(2.4);

  font-weight: 400;
  font-family: $en-font;
  margin: 24px 0;
  &__decoration {
    display: inline-block;
    width: 32px;
    height: 2px;
    background: $color-default-blue;
    margin: 0 16px 8px 0;
  }
  &__spBreak {
    @include mq_pc {
      display: none;
    }
    @include mq_tablet {
      display: none;
    }
  }
  &__jpHeading {
    font-family: $jp-font;
    font-weight: 300;
    margin-left: 12px;
    @include font-size(2);
    @include mq_sp {
      margin-left: 54px;
    }
  }
}
</style>
