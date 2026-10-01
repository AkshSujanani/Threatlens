import type { CSSProperties } from 'react'
import { Icon } from './Icon'
import { SectionHeading } from './SectionHeading'
import { useReveal } from '../hooks/useReveal'
import { pipelineStages } from '../data/workflow'
import './Workflow.css'

const KIND_ICON = {
  source: 'target',
  process: 'analyze',
  output: 'grid',
} as const

const STAGE_ICONS = [
  'target',
  'collect',
  'normalize',
  'analyze',
  'risk',
  'alert',
  'grid',
] as const

export function Workflow() {
  const { ref, visible } = useReveal<HTMLDivElement>({ threshold: 0.12 })

  return (
    <section
      className="tl-section tl-workflow"
      id="how-it-works"
      aria-labelledby="tl-workflow-title"
    >
      <div className="tl-shell">
        <SectionHeading
          kicker="How it works"
          title="From an authorized target to a reviewable finding"
          id="tl-workflow-title"
          align="center"
          lead="Security information moves through a fixed pipeline. Each stage has one job, and the output of each stage is what the next one reads."
        />

        <div
          className={`tl-workflow__pipe${visible ? ' is-visible' : ''}`}
          ref={ref}
        >
          <ol className="tl-workflow__list">
            {pipelineStages.map((stage, index) => (
              <li
                key={stage.id}
                className={`tl-workflow__stage tl-workflow__stage--${stage.kind}`}
                style={{ '--tl-reveal-delay': `${index * 110}ms` } as CSSProperties}
              >
                <div className="tl-workflow__rail" aria-hidden="true">
                  <span className="tl-workflow__dot">
                    <Icon
                      name={STAGE_ICONS[index] ?? KIND_ICON[stage.kind]}
                      size={16}
                    />
                  </span>
                  {index < pipelineStages.length - 1 ? (
                    <span className="tl-workflow__line">
                      <span className="tl-workflow__line-fill" />
                      <span className="tl-workflow__pulse" />
                    </span>
                  ) : null}
                </div>

                <div className="tl-workflow__card">
                  <div className="tl-workflow__card-head">
                    <span className="tl-workflow__step">
                      Step {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="tl-workflow__note">{stage.note}</span>
                  </div>
                  <h3 className="tl-workflow__label">{stage.label}</h3>
                  <p className="tl-workflow__detail">{stage.detail}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
