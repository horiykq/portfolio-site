<template>
  <div class="ps-recommend-link">
    <ps-link :to="to" class="ps-recommend-link__link">
      <p class="ps-recommend-link__recommend">{{ mainLabel }} Page >></p>
      <slot />
    </ps-link>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import psLink from './ps-link.vue'
export default Vue.extend({
  components: { psLink },

  props: {
    to: {
      type: String,
      required: true,
    },
    previous: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    mainLabel(): string {
      return this.previous ? 'Previous' : 'Next'
    },
  },
})
</script>

<style lang="scss" scoped>
$block: '.ps-recommend-link';
#{$block} {
  display: flex;
  justify-content: flex-end;
  width: 100%;
  font-family: $en-font;
  &__link {
    text-transform: uppercase;
    transition: 0.4s all;
    &:hover {
      letter-spacing: 1px;
    }
  }
  &__recommend {
    font-weight: 400;
    text-align: end;
    margin: 4px 0;
    text-transform: none;

    @include font-size(1.8);
  }
}
</style>
