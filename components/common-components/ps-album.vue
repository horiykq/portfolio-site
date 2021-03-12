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
            image === images[chosenImageIndex]
              ? 'ps-album__thumbnail ps-album__chosenThumbnail'
              : 'ps-album__thumbnail'
          "
          :alt="`${image.alt}のサムネイル`"
        />
      </button>
    </div>
    <ps-image
      :class="computedImageClass"
      :src="images[chosenImageIndex].src"
      :alt="images[chosenImageIndex].alt"
    />
    <div class="ps-album__controlButtonsWrapper">
      <button :class="computedPreviousButtonClass" @click="onClickPrevious()">
        {{ controlButtonArrows.previous }} Previous
      </button>
      <button :class="computedNextButtonClass" @click="onClickNext()">
        Next {{ controlButtonArrows.next }}
      </button>
    </div>
    <ps-paragraph>
      {{ images[chosenImageIndex].description }}
    </ps-paragraph>
    <ps-normal-link
      v-if="images[chosenImageIndex].link != null"
      class="ps-album__link"
      :href="images[chosenImageIndex].link"
    >
      >> ページを見てみる
    </ps-normal-link>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import PsImage from './ps-image.vue'
import PsParagraph from './ps-paragraph.vue'
import PsNormalLink from './ps-normal-link.vue'
import albumImage from '~/types/album-image'
import imageAspect, { imageAspectType } from '~/types/image-aspect'
import imageFitting, { imageFittingType } from '~/types/image-fitting'
import controlButtonArrows from '~/constants/control-button-arrows'
export default Vue.extend({
  components: { PsImage, PsParagraph, PsNormalLink },

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
      chosenImageIndex: 0,
      controlButtonArrows,
    }
  },

  computed: {
    computedImageClass(): string {
      let returnClass = 'ps-album__image'

      switch (this.aspect) {
        case imageAspect.wide:
          returnClass += ' ps-album__wideAspectImage'
          break
        case imageAspect.standard:
          returnClass += ' ps-album__standardAspectImage'
          break
      }
      if (this.fitting === imageFitting.cover) {
        returnClass += ' ps-album__coverImage'
      } else {
        returnClass += ' ps-album__containImage'
      }
      return returnClass
    },
    computedPreviousButtonClass(): string {
      return this.chosenImageIndex === 0
        ? 'ps-album__controlButton ps-album__disabledControlButton'
        : 'ps-album__controlButton'
    },
    computedNextButtonClass(): string {
      return this.chosenImageIndex === this.images.length - 1
        ? 'ps-album__controlButton ps-album__disabledControlButton'
        : 'ps-album__controlButton'
    },
  },

  methods: {
    onClickThumbnail(index: number) {
      this.chosenImageIndex = index
    },
    onClickPrevious() {
      if (this.chosenImageIndex !== 0) {
        this.chosenImageIndex -= 1
      }
    },
    onClickNext() {
      if (this.chosenImageIndex !== this.images.length - 1) {
        this.chosenImageIndex += 1
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
  &__chosenThumbnail {
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
  &__disabledControlButton {
    cursor: initial;
    color: $color-disabled;
    transition: none;
    &:hover {
      letter-spacing: 0;
    }
  }
  &__link {
    padding: 1.6px;
    color: $color-dark-blue;
    margin-top: 8px;
    transition: 0.4s all;
    &:hover {
      letter-spacing: 1px;
    }
  }
}
</style>
