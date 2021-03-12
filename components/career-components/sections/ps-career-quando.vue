<template>
  <ps-section>
    <ps-career-template>
      <template #company> 株式会社クアンド </template>
      <template #info> （2019.10 - 2020.10, エンジニア） </template>
      <template #technology>
        <ul>
          <li>Webフロントエンド（React.js, Gatsby.js, Vue.js）</li>
          <li>Webサーバサイド（Django）</li>
          <li>機械学習（TensorFlow, Keras, CNN）</li>
          <li>ハードウェア（RevPi, GigEカメラ, PLC）</li>
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
import quandoAlbumImages from '~/constants/album-images/career-albums/quando-album-images'
import imageAspect from '~/types/image-aspect'
import imageFitting from '~/types/image-fitting'
export default Vue.extend({
  components: { PsSection, PsCareerTemplate, PsAlbum },

  data() {
    return {
      albumImages: quandoAlbumImages,
      imageAspect,
      imageFitting,
    }
  },
})
</script>
