export type metaName =
  | 'viewport'
  | 'description'
  | 'og:title'
  | 'og:type'
  | 'og:url'
  | 'og:image'
  | 'og:image:width'
  | 'og:image:height'
  | 'og:site_name'
  | 'og:description'
  | 'twitter:card'
  | 'twitter:creator'
  | 'twitter:title'
  | 'twitter:url'
  | 'twitter:description'
  | 'twitter:image'

export type meta = {
  name: metaName
  content: string
}

export type metaWithHid = {
  hid: metaName
  name: metaName
  content: string
}

export type metaCharset = {
  charset: string
}

export type convertedMeta = meta | metaWithHid | metaCharset

type metaData = {
  title: string
  titleTemplate: string
  meta: convertedMeta[]
}

export default metaData
