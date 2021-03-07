const imageFitting = {
  cover: 'COVER',
  contain: 'CONTAIN',
}

export type imageFittingType =
  | typeof imageFitting.contain
  | typeof imageFitting.cover

export default imageFitting
