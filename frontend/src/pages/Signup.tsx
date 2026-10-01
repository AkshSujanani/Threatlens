import { Placeholder } from './Placeholder'

export default function Signup() {
  return (
    <Placeholder
      icon="shield"
      kicker="Route reserved"
      title="Create a ThreatLens account"
      body="The signup route is wired up, but no authentication backend is connected yet. Mount the account-creation flow here once the auth service is available."
      points={[
        'No credentials are collected on this page',
        'Account creation is not implemented in this prototype',
      ]}
    />
  )
}
