<template>
  <ps-section class="ps-about-history">
    <ps-first-heading jp-heading="来歴">History</ps-first-heading>
    <ps-second-heading class="ps-about-history__year" :use-en-font="true">
      2000-2006
    </ps-second-heading>
    <ps-second-heading class="ps-about-history__year" :use-en-font="true">
      2006-2012
    </ps-second-heading>
    <ps-image src="/images/058.JPG" alt="分解したPC" />
    <ps-second-heading class="ps-about-history__year" :use-en-font="true">
      2012-2015
    </ps-second-heading>
    <ps-image
      src="/images/IMG_2752.jpeg"
      alt="Mac OS XをインストールしたWindows PC"
    />
    <ps-second-heading class="ps-about-history__year" :use-en-font="true">
      2015-2018
    </ps-second-heading>
    <ps-image src="/images/IMG_1091.jpeg" alt="Android端末へのROM書き込み" />
    <ps-second-heading class="ps-about-history__year" :use-en-font="true">
      2019-
    </ps-second-heading>
  </ps-section>
</template>

<script lang="ts">
import Vue from 'vue'
import PsFirstHeading from '~/components/common-components/ps-first-heading.vue'
import PsImage from '~/components/common-components/ps-image.vue'
import PsSecondHeading from '~/components/common-components/ps-second-heading.vue'
import PsSection from '~/components/common-components/ps-section.vue'
export default Vue.extend({
  components: { PsSection, PsFirstHeading, PsSecondHeading, PsImage },
})
</script>

<style lang="scss" scoped>
$block: '.ps-about-history';
#{$block} {
  &__year {
    margin: 16px 0;
  }
}
</style>
