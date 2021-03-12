<template>
  <ps-section>
    <ps-first-heading jp-heading="触れたことのある技術">
      Experienced
    </ps-first-heading>

    <ps-second-heading class="ps-tech-experienced__h2" :use-en-font="true">
      Frontend
    </ps-second-heading>
    <div class="ps-tech-experienced__listWrapper">
      <ps-tech-list
        v-for="(technology, index) in frontend"
        :key="index"
        :technology="technology"
      />
    </div>

    <ps-second-heading class="ps-tech-experienced__h2" :use-en-font="true">
      Backend
    </ps-second-heading>
    <div class="ps-tech-experienced__listWrapper">
      <ps-tech-list
        v-for="(technology, index) in backend"
        :key="index"
        :technology="technology"
      />
    </div>

    <ps-second-heading class="ps-tech-experienced__h2" :use-en-font="true">
      Other Languages
    </ps-second-heading>
    <div class="ps-tech-experienced__listWrapper">
      <ps-tech-list
        v-for="(technology, index) in others"
        :key="index"
        :technology="technology"
      />
    </div>

    <ps-second-heading class="ps-tech-experienced__h2" :use-en-font="true">
      Hardware
    </ps-second-heading>
    <div class="ps-tech-experienced__listWrapper">
      <ps-tech-list
        v-for="(technology, index) in hardware"
        :key="index"
        :technology="technology"
      />
    </div>

    <ps-second-heading class="ps-tech-experienced__h2" :use-en-font="true">
      Machine Learning
    </ps-second-heading>
    <div class="ps-tech-experienced__listWrapper">
      <ps-tech-list
        v-for="(technology, index) in machineLearning"
        :key="index"
        :technology="technology"
      />
    </div>

    <ps-second-heading class="ps-tech-experienced__h2" :use-en-font="true">
      Infrastructure
    </ps-second-heading>
    <div class="ps-tech-experienced__listWrapper">
      <ps-tech-list
        v-for="(technology, index) in infrastructure"
        :key="index"
        :technology="technology"
      />
    </div>
  </ps-section>
</template>

<script lang="ts">
import Vue from 'vue'
import PsTechList from '../ps-tech-list.vue'
import PsFirstHeading from '~/components/common-components/ps-first-heading.vue'
import PsSecondHeading from '~/components/common-components/ps-second-heading.vue'
import PsSection from '~/components/common-components/ps-section.vue'
import technologies from '~/constants/technologies/index'
export default Vue.extend({
  components: {
    PsSection,
    PsFirstHeading,
    PsSecondHeading,
    PsTechList,
  },

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
  &__outer {
    display: flex;
    justify-content: center;
    width: 100%;
  }
  &__inner {
    display: flex;
    flex-wrap: wrap;
    @include mq_pc {
      width: 600px;
    }
  }
  &__listWrapper {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
  }
}
</style>
