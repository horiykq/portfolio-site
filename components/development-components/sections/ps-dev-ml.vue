<template>
  <ps-section class="ps-dev-ml">
    <ps-second-heading>機械学習コンペ</ps-second-heading>
    <ps-album
      :images="solafuneAlbumImages"
      :aspect="imageAspect.standard"
      :fitting="imageFitting.contain"
    />
  </ps-section>
</template>

<script lang="ts">
import Vue from 'vue'
import PsAlbum from '~/components/common-components/ps-album.vue'
import PsSecondHeading from '~/components/common-components/ps-second-heading.vue'
import PsSection from '~/components/common-components/ps-section.vue'
import solafuneAlbumImages from '~/constants/album-images/development-albums/solafune-album-images'
import imageAspect from '~/types/image-aspect'
import imageFitting from '~/types/image-fitting'
export default Vue.extend({
  components: { PsSection, PsSecondHeading, PsAlbum },

  data() {
    return {
      solafuneAlbumImages,
      imageAspect,
      imageFitting,
    }
  },
})
</script>

<style lang="scss" scoped>
$block: '.ps-dev-ml';
#{$block} {
  padding: 32px 0;
}
</style>
