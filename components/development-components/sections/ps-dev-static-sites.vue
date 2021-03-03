<template>
  <ps-section>
    <ps-second-heading> HP・LPなど静的サイト開発 </ps-second-heading>
  </ps-section>
</template>

<script lang="ts">
import Vue from 'vue'
import PsSecondHeading from '~/components/common-components/ps-second-heading.vue'
import PsSection from '~/components/common-components/ps-section.vue'
export default Vue.extend({
  components: { PsSection, PsSecondHeading },
})
</script>
