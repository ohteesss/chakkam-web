export function Why() {
  return (
    <section className="band">
      <div className="wrap">
        <div className="head">
          <h2 className="display head__title">Chats are easy to lose. And easy to fake.</h2>
          <p className="head__blurb">
            Most broken agreements don’t start with a scam. They start with nothing written down.
          </p>
        </div>

        <ul className="why">
          <li className="why__card">
            <div className="why__chat wa" aria-hidden="true">
              <p className="msg msg--in">Please help me send ₦6,500</p>
              <p className="msg msg--in">Please help me send ₦65,000</p>
            </div>
            <h3>Screenshots can be cloned</h3>
            <p>Anyone can edit a chat image in two minutes. You just saw one.</p>
          </li>
          <li className="why__card">
            <div className="why__chat wa" aria-hidden="true">
              <p className="msg msg--in msg--gone">🚫 This message was deleted</p>
            </div>
            <h3>Messages disappear</h3>
            <p>Deleted, or set to vanish after a week. Either way it’s gone when you need it.</p>
          </li>
          <li className="why__card">
            <div className="why__chat wa" aria-hidden="true">
              <p className="msg msg--in msg--call">
                Voice call<span>14 min</span>
              </p>
            </div>
            <h3>It happened on a call</h3>
            <p>You agreed on everything. None of it is written anywhere.</p>
          </li>
          <li className="why__card">
            <div className="why__chat wa" aria-hidden="true">
              <p className="msg msg--in">wait, I said Friday??</p>
              <p className="msg msg--out">you said Wednesday</p>
            </div>
            <h3>Honest people forget</h3>
            <p>Nobody’s lying. They just remember it differently, and that’s how trust breaks 🌚</p>
          </li>
        </ul>
      </div>
    </section>
  )
}
