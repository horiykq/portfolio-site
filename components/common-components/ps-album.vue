<template>
  <div class="ps-album">
    <div class="ps-album__thumbnailsWrapper">
      <button
        v-for="(image, index) in images"
        :key="index"
        class="ps-album__thumbnailButton"
        @click="onClickThumbnail(image)"
      >
        <img
          :src="image.src"
          :class="
            image === choosedImage
              ? 'ps-album__thumbnail ps-album__choosedThumbnail'
              : 'ps-album__thumbnail'
          "
          :alt="`${image.alt}のサムネイル`"
        />
      </button>
    </div>
    <ps-image
      class="ps-album__image"
      :src="choosedImage.src"
      :alt="choosedImage.alt"
    />
    <ps-paragraph>
      {{ choosedImage.description }}
    </ps-paragraph>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import PsImage from './ps-image.vue'
import PsParagraph from './ps-paragraph.vue'
import albumImage from '~/types/album-images'
export default Vue.extend({
  components: { PsImage, PsParagraph },

  props: {
    images: {
      type: Array as () => albumImage[],
      required: true,
    },
  },

  data() {
    return {
      choosedImage: this.images[0],
    }
  },

  methods: {
    onClickThumbnail(image: albumImage) {
      this.choosedImage = image
    },
  },
})
</script>

<style lang="scss" scoped>
$block: '.ps-album';
#{$block} {
  padding: 36px 0;
  &__thumbnailsWrapper {
    display: flex;
  }
  &__thumbnailButton {
    width: 68px;
    height: 68px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &__thumbnail {
    width: 64px;
    height: 64px;
    object-fit: cover;
    border: 2px solid $color-border-gray;
    border-radius: 4px;
    cursor: pointer;
  }
  &__choosedThumbnail {
    border: 2px solid $color-dark-blue;
  }
  &__image {
    margin: 16px 0;
    width: 100%;
    height: calc(636px / 4 * 3);
    object-fit: cover;
    @include mq_sp {
      height: calc((100vw - 64px) / 4 * 3);
    }
  }
}
</style>
