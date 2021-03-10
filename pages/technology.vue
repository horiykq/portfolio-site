<template>
  <ps-separate-view :browsed-page="page">
    <ps-page-header>{{ page.name }}</ps-page-header>
    <ps-tech-experienced />

    <ps-page-footer :previous-page="previousPage" :next-page="nextPage" />
  </ps-separate-view>
</template>

<script lang="ts">
import Vue from 'vue'
import PsPageFooter from '~/components/common-components/page-footer/ps-page-footer.vue'
import PsPageHeader from '~/components/common-components/ps-page-header.vue'
import PsSeparateView from '~/components/common-components/templates/ps-separate-view.vue'
import PsTechExperienced from '~/components/technology-components/sections/ps-tech-experienced.vue'
import developmentPage from '~/constants/pages/development-page'
import technologyPage from '~/constants/pages/technology-page'
export default Vue.extend({
  components: {
    PsSeparateView,
    PsTechExperienced,
    PsPageHeader,
    PsPageFooter,
  },

  data() {
    return {
      page: technologyPage,
      previousPage: developmentPage,
      nextPage: null,
    }
  },
})
</script>
