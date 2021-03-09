<template>
  <ps-section class="ps-dev-atcoder">
    <ps-second-heading>AtCoder</ps-second-heading>
    <ps-image
      class="ps-dev-atcoder__image"
      src="/images/IMG_0203.PNG"
      alt="AtCoder参加後ツイート"
    />
    <ps-paragraph>
      アルゴリズムとデータ構造の勉強がてら、AtCoder Beginner
      Contestsにできる限り参加している。
    </ps-paragraph>
  </ps-section>
</template>

<script lang="ts">
import Vue from 'vue'
import PsImage from '~/components/common-components/ps-image.vue'
import PsParagraph from '~/components/common-components/ps-paragraph.vue'
import PsSecondHeading from '~/components/common-components/ps-second-heading.vue'
import PsSection from '~/components/common-components/ps-section.vue'
export default Vue.extend({
  components: { PsSection, PsSecondHeading, PsImage, PsParagraph },
})
</script>

<style lang="scss" scoped>
$block: '.ps-dev-atcoder';
#{$block} {
  padding: 32px 0;
  &__image {
    margin: 48px 0;
  }
}
</style>
