export type FeatureIcon =
  | 'monitor'
  | 'layers'
  | 'gauge'
  | 'bell'
  | 'graph'
  | 'clock'
  | 'grid'

export type Feature = {
  id: string
  title: string
  description: string
  icon: FeatureIcon
  /** short supporting labels — capability scope, not statistics */
  tags: string[]
}

export const features: Feature[] = [
  {
    id: 'security-monitoring',
    title: 'Security Monitoring',
    description:
      'Monitor security information collected from authorized systems, with visibility into what each connected source is reporting.',
    icon: 'monitor',
    tags: ['Endpoint events', 'Authorized sources'],
  },
  {
    id: 'unified-findings',
    title: 'Unified Findings',
    description:
      'Normalize information from different security sources into common structures so findings can be compared and reviewed together.',
    icon: 'layers',
    tags: ['Normalization', 'Common schema'],
  },
  {
    id: 'risk-assessment',
    title: 'Risk Assessment',
    description:
      'Help users understand the significance and context of security findings, rather than presenting an undifferentiated event stream.',
    icon: 'gauge',
    tags: ['Scoring', 'Context'],
  },
  {
    id: 'alerts-investigation',
    title: 'Alerts & Investigation',
    description:
      'Surface important security information and support investigation workflows with the supporting evidence attached.',
    icon: 'bell',
    tags: ['Alerting', 'Triage'],
  },
  {
    id: 'attack-path-analysis',
    title: 'Attack-Path Analysis',
    description:
      'Show evidence-backed relationships between assets and findings, and the possible security paths those relationships imply.',
    icon: 'graph',
    tags: ['Relationships', 'Evidence-backed'],
  },
  {
    id: 'automation',
    title: 'Automation',
    description:
      'Support scheduled security jobs and recurring monitoring so collection and analysis keep running without manual steps.',
    icon: 'clock',
    tags: ['Scheduled jobs', 'Recurring scans'],
  },
  {
    id: 'dashboard',
    title: 'Dashboard',
    description:
      'Present findings, assets, scans, security information and system status clearly in one central interface.',
    icon: 'grid',
    tags: ['Central view', 'System status'],
  },
]
