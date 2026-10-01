import { Placeholder } from './Placeholder'

export default function NotFound() {
  return (
    <Placeholder
      icon="target"
      kicker="404"
      title="Page not found"
      body="That route does not exist. Use the navigation above to reach the homepage, dashboard or downloads."
    />
  )
}
