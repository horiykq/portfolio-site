<template>
  <div class="ps-recommend-page">
    <ps-link :to="to" class="ps-recommend-page__link">
      <p class="ps-recommend-page__recommend">
        {{ mainLabel }}
        {{ type === 'next' || type === 'previous' ? 'Page' : '' }} >>
      </p>
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
    type: {
      type: String,
      default: 'next',
    },
  },

  computed: {
    mainLabel(): string {
      switch (this.type) {
        case 'next':
          return 'Next'
        case 'previous':
          return 'previous'
        default:
          return this.type
      }
    },
  },
})
</script>

<style lang="scss" scoped>
$block: '.ps-recommend-page';
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
    text-transform: capitalize;

    @include font-size(1.8);
  }
}
</style>
