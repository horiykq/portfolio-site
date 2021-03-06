<template>
  <ps-section>
    <ps-career-template>
      <template #company> 株式会社リグニオ </template>
      <template #info> （2020.10 - 2021.1, エンジニア） </template>]
      <template #technology>
        <ul>
          <li>Webフロントエンド（React.js, Gatsby.js）</li>
          <li>機械学習（TensorFlow, Keras, CNN）</li>
          <li>ハードウェア（Raspberry Pi 4, GigEカメラ）</li>
          <li>ミドルウェア（Docker, Kubernetes, k3s）</li>
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
