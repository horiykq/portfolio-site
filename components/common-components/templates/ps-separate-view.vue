<template>
  <div class="ps-seperate-view">
    <div class="ps-seperate-view__sidenav">
      <ps-side-navigation :browsed-page="browsedPage" />
    </div>
    <div
      v-if="browsedPage !== indexPage"
      class="ps-seperate-view__mobileHeader"
    >
      <ps-mobile-header />
    </div>
    <div class="ps-seperate-view__contentsOuter">
      <div class="ps-seperate-view__contentsInner">
        <slot />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import PsSideNavigation from '../side-navigation/ps-side-navigation.vue'
import PsMobileHeader from '../ps-mobile-header.vue'
import page from '~/types/page'
import indexPage from '~/constants/pages/index-page'
import notFoundPage from '~/constants/pages/not-found-page'

export default Vue.extend({
  components: { PsSideNavigation, PsMobileHeader },

  props: {
    browsedPage: {
      type: Object as () => page,
      required: true,
    },
  },

  data() {
    return {
      indexPage,
      notFoundPage,
    }
  },

  head() {
    return {
      title: this.browsedPage.metaTitle,
      titleTemplate: '%s｜Portfolio of Kaito Horiuchi',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content:
            '大学生エンジニア 堀内 凱登 / Kaito Horiuchi (hori) のポートフォリオサイトです。',
        },
      ],
    }
  },
})
</script>

<style lang="scss" scoped SideNavigation>
$block: '.ps-seperate-view';
#{$block} {
  display: inline-block;
  width: 100vw;
  &__sidenav {
    position: fixed;
    top: calc(50vh - 324.13px / 2);
    left: 0;
    display: inline-block;
    width: 320px;
    @include mq_tablet {
      display: none;
    }
    @include mq_sp {
      display: none;
    }
  }
  &__mobileHeader {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    @include mq_pc {
      display: none;
    }
  }
  &__contentsOuter {
    display: flex;
    justify-content: center;
    width: 100%;
    @include mq_pc {
      padding-left: 320px;
    }
  }
  &__contentsInner {
    width: 100%;
    max-width: 700px;
    padding: 128px 32px;
    @include mq_sp {
      padding: 128px 32px 32px 32px;
    }
  }
}
</style>
