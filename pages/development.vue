<template>
  <ps-separate-view :browsed-page="page">
    <ps-dev-fa />
    <ps-dev-line-bot />
    <ps-dev-synq />
    <ps-dev-static-sites />
  </ps-separate-view>
</template>

<script lang="ts">
import Vue from 'vue'
import PsSeparateView from '~/components/common-components/templates/ps-separate-view.vue'
import PsDevFa from '~/components/development-components/sections/ps-dev-fa.vue'
import PsDevLineBot from '~/components/development-components/sections/ps-dev-line-bot.vue'
import PsDevStaticSites from '~/components/development-components/sections/ps-dev-static-sites.vue'
import PsDevSynq from '~/components/development-components/sections/ps-dev-synq.vue'

import { pages } from '~/constants/pages'
export default Vue.extend({
  components: {
    PsSeparateView,
    PsDevFa,
    PsDevLineBot,
    PsDevSynq,
    PsDevStaticSites,
  },

  data() {
    return {
      page: pages.DEVELOPMENT,
    }
  },
})
</script>
