/**
 * Central site configuration.
 *
 * Every outbound URL lives here so real destinations can be filled in later
 * without touching components. An empty string means "not published yet" —
 * components render those as disabled/placeholder rather than as dead links.
 */

export const ROUTES = {
  home: '/',
  about: '/#about',
  features: '/#features',
  workflow: '/#how-it-works',
  downloadsSection: '/#downloads',
  dashboardPreview: '/#dashboard',
  dashboard: '/dashboard',
  downloads: '/downloads',
  login: '/login',
  signup: '/signup',
} as const

/**
 * External/project links. Left blank intentionally — fill in when the
 * repository, docs site and contact address are public.
 */
export const PROJECT_LINKS = {
  /** e.g. 'https://github.com/<org>/threatlens' */
  github: '',
  /** Documentation site or /docs route */
  documentation: '',
  /** Security policy / responsible disclosure page */
  security: '',
  /** mailto: or contact page */
  contact: '',
} as const

export const SITE = {
  name: 'ThreatLens',
  tagline: 'Cybersecurity Monitoring & Risk Intelligence',
  version: 'v0.1 · prototype',
} as const
