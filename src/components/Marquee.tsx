import { EXCUSES } from '../data'

function Excuses({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul className="marquee__list display" aria-hidden={hidden || undefined}>
      {EXCUSES.map((excuse) => (
        <li key={excuse}>{excuse}</li>
      ))}
    </ul>
  )
}

export function Marquee() {
  return (
    <div className="marquee" aria-label="Things people say when there is no record">
      <div className="marquee__track">
        <Excuses />
        <Excuses hidden />
      </div>
    </div>
  )
}
