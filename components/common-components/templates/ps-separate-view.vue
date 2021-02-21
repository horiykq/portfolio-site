<template>
  <div class="ps-seperate-view">
    <div class="ps-seperate-view__sidenav">
      <ps-side-navigation :browsed-page="browsedPage" />
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
import { page } from '~/types/page'

export default Vue.extend({
  components: { PsSideNavigation },

  props: {
    browsedPage: {
      type: Object as () => page,
      required: true,
    },
  },
})
</script>

<style lang="scss" scoped SideNavigation>
$block: '.ps-seperate-view';
#{$block} {
  display: flex;
  width: 100vw;
  height: 100vh;
  &__sidenav {
    display: inline-block;
    width: 320px;
    height: 100%;
  }
  &__contentsOuter {
    display: flex;
    justify-content: center;
    overflow-y: scroll;
    width: calc(100% - 320px);
    height: 100%;
  }
  &__contentsInner {
    width: 100%;
    max-width: 700px;
    padding: 128px 32px;
  }
}
</style>
