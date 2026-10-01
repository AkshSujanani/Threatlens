import type { ReactNode, SVGProps } from 'react'

export type IconName =
  | 'logo'
  | 'chevron'
  | 'arrow-right'
  | 'arrow-down'
  | 'menu'
  | 'close'
  | 'dashboard'
  | 'download'
  | 'monitor'
  | 'layers'
  | 'gauge'
  | 'bell'
  | 'graph'
  | 'clock'
  | 'grid'
  | 'collect'
  | 'normalize'
  | 'analyze'
  | 'risk'
  | 'alert'
  | 'investigate'
  | 'windows'
  | 'linux'
  | 'android'
  | 'shield'
  | 'target'
  | 'book'
  | 'mail'
  | 'code'
  | 'lock'
  | 'check'

/**
 * Single-source icon set. Every glyph is a 24x24 stroked path so icons stay
 * visually consistent and inherit `currentColor`.
 */
const PATHS: Record<IconName, ReactNode> = {
  logo: (
    <>
      <path d="M12 2.6 20 5.6v5.9c0 4.6-3.2 8.3-8 9.9-4.8-1.6-8-5.3-8-9.9V5.6l8-3Z" />
      <circle cx="12" cy="11" r="3.1" />
      <path d="M14.3 13.3 17 16" />
    </>
  ),
  chevron: <path d="m6 9.5 6 6 6-6" />,
  'arrow-right': <path d="M4.5 12h14m-5.5-5.5L18.5 12 13 17.5" />,
  'arrow-down': <path d="M12 4.5v14m-5.5-5.5L12 18.5 17.5 13" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="M6 6l12 12M18 6 6 18" />,
  dashboard: (
    <>
      <rect x="3" y="3.5" width="7.5" height="7" rx="1.6" />
      <rect x="13.5" y="3.5" width="7.5" height="11" rx="1.6" />
      <rect x="3" y="13.5" width="7.5" height="7" rx="1.6" />
      <rect x="13.5" y="17.5" width="7.5" height="3" rx="1.5" />
    </>
  ),
  download: (
    <>
      <path d="M12 3.5v11m-4.2-4.2L12 14.5l4.2-4.2" />
      <path d="M4.5 16.5v2a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2v-2" />
    </>
  ),
  monitor: (
    <>
      <rect x="2.5" y="4" width="19" height="13" rx="2" />
      <path d="M6 13l3-3.5 2.6 2.4L15 7.5l3 5.5M9 21h6M12 17v4" />
    </>
  ),
  layers: (
    <>
      <path d="m12 3 8.5 4.4L12 11.8 3.5 7.4 12 3Z" />
      <path d="m3.5 12.2 8.5 4.4 8.5-4.4" />
      <path d="m3.5 16.8 8.5 4.4 8.5-4.4" />
    </>
  ),
  gauge: (
    <>
      <path d="M3.5 18a9 9 0 1 1 17 0" />
      <path d="M12 18 16 10" />
      <circle cx="12" cy="18" r="1.4" />
    </>
  ),
  bell: (
    <>
      <path d="M18 9a6 6 0 1 0-12 0c0 5-2 6.5-2 6.5h16S18 14 18 9Z" />
      <path d="M10.3 19a2 2 0 0 0 3.4 0" />
    </>
  ),
  graph: (
    <>
      <circle cx="5.5" cy="6" r="2.5" />
      <circle cx="18.5" cy="6" r="2.5" />
      <circle cx="12" cy="18" r="2.5" />
      <path d="M8 6h8M6.8 8.2 10.5 15.8M17.2 8.2 13.5 15.8" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3.3 2" />
    </>
  ),
  grid: (
    <>
      <rect x="3.5" y="3.5" width="7" height="7" rx="1.6" />
      <rect x="13.5" y="3.5" width="7" height="7" rx="1.6" />
      <rect x="3.5" y="13.5" width="7" height="7" rx="1.6" />
      <rect x="13.5" y="13.5" width="7" height="7" rx="1.6" />
    </>
  ),
  collect: (
    <>
      <path d="M4 7.5V5.8A1.8 1.8 0 0 1 5.8 4h12.4A1.8 1.8 0 0 1 20 5.8v1.7" />
      <rect x="2.5" y="7.5" width="19" height="5" rx="1.8" />
      <path d="M4.5 12.5v5.7A1.8 1.8 0 0 0 6.3 20h11.4a1.8 1.8 0 0 0 1.8-1.8v-5.7" />
      <path d="M10 16.2h4" />
    </>
  ),
  normalize: (
    <>
      <path d="M3.5 6.5h7M3.5 12h11M3.5 17.5h5" />
      <path d="M17 8.5 20.5 12 17 15.5" />
    </>
  ),
  analyze: (
    <>
      <circle cx="10.8" cy="10.8" r="6.3" />
      <path d="m15.5 15.5 4.5 4.5" />
      <path d="M8 11.2l1.9 2.1 3.7-4.6" />
    </>
  ),
  risk: (
    <>
      <path d="M12 3.3 21 20H3l9-16.7Z" />
      <path d="M12 9.5v4.2M12 16.8v.6" />
    </>
  ),
  alert: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.8v4.6M12 15.7v.6" />
    </>
  ),
  investigate: (
    <>
      <path d="M4.5 4.5h10.2l4.8 4.8V19.5a1.5 1.5 0 0 1-1.5 1.5H4.5A1.5 1.5 0 0 1 3 19.5V6a1.5 1.5 0 0 1 1.5-1.5Z" />
      <path d="M14.2 4.6v4.8h4.9" />
      <circle cx="10" cy="14" r="2.6" />
      <path d="m12 16 2 2" />
    </>
  ),
  windows: (
    <>
      <path d="M3.5 6.2 11 5.1v6.2H3.5V6.2Z" />
      <path d="M12.5 4.9 20.5 3.8v7.5h-8V4.9Z" />
      <path d="M3.5 12.7H11v6.2l-7.5-1.1v-5.1Z" />
      <path d="M12.5 12.7h8v7.5l-8-1.1v-6.4Z" />
    </>
  ),
  linux: (
    <>
      <path d="M12 3.2c2.3 0 3.4 1.9 3.4 4.2 0 1.6.6 2.4 1.6 3.9 1.1 1.6 2 3 2 4.6 0 2.6-2.8 4.4-7 4.4s-7-1.8-7-4.4c0-1.6.9-3 2-4.6 1-1.5 1.6-2.3 1.6-3.9 0-2.3 1.1-4.2 3.4-4.2Z" />
      <path d="M10.3 8h.1M13.6 8h.1" />
      <path d="M10.8 11.2 12 12.3l1.2-1.1" />
    </>
  ),
  android: (
    <>
      <path d="M5.5 10.5h13v6.3a1.7 1.7 0 0 1-1.7 1.7H7.2a1.7 1.7 0 0 1-1.7-1.7v-6.3Z" />
      <path d="M5.5 10.5a6.5 6.5 0 0 1 13 0" />
      <path d="M8.3 4.2 9.5 6.4M15.7 4.2 14.5 6.4" />
      <path d="M9.4 8.1h.1M14.6 8.1h.1" />
      <path d="M9 18.5v1.8M15 18.5v1.8M3 12.3v4M21 12.3v4" />
    </>
  ),
  shield: (
    <>
      <path d="M12 2.8 20 5.8v5.8c0 4.6-3.2 8.2-8 9.8-4.8-1.6-8-5.2-8-9.8V5.8l8-3Z" />
      <path d="m8.6 11.9 2.4 2.5 4.4-5" />
    </>
  ),
  target: (
    <>
      <circle cx="12" cy="12" r="8.4" />
      <circle cx="12" cy="12" r="4.4" />
      <circle cx="12" cy="12" r="1" />
    </>
  ),
  book: (
    <>
      <path d="M4 4.5h5.5A2.5 2.5 0 0 1 12 7v12a2 2 0 0 0-2-2H4v-12.5Z" />
      <path d="M20 4.5h-5.5A2.5 2.5 0 0 0 12 7v12a2 2 0 0 1 2-2h6v-12.5Z" />
    </>
  ),
  mail: (
    <>
      <rect x="2.8" y="5" width="18.4" height="14" rx="2" />
      <path d="m3.4 6.6 8.6 6 8.6-6" />
    </>
  ),
  code: <path d="m9 7.5-5 4.5 5 4.5m6-9 5 4.5-5 4.5" />,
  lock: (
    <>
      <rect x="4.5" y="10.5" width="15" height="10" rx="2" />
      <path d="M8 10.5V8a4 4 0 0 1 8 0v2.5" />
    </>
  ),
  check: <path d="m5 12.8 4.4 4.4L19 7.5" />,
}

type IconProps = Omit<SVGProps<SVGSVGElement>, 'name'> & {
  name: IconName
  size?: number | string
}

export function Icon({ name, size = 20, ...rest }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...rest}
    >
      {PATHS[name]}
    </svg>
  )
}
