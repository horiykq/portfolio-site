<template>
  <ps-section class="ps-career-qu">
    <ps-second-heading class="ps-career-qu__head2"> </ps-second-heading>
    <ps-paragraph>
      現在、九州大学 経済学部の2年生（23卒）。
      <br />
      ゼミにおいては、機械学習モデルやアルゴリズムを用いたデータ解析について学ぶ予定。
    </ps-paragraph>
  </ps-section>
</template>

<script lang="ts">
import Vue from 'vue'
import PsParagraph from '~/components/common-components/ps-paragraph.vue'
import PsSecondHeading from '~/components/common-components/ps-second-heading.vue'
import PsSection from '~/components/common-components/ps-section.vue'
export default Vue.extend({
  components: { PsSection, PsSecondHeading, PsParagraph },
})
</script>

<style lang="scss" scoped>
$block: '.ps-career-qu';
#{$block} {
  &__head2 {
    margin: 0 0 16px 0;
    @include font-size(2.4);
  }
}
</style>
