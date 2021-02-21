<template>
  <ps-section>
    <ps-first-heading jp-heading="株式会社クアンド">
      QUANDO, Inc.
    </ps-first-heading>
  </ps-section>
</template>

<script lang="ts">
import Vue from 'vue'
import PsFirstHeading from '~/components/common-components/ps-first-heading.vue'
import PsSection from '~/components/common-components/ps-section.vue'
export default Vue.extend({
  components: { PsSection, PsFirstHeading },
})
</script>
