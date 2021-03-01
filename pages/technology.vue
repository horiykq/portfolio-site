<template>
  <ps-separate-view :browsed-page="page">
    <ps-page-header>{{ page.name }}</ps-page-header>
    <ps-tech-experienced />
  </ps-separate-view>
</template>

<script lang="ts">
import Vue from 'vue'
import PsPageHeader from '~/components/common-components/ps-page-header.vue'
import PsSeparateView from '~/components/common-components/templates/ps-separate-view.vue'
import PsTechExperienced from '~/components/technology-components/sections/ps-tech-experienced.vue'
import technologyPage from '~/constants/pages/technology-page'
export default Vue.extend({
  components: {
    PsSeparateView,
    PsTechExperienced,
    PsPageHeader,
  },

  data() {
    return {
      page: technologyPage,
    }
  },
})
</script>
