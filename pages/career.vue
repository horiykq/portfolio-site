<template>
  <ps-separate-view :browsed-page="page">
    <ps-page-header>{{ page.name }}</ps-page-header>
    <ps-career-qu />
    <ps-career-quando />
    <ps-career-regnio />
    <ps-career-note />
  </ps-separate-view>
</template>

<script lang="ts">
import Vue from 'vue'
import PsCareerNote from '~/components/career-components/sections/ps-career-note.vue'
import PsCareerQu from '~/components/career-components/sections/ps-career-qu.vue'
import PsCareerQuando from '~/components/career-components/sections/ps-career-quando.vue'
import PsCareerRegnio from '~/components/career-components/sections/ps-career-regnio.vue'
import PsPageHeader from '~/components/common-components/ps-page-header.vue'
import PsSeparateView from '~/components/common-components/templates/ps-separate-view.vue'
import careerPage from '~/constants/pages/career-page'
export default Vue.extend({
  components: {
    PsSeparateView,
    PsCareerQuando,
    PsCareerRegnio,
    PsCareerNote,
    PsCareerQu,
    PsPageHeader,
  },

  data() {
    return {
      page: careerPage,
    }
  },
})
</script>
