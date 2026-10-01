import type { CSSProperties } from 'react'
import { Icon } from './Icon'
import { SectionHeading } from './SectionHeading'
import { useReveal } from '../hooks/useReveal'
import { features } from '../data/features'
import './Features.css'

export function Features() {
  const { ref, visible } = useReveal<HTMLUListElement>({ threshold: 0.08 })

  return (
    <section
      className="tl-section tl-features"
      id="features"
      aria-labelledby="tl-features-title"
    >
      <div className="tl-shell">
        <SectionHeading
          kicker="Core capabilities"
          title="Security Intelligence in One Platform"
          id="tl-features-title"
          align="center"
          lead="Each capability covers one part of the path from raw security information to a finding a person can act on."
        />

        <ul className={`tl-features__grid${visible ? ' is-visible' : ''}`} ref={ref}>
          {features.map((feature, index) => (
            <li
              key={feature.id}
              className="tl-feature"
              style={{ '--tl-reveal-delay': `${(index % 3) * 80 + Math.floor(index / 3) * 60}ms` } as CSSProperties}
            >
              <article className="tl-feature__card">
                <span className="tl-feature__icon" aria-hidden="true">
                  <Icon name={feature.icon} size={21} />
                </span>

                <h3 className="tl-feature__title">{feature.title}</h3>
                <p className="tl-feature__desc">{feature.description}</p>

                <ul className="tl-feature__tags">
                  {feature.tags.map((tag) => (
                    <li key={tag} className="tl-feature__tag">
                      {tag}
                    </li>
                  ))}
                </ul>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
