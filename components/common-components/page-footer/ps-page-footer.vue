<template>
  <footer :class="computedOuterClass">
    <ps-recommend-page
      v-if="previousPage != null"
      :to="previousPage.path"
      type="previous"
    >
      {{ previousPage.name }}
    </ps-recommend-page>
    <ps-recommend-page v-if="nextPage != null" :to="nextPage.path" type="next">
      {{ nextPage.name }}
    </ps-recommend-page>
  </footer>
</template>

<script lang="ts">
import Vue from 'vue'
import PsRecommendPage from './ps-recommend-page.vue'
import page from '~/types/page'
export default Vue.extend({
  components: { PsRecommendPage },

  props: {
    previousPage: {
      type: Object as () => page,
      default: null,
    },
    nextPage: {
      type: Object as () => page,
      default: null,
    },
  },

  computed: {
    computedOuterClass(): string {
      if (this.previousPage == null) {
        return 'ps-page-footer ps-page-footer__onlyNext'
      } else if (this.nextPage == null) {
        return 'ps-page-footer ps-page-footer__onlyPrevious'
      } else {
        return 'ps-page-footer'
      }
    },
  },
})
</script>

<style lang="scss" scoped>
$block: '.ps-page-footer';
#{$block} {
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding-top: 64px;
  &__onlyNext {
    justify-content: flex-end;
  }
  &__onlyPrevious {
    justify-content: flex-start;
  }
}
</style>
