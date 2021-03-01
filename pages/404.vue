<template>
  <ps-separate-view :browsed-page="page">
    <ps-first-heading jp-heading="ページが見つかりません">
      404 Not found.
    </ps-first-heading>
    <ps-recommend-page class="notfound__recommend" to="/" type="Go to">
      Top Page
    </ps-recommend-page>
  </ps-separate-view>
</template>

<script lang="ts">
import Vue from 'vue'
import PsFirstHeading from '~/components/common-components/ps-first-heading.vue'
import PsRecommendPage from '~/components/common-components/ps-recommend-page.vue'
import PsSeparateView from '~/components/common-components/templates/ps-separate-view.vue'
import notFoundPage from '~/constants/pages/not-found-page'
export default Vue.extend({
  components: { PsSeparateView, PsFirstHeading, PsRecommendPage },

  data() {
    return {
      page: notFoundPage,
    }
  },
})
</script>

<style lang="scss" scoped>
$block: '.notfound';
#{$block} {
  &__recommend {
    margin-top: 96px;
  }
}
</style>
