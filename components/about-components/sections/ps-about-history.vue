<template>
  <ps-section class="ps-about-history">
    <ps-first-heading jp-heading="来歴">History</ps-first-heading>

    <ps-second-heading class="ps-about-history__year" :use-en-font="true">
      2000 - 2005
    </ps-second-heading>
    <ps-paragraph>
      2000年1月25日、香川県高松市にて生まれる。
      <br />
      幼稚園の頃から車やCDラジカセといった機械類に興味が強かった。
    </ps-paragraph>

    <ps-second-heading class="ps-about-history__year" :use-en-font="true">
      2006 - 2011
    </ps-second-heading>
    <ps-paragraph>
      小学生低学年の頃、父親からノートパソコンをクリスマスプレゼントとしてもらったことを機に、コンピューターの世界にのめり込んでいく。
      <br />
      最初はインターネットを使ってみたり、Windows
      ムービーメーカー(懐かしい)を触ってみたりという程度だったが、徐々にOSの入れ替えやハードウェアの換装など、低レイヤーな領域に興味を持つようになった。
    </ps-paragraph>
    <ps-album
      :images="primaryAlbumImages"
      :aspect="imageAspect.standard"
      :fitting="imageFitting.contain"
    />

    <ps-second-heading class="ps-about-history__year" :use-en-font="true">
      2012 - 2014
    </ps-second-heading>
    <ps-paragraph>
      中学生になったころ、普通のWindows PCにMac OS
      Xをインストールする”Hackintosh”というものに手を出していた。（技術的な好奇心というよりは、単純にお金がなくMacintoshが買えなかったためである。）
      <br />
      P2Pファイル共有やMac OSのドライバ"Kext"など、初めて触れたものも多かった。
    </ps-paragraph>
    <ps-image
      class="ps-about-history__picture"
      src="/images/IMG_2752.jpeg"
      alt="Mac OS XをインストールしたWindows PC"
    />

    <ps-second-heading class="ps-about-history__year" :use-en-font="true">
      2015 - 2017
    </ps-second-heading>
    <ps-paragraph>
      高校生になって、興味がモバイル端末のOSやハードウェアにシフトしていた。さすがにスマホのハードウェア換装はできないが、OS(ROM)の入れ替えは可能だったため、root化→ブートローダーアンロック→ROM焼きという手順を踏んでAndroid端末のカスタムを行っていた。
      <br />
      この頃、今でいうSIMフリー端末は皆無で、キャリアから販売されたスマホを白ロムとして購入するしかなく、余計なアプリが大量にプリインストールされていた。さらに、端末のスペックがまだまだ低かったので、通常は不可能なカスタマイズを施したりプリインアプリを消したりするのにROM焼きは非常に有効な方法だった。
    </ps-paragraph>
    <ps-album
      :images="highAlbumImages"
      :aspect="imageAspect.standard"
      :fitting="imageFitting.contain"
    />

    <ps-second-heading class="ps-about-history__year" :use-en-font="true">
      2018
    </ps-second-heading>
    <ps-paragraph>
      浪人していたため、人生で唯一あまりパソコンに触っていない1年間であったが、ちょくちょくパソコンの分解やOSの入れ替えなどをしていた。
    </ps-paragraph>
    <ps-album
      :images="roninAlbumImages"
      :aspect="imageAspect.standard"
      :fitting="imageFitting.contain"
    />

    <ps-second-heading class="ps-about-history__year" :use-en-font="true">
      2019 -
    </ps-second-heading>
    <ps-paragraph>
      無事、大学生になる。1年前期で履修した「プログラミング演習」という授業でPythonをやったことで、プログラミングの面白さに気づく。
      <br />
      もともと趣味のパソコン関係を仕事にできればいいなと思っていたため、実際に利用されているシステムの開発に携わったり、現役エンジニアから教えてもらったりできるインターンを始めることに。
    </ps-paragraph>
    <ps-image
      class="ps-about-history__picture"
      src="/images/IMG_0856.jpg"
      alt="インターン中の風景"
    />
    <ps-paragraph>
      写真は福岡市内のITベンチャーでインターンしていた頃の仕事風景。Web開発だけでなくハードウェアや機械学習も並行していた。
    </ps-paragraph>
  </ps-section>
</template>

<script lang="ts">
import Vue from 'vue'
import PsAlbum from '~/components/common-components/ps-album.vue'
import PsFirstHeading from '~/components/common-components/ps-first-heading.vue'
import PsImage from '~/components/common-components/ps-image.vue'
import PsParagraph from '~/components/common-components/ps-paragraph.vue'
import PsSecondHeading from '~/components/common-components/ps-second-heading.vue'
import PsSection from '~/components/common-components/ps-section.vue'
import highAlbumImages from '~/constants/album-images/about-albums/childhood/high-album-images'
import primaryAlbumImages from '~/constants/album-images/about-albums/childhood/primary-album-images'
import roninAlbumImages from '~/constants/album-images/about-albums/ronin-album-images'
import imageAspect from '~/types/image-aspect'
import imageFitting from '~/types/image-fitting'
export default Vue.extend({
  components: {
    PsSection,
    PsFirstHeading,
    PsSecondHeading,
    PsImage,
    PsParagraph,
    PsAlbum,
  },

  data() {
    return {
      imageAspect,
      imageFitting,
      primaryAlbumImages,
      highAlbumImages,
      roninAlbumImages,
    }
  },
})
</script>

<style lang="scss" scoped>
$block: '.ps-about-history';
#{$block} {
  &__year {
    margin: 36px 0 14px 0;
    @include font-size(2.4);
  }
  &__picture {
    margin: 16px 0;
  }
}
</style>
