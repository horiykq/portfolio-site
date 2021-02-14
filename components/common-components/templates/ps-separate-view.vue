<template>
  <div class="ps-seperate-view">
    <div class="ps-seperate-view__sidenav">
      <ps-side-navigation></ps-side-navigation>
    </div>
    <div class="ps-seperate-view__contents"></div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import psSideNavigation from '../side-navigation/ps-side-navigation.vue'
export default Vue.extend({
  components: { psSideNavigation },
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

    /* border-right: 1px solid $color-border-black; */
  }
  &__contents {
    display: inline-block;
    width: calc(100% - 320px);
    height: 100%;
  }
}
</style>
