export type metaName =
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

type metaData = {
  title: string
}

export default metaData
