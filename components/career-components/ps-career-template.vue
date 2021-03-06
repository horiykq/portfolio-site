<template>
  <ps-section class="ps-career-template">
    <ps-second-heading class="ps-career-template__company">
      <slot name="company" />
    </ps-second-heading>

    <p class="ps-career-template__info">
      <slot name="info" />
    </p>

    <h3 class="ps-career-template__technologyTitle">技術領域</h3>
    <div class="ps-career-template__technologyList">
      <slot name="technology" />
    </div>

    <p class="ps-career-template__paragraph">
      <slot name="paragraph" />
    </p>
  </ps-section>
</template>

<script lang="ts">
import Vue from 'vue'
import PsSecondHeading from '../common-components/ps-second-heading.vue'
import PsSection from '../common-components/ps-section.vue'
export default Vue.extend({
  components: { PsSection, PsSecondHeading },
})
</script>

<style lang="scss" scoped>
$block: '.ps-career-template';
#{$block} {
  &__company {
    font-weight: 400;
  }
  &__info {
    margin: 8px 0 36px 0;
    @include font-size(1.8);
  }
  &__technologyTitle {
    font-weight: 400;
    margin-bottom: 16px;
    @include font-size(1.8);
  }
  &__technologyList {
    padding-left: 32px;
    font-weight: 300;
    @include mq_sp() {
      font-weight: 400;
    }
  }
}
</style>
