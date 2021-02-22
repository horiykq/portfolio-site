<template>
  <ps-link>
    <ps-normal-link :href="href">
      <img :src="iconSrc" decording="async" />
    </ps-normal-link>
  </ps-link>
</template>

<script lang="ts">
import Vue from 'vue'
import PsLink from '~/components/common-components/ps-link.vue'
import PsNormalLink from '~/components/common-components/ps-normal-link.vue'
import snsType from '~/constants/sns-type'
export default Vue.extend({
  components: { PsLink, PsNormalLink },

  props: {
    href: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
  },

  computed: {
    iconSrc(): string {
      switch (this.type) {
        case snsType.TWITTER:
          return '@/assets/icons/twitter-icon.svg'
        default:
          return ''
      }
    },
  },
})
</script>
