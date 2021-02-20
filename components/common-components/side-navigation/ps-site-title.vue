<template>
  <div class="ps-site-title">
    <ps-link :to="to">
      <div
        :class="
          browsed
            ? 'ps-site-title__inner ps-site-title__browsedInner'
            : 'ps-site-title__inner'
        "
      >
        Portfolio
        <br />
        of
        <br />
        Kaito Horiuchi
      </div>
    </ps-link>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import PsLink from '../ps-link.vue'
import { pages } from '~/constants'

export default Vue.extend({
  components: { PsLink },

  props: {
    browsed: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      to: pages.HOME.path,
    }
  },
})
</script>

<style lang="scss" scoped>
$block: '.ps-site-title';
#{$block} {
  padding-left: 12px;
  border-left: 2px solid $color-white;
  transition: 0.4s all;
  &:hover {
    border-left: 2px solid $color-default-blue;
  }
  &__inner {
    font-family: $en-font;
    font-size: 24px;
    font-weight: 400;
    text-transform: uppercase;
  }
  &__browsedInner {
    color: $color-dark-blue;
  }
}
</style>
