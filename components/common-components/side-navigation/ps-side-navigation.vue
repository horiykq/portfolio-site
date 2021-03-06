<template>
  <header class="ps-side-navigation__outer">
    <nav class="ps-side-navigation__inner">
      <ps-site-title
        class="ps-side-navigation__title"
        :browsed="browsedPage === indexPage"
      />
      <div
        v-for="(page, index) in pages"
        :key="index"
        class="ps-side-navigation__links"
      >
        <ps-side-link
          v-if="page.visible"
          :to="page.path"
          :label="page.name"
          :browsed="browsedPage === page"
        />
      </div>
    </nav>
  </header>
</template>

<script lang="ts">
import Vue from 'vue'
import PsSiteTitle from './ps-site-title.vue'
import PsSideLink from './ps-side-link.vue'
import page from '~/types/page'
import pages from '~/constants/pages/index'
import indexPage from '~/constants/pages/index-page'

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
      indexPage,
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
    @include mq_pc {
      width: calc(100% - 96px);
    }
    @include mq_tablet {
      width: 100%;
    }
    @include mq_sp {
      width: 100%;
    }
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
