export const pages = {
  HOME: { path: '/', name: 'HOME', visible: true },
  ABOUT_ME: { path: '/about', name: 'ABOUT ME', visible: true },
  CAREER: { path: '/career', name: 'CAREER', visible: true },
  DEVELOPMENT: { path: '/development', name: 'DEVELOPMENT', visible: true },
  SKILLSET: { path: 'skillset', name: 'SKILLSET', visible: true },
  NOT_FOUND: { path: '/404', name: null, visible: false },
} as const

export const pagesList = Object.keys(pages)
