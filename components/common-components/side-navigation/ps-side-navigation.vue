<template>
  <div class="ps-side-navigation">
    <ps-site-title />
    <div
      v-for="(page, index) in pagesList"
      :key="index"
      class="ps-side-navigation__links"
    >
      <p>{{ page }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import psSiteTitle from './ps-site-title.vue'
import { pagesList } from '~/constants/index'

type Data = {
  pagesList: String[]
}

export default Vue.extend({
  components: { psSiteTitle },
  data(): Data {
    return {
      pagesList,
    }
  },
})
</script>

<style lang="scss" scoped>
$block: '.ps-side-navigation';
#{$block} {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 80px 0 0 48px;
  &__links {
    display: flex;
    flex-direction: column;
  }
}
</style>
