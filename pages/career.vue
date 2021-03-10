<template>
  <ps-separate-view :browsed-page="page">
    <ps-page-header>{{ page.name }}</ps-page-header>

    <ps-first-heading jp-heading="大学について">Academic</ps-first-heading>
    <ps-career-qu />

    <ps-first-heading jp-heading="インターンシップ">
      Internship
    </ps-first-heading>
    <ps-career-quando />
    <ps-career-regnio />
    <ps-career-note />

    <ps-page-footer :previous-page="previousPage" :next-page="nextPage" />
  </ps-separate-view>
</template>

<script lang="ts">
import Vue from 'vue'
import PsCareerNote from '~/components/career-components/sections/ps-career-note.vue'
import PsCareerQu from '~/components/career-components/sections/ps-career-qu.vue'
import PsCareerQuando from '~/components/career-components/sections/ps-career-quando.vue'
import PsCareerRegnio from '~/components/career-components/sections/ps-career-regnio.vue'
import PsPageFooter from '~/components/common-components/page-footer/ps-page-footer.vue'
import PsFirstHeading from '~/components/common-components/ps-first-heading.vue'
import PsPageHeader from '~/components/common-components/ps-page-header.vue'
import PsSeparateView from '~/components/common-components/templates/ps-separate-view.vue'
import aboutPage from '~/constants/pages/about-page'
import careerPage from '~/constants/pages/career-page'
import developmentPage from '~/constants/pages/development-page'
export default Vue.extend({
  components: {
    PsSeparateView,
    PsCareerQuando,
    PsCareerRegnio,
    PsCareerNote,
    PsCareerQu,
    PsPageHeader,
    PsFirstHeading,
    PsPageFooter,
  },

  data() {
    return {
      page: careerPage,
      previousPage: aboutPage,
      nextPage: developmentPage,
    }
  },
})
</script>
