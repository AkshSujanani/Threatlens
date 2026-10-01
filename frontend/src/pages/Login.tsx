import { Placeholder } from './Placeholder'

export default function Login() {
  return (
    <Placeholder
      icon="lock"
      kicker="Route reserved"
      title="Log in to ThreatLens"
      body="The login route is wired up, but no authentication backend is connected yet. Mount the sign-in form here once the auth service is available."
      points={[
        'No credentials are collected on this page',
        'Authentication is not implemented in this prototype',
      ]}
    />
  )
}
