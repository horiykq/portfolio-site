<template>
  <img class="ps-image" :src="imgSrc" :alt="imgAlt" decoding="async" />
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    src: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      required: true,
    },
  },

  computed: {
    imgSrc(): string {
      if (this.src !== '') {
        return this.src
      }
      return ''
    },

    imgAlt(): string {
      if (this.alt !== '') {
        return this.alt
      }
      return '写真'
    },
  },
})
</script>

<style lang="scss" scoped>
$block: '.ps-image';
#{$block} {
  width: 100%;
  height: 100%;
}
</style>
