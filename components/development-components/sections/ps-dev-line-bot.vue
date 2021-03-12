<template>
  <ps-section>
    <ps-second-heading>
      LINEbot
      <ps-responsive-break :sp="true" />
      「なんでもQRくん」
    </ps-second-heading>
    <ps-album
      :aspect="imageAspect.standard"
      :fitting="imageFitting.contain"
      :images="linebotAlbumImages"
    />
  </ps-section>
</template>

<script lang="ts">
import Vue from 'vue'
import PsAlbum from '~/components/common-components/ps-album.vue'
import PsResponsiveBreak from '~/components/common-components/ps-responsive-break.vue'
import PsSecondHeading from '~/components/common-components/ps-second-heading.vue'
import PsSection from '~/components/common-components/ps-section.vue'
import linebotAlbumImages from '~/constants/album-images/development-albums/linebot-album-images'
import imageAspect from '~/types/image-aspect'
import imageFitting from '~/types/image-fitting'
export default Vue.extend({
  components: { PsSection, PsSecondHeading, PsAlbum, PsResponsiveBreak },

  data() {
    return {
      linebotAlbumImages,
      imageAspect,
      imageFitting,
    }
  },
})
</script>
