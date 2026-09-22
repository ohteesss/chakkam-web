import { NOTS } from '../data'

export function WhatItIsNot() {
  return (
    <section className="band band--ink">
      <div className="wrap">
        <div className="head">
          <h2 className="display head__title">What Chakkam is not</h2>
          <p className="head__blurb">It’s a record. That’s the whole job, and it’s better you hear it from us.</p>
        </div>

        <ul className="nots">
          {NOTS.map(({ title, body }) => (
            <li key={title}>
              <h3 className="display">{title}</h3>
              <p>{body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
