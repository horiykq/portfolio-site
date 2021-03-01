<template>
  <ps-separate-view :browsed-page="page">
    <ps-page-header>{{ page.name }}</ps-page-header>
    <ps-dev-fa />
    <ps-dev-line-bot />
    <ps-dev-synq />
    <ps-dev-static-sites />
  </ps-separate-view>
</template>

<script lang="ts">
import Vue from 'vue'
import PsPageHeader from '~/components/common-components/ps-page-header.vue'
import PsSeparateView from '~/components/common-components/templates/ps-separate-view.vue'
import PsDevFa from '~/components/development-components/sections/ps-dev-fa.vue'
import PsDevLineBot from '~/components/development-components/sections/ps-dev-line-bot.vue'
import PsDevStaticSites from '~/components/development-components/sections/ps-dev-static-sites.vue'
import PsDevSynq from '~/components/development-components/sections/ps-dev-synq.vue'
import developmentPage from '~/constants/pages/development-page'

export default Vue.extend({
  components: {
    PsSeparateView,
    PsDevFa,
    PsDevLineBot,
    PsDevSynq,
    PsDevStaticSites,
    PsPageHeader,
  },

  data() {
    return {
      page: developmentPage,
    }
  },
})
</script>
