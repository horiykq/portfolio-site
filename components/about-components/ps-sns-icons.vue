<template>
  <div class="ps-sns-icons"></div>
</template>

<script lang="ts">
import Vue from 'vue'
import snss from '~/constants/sns'
export default Vue.extend({
  data() {
    return {
      mySns: snss,
    }
  },
})
</script>
