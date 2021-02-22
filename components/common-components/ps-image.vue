<template>
  <img class="ps-image" :src="imgSrc" decoding="async" />
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    src: {
      type: String,
      default: undefined,
    },
  },

  computed: {
    imgSrc(): string {
      if (this.src !== undefined) {
        return this.src
      }
      return ''
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
