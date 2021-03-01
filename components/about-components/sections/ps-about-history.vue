<template>
  <ps-section class="ps-about-history">
    <ps-first-heading jp-heading="来歴">History</ps-first-heading>

    <ps-second-heading class="ps-about-history__year" :use-en-font="true">
      2000-2006
    </ps-second-heading>
    <ps-paragraph>
      2000年1月25日、香川県高松市にて生まれる。
      <br />
      幼稚園の頃から車やCDラジカセといった機械類に興味が強かった。
    </ps-paragraph>

    <ps-second-heading class="ps-about-history__year" :use-en-font="true">
      2006-2012
    </ps-second-heading>
    <ps-image
      class="ps-about-history__picture"
      src="/images/058.JPG"
      alt="分解したPC"
    />
    <ps-paragraph>
      小学生低学年の頃、父親からノートパソコンをクリスマスプレゼントとしてもらったことを機に、コンピューターの世界にのめり込んでいく。
      <br />
      最初はインターネットを使ってみたり、Windows
      ムービーメーカー(懐かしい)を触ってみたりという程度だったが、徐々にOSの入れ替えやハードウェアの換装など、低レイヤーな領域に興味を持つようになった。
      <br />
      お年玉でWindows 7
      Ultimate(¥34,000)を購入するくらいだったのでおそらく普通の小学生ではなかった。
      <br />
      上の写真は初めてノートパソコンを分解したときのもの。もともと画面が割れていて使用できなかったため、キーボードをバキバキにしてしまっても安心。
    </ps-paragraph>

    <ps-second-heading class="ps-about-history__year" :use-en-font="true">
      2012-2015
    </ps-second-heading>
    <ps-image
      class="ps-about-history__picture"
      src="/images/IMG_2752.jpeg"
      alt="Mac OS XをインストールしたWindows PC"
    />
    <ps-paragraph>
      中学生になったころ、普通のWindows PCにMac OS
      Xをインストールする”Hackintosh”というものに手を出していた。（技術的な好奇心というよりは、単純にお金がなくMacintoshが買えなかったためである。）
      <br />
      その結果、上の写真のように当時持っていたAcer Aspire 5750という機種にMac OS
      Xのインストールを成功させた。Kext(Macのハードウェアドライバ)やOSアップデートを入れた途端急に起動しなくなることもザラにあり、かなり試行錯誤した覚えがある。
      <br />
      他にも、この時期はスマートフォン黎明期であったため、通信契約を伴わない白ロム（端末のみ）スマホを購入し、モバイルの世界にものめり込んでいた。
    </ps-paragraph>

    <ps-second-heading class="ps-about-history__year" :use-en-font="true">
      2015-2018
    </ps-second-heading>
    <ps-image
      class="ps-about-history__picture"
      src="/images/IMG_1091.jpeg"
      alt="Android端末へのROM書き込み"
    />
    <ps-paragraph>
      高校生になって、興味がモバイル端末のOSやハードウェアにシフトしていた。さすがにスマホのハードウェア換装はできないが、OS(ROM)の入れ替えは可能だったため、root化→ブートローダーアンロック→ROM焼きという手順を踏んでAndroid端末のカスタムを行っていた。
      <br />
      この頃、今でいうSIMフリー端末は皆無で、キャリアから販売されたスマホを白ロムとして購入するしかなく、余計なアプリが大量にプリインストールされていた。さらに、端末のスペックがまだまだ低かったので、通常は不可能なカスタマイズを施したりプリインアプリを消したりするのにROM焼きは非常に有効な方法だった。
      <br />
      写真は海外版のSONY Xperia Z1にTWRPを通してCyanogenMod
      OSを書き込んでいるもの。
    </ps-paragraph>

    <ps-second-heading class="ps-about-history__year" :use-en-font="true">
      2018
    </ps-second-heading>
    <ps-image
      class="ps-about-history__picture"
      src="/images/IMG_20180508_214913.jpg"
      alt="仮想マシンとして起動しているMac OS X"
    />
    <ps-paragraph>
      浪人していたため、人生で唯一あまりパソコンに触っていない1年間を過ごした。
      が、ごくたまにパソコンの分解やOSの入れ替えなどをしていた。
      <br />
      写真はWindowsを起動しつつ、仮想マシン上でMac OS
      Xを起動させることに成功した時のものである。
    </ps-paragraph>

    <ps-second-heading class="ps-about-history__year" :use-en-font="true">
      2019-
    </ps-second-heading>
    <ps-paragraph>
      無事、大学生になる。1年前期で履修した「プログラミング演習」という授業でPythonをやったことで、プログラミングの面白さに気づく。
      <br />
      もともと趣味のパソコン関係を仕事にできればいいなと思っていたため、実際に利用されているシステムの開発に携わって勉強でき、バイト代わりにもなるインターンを始めることに。
    </ps-paragraph>
    <ps-image
      class="ps-about-history__picture"
      src="/images/IMG_0109.jpeg"
      alt="インターン中の風景"
    />
    <ps-paragraph>
      写真は福岡市内のITベンチャーでインターンしていた頃の仕事風景。Web開発だけでなくハードウェアや機械学習も並行していた。
    </ps-paragraph>
  </ps-section>
</template>

<script lang="ts">
import Vue from 'vue'
import PsFirstHeading from '~/components/common-components/ps-first-heading.vue'
import PsImage from '~/components/common-components/ps-image.vue'
import PsParagraph from '~/components/common-components/ps-paragraph.vue'
import PsSecondHeading from '~/components/common-components/ps-second-heading.vue'
import PsSection from '~/components/common-components/ps-section.vue'
export default Vue.extend({
  components: {
    PsSection,
    PsFirstHeading,
    PsSecondHeading,
    PsImage,
    PsParagraph,
  },
})
</script>

<style lang="scss" scoped>
$block: '.ps-about-history';
#{$block} {
  &__year {
    margin: 36px 0 14px 0;
  }
  &__picture {
    margin: 16px 0;
  }
}
</style>
