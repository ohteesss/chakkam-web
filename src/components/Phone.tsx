import type { ReactNode } from 'react'

type Props = {
  children: ReactNode
  className?: string
  chatId?: string
}

export function Phone({ children, className = '', chatId }: Props) {
  return (
    <div className={`phone wa ${className}`.trim()}>
      <div className="phone__bar" aria-hidden="true">
        <span className="phone__back">‹ 205</span>
        <span className="phone__avatar">C</span>
        <span className="phone__name">Chakkam</span>
      </div>
      <div className="phone__chat" id={chatId} aria-live="polite">
        {children}
      </div>
    </div>
  )
}
