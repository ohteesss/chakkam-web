import { useEffect, useRef, useState } from 'react'
import { ROUNDS } from '../data'

type Kind = 'real' | 'fake'

const shuffle = (): Kind[] => (Math.random() < 0.5 ? ['real', 'fake'] : ['fake', 'real'])

export function SpotTheFake() {
  const [index, setIndex] = useState(0)
  const [order, setOrder] = useState(shuffle)
  const [picked, setPicked] = useState<number | null>(null)
  const verdictRef = useRef<HTMLDivElement>(null)

  const round = ROUNDS[index]
  const revealed = picked !== null
  const right = revealed && order[picked] === 'real'

  useEffect(() => {
    if (picked === null) return
    const calm = matchMedia('(prefers-reduced-motion: reduce)').matches
    verdictRef.current?.scrollIntoView({ block: 'nearest', behavior: calm ? 'auto' : 'smooth' })
  }, [picked])

  const next = () => {
    setIndex((i) => i + 1)
    setOrder(shuffle())
    setPicked(null)
  }

  return (
    <section className="band band--paper" id="spot">
      <div className="wrap">
        <div className="head">
          <h2 className="display head__title">One of these is cooked.</h2>
          <p className="head__blurb">
            Same chat, same person, same time. One screenshot was edited. Tap the one you think is real.
          </p>
        </div>

        <div className="spot">
          <div className="spot__shots">
            {order.map((kind, i) => {
              const letter = 'AB'[i]
              const isReal = kind === 'real'
              const classes = ['shot', revealed && !isReal && 'is-fake', picked === i && 'is-picked']
              const label = revealed
                ? `Screenshot ${letter}, ${isReal ? 'real' : 'edited'}`
                : `Screenshot ${letter}. Pick this one as real.`

              return (
                <button
                  key={letter}
                  type="button"
                  className={classes.filter(Boolean).join(' ')}
                  data-kind={kind}
                  disabled={revealed}
                  aria-label={label}
                  onClick={() => setPicked(i)}
                >
                  <img src={round[kind]} alt="" width={852} height={1628} loading="lazy" />
                  <span className="shot__letter">{letter}</span>
                  {revealed && (
                    <span className={isReal ? 'shot__tag' : 'shot__tag shot__tag--fake'}>
                      {isReal ? 'Real' : 'Edited'}
                    </span>
                  )}
                </button>
              )
            })}
          </div>

          <div className="spot__verdict" id="spot-verdict" ref={verdictRef} aria-live="polite">
            {revealed ? (
              <>
                <p className="display spot__result">{right ? 'Sharp. That’s the real one.' : 'That one’s the fake.'}</p>
                <p>{right ? 'Here’s what gave the other one away:' : 'Here’s what gives it away:'}</p>
                <ul className="spot__tells">
                  {round.tells.map((tell) => (
                    <li key={tell}>{tell}</li>
                  ))}
                </ul>
                <p className="spot__moral">
                  You needed a calculator. Most people just believe the screenshot. A Chakkam record can’t be edited
                  by either of you.
                </p>
                {index < ROUNDS.length - 1 && (
                  <button className="btn btn--small" type="button" onClick={next}>
                    Next pair
                  </button>
                )}
              </>
            ) : (
              <p className="spot__prompt">Look closely. Take your time.</p>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
