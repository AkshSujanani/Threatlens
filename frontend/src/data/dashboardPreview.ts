/**
 * Sample data for the marketing dashboard preview.
 *
 * Clearly labelled demo content — it is not fetched from the backend and does
 * not represent real monitored systems. Replace with live API data only inside
 * the real /dashboard route, never here.
 */

export type Severity = 'critical' | 'high' | 'medium' | 'low'

export const sampleFindings: {
  id: string
  title: string
  asset: string
  severity: Severity
  age: string
}[] = [
  {
    id: 'TL-1042',
    title: 'Unsigned binary launched from temp directory',
    asset: 'WIN-APP-04',
    severity: 'high',
    age: '4m',
  },
  {
    id: 'TL-1041',
    title: 'Repeated failed logons from one source',
    asset: 'WIN-DC-01',
    severity: 'critical',
    age: '22m',
  },
  {
    id: 'TL-1038',
    title: 'Scheduled task created outside change window',
    asset: 'WIN-APP-04',
    severity: 'medium',
    age: '1h',
  },
  {
    id: 'TL-1035',
    title: 'Firewall rule modified on monitored host',
    asset: 'WIN-FS-02',
    severity: 'low',
    age: '3h',
  },
]

export const sampleRiskLevels: { label: string; severity: Severity; share: number }[] = [
  { label: 'Critical', severity: 'critical', share: 8 },
  { label: 'High', severity: 'high', share: 19 },
  { label: 'Medium', severity: 'medium', share: 34 },
  { label: 'Low', severity: 'low', share: 39 },
]

export const sampleAssets: {
  name: string
  kind: string
  state: 'online' | 'degraded' | 'offline'
  risk: Severity
}[] = [
  { name: 'WIN-DC-01', kind: 'Domain controller', state: 'online', risk: 'critical' },
  { name: 'WIN-APP-04', kind: 'Application host', state: 'online', risk: 'high' },
  { name: 'WIN-FS-02', kind: 'File server', state: 'degraded', risk: 'low' },
]

export const sampleScans: {
  name: string
  target: string
  state: 'running' | 'queued' | 'completed'
  progress: number
}[] = [
  { name: 'Endpoint sweep', target: '3 assets', state: 'running', progress: 62 },
  { name: 'Config baseline', target: 'WIN-DC-01', state: 'queued', progress: 0 },
  { name: 'Nightly collection', target: 'all agents', state: 'completed', progress: 100 },
]

export const sampleActivity: { time: string; text: string }[] = [
  { time: '09:42', text: 'Agent on WIN-APP-04 reported 128 normalized events' },
  { time: '09:38', text: 'Risk recalculated for finding TL-1041' },
  { time: '09:31', text: 'Alert TL-A-207 assigned for review' },
  { time: '09:12', text: 'Scheduled job "Nightly collection" completed' },
]

export const sampleAlerts: { id: string; title: string; severity: Severity; state: string }[] = [
  { id: 'TL-A-207', title: 'Credential access pattern', severity: 'critical', state: 'Open' },
  { id: 'TL-A-205', title: 'Persistence attempt', severity: 'high', state: 'Triage' },
]

export const sampleAttackPath: { label: string; detail: string }[] = [
  { label: 'WIN-APP-04', detail: 'unsigned binary executed' },
  { label: 'Local account', detail: 'privilege change observed' },
  { label: 'WIN-DC-01', detail: 'repeated logon failures' },
]
