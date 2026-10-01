import { Icon } from './Icon'
import type { IconName } from './Icon'
import { SmartLink } from './SmartLink'
import { PROJECT_LINKS, ROUTES, SITE } from '../data/site'
import './Footer.css'

type FooterLink = {
  label: string
  href: string
  icon?: IconName
}

const NAVIGATION_LINKS: FooterLink[] = [
  { label: 'About', href: ROUTES.about },
  { label: 'Dashboard', href: ROUTES.dashboard },
  { label: 'Downloads', href: ROUTES.downloads },
  { label: 'Documentation', href: PROJECT_LINKS.documentation },
]

const PROJECT_COLUMN: FooterLink[] = [
  { label: 'GitHub', href: PROJECT_LINKS.github, icon: 'code' },
  { label: 'Security', href: PROJECT_LINKS.security, icon: 'shield' },
  { label: 'Contact', href: PROJECT_LINKS.contact, icon: 'mail' },
]

/** Renders a link, or inert text when the destination is not configured yet. */
function FooterItem({ item }: { item: FooterLink }) {
  if (!item.href) {
    return (
      <span className="tl-footer__link is-pending">
        {item.icon ? <Icon name={item.icon} size={14} aria-hidden="true" /> : null}
        {item.label}
        <span className="tl-footer__pending-tag">soon</span>
      </span>
    )
  }

  return (
    <SmartLink to={item.href} className="tl-footer__link">
      {item.icon ? <Icon name={item.icon} size={14} aria-hidden="true" /> : null}
      {item.label}
    </SmartLink>
  )
}

export function Footer() {
  return (
    <footer className="tl-footer">
      <div className="tl-shell tl-footer__inner">
        <div className="tl-footer__brand-col">
          <SmartLink to={ROUTES.home} className="tl-footer__brand">
            <span className="tl-footer__mark" aria-hidden="true">
              <Icon name="logo" size={19} />
            </span>
            <span className="tl-footer__name">{SITE.name}</span>
          </SmartLink>
          <p className="tl-footer__blurb">
            A cybersecurity monitoring and risk-intelligence platform for authorized
            systems. Currently an early-stage research prototype.
          </p>
          <span className="tl-footer__version">{SITE.version}</span>
        </div>

        <nav className="tl-footer__cols" aria-label="Footer navigation">
          <div className="tl-footer__col">
            <h2 className="tl-footer__col-title">Navigation</h2>
            <ul>
              {NAVIGATION_LINKS.map((item) => (
                <li key={item.label}>
                  <FooterItem item={item} />
                </li>
              ))}
            </ul>
          </div>

          <div className="tl-footer__col">
            <h2 className="tl-footer__col-title">Project</h2>
            <ul>
              {PROJECT_COLUMN.map((item) => (
                <li key={item.label}>
                  <FooterItem item={item} />
                </li>
              ))}
            </ul>
          </div>

          <div className="tl-footer__col">
            <h2 className="tl-footer__col-title">Access</h2>
            <ul>
              <li>
                <SmartLink to={ROUTES.login} className="tl-footer__link">
                  Log In
                </SmartLink>
              </li>
              <li>
                <SmartLink to={ROUTES.signup} className="tl-footer__link">
                  Sign Up
                </SmartLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      <div className="tl-footer__bar">
        <div className="tl-shell tl-footer__bar-inner">
          <p className="tl-footer__legal">
            {SITE.name} — {SITE.tagline}
          </p>
          <p className="tl-footer__scope">
            For use on authorized systems only.
          </p>
        </div>
      </div>
    </footer>
  )
}
