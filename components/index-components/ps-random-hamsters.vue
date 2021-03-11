<template>
  <div class="ps-random-hamsters">
    <div v-if="currentHamstersImageIndex !== -1">
      <ps-image
        class="ps-random-hamsters__image"
        :src="hamsterImages[currentHamstersImageIndex].src"
        alt="飼っていたハムスター（たち）"
      />
      <div class="ps-random-hamsters__detailWrapper">
        <p class="ps-random-hamsters__comment">
          {{ hamsterImages[currentHamstersImageIndex].comment }}
          <br />
          （アクセスするたびに写真が変わります。）
        </p>
        <div class="ps-random-hamsters__promptWrapper">
          <p class="ps-random-hamsters__prompt">
            アクセスがめんどくさい方はこちらをどうぞ
            <span class="ps-random-hamsters__rightArrow">→</span>
            <span class="ps-random-hamsters__downArrow">↓</span>
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
  display: inline-block;
  padding: 64px 0;
  @include mq_pc {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    margin: -128px 0;
  }
  &__image {
    object-fit: contain;
    @include mq_sp {
      width: 100%;
    }
    @include mq_pc {
      width: 636px;
      height: 477px;
    }
  }
  &__detailWrapper {
    display: inline-block;
    width: 100%;
  }
  &__comment {
    margin-top: 8px;
    @include mq_pc {
      height: 70px;
    }
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
    font-weight: 500;
  }
  &__rightArrow {
    @include mq_sp {
      display: none;
    }
  }
  &__downArrow {
    @include mq_pc {
      display: none;
    }
    @include mq_tablet {
      display: none;
    }
  }
}
</style>
