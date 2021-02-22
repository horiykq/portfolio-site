<template>
  <ps-separate-view :browsed-page="page">
    <ps-career-quando />
    <ps-career-regnio />
    <ps-career-note />
  </ps-separate-view>
</template>

<script lang="ts">
import Vue from 'vue'
import PsCareerNote from '~/components/career-components/sections/ps-career-note.vue'
import PsCareerQuando from '~/components/career-components/sections/ps-career-quando.vue'
import PsCareerRegnio from '~/components/career-components/sections/ps-career-regnio.vue'
import PsSeparateView from '~/components/common-components/templates/ps-separate-view.vue'
import { pages } from '~/constants/pages'
export default Vue.extend({
  components: { PsSeparateView, PsCareerQuando, PsCareerRegnio, PsCareerNote },

  data() {
    return {
      page: pages.CAREER,
    }
  },
})
</script>
