<template>
  <div class="ps-tech-list">
    <div class="ps-tech-list__iconWrapper">
      <ps-tech-icon :technology="technology" />
    </div>
    <p class="ps-tech-list__label">{{ technology.label }}</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import PsTechIcon from './ps-tech-icon.vue'
import technology from '~/types/technology'
export default Vue.extend({
  components: { PsTechIcon },

  props: {
    technology: {
      type: Object as () => technology,
      required: true,
    },
  },
})
</script>

<style lang="scss" scoped>
$block: '.ps-tech-list';
#{$block} {
  display: flex;
  align-items: center;
  margin: 16px;
  @include mq_sp {
    width: 100%;
  }
  &__iconWrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
    margin-right: 12px;
    @include mq_sp {
      margin-right: 16px;
    }
  }
  &__label {
    display: inline-block;
    font-weight: 300;
    font-family: $en-font;
    @include font-size(2.4);
  }
}
</style>
