<template>
  <ps-section class="ps-about-profile">
    <ps-first-heading jp-heading="プロフィール">Profile</ps-first-heading>
    <ps-image
      class="ps-about-profile__childhoodImage"
      src="/images/childhood.jpg"
      alt="horiの子供時代"
    />
    <div class="ps-about-profile__basicInfo">
      <h2 class="ps-about-profile__name">
        堀内 凱登
        <span class="ps-about-profile__enName">/ Kaito Horiuchi (hori)</span>
      </h2>
      <div class="ps-about-profile__snsLinks">
        <ps-sns-link
          v-for="(sns, index) in snss"
          :key="index"
          class="ps-about-profile__snsLink"
          :sns="sns"
        />
      </div>
    </div>
    <ul class="ps-about-profile__listWrapper">
      <li class="ps-about-profile__list">
        <p class="ps-about-profile__listKey">出身地</p>
        <p class="ps-about-profile__listValue">香川県</p>
      </li>
      <li class="ps-about-profile__list">
        <p class="ps-about-profile__listKey">居住地</p>
        <p class="ps-about-profile__listValue">福岡県</p>
      </li>
      <li class="ps-about-profile__list">
        <p class="ps-about-profile__listKey">学年</p>
        <p class="ps-about-profile__listValue">大学3年生（23卒）</p>
      </li>
      <li class="ps-about-profile__list">
        <p class="ps-about-profile__listKey">趣味</p>
        <p class="ps-about-profile__listValue">
          ガジェット系
          <br />
          音楽（ピアノ・ギター・カラオケなど）
        </p>
      </li>
    </ul>
  </ps-section>
</template>

<script lang="ts">
import Vue from 'vue'
import PsSnsLink from '../ps-sns-link.vue'
import PsFirstHeading from '~/components/common-components/ps-first-heading.vue'
import PsImage from '~/components/common-components/ps-image.vue'
import PsSection from '~/components/common-components/ps-section.vue'
import snss from '~/constants/sns'
export default Vue.extend({
  components: { PsFirstHeading, PsSection, PsImage, PsSnsLink },

  data() {
    return {
      snss,
    }
  },
})
</script>

<style lang="scss" scoped>
$block: '.ps-about-profile';
#{$block} {
  &__childhoodImage {
    margin-bottom: 32px;
  }
  &__basicInfo {
    @include mq_sp {
      flex-direction: column;
      align-items: flex-end;
    }

    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &__name {
    display: inline-block;
    font-weight: 300;
    @include font-size(2.8);

    @include mq_sp {
      @include font-size(2.4);
    }
  }
  &__enName {
    font-family: $en-font;
    margin-left: 8px;
    @include font-size(2.4);

    @include mq_sp {
      @include font-size(2.2);
    }
  }
  &__snsLinks {
    display: flex;
    margin-top: 4px;
    @include mq_sp {
      margin: 16px 0 8px 0;
    }
  }
  &__snsLink {
    width: 28px;
    height: 28px;
    margin: 0 8px;
  }
  &__listWrapper {
    padding-left: 36px;
    @include mq_sp {
      padding-left: 16px;
    }

    margin: 32px 0;
  }
  &__list {
    margin: 16px 0;
  }
  &__listKey {
    font-weight: 500;
    margin-bottom: 8px;
    @include mq_sp {
      @include font-size(1.8);
    }
  }
  &__listValue {
    font-weight: 400;
  }
}
</style>
