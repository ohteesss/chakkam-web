import { FAQS } from '../data'

export function Faq() {
  return (
    <section className="band" id="faq">
      <div className="wrap faq">
        <h2 className="display head__title faq__title">FAQs</h2>

        <div className="faq__list">
          {FAQS.map(({ q, a }) => (
            <details key={q}>
              <summary>{q}</summary>
              <p>{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
