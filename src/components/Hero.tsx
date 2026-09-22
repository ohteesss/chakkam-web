import { useEffect, useRef, useState } from 'react'
import { Phone } from './Phone'
import { WhatsAppLink } from './WhatsAppLink'

type Outcome = {
  kind: 'confirmed' | 'rejected'
  when: string
}

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

// Same shape as the bot's own confirmation: "2 Jan 2006, 3:04 PM".
const timestamp = () => {
  const now = new Date()
  const time = now.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' })
  return `${now.getDate()} ${MONTHS[now.getMonth()]} ${now.getFullYear()}, ${time}`
}

const HINTS = {
  waiting: 'You’re Ada. Go on, tap Confirm.',
  confirmed: 'That’s it. That’s the whole thing.',
  rejected: 'Rejected. That goes on record too.',
}

export function Hero() {
  const [outcome, setOutcome] = useState<Outcome | null>(null)
  const confirmRef = useRef<HTMLButtonElement>(null)
  const refocus = useRef(false)
  const confirmed = outcome?.kind === 'confirmed'

  useEffect(() => {
    if (!outcome && refocus.current) {
      refocus.current = false
      confirmRef.current?.focus()
    }
  }, [outcome])

  const decide = (kind: Outcome['kind']) => setOutcome({ kind, when: timestamp() })

  const reset = () => {
    refocus.current = true
    setOutcome(null)
  }

  return (
    <section className="hero">
      <div className="wrap hero__grid">
        <div className="hero__copy">
          <h1 className="display hero__title">Just Chakkam it.</h1>
          <p className="hero__sub">
            Agreed on something? Put it on record, right inside WhatsApp. They confirm it, and you both keep the
            receipts.
          </p>
          <WhatsAppLink icon>Chakkam it on WhatsApp</WhatsAppLink>
          <ul className="facts" aria-label="Good to know">
            <li className="sticker sticker--clay">free</li>
            <li className="sticker">no sign up</li>
            <li className="sticker">no app</li>
          </ul>
        </div>

        <div className="hero__demo">
          <Phone className={confirmed ? 'is-hit' : ''} chatId="demo-chat">
            <div className="msg msg--in tpl">
              <div className="tpl__body">
                <p className="tpl__title">Confirm Agreement</p>
                <p>Good day!</p>
                <p>
                  <span className="wa__link">+234 801 234 5678</span> wants to confirm an agreement with you 🤝
                </p>
                <p>
                  Tobi (+234 801 234 5678) lent ₦50,000 to Ada (+234 809 876 5432). Ada will pay back ₦25,000 by 30
                  September 2026 and ₦25,000 by 31 October 2026.
                </p>
                <p>Sound right?</p>
                <p className="tpl__foot">
                  Created by Chakkam <span className="msg__time">11:26</span>
                </p>
              </div>
              <div className="tpl__actions" hidden={outcome !== null}>
                <button className="tpl__btn" type="button" id="demo-confirm" ref={confirmRef} onClick={() => decide('confirmed')}>
                  ↩ Confirm
                </button>
                <button className="tpl__btn" type="button" id="demo-reject" onClick={() => decide('rejected')}>
                  ↩ Reject
                </button>
              </div>
            </div>

            {outcome && (
              <div className="msg msg--in">
                <p>{confirmed ? '✅ Agreement confirmed & recorded.' : '❌ Agreement rejected.'}</p>
                <p>
                  {confirmed ? 'Confirmed' : 'Rejected'}: {outcome.when}
                </p>
                <p>This record cannot be changed.</p>
              </div>
            )}
          </Phone>

          {confirmed && (
            <div className="stamp is-landing" id="demo-stamp">
              <span className="display stamp__word">Chakkam’d</span>
              <span className="stamp__time" id="demo-stamp-time">
                {outcome.when}
              </span>
            </div>
          )}

          <p className="hero__hint">
            <span>{HINTS[outcome?.kind ?? 'waiting']}</span>
            {outcome && (
              <button className="textbtn" type="button" id="demo-reset" onClick={reset}>
                Do it again
              </button>
            )}
          </p>
        </div>
      </div>
    </section>
  )
}
