import { ROUTES } from './site'

export type NavLink = {
  label: string
  href: string
  /** true when the target is a section on the homepage rather than a route */
  anchor?: boolean
}

export const PRIMARY_NAV: NavLink[] = [
  { label: 'Home', href: ROUTES.home },
  { label: 'About', href: ROUTES.about, anchor: true },
  { label: 'Features', href: ROUTES.features, anchor: true },
]

export type PlatformItem = {
  id: string
  label: string
  description: string
  href: string
  icon: 'dashboard' | 'download'
  /** renders a nested submenu of download targets */
  submenu?: boolean
}

export const PLATFORM_MENU: PlatformItem[] = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    description: 'Findings, assets, scans and system status',
    href: ROUTES.dashboard,
    icon: 'dashboard',
  },
  {
    id: 'downloads',
    label: 'Downloads',
    description: 'Agents and integrations',
    href: ROUTES.downloads,
    icon: 'download',
    submenu: true,
  },
]
