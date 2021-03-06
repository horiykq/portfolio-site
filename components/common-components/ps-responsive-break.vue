<template>
  <br :class="computedClass" />
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    pc: {
      type: Boolean,
      default: false,
    },
    tablet: {
      type: Boolean,
      default: false,
    },
    sp: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    computedClass(): string {
      let returnClass = 'ps-responsive-break'
      if (this.pc) {
        returnClass += ' ps-responsive-break__pc'
      }
      if (this.tablet) {
        returnClass += ' ps-responsive-break__tablet'
      }
      if (this.sp) {
        returnClass += ' ps-responsive-break__sp'
      }
      return returnClass
    },
  },
})
</script>

<style lang="scss" scoped>
$block: '.ps-responsive-break';
#{$block} {
  display: none;
  &__pc {
    @include mq_pc {
      display: initial;
    }
  }
  &__tablet {
    @include mq_tablet {
      display: initial;
    }
  }
  &__sp {
    @include mq_sp {
      display: initial;
    }
  }
}
</style>
