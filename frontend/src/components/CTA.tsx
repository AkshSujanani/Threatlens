import { Link } from 'react-router-dom'
import { Icon } from './Icon'
import { useReveal } from '../hooks/useReveal'
import { ROUTES } from '../data/site'
import './CTA.css'

export function CTA() {
  const { ref, visible } = useReveal<HTMLDivElement>()

  return (
    <section className="tl-section tl-section--tight tl-cta" aria-labelledby="tl-cta-title">
      <div className="tl-shell">
        <div className={`tl-cta__panel tl-reveal${visible ? ' is-visible' : ''}`} ref={ref}>
          <div className="tl-cta__glow" aria-hidden="true" />

          <span className="tl-kicker">
            <span className="tl-kicker__dot" aria-hidden="true" />
            Get access
          </span>

          <h2 className="tl-cta__title" id="tl-cta-title">
            Start Monitoring with ThreatLens
          </h2>

          <p className="tl-cta__lead">
            Create an account to set up monitored assets and review findings, or sign in to
            an existing workspace.
          </p>

          <div className="tl-cta__actions">
            <Link to={ROUTES.signup} className="tl-btn tl-btn--lg tl-btn--primary">
              Create Account
              <Icon name="arrow-right" size={17} />
            </Link>
            <Link to={ROUTES.login} className="tl-btn tl-btn--lg tl-btn--secondary">
              Log In
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
