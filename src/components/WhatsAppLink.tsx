import type { ReactNode } from 'react'
import { WHATSAPP_URL } from '../data'

type Props = {
  children: ReactNode
  className?: string
  icon?: boolean
}

export function WhatsAppLink({ children, className = '', icon = false }: Props) {
  return (
    <a className={`btn ${className}`.trim()} href={WHATSAPP_URL} target="_blank" rel="noopener">
      {children}
      {icon && (
        <svg className="btn__icon" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M4 4h16v12H9l-5 4z" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="miter" />
        </svg>
      )}
    </a>
  )
}
