<template>
  <div :class="computedClass">
    <button
      v-if="!showMenu"
      class="ps-sp-menu__buttonOuter"
      @click="showMenu = !showMenu"
    >
      <div class="ps-sp-menu__buttonInner">
        <div class="ps-sp-menu__buttonLine" />
        <div class="ps-sp-menu__buttonLine" />
        <div class="ps-sp-menu__buttonLine" />
      </div>
    </button>
    <div v-if="showMenu" class="ps-sp-menu__menuOuter">Menu</div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import page from '~/types/page'
export default Vue.extend({
  props: {
    browsedPage: {
      type: Object as () => page,
      required: true,
    },
  },

  data() {
    return {
      showMenu: false,
    }
  },

  computed: {
    computedClass(): string {
      return this.showMenu ? 'ps-sp-menu ps-sp-menu__menuOpened' : 'ps-sp-menu'
    },
  },
})
</script>

<style lang="scss" scoped>
$block: '.ps-sp-menu';
#{$block} {
  display: flex;
  justify-content: flex-end;
  width: 100%;
  padding: 16px 32px;
  &__menuOpened {
    justify-content: center;
  }
  &__buttonOuter {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
  }
  &__buttonInner {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 28px;
    height: 12px;
  }
  &__buttonLine {
    display: inline-block;
    width: 100%;
    height: 1px;
    background: $color-default-black;
  }
  &__menuOuter {
    display: inline-block;
    width: 100%;
  }
}
</style>
