<template>
  <ps-section class="ps-about-profile">
    <ps-first-heading jp-heading="プロフィール">Profile</ps-first-heading>
    <ps-image
      class="ps-about-profile__childhoodImage"
      src="/images/childhood.jpg"
      alt="horiの子供時代"
    />
    <h2 class="ps-about-profile__name">
      堀内 凱登
      <span class="ps-about-profile__enName">/ Kaito Horiuchi</span>
    </h2>
    <!-- <ul>
      <li>hoge</li>
    </ul> -->
  </ps-section>
</template>

<script lang="ts">
import Vue from 'vue'
import psFirstHeading from '~/components/common-components/ps-first-heading.vue'
import PsImage from '~/components/common-components/ps-image.vue'
import PsSection from '~/components/common-components/ps-section.vue'
export default Vue.extend({
  components: { psFirstHeading, PsSection, PsImage },
})
</script>

<style lang="scss" scoped>
$block: '.ps-about-profile';
#{$block} {
  &__childhoodImage {
    margin-bottom: 32px;
  }
  &__name {
    font-size: 28px;
    font-weight: 300;
  }
  &__enName {
    font-family: $en-font;
    font-size: 24px;
    margin-left: 8px;
  }
}
</style>
