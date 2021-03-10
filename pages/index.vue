<template>
  <ps-separate-view :browsed-page="page">
    <div class="ps-index-page__pc">
      <!-- <ps-random-hamsters /> -->
    </div>
    <div class="ps-index-page__mobile">
      <ps-side-navigation :browsed-page="page" />
    </div>
  </ps-separate-view>
</template>

<script lang="ts">
import Vue from 'vue'
import PsSideNavigation from '~/components/common-components/side-navigation/ps-side-navigation.vue'
import PsSeparateView from '~/components/common-components/templates/ps-separate-view.vue'
// import PsRandomHamsters from '~/components/index-components/ps-random-hamsters.vue'
import indexPage from '~/constants/pages/index-page'
export default Vue.extend({
  components: {
    PsSeparateView,
    PsSideNavigation,
    // PsRandomHamsters
  },

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
  &__pc {
    @include mq_sp() {
      display: none;
    }
    @include mq_tablet() {
      display: none;
    }
  }
  &__mobile {
    display: inline-block;
    padding: calc(50vh - 459.2px / 2 - 128px) 0 0 0;
    @include mq_pc() {
      display: none;
    }
  }
}
</style>
