import { Placeholder } from './Placeholder'

export default function Dashboard() {
  return (
    <Placeholder
      icon="dashboard"
      kicker="Route reserved"
      title="ThreatLens Dashboard"
      body="The dashboard route is wired up and ready for the application shell. Connect it to the backend API to replace this placeholder with live data."
      points={[
        'Findings list with severity, asset and supporting evidence',
        'Risk levels across monitored assets',
        'Scan and scheduled-job status',
        'Alerts queue and investigation view',
        'Attack-path relationships between assets and findings',
      ]}
    />
  )
}
