<template>
  <ps-section>
    <ps-first-heading jp-heading="触れたことのある技術">
      Experienced
    </ps-first-heading>

    <ps-second-heading class="ps-tech-experienced__h2" :use-en-font="true">
      Frontend
    </ps-second-heading>
    <div class="ps-tech-experienced__elements">
      <ps-tech-icon
        v-for="(element, index) in frontend"
        :key="index"
        :technology="element"
      />
    </div>
  </ps-section>
</template>

<script lang="ts">
import Vue from 'vue'
import PsTechIcon from '../ps-tech-icon.vue'
import PsFirstHeading from '~/components/common-components/ps-first-heading.vue'
import PsSecondHeading from '~/components/common-components/ps-second-heading.vue'
import PsSection from '~/components/common-components/ps-section.vue'
import technologies from '~/constants/technologies/index'
export default Vue.extend({
  components: { PsSection, PsFirstHeading, PsSecondHeading, PsTechIcon },

  data() {
    return {
      frontend: technologies.FRONTEND,
      backend: technologies.BACKEND,
      others: technologies.OTHERS,
      hardware: technologies.HARDWARE,
      machineLearning: technologies.ML,
      infrastructure: technologies.INFRA,
    }
  },
})
</script>

<style lang="scss" scoped>
$block: '.ps-tech-experienced';
#{$block} {
  &__h2 {
    margin: 32px 0;
  }
  &__elements {
    display: flex;
    flex-wrap: wrap;
  }
}
</style>
