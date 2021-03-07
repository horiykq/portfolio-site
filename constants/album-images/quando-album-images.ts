import albumImage from '~/types/album-image'

const quandoAlbumImages: albumImage[] = [
  {
    src: '/images/IMG_0109.jpeg',
    alt: 'ハードウェア技術を活用したWebシステム開発',
    description:
      'Vue.js × DjangoのWebシステム開発の様子。RevPiやGigEカメラ、センサー信号などのハードウェア技術も活用していた。',
    link: null,
  },
  {
    src: '/images/qiita.png',
    alt: 'ReactでのQiita模写',
    description:
      'React.jsでのQiitaトップページ模写。Webフロントエンドの実装はこの時が初めてだった。Atomic Designやステートフックを取り入れた。',
    link: 'https://github.com/horri1520/qiita-toppage',
  },
  {
    src: '/images/IMG_2625.jpg',
    alt: 'エッジ検出CNNモデル',
    description:
      'TensorFlowとKerasで開発したエッジ検出CNNモデル。Webアプリに組み込むことで、鉄板加工工場のライン上でリアルタイム検出が可能となった。',
    link: null,
  },
  {
    src: '/images/synq-lp.png',
    alt: 'SynQ Remote LP',
    description:
      'インターン先の自社プロダクト「SynQ Remote」のLP（ランディングページ）。初めてReact.jsベースのSSG、「Gatsby.js」で開発した。',
    link: 'https://www.synq-platform.com/',
  },
  {
    src: '/images/quando-hp.png',
    alt: 'QUANDO HP',
    description:
      'インターン先のホームページ。これもGatsby.jsで開発した。Netlify CMSを用いてコンテンツ管理機能を取り入れたり、動的ルーティングを可能にしたりした。',
    link: 'https://www.quando.jp/',
  },
]

export default quandoAlbumImages
