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

    <ps-recommend-page class="about__recommend" :to="nextPage.path">
      {{ nextPage.name }}
    </ps-recommend-page>
  </ps-separate-view>
</template>

<script lang="ts">
import Vue from 'vue'
import PsCareerNote from '~/components/career-components/sections/ps-career-note.vue'
import PsCareerQu from '~/components/career-components/sections/ps-career-qu.vue'
import PsCareerQuando from '~/components/career-components/sections/ps-career-quando.vue'
import PsCareerRegnio from '~/components/career-components/sections/ps-career-regnio.vue'
import PsFirstHeading from '~/components/common-components/ps-first-heading.vue'
import PsPageHeader from '~/components/common-components/ps-page-header.vue'
import PsRecommendPage from '~/components/common-components/ps-recommend-page.vue'
import PsSeparateView from '~/components/common-components/templates/ps-separate-view.vue'
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
    PsRecommendPage,
  },

  data() {
    return {
      page: careerPage,
      nextPage: developmentPage,
    }
  },
})
</script>
