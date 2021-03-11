<template>
  <div class="ps-random-hamsters">
    <p v-if="updatingImage || !isInitializedCanvas">loading</p>
    <canvas
      ref="hamsterCanvas"
      :width="pcCanvasWidth"
      :height="pcCanvasHeight"
      class="ps-random-hamsters__canvas"
    />
    <button @click="onClickRandom">random</button>
  </div>

  <!-- <div v-else class="ps-random-hamsters">
    <ps-image
      class="ps-random-hamsters__image"
      :src="hamsterImages[currentHamstersImageIndex].src"
      alt="飼っていたハムスター（たち）"
    />
    <canvas ref="hamsterCanvas" class="ps-random-hamsters__canvas" />
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
  </div> -->
</template>

<script lang="ts">
import Vue from 'vue'
// import PsImage from '../common-components/ps-image.vue'
import hamsterImages from '~/constants/hamster-images'
export default Vue.extend({
  // components: { PsImage },

  data() {
    return {
      hamsterImages,
      isInitializedCanvas: false,
      updatingImage: false,
      updateError: false,
      pcCanvasWidth: 636,
      pcCanvasHeight: (636 / 4) * 3,
    }
  },

  mounted(): void {
    this.$nextTick(() => {
      const canvasRef: any = this.$refs.hamsterCanvas
      if (canvasRef == null) {
        this.updateError = true
      } else {
        const canvasContext: CanvasRenderingContext2D = canvasRef.getContext(
          '2d'
        )
        const img = new Image()
        img.crossOrigin = '*'
        const hamsterImageIndex = this.chooseRandomIndex()
        img.src = hamsterImages[hamsterImageIndex].src
        img.onload = () => {
          canvasContext.drawImage(
            img,
            0,
            0,
            this.pcCanvasWidth,
            this.pcCanvasHeight
          )
        }
      }
      this.isInitializedCanvas = true
    })
  },

  methods: {
    chooseRandomIndex(): number {
      return Math.floor(Math.random() * Math.floor(this.hamsterImages.length))
    },
    onClickRandom(): void {
      this.updatingImage = true
      const canvasRef: any = this.$refs.hamsterCanvas
      if (canvasRef == null) {
        this.updateError = true
      } else {
        const canvasContext: CanvasRenderingContext2D = canvasRef.getContext(
          '2d'
        )
        const img = new Image()
        img.crossOrigin = '*'
        const hamsterImageIndex = this.chooseRandomIndex()
        img.src = hamsterImages[hamsterImageIndex].src
        img.onload = () => {
          canvasContext.drawImage(
            img,
            0,
            0,
            this.pcCanvasWidth,
            this.pcCanvasHeight
          )
        }
      }
      this.updatingImage = false
    },
  },
})
</script>

<style lang="scss" scoped>
$block: '.ps-random-hamsters';
#{$block} {
  margin: -64px 0 -128px 0;
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
