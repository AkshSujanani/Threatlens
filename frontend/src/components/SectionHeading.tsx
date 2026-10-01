type SectionHeadingProps = {
  kicker: string
  title: string
  lead?: string
  /** heading level — keeps the document outline correct per section */
  as?: 'h2' | 'h3'
  align?: 'left' | 'center'
  id?: string
}

export function SectionHeading({
  kicker,
  title,
  lead,
  as: Tag = 'h2',
  align = 'left',
  id,
}: SectionHeadingProps) {
  return (
    <div className={`tl-head${align === 'center' ? ' tl-head--center' : ''}`}>
      <span className="tl-kicker">
        <span className="tl-kicker__dot" aria-hidden="true" />
        {kicker}
      </span>
      <Tag className="tl-head__title" id={id}>
        {title}
      </Tag>
      {lead ? <p className="tl-head__lead">{lead}</p> : null}
    </div>
  )
}
