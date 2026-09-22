import { STEPS } from '../data'

export function HowItWorks() {
  return (
    <section className="band band--clay" id="how">
      <div className="wrap">
        <div className="head">
          <h2 className="display head__title">How to Chakkam it</h2>
          <p className="head__blurb">Three steps. It takes about as long as sending a voice note.</p>
        </div>

        <ol className="steps">
          {STEPS.map(({ title, body }, i) => (
            <li className="steps__item" key={title}>
              <span className="display steps__num" aria-hidden="true">
                {i + 1}
              </span>
              <h3>{title}</h3>
              <p>{body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
