export type WorkflowIcon =
  | 'collect'
  | 'normalize'
  | 'analyze'
  | 'risk'
  | 'alert'
  | 'investigate'

/** Compact six-step loop shown in the About section. */
export type WorkflowStep = {
  id: string
  label: string
  description: string
  icon: WorkflowIcon
}

export const workflowSteps: WorkflowStep[] = [
  {
    id: 'collect',
    label: 'Collect',
    description:
      'Gather security information from authorized systems through agents and integrations.',
    icon: 'collect',
  },
  {
    id: 'normalize',
    label: 'Normalize',
    description:
      'Convert source-specific records into a single common event format.',
    icon: 'normalize',
  },
  {
    id: 'analyze',
    label: 'Analyze',
    description:
      'Apply security rules and anomaly analysis to the normalized evidence.',
    icon: 'analyze',
  },
  {
    id: 'assess-risk',
    label: 'Assess Risk',
    description:
      'Derive a risk level from the finding, the affected asset and its context.',
    icon: 'risk',
  },
  {
    id: 'alert',
    label: 'Alert',
    description:
      'Raise alerts for the findings that meet the configured thresholds.',
    icon: 'alert',
  },
  {
    id: 'investigate',
    label: 'Investigate',
    description:
      'Review a finding alongside the events and assets it was derived from.',
    icon: 'investigate',
  },
]

/** Expanded end-to-end pipeline rendered in the How It Works section. */
export type PipelineStage = {
  id: string
  label: string
  detail: string
  /** monospace side note, e.g. a component or format name */
  note: string
  kind: 'source' | 'process' | 'output'
}

export const pipelineStages: PipelineStage[] = [
  {
    id: 'target',
    label: 'Authorized Target',
    detail: 'A system you are permitted to monitor is registered as an asset.',
    note: 'scope · consent',
    kind: 'source',
  },
  {
    id: 'collection',
    label: 'Security Collection / Scan',
    detail: 'An agent or scheduled scan gathers supported security information.',
    note: 'agent · scan job',
    kind: 'process',
  },
  {
    id: 'normalization',
    label: 'Normalization',
    detail: 'Records are mapped onto a common event and finding schema.',
    note: 'common schema',
    kind: 'process',
  },
  {
    id: 'analysis',
    label: 'Security Analysis',
    detail: 'Rules and anomaly analysis evaluate the normalized evidence.',
    note: 'rules + anomaly',
    kind: 'process',
  },
  {
    id: 'risk',
    label: 'Risk Assessment',
    detail: 'Each finding is scored using severity, asset and context signals.',
    note: 'risk score',
    kind: 'process',
  },
  {
    id: 'findings',
    label: 'Findings / Alerts',
    detail: 'Findings are stored and alerts raised when thresholds are met.',
    note: 'finding · alert',
    kind: 'output',
  },
  {
    id: 'dashboard',
    label: 'ThreatLens Dashboard',
    detail: 'Results are presented for review, triage and investigation.',
    note: 'central interface',
    kind: 'output',
  },
]
