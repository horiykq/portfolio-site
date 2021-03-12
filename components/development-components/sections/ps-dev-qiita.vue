<template>
  <ps-section>
    <ps-second-heading>Qiita記事投稿</ps-second-heading>
    <ps-album
      :images="qiitaAlbumImages"
      :aspect="imageAspect.standard"
      :fitting="imageFitting.contain"
    />
  </ps-section>
</template>

<script lang="ts">
import Vue from 'vue'
import PsSection from '~/components/common-components/ps-section.vue'
import PsSecondHeading from '~/components/common-components/ps-second-heading.vue'
import PsAlbum from '~/components/common-components/ps-album.vue'
import qiitaAlbumImages from '~/constants/album-images/development-albums/qiita-album-images'
import imageAspect from '~/types/image-aspect'
import imageFitting from '~/types/image-fitting'
export default Vue.extend({
  components: { PsSection, PsSecondHeading, PsAlbum },

  data() {
    return {
      qiitaAlbumImages,
      imageAspect,
      imageFitting,
    }
  },
})
</script>
