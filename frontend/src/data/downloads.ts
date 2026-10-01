export type DownloadStatus = 'available' | 'coming-soon'

export type DownloadTarget = {
  /** stable key for React lists and query params */
  id: string
  platform: string
  /** short descriptor shown under the platform name */
  detail: string
  status: DownloadStatus
  /** Human-readable status label, e.g. 'Development Build' */
  statusLabel: string
  /**
   * Release artifact URL. Intentionally empty: no placeholder binaries are
   * published yet. Fill this in to activate the download button.
   */
  url: string
  /** Optional build/version string once a release exists */
  version?: string
  icon: 'windows' | 'linux' | 'android'
}

export const downloads: DownloadTarget[] = [
  {
    id: 'windows-agent',
    platform: 'Windows Agent',
    detail: 'Endpoint event collector for authorized Windows hosts',
    status: 'available',
    statusLabel: 'Development Build',
    url: '',
    version: '0.1.0-dev',
    icon: 'windows',
  },
  {
    id: 'linux-agent',
    platform: 'Linux Agent',
    detail: 'Planned — auditd / syslog collection',
    status: 'coming-soon',
    statusLabel: 'Coming Soon',
    url: '',
    icon: 'linux',
  },
  {
    id: 'android-agent',
    platform: 'Android Agent',
    detail: 'Planned — mobile endpoint telemetry',
    status: 'coming-soon',
    statusLabel: 'Coming Soon',
    url: '',
    icon: 'android',
  },
]

export const availableDownloads = downloads.filter(
  (item) => item.status === 'available',
)
