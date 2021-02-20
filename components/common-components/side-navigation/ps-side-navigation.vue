<template>
  <div class="ps-side-navigation__outer">
    <div class="ps-side-navigation__inner">
      <ps-site-title />
      <div
        v-for="(page, index) in pagesList"
        :key="index"
        class="ps-side-navigation__links"
      >
        <ps-side-link
          v-if="pages[page].visible"
          :to="pages[page].path"
          :label="pages[page].name"
        ></ps-side-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import PsSiteTitle from './ps-site-title.vue'
import PsSideLink from './ps-side-link.vue'
import { pages, pagesList } from '~/constants/index'

type Data = {
  pages: typeof pages
  pagesList: String[]
}

export default Vue.extend({
  components: { PsSiteTitle, PsSideLink },
  data(): Data {
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
    height: calc(100% - 160px);
  }
  &__links {
    display: flex;
    flex-direction: column;
  }
}
</style>
