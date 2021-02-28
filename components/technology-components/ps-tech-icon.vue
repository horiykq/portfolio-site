<template>
  <div class="ps-tech-icon">
    <img
      class="ps-tech-icon__icon"
      :src="iconSrc"
      :alt="technology.label"
      decoding="async"
    />
    <p class="ps-tech-icon__label">{{ technology.label }}</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import technology from '~/types/technology'

export default Vue.extend({
  props: {
    technology: {
      type: Object as () => technology,
      required: true,
    },
  },

  computed: {
    iconSrc() {
      switch (this.technology.name) {
        case 'html':
          return require('@/assets/icons/HTML5_Logo.svg')
        case 'css':
          return require('@/assets/icons/css3.png')
        case 'nuxt':
          return require('@/assets/icons/nuxt-icon.png')
        case 'gatsby':
          return require('@/assets/icons/Gatsby_Monogram.png')
        case 'vue':
          return require('@/assets/icons/vuejs.png')
        case 'ts':
          return require('@/assets/icons/ts-logo-512.png')
        case 'js':
          return require('@/assets/icons/js-logo.png')
        case 'next':
          return require('@/assets/icons/next-js.svg')
        case 'react':
          return 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K'
        default:
          return require('@/assets/icons/HTML5_Logo.svg')
      }
    },
  },
})
</script>

<style lang="scss" scoped>
$block: '.ps-tech-icon';
#{$block} {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 120px;
  &__icon {
    height: 64px;
  }
  &__label {
    font-weight: 400;
    margin-top: 6px;
    @include font-size(1.6);
  }
}
</style>
