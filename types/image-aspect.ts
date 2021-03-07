const imageAspect = { wide: 'WIDE', standard: 'STANDARD' }

export type imageAspectType =
  | typeof imageAspect.standard
  | typeof imageAspect.wide

export default imageAspect
