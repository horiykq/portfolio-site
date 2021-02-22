export const pages = {
  HOME: { path: '/', name: 'home', visible: false },
  ABOUT_ME: { path: '/about', name: 'about me', visible: true },
  CAREER: { path: '/career', name: 'career', visible: true },
  DEVELOPMENT: { path: '/development', name: 'development', visible: true },
  TECHNOLOGY: { path: '/technology', name: 'technology', visible: true },
  NOT_FOUND: { path: '/404', name: 'not found', visible: false },
} as const

export const pagesList = Object.keys(pages)
