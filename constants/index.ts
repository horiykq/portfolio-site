export const pages = {
  HOME: { path: '/', name: 'HOME', visible: true },
  ABOUT_ME: { path: '/about', name: 'ABOUT ME', visible: true },
  NOT_FOUND: { path: '/404', name: null, visible: false },
} as const

export const pagesList = Object.keys(pages)
