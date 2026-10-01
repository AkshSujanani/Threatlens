import type { AnchorHTMLAttributes, ReactNode } from 'react'
import { Link } from 'react-router-dom'

type SmartLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  to: string
  children: ReactNode
}

/**
 * Renders a router `Link` for in-app routes and a plain anchor for
 * homepage hash targets or external URLs, so both work from any page.
 */
export function SmartLink({ to, children, ...rest }: SmartLinkProps) {
  const isExternal = /^(https?:|mailto:|tel:)/.test(to)
  const isHash = to.startsWith('#') || to.startsWith('/#')

  if (isExternal) {
    return (
      <a href={to} target="_blank" rel="noreferrer noopener" {...rest}>
        {children}
      </a>
    )
  }

  if (isHash) {
    return (
      <a href={to} {...rest}>
        {children}
      </a>
    )
  }

  return (
    <Link to={to} {...rest}>
      {children}
    </Link>
  )
}
