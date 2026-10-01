import { Link } from 'react-router-dom'
import { Icon } from '../components/Icon'
import type { IconName } from '../components/Icon'
import { ROUTES } from '../data/site'
import './Placeholder.css'

type PlaceholderProps = {
  icon: IconName
  kicker: string
  title: string
  body: string
  /** short list of what this route will contain once implemented */
  points?: string[]
}

/**
 * Shared shell for routes that exist in navigation but are not implemented
 * yet. It keeps every link in the homepage resolvable without pretending
 * the underlying feature (auth, dashboard data, release artifacts) is built.
 */
export function Placeholder({ icon, kicker, title, body, points }: PlaceholderProps) {
  return (
    <main className="tl-ph" id="main-content">
      <div className="tl-shell tl-ph__inner">
        <span className="tl-ph__icon" aria-hidden="true">
          <Icon name={icon} size={26} />
        </span>

        <span className="tl-kicker">
          <span className="tl-kicker__dot" aria-hidden="true" />
          {kicker}
        </span>

        <h1 className="tl-ph__title">{title}</h1>
        <p className="tl-ph__body">{body}</p>

        {points?.length ? (
          <ul className="tl-ph__points">
            {points.map((point) => (
              <li key={point}>
                <Icon name="check" size={15} aria-hidden="true" />
                {point}
              </li>
            ))}
          </ul>
        ) : null}

        <div className="tl-ph__actions">
          <Link to={ROUTES.home} className="tl-btn tl-btn--secondary">
            <Icon name="arrow-right" size={16} style={{ transform: 'rotate(180deg)' }} />
            Back to homepage
          </Link>
        </div>
      </div>
    </main>
  )
}
