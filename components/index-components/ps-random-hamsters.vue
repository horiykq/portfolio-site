<template>
  <div class="ps-random-hamsters">
    <ps-loader
      v-if="currentHamstersImageIndex === -1"
      class="ps-random-hamsters__loader"
    />
    <div v-else>
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
        <button
          class="ps-random-hamsters__randomButton"
          @click="updateRandomIndex()"
        >
          ランダム
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import PsImage from '../common-components/ps-image.vue'
import PsLoader from '../common-components/ps-loader.vue'
import hamsterImages from '~/constants/hamster-images'
export default Vue.extend({
  components: { PsImage, PsLoader },

  data() {
    return {
      hamsterImages,
      currentHamstersImageIndex: -1,
    }
  },

  mounted() {
    this.updateRandomIndex()
  },

  methods: {
    updateRandomIndex(): void {
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
  display: flex;
  justify-content: center;
  width: 100%;
  margin: -64px 0 -128px 0;
  &__loader {
    margin: calc((100vh - 172px) / 2) 0;
  }
  &__image {
    width: 636px;
    height: 477px;
    object-fit: contain;
    margin-bottom: 16px;
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
