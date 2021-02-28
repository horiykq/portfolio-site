<template>
  <ps-separate-view :browsed-page="page">
    <div class="ps-index-page__sp">
      <ps-side-navigation :browsed-page="page" />
    </div>
  </ps-separate-view>
</template>

<script lang="ts">
import Vue from 'vue'
import PsSideNavigation from '~/components/common-components/side-navigation/ps-side-navigation.vue'
import PsSeparateView from '~/components/common-components/templates/ps-separate-view.vue'
import indexPage from '~/constants/pages/index-page'
export default Vue.extend({
  components: { PsSeparateView, PsSideNavigation },

  data() {
    return {
      page: indexPage,
    }
  },
})
</script>

<style lang="scss" scoped>
$block: '.ps-index-page';
#{$block} {
  &__sp {
    display: none;
    @include mq_sp {
      display: inline-block;
      padding: calc(50vh - 459.2px / 2 - 128px) 0 0 0;
    }
  }
}
</style>
