<template>
  <div class="ps-album">
    <div class="ps-album__thumbnailsWrapper">
      <button
        v-for="(image, index) in images"
        :key="index"
        class="ps-album__thumbnailButton"
        @click="onClickThumbnail(index)"
      >
        <img
          :src="image.src"
          :class="
            image === images[choosedImageIndex]
              ? 'ps-album__thumbnail ps-album__choosedThumbnail'
              : 'ps-album__thumbnail'
          "
          :alt="`${image.alt}のサムネイル`"
        />
      </button>
    </div>
    <ps-image
      :class="computedImageClass"
      :src="images[choosedImageIndex].src"
      :alt="images[choosedImageIndex].alt"
    />
    <div class="ps-album__controlButtonsWrapper">
      <button class="ps-album__controlButton" @click="onClickPrevious()">
        {{ controlButtonArrows.previous }} Previous
      </button>
      <button class="ps-album__controlButton" @click="onClickNext()">
        Next {{ controlButtonArrows.next }}
      </button>
    </div>
    <ps-paragraph>
      {{ images[choosedImageIndex].description }}
    </ps-paragraph>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import PsImage from './ps-image.vue'
import PsParagraph from './ps-paragraph.vue'
import albumImage from '~/types/album-images'
import imageAspect, { imageAspectType } from '~/types/image-aspect'
import imageFitting, { imageFittingType } from '~/types/image-fitting'
import controlButtonArrows from '~/constants/control-button-arrows'
export default Vue.extend({
  components: { PsImage, PsParagraph },

  props: {
    images: {
      type: Array as () => albumImage[],
      required: true,
    },
    aspect: {
      type: String as () => imageAspectType,
      required: true,
    },
    fitting: {
      type: String as () => imageFittingType,
      required: true,
    },
  },

  data() {
    return {
      choosedImageIndex: 0,
      controlButtonArrows,
    }
  },

  computed: {
    computedImageClass(): string {
      let returnClass = 'ps-album__image'
      if (this.aspect === imageAspect.wide) {
        returnClass += ' ps-album__wideAspectImage'
      } else {
        returnClass += ' ps-album__standardAspectImage'
      }
      if (this.fitting === imageFitting.cover) {
        returnClass += ' ps-album__coverImage'
      } else {
        returnClass += ' ps-album__containImage'
      }
      return returnClass
    },
  },

  methods: {
    onClickThumbnail(index: number) {
      this.choosedImageIndex = index
    },
    onClickPrevious() {
      if (this.choosedImageIndex !== 0) {
        this.choosedImageIndex -= 1
      }
    },
    onClickNext() {
      if (this.choosedImageIndex !== this.images.length - 1) {
        this.choosedImageIndex += 1
      }
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
    width: 100%;
    flex-wrap: wrap;
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
    border: 1px solid $color-border-gray;
  }
  &__standardAspectImage {
    height: calc(636px / 4 * 3);
    @include mq_sp {
      height: calc((100vw - 64px) / 4 * 3);
    }
  }
  &__wideAspectImage {
    height: calc(636px / 16 * 9);
    @include mq_sp {
      height: calc((100vw - 64px) / 16 * 9);
    }
  }
  &__containImage {
    object-fit: contain;
  }
  &__coverImage {
    object-fit: cover;
  }
  &__controlButtonsWrapper {
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin: 0 0 16px 0;
  }
  &__controlButton {
    display: inline-block;
    text-transform: uppercase;
    font-family: $en-font;
    padding: 1.6px;
    transition: 0.4s all;
    &:hover {
      letter-spacing: 1px;
    }
    @include font-size(1.8);
  }
}
</style>
