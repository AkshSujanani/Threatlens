import type { CSSProperties } from 'react'
import { Icon } from './Icon'
import { useReducedMotion } from '../hooks/useReducedMotion'

type VisualNode = {
  id: string
  label: string
  meta: string
  icon: 'target' | 'collect' | 'analyze' | 'gauge' | 'bell'
  tone: 'neutral' | 'accent' | 'warn' | 'critical'
}

const NODES: VisualNode[] = [
  { id: 'endpoint', label: 'Endpoint', meta: 'WIN-APP-04 · agent online', icon: 'target', tone: 'neutral' },
  { id: 'events', label: 'Security Events', meta: 'normalized stream', icon: 'collect', tone: 'accent' },
  { id: 'analysis', label: 'Analysis', meta: 'rules + anomaly', icon: 'analyze', tone: 'accent' },
  { id: 'risk', label: 'Risk Assessment', meta: 'score 74 · high', icon: 'gauge', tone: 'warn' },
  { id: 'alerts', label: 'Alerts', meta: '1 awaiting triage', icon: 'bell', tone: 'critical' },
]

/**
 * Hero visualization: a compact rendering of the ThreatLens pipeline as
 * linked UI nodes. Purely decorative — the structure is announced through
 * the surrounding section copy, so it is hidden from assistive tech.
 */
export function HeroVisual() {
  const reduced = useReducedMotion()

  return (
    <div
      className={`tl-visual${reduced ? ' is-static' : ''}`}
      aria-hidden="true"
      role="presentation"
    >
      <div className="tl-visual__glow" />

      <div className="tl-visual__frame tl-panel">
        <div className="tl-visual__bar">
          <span className="tl-visual__dots">
            <i />
            <i />
            <i />
          </span>
          <span className="tl-visual__title">threatlens · pipeline</span>
          <span className="tl-pill tl-pill--ok">live</span>
        </div>

        <ol className="tl-visual__flow">
          {NODES.map((node, index) => (
            <li
              key={node.id}
              className={`tl-visual__step tl-visual__step--${node.tone}`}
              style={{ '--i': index } as CSSProperties}
            >
              <div className="tl-visual__node">
                <span className="tl-visual__icon">
                  <Icon name={node.icon} size={16} />
                </span>
                <span className="tl-visual__copy">
                  <span className="tl-visual__label">{node.label}</span>
                  <span className="tl-visual__meta">{node.meta}</span>
                </span>
                <span className="tl-visual__ping" />
              </div>

              {index < NODES.length - 1 ? (
                <span className="tl-visual__link">
                  <span className="tl-visual__packet" />
                </span>
              ) : null}
            </li>
          ))}
        </ol>

        <div className="tl-visual__footer">
          <div className="tl-visual__stat">
            <span className="tl-visual__stat-label">Sources</span>
            <span className="tl-visual__bars">
              <i style={{ height: '38%' }} />
              <i style={{ height: '64%' }} />
              <i style={{ height: '46%' }} />
              <i style={{ height: '82%' }} />
              <i style={{ height: '58%' }} />
              <i style={{ height: '71%' }} />
            </span>
          </div>
          <div className="tl-visual__stat">
            <span className="tl-visual__stat-label">Risk mix</span>
            <span className="tl-visual__mix">
              <i className="is-critical" />
              <i className="is-high" />
              <i className="is-medium" />
              <i className="is-low" />
            </span>
          </div>
        </div>
      </div>

      <div className="tl-visual__card tl-visual__card--finding">
        <span className="tl-pill tl-pill--high">High</span>
        <span className="tl-visual__card-title">Suspicious process chain</span>
        <span className="tl-visual__card-meta">demo data · WIN-APP-04</span>
      </div>

      <div className="tl-visual__card tl-visual__card--score">
        <span className="tl-visual__card-meta">Risk score</span>
        <span className="tl-visual__score">74</span>
        <span className="tl-visual__track">
          <span className="tl-visual__fill" />
        </span>
      </div>
    </div>
  )
}
