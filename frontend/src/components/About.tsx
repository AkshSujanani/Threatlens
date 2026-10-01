import type { CSSProperties } from 'react'
import { Icon } from './Icon'
import { SectionHeading } from './SectionHeading'
import { useReveal } from '../hooks/useReveal'
import { workflowSteps } from '../data/workflow'
import './About.css'

const PRINCIPLES = [
  {
    icon: 'lock' as const,
    title: 'Authorized sources only',
    body: 'Data is collected from systems the operator is permitted to monitor, through an installed agent or a configured integration.',
  },
  {
    icon: 'layers' as const,
    title: 'One common format',
    body: 'Source-specific records are mapped onto a shared event and finding schema so they can be reviewed side by side.',
  },
  {
    icon: 'shield' as const,
    title: 'Evidence kept with the finding',
    body: 'Each finding stays linked to the events and assets it was derived from, so a reviewer can check the reasoning.',
  },
]

export function About() {
  const { ref, visible } = useReveal<HTMLDivElement>()

  return (
    <section className="tl-section tl-about" id="about" aria-labelledby="tl-about-title">
      <div className="tl-shell">
        <SectionHeading
          kicker="About the project"
          title="What is ThreatLens?"
          id="tl-about-title"
          lead="ThreatLens is a cybersecurity monitoring and risk-intelligence platform. It collects security information from authorized systems, normalizes it into a common format, analyzes the resulting security evidence, determines a risk level, and presents what it finds through a central interface."
        />

        <div className="tl-about__body">
          <div className="tl-about__prose">
            <p>
              The platform is built around a single idea: security information is only
              useful once it has been brought together, given a shared shape, and put in
              context. ThreatLens handles that path end to end — from collection on the
              endpoint through to a reviewable finding in the dashboard.
            </p>
            <p>
              Analysis combines predefined security rules, which recognize known
              suspicious behaviour, with anomaly analysis, which highlights activity that
              is unusual for a given system. Both approaches produce findings that carry
              their supporting evidence, so a reviewer can judge the result rather than
              take it on trust.
            </p>
            <p className="tl-about__caveat">
              <Icon name="alert" size={16} aria-hidden="true" />
              <span>
                ThreatLens does not claim to detect every attack. It is a monitoring and
                triage tool: it narrows a large volume of security information down to the
                findings that deserve a person's attention, and shows why.
              </span>
            </p>
          </div>

          <ul className="tl-about__principles">
            {PRINCIPLES.map((item) => (
              <li key={item.title} className="tl-about__principle">
                <span className="tl-about__principle-icon" aria-hidden="true">
                  <Icon name={item.icon} size={17} />
                </span>
                <div>
                  <h3 className="tl-about__principle-title">{item.title}</h3>
                  <p className="tl-about__principle-body">{item.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* ---------- Core workflow ---------- */}
        <div className="tl-about__flow-wrap" ref={ref}>
          <div className="tl-about__flow-head">
            <h3 className="tl-about__flow-title">The core workflow</h3>
            <p className="tl-about__flow-lead">
              Every piece of security information that reaches ThreatLens travels the same
              six steps.
            </p>
          </div>

          <ol className={`tl-about__flow${visible ? ' is-visible' : ''}`}>
            {workflowSteps.map((step, index) => (
              <li
                key={step.id}
                className="tl-about__flow-step"
                style={{ '--tl-reveal-delay': `${index * 90}ms` } as CSSProperties}
              >
                <div className="tl-about__flow-card">
                  <span className="tl-about__flow-index">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="tl-about__flow-icon" aria-hidden="true">
                    <Icon name={step.icon} size={19} />
                  </span>
                  <h4 className="tl-about__flow-label">{step.label}</h4>
                  <p className="tl-about__flow-desc">{step.description}</p>
                </div>
                {index < workflowSteps.length - 1 ? (
                  <span className="tl-about__flow-arrow" aria-hidden="true">
                    <Icon name="arrow-right" size={16} />
                  </span>
                ) : null}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
