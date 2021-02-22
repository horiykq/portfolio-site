<template>
  <ps-separate-view :browsed-page="page">
    <ps-first-heading jp-heading="ページが見つかりません">
      404 Not found.
    </ps-first-heading>
  </ps-separate-view>
</template>

<script lang="ts">
import Vue from 'vue'
import PsFirstHeading from '~/components/common-components/ps-first-heading.vue'
import PsSeparateView from '~/components/common-components/templates/ps-separate-view.vue'
import notFoundPage from '~/constants/pages/not-found-page'
export default Vue.extend({
  components: { PsSeparateView, PsFirstHeading },

  data() {
    return {
      page: notFoundPage,
    }
  },
})
</script>
