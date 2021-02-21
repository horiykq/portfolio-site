<template>
  <ps-section>
    <ps-first-heading jp-heading="工場ライン自動化システム">
      Factory Automation
    </ps-first-heading>
  </ps-section>
</template>

<script lang="ts">
import Vue from 'vue'
import psFirstHeading from '~/components/common-components/ps-first-heading.vue'
import PsSection from '~/components/common-components/ps-section.vue'
export default Vue.extend({
  components: { psFirstHeading, PsSection },
})
</script>
