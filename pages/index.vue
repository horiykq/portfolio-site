<template>
  <ps-separate-view :browsed-page="page">
    <ps-first-heading jp-heading="">Welcome to my portfolio!</ps-first-heading>
    <ps-first-heading jp-heading="">Welcome to my portfolio!</ps-first-heading>
    <ps-first-heading jp-heading="">Welcome to my portfolio!</ps-first-heading>
    <ps-first-heading jp-heading="">Welcome to my portfolio!</ps-first-heading>
    <ps-first-heading jp-heading="">Welcome to my portfolio!</ps-first-heading>
    <ps-first-heading jp-heading="">Welcome to my portfolio!</ps-first-heading>
    <ps-first-heading jp-heading="">Welcome to my portfolio!</ps-first-heading>
    <ps-first-heading jp-heading="">Welcome to my portfolio!</ps-first-heading>
    <ps-first-heading jp-heading="">Welcome to my portfolio!</ps-first-heading>
    <ps-first-heading jp-heading="">Welcome to my portfolio!</ps-first-heading>
    <ps-first-heading jp-heading="">Welcome to my portfolio!</ps-first-heading>
    <ps-first-heading jp-heading="">Welcome to my portfolio!</ps-first-heading>
    <ps-first-heading jp-heading="">Welcome to my portfolio!</ps-first-heading>
    <ps-first-heading jp-heading="">Welcome to my portfolio!</ps-first-heading>
    <ps-first-heading jp-heading="">Welcome to my portfolio!</ps-first-heading>
    <ps-first-heading jp-heading="">Welcome to my portfolio!</ps-first-heading>
    <ps-first-heading jp-heading="">Welcome to my portfolio!</ps-first-heading>
    <ps-first-heading jp-heading="">Welcome to my portfolio!</ps-first-heading>
    <ps-first-heading jp-heading="">Welcome to my portfolio!</ps-first-heading>
    <ps-first-heading jp-heading="">Welcome to my portfolio!</ps-first-heading>
    <ps-first-heading jp-heading="">Welcome to my portfolio!</ps-first-heading>
    <ps-first-heading jp-heading="">Welcome to my portfolio!</ps-first-heading>
    <ps-first-heading jp-heading="">Welcome to my portfolio!</ps-first-heading>
    <ps-first-heading jp-heading="">Welcome to my portfolio!</ps-first-heading>
    <ps-first-heading jp-heading="">Welcome to my portfolio!</ps-first-heading>
    <ps-first-heading jp-heading="">Welcome to my portfolio!</ps-first-heading>
    <ps-first-heading jp-heading="">Welcome to my portfolio!</ps-first-heading>
    <ps-first-heading jp-heading="">Welcome to my portfolio!</ps-first-heading>
    <ps-first-heading jp-heading="">Welcome to my portfolio!</ps-first-heading>
    <ps-first-heading jp-heading="">Welcome to my portfolio!</ps-first-heading>
    <ps-first-heading jp-heading="">Welcome to my portfolio!</ps-first-heading>
    <ps-first-heading jp-heading="">Welcome to my portfolio!</ps-first-heading>
    <ps-first-heading jp-heading="">Welcome to my portfolio!</ps-first-heading>
    <ps-first-heading jp-heading="">Welcome to my portfolio!</ps-first-heading>
    <ps-first-heading jp-heading="">Welcome to my portfolio!</ps-first-heading>
    <ps-first-heading jp-heading="">Welcome to my portfolio!</ps-first-heading>
    <ps-first-heading jp-heading="">Welcome to my portfolio!</ps-first-heading>
    <ps-first-heading jp-heading="">Welcome to my portfolio!</ps-first-heading>
    <ps-first-heading jp-heading="">Welcome to my portfolio!</ps-first-heading>
    <ps-first-heading jp-heading="">Welcome to my portfolio!</ps-first-heading>
    <ps-first-heading jp-heading="">Welcome to my portfolio!</ps-first-heading>
    <ps-first-heading jp-heading="">Welcome to my portfolio!</ps-first-heading>
    <ps-first-heading jp-heading="">Welcome to my portfolio!</ps-first-heading>
    <ps-first-heading jp-heading="">Welcome to my portfolio!</ps-first-heading>
  </ps-separate-view>
</template>

<script lang="ts">
import Vue from 'vue'
import PsFirstHeading from '~/components/common-components/ps-first-heading.vue'
import PsSeparateView from '~/components/common-components/templates/ps-separate-view.vue'
import indexPage from '~/constants/pages/index-page'
export default Vue.extend({
  components: { PsSeparateView, PsFirstHeading },

  data() {
    return {
      page: indexPage,
    }
  },
})
</script>
