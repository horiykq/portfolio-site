<template>
  <ps-separate-view :browsed-page="page">
    <ps-about-profile />
    <ps-about-history />
  </ps-separate-view>
</template>

<script lang="ts">
import Vue from 'vue'
import PsAboutHistory from '~/components/about-components/sections/ps-about-history.vue'
import PsAboutProfile from '~/components/about-components/sections/ps-about-profile.vue'
import PsSeparateView from '~/components/common-components/templates/ps-separate-view.vue'
import aboutPage from '~/constants/pages/about-page'
export default Vue.extend({
  components: { PsSeparateView, PsAboutProfile, PsAboutHistory },

  data() {
    return {
      page: aboutPage,
    }
  },
})
</script>
