<template>
  <ps-separate-view :browsed-page="page"></ps-separate-view>
</template>

<script lang="ts">
import Vue from 'vue'
import PsSeparateView from '~/components/common-components/templates/ps-separate-view.vue'
import indexPage from '~/constants/pages/index-page'
export default Vue.extend({
  components: { PsSeparateView },

  data() {
    return {
      page: indexPage,
    }
  },
})
</script>
