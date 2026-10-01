import { Link } from 'react-router-dom'
import { Icon } from './Icon'
import { SectionHeading } from './SectionHeading'
import { useReveal } from '../hooks/useReveal'
import { ROUTES } from '../data/site'
import {
  sampleActivity,
  sampleAlerts,
  sampleAssets,
  sampleAttackPath,
  sampleFindings,
  sampleRiskLevels,
  sampleScans,
} from '../data/dashboardPreview'
import './DashboardPreview.css'

export function DashboardPreview() {
  const { ref, visible } = useReveal<HTMLDivElement>({ threshold: 0.08 })

  return (
    <section
      className="tl-section tl-dash"
      id="dashboard"
      aria-labelledby="tl-dash-title"
    >
      <div className="tl-shell">
        <div className="tl-dash__head">
          <SectionHeading
            kicker="Dashboard"
            title="One place to review what was found"
            id="tl-dash-title"
            lead="Findings, risk levels, assets, scan status, activity, alerts and attack paths in a single interface."
          />
          <Link to={ROUTES.dashboard} className="tl-btn tl-btn--lg tl-btn--primary">
            <Icon name="dashboard" size={18} />
            Open Dashboard
          </Link>
        </div>

        <div className={`tl-dash__wrap tl-reveal${visible ? ' is-visible' : ''}`} ref={ref}>
          <p className="tl-demo-note">
            <Icon name="alert" size={13} aria-hidden="true" />
            Sample data — visual preview only
          </p>

          <div className="tl-dash__frame tl-panel" role="img" aria-label="Preview of the ThreatLens dashboard showing sample findings, risk levels, assets, scan status, recent activity, alerts and an attack path, all using demonstration data.">
            <div className="tl-dash__chrome" aria-hidden="true">
              <span className="tl-dash__chrome-brand">
                <Icon name="logo" size={15} />
                threatlens
              </span>
              <span className="tl-dash__chrome-crumbs">overview / all assets</span>
              <span className="tl-pill tl-pill--ok">demo</span>
            </div>

            <div className="tl-dash__grid" aria-hidden="true">
              {/* ---- Recent findings ---- */}
              <article className="tl-dash__card tl-dash__card--findings">
                <header className="tl-dash__card-head">
                  <h3>Recent Findings</h3>
                  <span className="tl-dash__card-meta">last 24h</span>
                </header>
                <ul className="tl-dash__findings">
                  {sampleFindings.map((finding) => (
                    <li key={finding.id}>
                      <span className={`tl-dash__sev tl-dash__sev--${finding.severity}`} />
                      <span className="tl-dash__finding-id">{finding.id}</span>
                      <span className="tl-dash__finding-title">{finding.title}</span>
                      <span className="tl-dash__finding-asset">{finding.asset}</span>
                      <span className={`tl-pill tl-pill--${finding.severity}`}>
                        {finding.severity}
                      </span>
                      <span className="tl-dash__finding-age">{finding.age}</span>
                    </li>
                  ))}
                </ul>
              </article>

              {/* ---- Risk levels ---- */}
              <article className="tl-dash__card tl-dash__card--risk">
                <header className="tl-dash__card-head">
                  <h3>Risk Levels</h3>
                </header>
                <ul className="tl-dash__risk">
                  {sampleRiskLevels.map((level) => (
                    <li key={level.label}>
                      <span className="tl-dash__risk-label">{level.label}</span>
                      <span className="tl-dash__risk-track">
                        <span
                          className={`tl-dash__risk-fill is-${level.severity}`}
                          style={{ width: visible ? `${level.share}%` : '0%' }}
                        />
                      </span>
                      <span className="tl-dash__risk-value">{level.share}%</span>
                    </li>
                  ))}
                </ul>
              </article>

              {/* ---- Assets ---- */}
              <article className="tl-dash__card tl-dash__card--assets">
                <header className="tl-dash__card-head">
                  <h3>Assets</h3>
                  <span className="tl-dash__card-meta">monitored</span>
                </header>
                <ul className="tl-dash__assets">
                  {sampleAssets.map((asset) => (
                    <li key={asset.name}>
                      <span className={`tl-dash__state tl-dash__state--${asset.state}`} />
                      <span className="tl-dash__asset-name">{asset.name}</span>
                      <span className="tl-dash__asset-kind">{asset.kind}</span>
                      <span className={`tl-pill tl-pill--${asset.risk}`}>{asset.risk}</span>
                    </li>
                  ))}
                </ul>
              </article>

              {/* ---- Scan status ---- */}
              <article className="tl-dash__card tl-dash__card--scans">
                <header className="tl-dash__card-head">
                  <h3>Scan Status</h3>
                </header>
                <ul className="tl-dash__scans">
                  {sampleScans.map((scan) => (
                    <li key={scan.name}>
                      <span className="tl-dash__scan-head">
                        <span className="tl-dash__scan-name">{scan.name}</span>
                        <span className={`tl-dash__scan-state is-${scan.state}`}>
                          {scan.state}
                        </span>
                      </span>
                      <span className="tl-dash__scan-target">{scan.target}</span>
                      <span className="tl-dash__scan-track">
                        <span
                          className={`tl-dash__scan-fill is-${scan.state}`}
                          style={{ width: visible ? `${scan.progress}%` : '0%' }}
                        />
                      </span>
                    </li>
                  ))}
                </ul>
              </article>

              {/* ---- Alerts ---- */}
              <article className="tl-dash__card tl-dash__card--alerts">
                <header className="tl-dash__card-head">
                  <h3>Alerts</h3>
                  <span className="tl-dash__card-meta">awaiting review</span>
                </header>
                <ul className="tl-dash__alerts">
                  {sampleAlerts.map((alert) => (
                    <li key={alert.id}>
                      <span className="tl-dash__alert-icon">
                        <Icon name="bell" size={14} />
                      </span>
                      <span className="tl-dash__alert-copy">
                        <span className="tl-dash__alert-title">{alert.title}</span>
                        <span className="tl-dash__alert-meta">
                          {alert.id} · {alert.state}
                        </span>
                      </span>
                      <span className={`tl-pill tl-pill--${alert.severity}`}>
                        {alert.severity}
                      </span>
                    </li>
                  ))}
                </ul>
              </article>

              {/* ---- Recent activity ---- */}
              <article className="tl-dash__card tl-dash__card--activity">
                <header className="tl-dash__card-head">
                  <h3>Recent Activity</h3>
                </header>
                <ul className="tl-dash__activity">
                  {sampleActivity.map((entry) => (
                    <li key={entry.time}>
                      <span className="tl-dash__activity-time">{entry.time}</span>
                      <span className="tl-dash__activity-text">{entry.text}</span>
                    </li>
                  ))}
                </ul>
              </article>

              {/* ---- Attack paths ---- */}
              <article className="tl-dash__card tl-dash__card--paths">
                <header className="tl-dash__card-head">
                  <h3>Attack Paths</h3>
                  <span className="tl-dash__card-meta">evidence-backed</span>
                </header>
                <ol className="tl-dash__path">
                  {sampleAttackPath.map((node, index) => (
                    <li key={node.label}>
                      <span className="tl-dash__path-node">
                        <span className="tl-dash__path-label">{node.label}</span>
                        <span className="tl-dash__path-detail">{node.detail}</span>
                      </span>
                      {index < sampleAttackPath.length - 1 ? (
                        <span className="tl-dash__path-arrow">
                          <Icon name="arrow-right" size={14} />
                        </span>
                      ) : null}
                    </li>
                  ))}
                </ol>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
