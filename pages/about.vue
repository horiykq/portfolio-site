<template>
  <ps-separate-view :browsed-page="page">
    <ps-about-profile />
  </ps-separate-view>
</template>

<script lang="ts">
import Vue from 'vue'
import PsAboutProfile from '~/components/about-components/sections/ps-about-profile.vue'
import PsSeparateView from '~/components/common-components/templates/ps-separate-view.vue'
import aboutPage from '~/constants/pages/about-page'
export default Vue.extend({
  components: { PsSeparateView, PsAboutProfile },

  data() {
    return {
      page: aboutPage,
    }
  },
})
</script>
