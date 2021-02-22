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
import page from '~/types/page'

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
  display: inline-block;
  width: 100vw;
  &__sidenav {
    position: fixed;
    top: calc(50vh - 324.13px / 2);
    left: 0;
    display: inline-block;
    width: 320px;
  }
  &__contentsOuter {
    display: flex;
    justify-content: center;
    width: 100%;
    padding-left: 320px;
  }
  &__contentsInner {
    width: 100%;
    max-width: 700px;
    padding: 128px 32px;
  }
}
</style>
