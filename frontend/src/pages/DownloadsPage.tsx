import { Link } from 'react-router-dom'
import { Icon } from '../components/Icon'
import { downloads } from '../data/downloads'
import { ROUTES } from '../data/site'
import './DownloadsPage.css'

export default function DownloadsPage() {
  return (
    <main className="tl-dlp" id="main-content">
      <div className="tl-shell">
        <header className="tl-dlp__head">
          <span className="tl-kicker">
            <span className="tl-kicker__dot" aria-hidden="true" />
            Downloads
          </span>
          <h1 className="tl-dlp__title">ThreatLens agents &amp; integrations</h1>
          <p className="tl-dlp__lead">
            Install an authorized ThreatLens agent on a system you are permitted to
            monitor. Release artifacts are configured per build — a target without a
            configured URL cannot be downloaded yet.
          </p>
        </header>

        <ul className="tl-dlp__list">
          {downloads.map((target) => (
            <li
              key={target.id}
              id={target.id}
              className={`tl-dlp__item is-${target.status}`}
            >
              <span className="tl-dlp__item-icon" aria-hidden="true">
                <Icon name={target.icon} size={22} />
              </span>

              <div className="tl-dlp__item-copy">
                <div className="tl-dlp__item-head">
                  <h2 className="tl-dlp__item-name">{target.platform}</h2>
                  <span
                    className={`tl-pill ${
                      target.status === 'available' ? 'tl-pill--ok' : 'tl-pill--muted'
                    }`}
                  >
                    {target.statusLabel}
                  </span>
                </div>
                <p className="tl-dlp__item-detail">{target.detail}</p>
                {target.version ? (
                  <span className="tl-dlp__item-version">build {target.version}</span>
                ) : null}
              </div>

              {target.status === 'available' && target.url ? (
                <a href={target.url} className="tl-btn tl-btn--primary" download>
                  <Icon name="download" size={17} />
                  Download
                </a>
              ) : (
                <button type="button" className="tl-btn tl-btn--secondary" disabled>
                  {target.status === 'available' ? 'Link pending' : 'Coming soon'}
                </button>
              )}
            </li>
          ))}
        </ul>

        <aside className="tl-dlp__notice">
          <Icon name="lock" size={17} aria-hidden="true" />
          <p>
            Only deploy a ThreatLens agent on systems you own or have written
            authorization to monitor. The agent collects security-relevant event data from
            the host it runs on.
          </p>
        </aside>

        <div className="tl-dlp__actions">
          <Link to={ROUTES.home} className="tl-btn tl-btn--secondary">
            Back to homepage
          </Link>
          <Link to={ROUTES.dashboard} className="tl-btn tl-btn--secondary">
            <Icon name="dashboard" size={17} />
            Open Dashboard
          </Link>
        </div>
      </div>
    </main>
  )
}
