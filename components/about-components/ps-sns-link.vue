<template>
  <ps-normal-link :href="sns.path">
    <img class="ps-sns-link" :src="iconSrc" />
  </ps-normal-link>
</template>

<script lang="ts">
import Vue from 'vue'
import PsNormalLink from '../common-components/ps-normal-link.vue'
import twitter from '~/constants/sns/twitter'
import sns from '~/types/sns'
import note from '~/constants/sns/note'
import wantedly from '~/constants/sns/wantedly'
import gitHub from '~/constants/sns/github'
import qiita from '~/constants/sns/qiita'
export default Vue.extend({
  components: { PsNormalLink },
  props: {
    sns: {
      type: Object as () => sns,
      required: true,
    },
  },

  computed: {
    iconSrc(): any {
      switch (this.sns) {
        case twitter:
          return require('@/assets/icons/twitter-icon.svg')
        case note:
          return require('@/assets/icons/note-icon.png')
        case wantedly:
          return require('@/assets/icons/wantedly-icon.svg')
        case gitHub:
          return require('@/assets/icons/github-icon.png')
        case qiita:
          return require('@/assets/icons/qiita-icon.png')
        default:
          return ''
      }
    },
  },
})
</script>

<style lang="scss" scoped>
$block: '.ps-sns-link';
#{$block} {
  width: 100%;
  height: 100%;
  transition: 0.4s all;
  &:hover {
    opacity: 0.5;
  }
}
</style>
