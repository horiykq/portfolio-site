<template>
  <div class="ps-site-title">
    <ps-link to="/">
      <div class="ps-site-title__inner">
        Portfolio
        <br />
        Of
        <br />
        Kaito Horiuchi
      </div>
    </ps-link>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import psLink from '../ps-link.vue'
export default Vue.extend({
  components: { psLink },
})
</script>

<style lang="scss" scoped>
$block: '.ps-site-title';
#{$block} {
  &__inner {
    font-family: $en-font;
    font-size: 24px;
    font-weight: 400;
    text-transform: uppercase;
  }
}
</style>
