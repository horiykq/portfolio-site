import notFoundMetaData from '../meta-data/not-found-page'
import page from '~/types/page'

const notFoundPage: page = {
  path: '/404',
  name: '404 Not found.',
  visible: false,
  meta: notFoundMetaData,
}

export default notFoundPage
