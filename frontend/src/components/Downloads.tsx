import { useCallback, useId, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { Icon } from './Icon'
import { SectionHeading } from './SectionHeading'
import { useDismiss } from '../hooks/useDismiss'
import { useReveal } from '../hooks/useReveal'
import { downloads } from '../data/downloads'
import { ROUTES } from '../data/site'
import './Downloads.css'

export function Downloads() {
  const [open, setOpen] = useState(false)
  const wrapRef = useRef<HTMLDivElement | null>(null)
  const triggerRef = useRef<HTMLButtonElement | null>(null)
  const menuId = useId()

  const close = useCallback(() => {
    setOpen(false)
    triggerRef.current?.focus()
  }, [])

  useDismiss(open, wrapRef, close)

  const { ref, visible } = useReveal<HTMLDivElement>()

  return (
    <section
      className="tl-section tl-downloads"
      id="downloads"
      aria-labelledby="tl-downloads-title"
    >
      <div className="tl-shell">
        <div className={`tl-downloads__panel tl-panel tl-reveal${visible ? ' is-visible' : ''}`} ref={ref}>
          <div className="tl-downloads__copy">
            <SectionHeading
              kicker="Connect a system"
              title="Connect Your Systems to ThreatLens"
              id="tl-downloads-title"
              lead="Install an authorized ThreatLens agent or integration to begin collecting supported security information."
            />

            <div className="tl-downloads__actions" ref={wrapRef}>
              <div className="tl-downloads__dropdown">
                <button
                  ref={triggerRef}
                  type="button"
                  className="tl-btn tl-btn--lg tl-btn--primary"
                  aria-expanded={open}
                  aria-controls={menuId}
                  aria-haspopup="true"
                  onClick={() => setOpen((value) => !value)}
                >
                  <Icon name="download" size={18} />
                  Download
                  <Icon
                    name="chevron"
                    size={16}
                    className={`tl-downloads__caret${open ? ' is-open' : ''}`}
                  />
                </button>

                <div
                  id={menuId}
                  className="tl-downloads__menu"
                  data-open={open}
                >
                  <p className="tl-downloads__menu-head">Available builds</p>
                  <ul className="tl-downloads__menu-list">
                    {downloads.map((target) => (
                      <li key={target.id}>
                        <Link
                          to={`${ROUTES.downloads}#${target.id}`}
                          className="tl-downloads__menu-item"
                          aria-disabled={target.status === 'coming-soon'}
                        >
                          <Icon name={target.icon} size={17} aria-hidden="true" />
                          <span className="tl-downloads__menu-name">
                            {target.platform}
                          </span>
                          <span
                            className={`tl-pill ${
                              target.status === 'available'
                                ? 'tl-pill--ok'
                                : 'tl-pill--muted'
                            }`}
                          >
                            {target.status === 'available'
                              ? target.statusLabel
                              : 'Coming Soon'}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <Link to={ROUTES.downloads} className="tl-downloads__menu-all">
                    Open downloads page
                    <Icon name="arrow-right" size={14} aria-hidden="true" />
                  </Link>
                </div>
              </div>

              <Link to={ROUTES.downloads} className="tl-btn tl-btn--lg tl-btn--secondary">
                View all downloads
              </Link>
            </div>

            <p className="tl-downloads__fineprint">
              <Icon name="lock" size={15} aria-hidden="true" />
              Install agents only on systems you are authorized to monitor. Release
              artifacts are not published yet — download links are configured per build.
            </p>
          </div>

          {/* ---------- Target list ---------- */}
          <ul className="tl-downloads__targets">
            {downloads.map((target) => (
              <li
                key={target.id}
                id={target.id}
                className={`tl-downloads__target is-${target.status}`}
              >
                <span className="tl-downloads__target-icon" aria-hidden="true">
                  <Icon name={target.icon} size={20} />
                </span>

                <div className="tl-downloads__target-copy">
                  <div className="tl-downloads__target-head">
                    <h3 className="tl-downloads__target-name">{target.platform}</h3>
                    <span
                      className={`tl-pill ${
                        target.status === 'available' ? 'tl-pill--ok' : 'tl-pill--muted'
                      }`}
                    >
                      {target.statusLabel}
                    </span>
                  </div>
                  <p className="tl-downloads__target-detail">{target.detail}</p>
                  {target.version ? (
                    <span className="tl-downloads__target-version">
                      build {target.version}
                    </span>
                  ) : null}
                </div>

                {target.status === 'available' && target.url ? (
                  <a
                    href={target.url}
                    className="tl-btn tl-btn--sm tl-btn--secondary"
                    download
                  >
                    Download
                  </a>
                ) : (
                  <span className="tl-downloads__target-state">
                    {target.status === 'available' ? 'Link pending' : 'Planned'}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
