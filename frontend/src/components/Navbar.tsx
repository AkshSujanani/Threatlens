import { useCallback, useEffect, useId, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Icon } from './Icon'
import { SmartLink } from './SmartLink'
import { useDismiss } from '../hooks/useDismiss'
import { useScrolled } from '../hooks/useScrolled'
import { PLATFORM_MENU, PRIMARY_NAV } from '../data/navigation'
import { downloads } from '../data/downloads'
import { ROUTES, SITE } from '../data/site'
import './Navbar.css'

export function Navbar() {
  const scrolled = useScrolled(14)
  const location = useLocation()

  const [menuOpen, setMenuOpen] = useState(false)
  const [platformOpen, setPlatformOpen] = useState(false)
  const [downloadsOpen, setDownloadsOpen] = useState(false)

  // Dismiss every open surface as soon as the location changes. Adjusting
  // during render (rather than in an effect) avoids a frame where the menu is
  // still open on the new page.
  const locationKey = `${location.pathname}${location.hash}`
  const [lastLocationKey, setLastLocationKey] = useState(locationKey)

  if (locationKey !== lastLocationKey) {
    setLastLocationKey(locationKey)
    setMenuOpen(false)
    setPlatformOpen(false)
    setDownloadsOpen(false)
  }

  const platformRef = useRef<HTMLLIElement | null>(null)
  const platformTriggerRef = useRef<HTMLButtonElement | null>(null)
  const navRef = useRef<HTMLElement | null>(null)

  const platformMenuId = useId()
  const downloadsMenuId = useId()
  const mobileMenuId = useId()

  const closePlatform = useCallback(() => {
    setPlatformOpen(false)
    setDownloadsOpen(false)
  }, [])

  const closeAll = useCallback(() => {
    setMenuOpen(false)
    closePlatform()
  }, [closePlatform])

  // Outside click / Escape for the desktop dropdown.
  useDismiss(platformOpen, platformRef, () => {
    closePlatform()
    platformTriggerRef.current?.focus()
  })

  // Outside click / Escape for the mobile sheet.
  useDismiss(menuOpen, navRef, closeAll)

  // Lock background scroll while the mobile sheet is open.
  useEffect(() => {
    if (!menuOpen) return
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previous
    }
  }, [menuOpen])

  return (
    <header
      ref={navRef}
      className={`tl-nav${scrolled ? ' is-scrolled' : ''}${menuOpen ? ' is-open' : ''}`}
    >
      <div className="tl-nav__inner tl-shell">
        <Link to={ROUTES.home} className="tl-brand" onClick={closeAll}>
          <span className="tl-brand__mark" aria-hidden="true">
            <Icon name="logo" size={21} />
          </span>
          <span className="tl-brand__text">
            <span className="tl-brand__name">{SITE.name}</span>
            <span className="tl-brand__sub">{SITE.version}</span>
          </span>
        </Link>

        <nav className="tl-nav__links" aria-label="Main navigation">
          <ul className="tl-nav__list">
            {PRIMARY_NAV.map((item) => (
              <li key={item.label}>
                <SmartLink to={item.href} className="tl-nav__link">
                  {item.label}
                </SmartLink>
              </li>
            ))}

            <li className="tl-dropdown" ref={platformRef}>
              <button
                ref={platformTriggerRef}
                type="button"
                className={`tl-nav__link tl-dropdown__trigger${platformOpen ? ' is-active' : ''}`}
                aria-expanded={platformOpen}
                aria-controls={platformMenuId}
                aria-haspopup="true"
                onClick={() => {
                  setPlatformOpen((open) => !open)
                  setDownloadsOpen(false)
                }}
              >
                Platform
                <Icon name="chevron" size={15} className="tl-dropdown__caret" />
              </button>

              <div
                id={platformMenuId}
                className="tl-dropdown__panel"
                data-open={platformOpen}
              >
                <ul className="tl-dropdown__list">
                  {PLATFORM_MENU.map((item) =>
                    item.submenu ? (
                      <li key={item.id} className="tl-dropdown__group">
                        <button
                          type="button"
                          className={`tl-dropdown__item tl-dropdown__item--expand${downloadsOpen ? ' is-active' : ''}`}
                          aria-expanded={downloadsOpen}
                          aria-controls={downloadsMenuId}
                          onClick={() => setDownloadsOpen((open) => !open)}
                        >
                          <span className="tl-dropdown__icon" aria-hidden="true">
                            <Icon name={item.icon} size={17} />
                          </span>
                          <span className="tl-dropdown__copy">
                            <span className="tl-dropdown__label">{item.label}</span>
                            <span className="tl-dropdown__desc">{item.description}</span>
                          </span>
                          <Icon
                            name="chevron"
                            size={15}
                            className="tl-dropdown__caret tl-dropdown__caret--sub"
                          />
                        </button>

                        <ul
                          id={downloadsMenuId}
                          className="tl-dropdown__sublist"
                          data-open={downloadsOpen}
                        >
                          {downloads.map((target) => (
                            <li key={target.id}>
                              <Link
                                to={`${ROUTES.downloads}#${target.id}`}
                                className="tl-dropdown__subitem"
                              >
                                <Icon name={target.icon} size={15} aria-hidden="true" />
                                <span>{target.platform}</span>
                                <span
                                  className={`tl-pill ${
                                    target.status === 'available'
                                      ? 'tl-pill--ok'
                                      : 'tl-pill--muted'
                                  }`}
                                >
                                  {target.status === 'available' ? 'Available' : 'Soon'}
                                </span>
                              </Link>
                            </li>
                          ))}
                          <li>
                            <Link
                              to={ROUTES.downloads}
                              className="tl-dropdown__subitem tl-dropdown__subitem--all"
                            >
                              <span>All downloads</span>
                              <Icon name="arrow-right" size={14} aria-hidden="true" />
                            </Link>
                          </li>
                        </ul>
                      </li>
                    ) : (
                      <li key={item.id}>
                        <Link to={item.href} className="tl-dropdown__item">
                          <span className="tl-dropdown__icon" aria-hidden="true">
                            <Icon name={item.icon} size={17} />
                          </span>
                          <span className="tl-dropdown__copy">
                            <span className="tl-dropdown__label">{item.label}</span>
                            <span className="tl-dropdown__desc">{item.description}</span>
                          </span>
                          <Icon
                            name="arrow-right"
                            size={15}
                            className="tl-dropdown__caret tl-dropdown__caret--go"
                          />
                        </Link>
                      </li>
                    ),
                  )}
                </ul>
              </div>
            </li>
          </ul>
        </nav>

        <div className="tl-nav__actions">
          <Link to={ROUTES.login} className="tl-btn tl-btn--sm tl-btn--ghost">
            Log In
          </Link>
          <Link to={ROUTES.signup} className="tl-btn tl-btn--sm tl-btn--primary">
            Sign Up
          </Link>
        </div>

        <button
          type="button"
          className="tl-nav__burger"
          aria-expanded={menuOpen}
          aria-controls={mobileMenuId}
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <Icon name={menuOpen ? 'close' : 'menu'} size={22} />
        </button>
      </div>

      {/* ---------- Mobile sheet ---------- */}
      <div id={mobileMenuId} className="tl-sheet" data-open={menuOpen}>
        <nav className="tl-sheet__inner" aria-label="Mobile navigation">
          <ul className="tl-sheet__list">
            {PRIMARY_NAV.map((item) => (
              <li key={item.label}>
                <SmartLink to={item.href} className="tl-sheet__link" onClick={closeAll}>
                  {item.label}
                </SmartLink>
              </li>
            ))}
          </ul>

          <p className="tl-sheet__heading">Platform</p>
          <ul className="tl-sheet__list">
            <li>
              <Link to={ROUTES.dashboard} className="tl-sheet__link" onClick={closeAll}>
                <Icon name="dashboard" size={17} aria-hidden="true" />
                Dashboard
              </Link>
            </li>
            <li>
              <Link to={ROUTES.downloads} className="tl-sheet__link" onClick={closeAll}>
                <Icon name="download" size={17} aria-hidden="true" />
                Downloads
              </Link>
            </li>
          </ul>

          <ul className="tl-sheet__list tl-sheet__list--nested">
            {downloads.map((target) => (
              <li key={target.id}>
                <Link
                  to={`${ROUTES.downloads}#${target.id}`}
                  className="tl-sheet__sublink"
                  onClick={closeAll}
                >
                  <Icon name={target.icon} size={15} aria-hidden="true" />
                  <span>{target.platform}</span>
                  <span
                    className={`tl-pill ${
                      target.status === 'available' ? 'tl-pill--ok' : 'tl-pill--muted'
                    }`}
                  >
                    {target.status === 'available' ? 'Available' : 'Soon'}
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          <div className="tl-sheet__actions">
            <Link
              to={ROUTES.login}
              className="tl-btn tl-btn--secondary tl-btn--block"
              onClick={closeAll}
            >
              Log In
            </Link>
            <Link
              to={ROUTES.signup}
              className="tl-btn tl-btn--primary tl-btn--block"
              onClick={closeAll}
            >
              Sign Up
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}
