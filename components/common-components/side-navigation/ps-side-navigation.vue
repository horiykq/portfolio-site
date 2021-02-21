<template>
  <div class="ps-side-navigation__outer">
    <div class="ps-side-navigation__inner">
      <ps-site-title
        class="ps-side-navigation__title"
        :browsed="pages.HOME === browsedPage"
      />
      <div
        v-for="(page, index) in pagesList"
        :key="index"
        class="ps-side-navigation__links"
      >
        <ps-side-link
          v-if="pages[page].visible"
          :to="pages[page].path"
          :label="pages[page].name"
          :browsed="pages[page] === browsedPage"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import PsSiteTitle from './ps-site-title.vue'
import PsSideLink from './ps-side-link.vue'
import { pages, pagesList } from '~/constants/index'
import { page } from '~/types/page'

export default Vue.extend({
  components: { PsSiteTitle, PsSideLink },

  props: {
    browsedPage: {
      type: Object as () => page,
      required: true,
    },
  },

  data() {
    return {
      pages,
      pagesList,
    }
  },
})
</script>

<style lang="scss" scoped>
$block: '.ps-side-navigation';
#{$block} {
  &__outer {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }
  &__inner {
    display: flex;
    flex-direction: column;
    width: calc(100% - 96px);
  }
  &__title {
    margin-bottom: 48px;
  }
  &__links {
    display: flex;
    flex-direction: column;
  }
}
</style>
