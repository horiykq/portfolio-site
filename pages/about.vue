<template>
  <ps-separate-view :browsed-page="page">
    <ps-page-header>{{ page.name }}</ps-page-header>
    <ps-about-profile />
    <ps-about-history />
    <ps-page-footer :previous-page="previousPage" :next-page="nextPage" />
  </ps-separate-view>
</template>

<script lang="ts">
import Vue from 'vue'
import PsAboutHistory from '~/components/about-components/sections/ps-about-history.vue'
import PsAboutProfile from '~/components/about-components/sections/ps-about-profile.vue'
import PsPageHeader from '~/components/common-components/ps-page-header.vue'
import PsSeparateView from '~/components/common-components/templates/ps-separate-view.vue'
import aboutPage from '~/constants/pages/about-page'
import careerPage from '~/constants/pages/career-page'
import PsPageFooter from '~/components/common-components/page-footer/ps-page-footer.vue'
export default Vue.extend({
  components: {
    PsSeparateView,
    PsPageHeader,
    PsAboutProfile,
    PsAboutHistory,
    PsPageFooter,
  },

  data() {
    return {
      page: aboutPage,
      previousPage: null,
      nextPage: careerPage,
    }
  },
})
</script>
