<template>
  <ps-separate-view :browsed-page="page">
    <ps-tech-replacement />
    <ps-tech-hackintosh />
  </ps-separate-view>
</template>

<script lang="ts">
import Vue from 'vue'
import PsSeparateView from '~/components/common-components/templates/ps-separate-view.vue'
import PsTechHackintosh from '~/components/technology-components/sections/ps-tech-hackintosh.vue'
import PsTechReplacement from '~/components/technology-components/sections/ps-tech-replacement.vue'
import technologyPage from '~/constants/pages/technology-page'
export default Vue.extend({
  components: { PsSeparateView, PsTechReplacement, PsTechHackintosh },

  data() {
    return {
      page: technologyPage,
    }
  },
})
</script>
