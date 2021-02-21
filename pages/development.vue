<template>
  <ps-separate-view :browsed-page="page">DevelopmentPage</ps-separate-view>
</template>

<script lang="ts">
import Vue from 'vue'
import PsSeparateView from '~/components/common-components/templates/ps-separate-view.vue'
import { pages } from '~/constants'
export default Vue.extend({
  components: { PsSeparateView },

  data() {
    return {
      page: pages.DEVELOPMENT,
    }
  },
})
</script>
