<template>
  <ps-section class="ps-dev-atcoder">
    <ps-second-heading>AtCoder</ps-second-heading>
    <ps-album
      :images="atcoderAlbumImages"
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
import atcoderAlbumImages from '~/constants/album-images/atcoder-album-images'
import imageAspect from '~/types/image-aspect'
import imageFitting from '~/types/image-fitting'
export default Vue.extend({
  components: { PsSection, PsSecondHeading, PsAlbum },

  data() {
    return {
      atcoderAlbumImages,
      imageAspect,
      imageFitting,
    }
  },
})
</script>

<style lang="scss" scoped>
$block: '.ps-dev-atcoder';
#{$block} {
  padding: 32px 0;
}
</style>
