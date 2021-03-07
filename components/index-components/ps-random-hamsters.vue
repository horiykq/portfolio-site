<template>
  <div v-if="currentHamstersImageIndex === -1" class="ps-random-hamsters">
    <v-skeleton-loader class="ps-random-hamsters__skeltonImage" type="image" />
    <v-skeleton-loader type="list-item-three-line" />
  </div>

  <div v-else class="ps-random-hamsters">
    <ps-image
      class="ps-random-hamsters__image"
      :src="hamsterImages[currentHamstersImageIndex].src"
      alt="飼っていたハムスター（たち）"
    />
    <p class="ps-random-hamsters__comment">
      {{ hamsterImages[currentHamstersImageIndex].comment }}
      <br />
      （アクセスするたびに写真が変わります。）
    </p>
    <div class="ps-random-hamsters__promptWrapper">
      <p class="ps-random-hamsters__prompt">
        アクセスがめんどくさい方はこちらをどうぞ →
      </p>
      <button class="ps-random-hamsters__randomButton" @click="onClickRandom()">
        ランダム
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import PsImage from '../common-components/ps-image.vue'
import hamsterImages from '~/constants/hamster-images'
export default Vue.extend({
  components: { PsImage },

  data() {
    return {
      hamsterImages,
      currentHamstersImageIndex: -1,
    }
  },

  mounted(): void {
    this.onClickRandom()
  },

  methods: {
    onClickRandom(): void {
      this.currentHamstersImageIndex = Math.floor(
        Math.random() * Math.floor(this.hamsterImages.length)
      )
    },
  },
})
</script>

<style lang="scss" scoped>
$block: '.ps-random-hamsters';
#{$block} {
  margin: -64px 0 -128px 0;
  &__skeltonImage {
    margin-bottom: 32px;
  }
  &__image {
    width: 100%;
    height: calc(636px / 4 * 3);
    object-fit: cover;
  }
  &__comment {
    margin-top: 8px;
    height: 70px;
  }
  &__promptWrapper {
    margin-top: 16px;
  }
  &__prompt {
    display: inline-block;
  }
  &__randomButton {
    font-family: $jp-font;
    padding: 1.6px;
  }
}
</style>
