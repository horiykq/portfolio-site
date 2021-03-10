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
      const usePortraitStyleList = ['css', 'raspi', 'jupyter']
      const useLandscapeStyleList = [
        'flask',
        'django',
        'python',
        'revpi',
        'cuda',
        'pandas',
        'k3s',
        'docker',
      ]

      if (usePortraitStyleList.includes(this.technology.name)) {
        return 'ps-tech-icon__portraitIcon'
      } else if (useLandscapeStyleList.includes(this.technology.name)) {
        return 'ps-tech-icon__landscapeIcon'
      } else {
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
        case 'plc':
          return require('@/assets/icons/plc.png')
        case 'tensorflow':
          return require('@/assets/icons/FullColorPrimary Icon.svg')
        case 'keras':
          return require('@/assets/icons/Keras_logo.svg')
        case 'colab':
          return require('@/assets/icons/colab_favicon_256px.png')
        case 'jupyter':
          return require('@/assets/icons/518px-Jupyter_logo.png')
        case 'cuda':
          return require('@/assets/icons/cuda.jpg')
        case 'numpy':
          return require('@/assets/icons/86498201-a8bd8680-bd39-11ea-9d08-66b610a8dc01.png')
        case 'pandas':
          return require('@/assets/icons/pandas.png')
        case 'netlify':
          return require('@/assets/icons/netlify.svg')
        case 'vercel':
          return require('@/assets/icons/6R0-p1Vf_400x400.jpg')
        case 'heroku':
          return require('@/assets/icons/heroku-logo-solid-gradient.svg')
        case 'docker':
          return require('@/assets/icons/vertical-logo-monochromatic.png')
        case 'k8s':
          return require('@/assets/icons/kubernetes.svg')
        case 'k3s':
          return require('@/assets/icons/k3s-icon-color.svg')
        case 'ec2':
          return require('@/assets/icons/Arch_Amazon-EC2_48.svg')
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
