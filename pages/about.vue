<template>
  <ps-separate-view :browsed-page="page">
    <ps-page-header>{{ page.name }}</ps-page-header>
    <ps-about-profile />
    <ps-about-history />
    <ps-recommend-page class="about__recommend" :to="nextPage.path">
      {{ nextPage.name }}
    </ps-recommend-page>
  </ps-separate-view>
</template>

<script lang="ts">
import Vue from 'vue'
import PsAboutHistory from '~/components/about-components/sections/ps-about-history.vue'
import PsAboutProfile from '~/components/about-components/sections/ps-about-profile.vue'
import PsPageHeader from '~/components/common-components/ps-page-header.vue'
import PsRecommendPage from '~/components/common-components/ps-recommend-page.vue'
import PsSeparateView from '~/components/common-components/templates/ps-separate-view.vue'
import aboutPage from '~/constants/pages/about-page'
import careerPage from '~/constants/pages/career-page'
export default Vue.extend({
  components: {
    PsSeparateView,
    PsPageHeader,
    PsAboutProfile,
    PsAboutHistory,
    PsRecommendPage,
  },

  data() {
    return {
      page: aboutPage,
      nextPage: careerPage,
    }
  },
})
</script>

<style lang="scss" scoped>
$block: '.about';
#{$block} {
  &__recommend {
    margin-top: 32px;
  }
}
</style>
