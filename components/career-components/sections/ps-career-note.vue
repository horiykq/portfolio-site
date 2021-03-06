<template>
  <ps-section>
    <ps-career-template>
      <template #company> note株式会社 </template>
      <template #info> （2021.2 - 現在, エンジニア） </template>
      <template #technology>
        <ul>
          <li>Webフロントエンド（Nuxt.js）</li>
          <li>Webサーバサイド（Ruby on Rails）</li>
        </ul>
      </template>
    </ps-career-template>
  </ps-section>
</template>

<script lang="ts">
import Vue from 'vue'
import PsCareerTemplate from '../ps-career-template.vue'
import PsSection from '~/components/common-components/ps-section.vue'
export default Vue.extend({
  components: { PsSection, PsCareerTemplate },
})
</script>
