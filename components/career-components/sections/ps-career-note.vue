<template>
  <ps-section class="ps-career-note">
    <ps-career-template>
      <template #company> note株式会社 </template>
      <template #info> （2021.2 - 現在, エンジニア） </template>
      <template #technology>
        <ul>
          <li>Webフロントエンド（Nuxt.js）</li>
          <li>Webサーバサイド（Ruby on Rails）</li>
        </ul>
      </template>
      <template #paragraph>
        <ps-image src="/images/note_logo.png" alt="note" />
        <ps-paragraph class="ps-career-note__paragraph">
          カイゼンチームにて、noteフロントエンド(Nuxt.js)・サーバサイド(Ruby on
          Rails)の開発に従事。
        </ps-paragraph>
      </template>
    </ps-career-template>
  </ps-section>
</template>

<script lang="ts">
import Vue from 'vue'
import PsCareerTemplate from '../ps-career-template.vue'
import PsSection from '~/components/common-components/ps-section.vue'
import PsImage from '~/components/common-components/ps-image.vue'
import PsParagraph from '~/components/common-components/ps-paragraph.vue'
export default Vue.extend({
  components: { PsSection, PsCareerTemplate, PsImage, PsParagraph },
})
</script>

<style lang="scss" scoped>
$block: '.ps-career-note';
#{$block} {
  &__paragraph {
    margin-bottom: 32px;
  }
}
</style>
