<template>
  <ps-separate-view :browsed-page="page">
    <ps-page-header>{{ page.name }}</ps-page-header>

    <ps-first-heading jp-heading="個人開発"> Personal </ps-first-heading>
    <ps-dev-line-bot />
    <ps-dev-portfolio />

    <ps-first-heading jp-heading="その他の活動"> Others </ps-first-heading>
    <ps-dev-qiita />
    <ps-dev-atcoder />
    <ps-dev-ml />

    <ps-page-footer :previous-page="previousPage" :next-page="nextPage" />
  </ps-separate-view>
</template>

<script lang="ts">
import Vue from 'vue'
import PsFirstHeading from '~/components/common-components/ps-first-heading.vue'
import PsPageHeader from '~/components/common-components/ps-page-header.vue'
import PsSeparateView from '~/components/common-components/templates/ps-separate-view.vue'
import PsDevAtcoder from '~/components/development-components/sections/ps-dev-atcoder.vue'
import PsDevLineBot from '~/components/development-components/sections/ps-dev-line-bot.vue'
import PsDevQiita from '~/components/development-components/sections/ps-dev-qiita.vue'
import developmentPage from '~/constants/pages/development-page'
import technologyPage from '~/constants/pages/technology-page'
import PsPageFooter from '~/components/common-components/page-footer/ps-page-footer.vue'
import careerPage from '~/constants/pages/career-page'
import PsDevPortfolio from '~/components/development-components/sections/ps-dev-portfolio.vue'

export default Vue.extend({
  components: {
    PsSeparateView,
    PsDevLineBot,
    PsPageHeader,
    PsFirstHeading,
    PsDevAtcoder,
    PsDevQiita,
    PsPageFooter,
    PsDevPortfolio,
  },

  data() {
    return {
      page: developmentPage,
      previousPage: careerPage,
      nextPage: technologyPage,
    }
  },
})
</script>
