<template>
  <ps-separate-view :browsed-page="page">
    <ps-tech-experienced />
  </ps-separate-view>
</template>

<script lang="ts">
import Vue from 'vue'
import PsSeparateView from '~/components/common-components/templates/ps-separate-view.vue'
import PsTechExperienced from '~/components/technology-components/sections/ps-tech-experienced.vue'
import technologyPage from '~/constants/pages/technology-page'
export default Vue.extend({
  components: {
    PsSeparateView,
    PsTechExperienced,
  },

  data() {
    return {
      page: technologyPage,
    }
  },
})
</script>
