<template>
  <ps-section>
    <ps-first-heading jp-heading="プロフィール">Profile</ps-first-heading>
    <ps-image src="/images/childhood.jpg" />
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
