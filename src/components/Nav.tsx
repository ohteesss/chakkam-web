import { WhatsAppLink } from './WhatsAppLink'

export function Nav() {
  return (
    <header className="nav">
      <div className="wrap nav__row">
        <a className="wordmark" href="#main">
          Chakkam
        </a>
        <nav className="nav__links" aria-label="Page sections">
          <a href="#spot">Spot the fake</a>
          <a href="#how">How it works</a>
          <a href="#faq">FAQs</a>
        </nav>
        <WhatsAppLink className="btn--small">Chakkam it</WhatsAppLink>
      </div>
    </header>
  )
}
