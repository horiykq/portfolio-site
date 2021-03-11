<template>
  <ps-section>
    <ps-second-heading>Portfolio</ps-second-heading>

    <ps-album
      :images="portfolioAlbumImages"
      :aspect="imageAspect.wide"
      :fitting="imageFitting.contain"
    />
  </ps-section>
</template>
<script lang="ts">
import Vue from 'vue'
import PsAlbum from '~/components/common-components/ps-album.vue'
import PsSecondHeading from '~/components/common-components/ps-second-heading.vue'
import PsSection from '~/components/common-components/ps-section.vue'
import portfolioAlbumImages from '~/constants/album-images/portfolio-album-images'
import imageAspect from '~/types/image-aspect'
import imageFitting from '~/types/image-fitting'
export default Vue.extend({
  components: { PsSection, PsSecondHeading, PsAlbum },

  data() {
    return {
      portfolioAlbumImages,
      imageAspect,
      imageFitting,
    }
  },
})
</script>
