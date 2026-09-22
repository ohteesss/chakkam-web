import { useState } from 'react'
import { EXAMPLES } from '../data'
import { Phone } from './Phone'

export function ChakkamItWhen() {
  const [active, setActive] = useState(0)
  const example = EXAMPLES[active]

  return (
    <section className="band band--paper">
      <div className="wrap when">
        <div className="when__copy">
          <h2 className="display head__title">Chakkam it when…</h2>
          <p className="head__blurb">
            If two people agreed on it, you can Chakkam it. Pick one and see what it looks like.
          </p>
          <div className="chips" role="group" aria-label="Example agreements">
            {EXAMPLES.map(({ label }, i) => (
              <button
                key={label}
                className="chip"
                type="button"
                aria-pressed={i === active}
                onClick={() => setActive(i)}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        <Phone className="when__phone">
          <p className="msg msg--out">{example.said}</p>
          <div className="msg msg--in">
            <p>Got it. Here’s the record:</p>
            <p id="when-record">{example.record}</p>
            <p>Sound right? I’ll send it to them to confirm.</p>
          </div>
        </Phone>
      </div>
    </section>
  )
}
