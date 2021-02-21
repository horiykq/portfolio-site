<template>
  <ps-separate-view :browsed-page="page">
    <ps-tech-languages />
  </ps-separate-view>
</template>

<script lang="ts">
import Vue from 'vue'
import PsSeparateView from '~/components/common-components/templates/ps-separate-view.vue'
import PsTechLanguages from '~/components/technology-components/sections/ps-tech-languages.vue'
import { pages } from '~/constants'
export default Vue.extend({
  components: { PsSeparateView, PsTechLanguages },

  data() {
    return {
      page: pages.TECHNOLOGY,
    }
  },
})
</script>
