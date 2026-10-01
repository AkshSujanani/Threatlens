import { Link } from 'react-router-dom'
import { HeroVisual } from './HeroVisual'
import { Icon } from './Icon'
import { ROUTES } from '../data/site'
import './Hero.css'

export function Hero() {
  return (
    <section className="tl-hero" id="top" aria-labelledby="tl-hero-title">
      <div className="tl-hero__grid-overlay" aria-hidden="true" />

      <div className="tl-hero__inner tl-shell">
        <div className="tl-hero__copy">
          <span className="tl-kicker">
            <span className="tl-kicker__dot" aria-hidden="true" />
            Unified Cybersecurity Monitoring
          </span>

          <h1 className="tl-hero__title" id="tl-hero-title">
            See the Threats.
            <br />
            <span className="tl-hero__title-accent">Understand the Risk.</span>
          </h1>

          <p className="tl-hero__subtitle">
            Unified Cybersecurity Monitoring and Risk Intelligence
          </p>

          <p className="tl-hero__lead">
            ThreatLens brings security findings, system activity, risk analysis, and
            security intelligence together in one place—helping teams understand what
            deserves attention.
          </p>

          <div className="tl-hero__actions">
            <Link to={ROUTES.signup} className="tl-btn tl-btn--lg tl-btn--primary">
              Get Started
              <Icon name="arrow-right" size={17} />
            </Link>
            <Link to={ROUTES.dashboard} className="tl-btn tl-btn--lg tl-btn--secondary">
              <Icon name="dashboard" size={17} />
              Open Dashboard
            </Link>
          </div>

          <ul className="tl-hero__notes">
            <li>
              <Icon name="check" size={15} aria-hidden="true" />
              Authorized systems only
            </li>
            <li>
              <Icon name="check" size={15} aria-hidden="true" />
              Evidence-backed findings
            </li>
            <li>
              <Icon name="check" size={15} aria-hidden="true" />
              Windows agent in development
            </li>
          </ul>
        </div>

        <HeroVisual />
      </div>

      <a className="tl-hero__scroll" href="#about">
        <span>What is ThreatLens?</span>
        <Icon name="arrow-down" size={16} aria-hidden="true" />
      </a>
    </section>
  )
}
