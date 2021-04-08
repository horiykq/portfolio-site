<template>
  <ps-section class="ps-career-ca">
    <ps-career-template>
      <template #company> 株式会社サイバーエージェント </template>
      <template #info> （2021.3.27 - 2021.3.28, エンジニア） </template>
      <template #technology>
        <ul>
          <li>Webフロントエンド（Nuxt.js）</li>
        </ul>
      </template>
      <template #paragraph>
        <ps-album
          :images="albumImages"
          :aspect="imageAspect.wide"
          :fitting="imageFitting.cover"
        />
      </template>
    </ps-career-template>
  </ps-section>
</template>

<script lang="ts">
import Vue from 'vue'
import PsCareerTemplate from '../ps-career-template.vue'
import PsSection from '~/components/common-components/ps-section.vue'
import PsAlbum from '~/components/common-components/ps-album.vue'
import caAlbumImages from '~/constants/album-images/career-albums/ca-album-images'
import imageAspect from '~/types/image-aspect'
import imageFitting from '~/types/image-fitting'
export default Vue.extend({
  components: { PsSection, PsCareerTemplate, PsAlbum },

  data() {
    return {
      albumImages: caAlbumImages,
      imageAspect,
      imageFitting,
    }
  },
})
</script>
