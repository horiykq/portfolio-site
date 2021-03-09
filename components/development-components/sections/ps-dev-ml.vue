<template>
  <ps-section class="ps-dev-ml">
    <ps-second-heading>機械学習コンペ</ps-second-heading>
    <ps-image
      class="ps-dev-ml__image"
      src="/images/IMG_0202.PNG"
      alt="solafune初subツイート"
    />
    <ps-paragraph>
      趣味でsolafuneやKaggleなどの機械学習コンペに時々参加している。（まだはじめて間もない）
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
$block: '.ps-dev-ml';
#{$block} {
  padding: 32px 0;
  &__image {
    margin: 48px 0;
  }
}
</style>
