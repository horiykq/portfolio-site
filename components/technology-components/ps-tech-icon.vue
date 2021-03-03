<template>
  <div class="ps-tech-icon">
    <div class="ps-tech-icon__iconWrapper">
      <img
        :class="computedIconClass"
        :src="iconSrc"
        :alt="technology.label"
        decoding="async"
      />
    </div>
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
    computedIconClass(): string {
      switch (this.technology.name) {
        case 'css':
          return 'ps-tech-icon__portraitIcon'
        case 'raspi':
          return 'ps-tech-icon__portraitIcon'
        case 'flask':
          return 'ps-tech-icon__landscapeIcon'
        case 'django':
          return 'ps-tech-icon__landscapeIcon'
        case 'python':
          return 'ps-tech-icon__landscapeIcon'
        case 'revpi':
          return 'ps-tech-icon__landscapeIcon'
        default:
          return 'ps-tech-icon__squareIcon'
      }
    },
    iconSrc(): ImageData | string {
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
        case 'ruby':
          return require('@/assets/icons/ruby.png')
        case 'golang':
          return require('@/assets/icons/Go-Logo_Aqua.svg')
        case 'django':
          return require('@/assets/icons/django-logo-negative.svg')
        case 'flask':
          return require('@/assets/icons/flask.png')
        case 'rails':
          return require('@/assets/icons/rails.png')
        case 'echo':
          return require('@/assets/icons/echo.png')
        case 'python':
          return require('@/assets/icons/python-logo-generic.svg')
        case 'c':
          return require('@/assets/icons/c.png')
        case 'raspi':
          return require('@/assets/icons/RPi-Logo-SCREEN.png')
        case 'revpi':
          return require('@/assets/icons/revpi-logo-300x150.png')
        case 'cam':
          return require('@/assets/icons/imaging_source_dfk-33gp1300-800x800.jpg')
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
  @include mq_sp() {
    width: 96px;
    height: 96px;
  }
  &__iconWrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 64px;
    height: 64px;
    @include mq_sp() {
      width: 48px;
      height: 48px;
    }
  }
  &__squareIcon {
    width: 64px;
    height: 64px;
    @include mq_sp() {
      width: 48px;
      height: 48px;
    }
  }
  &__portraitIcon {
    height: 64px;
    @include mq_sp() {
      height: 48px;
    }
  }
  &__landscapeIcon {
    width: 64px;
    @include mq_sp() {
      width: 48px;
    }
  }
  &__label {
    font-weight: 400;
    margin-top: 6px;
    @include font-size(1.6);
  }
}
</style>
