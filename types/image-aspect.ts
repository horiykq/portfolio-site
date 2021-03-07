const imageAspect = { wide: 'WIDE', standard: 'STANDARD', natural: 'NATURAL' }

export type imageAspectType =
  | typeof imageAspect.standard
  | typeof imageAspect.wide
  | typeof imageAspect.natural

export default imageAspect
