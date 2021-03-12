<template>
  <div class="ps-recommend-page">
    <ps-link :to="to" class="ps-recommend-page__link">
      <p class="ps-recommend-page__recommend">
        {{ type === 'previous' ? pageFooterArrows.previous : null }}
        {{ mainLabel }}
        {{
          type === 'next' || type === 'previous'
            ? 'Page'
            : pageFooterArrows.next
        }}
        {{ type === 'next' ? pageFooterArrows.next : null }}
      </p>
      <slot />
    </ps-link>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import psLink from '../ps-link.vue'
import pageFooterArrows from '~/constants/page-footer-arrows'
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

  data() {
    return {
      pageFooterArrows,
    }
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
  font-family: $en-font;
  @include mq_sp {
    @include font-size(1.4);
  }
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

    @include mq_sp {
      @include font-size(1.6);
    }
  }
}
</style>
