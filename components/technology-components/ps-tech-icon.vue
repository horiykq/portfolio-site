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
  width: 80px;
  height: 100px;
  &__icon {
    width: 64px;
    height: 64px;
  }
  &__label {
    @include font-size(1.6);
  }
}
</style>
