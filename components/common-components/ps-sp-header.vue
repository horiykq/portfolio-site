<template>
  <header class="ps-sp-header">
    <div class="ps-sp-header__outer">
      <ps-link to="/">
        <p class="ps-sp-header__inner">
          Portfolio of
          <br />
          Kaito Horiuchi
        </p>
      </ps-link>
    </div>
  </header>
</template>

<script lang="ts">
import Vue from 'vue'
import psLink from './ps-link.vue'
export default Vue.extend({
  components: { psLink },
})
</script>

<style lang="scss" scoped>
$block: '.ps-sp-header';
#{$block} {
  position: fixed;
  top: 0;
  left: 0;
  display: inline-block;
  width: 100vw;
  padding: 16px 32px;
  background: $color-white;
  border-bottom: 1px solid $color-border-black;
  &__outer {
    display: inline-block;
  }
  &__inner {
    display: inline-block;
    text-transform: uppercase;
    font-family: $en-font;
    font-weight: 400;
    color: $color-default-black;
    @include font-size(2);
  }
}
</style>
