import './App.css'

const NOTIFY_EMAIL = 'hello@beourguest.com'
const NOTIFY_SUBJECT = 'Notify me when beourguest launches'

export default function App() {
  const mailtoHref = `mailto:${NOTIFY_EMAIL}?subject=${encodeURIComponent(
    NOTIFY_SUBJECT,
  )}`

  return (
    <div className="page">
      <main className="hero">
        <div className="seal" role="img" aria-label="beourguest monogram">
          <svg viewBox="0 0 64 64" width="100%" height="100%">
            <circle cx="32" cy="32" r="31" className="seal-ring" />
            <text x="32" y="40" textAnchor="middle" className="seal-mark">
              bg
            </text>
          </svg>
        </div>

        <p className="eyebrow">beourguest &middot; rsvp &amp; seat finder</p>

        <h1 className="headline">
          We&rsquo;re building
          <br />
          something great here.
        </h1>

        <span className="rule" />

        <p className="subhead">
          One calm, beautiful place for every wedding host and guest &mdash;
          RSVPs, seating charts, and the little details in between. We&rsquo;re
          setting the tables now.
        </p>

        <a className="notify-link" href={mailtoHref}>
          Notify me
        </a>
      </main>

      <footer className="footer">
        <p>beourguest &middot; made with care, for hosts and guests everywhere.</p>
      </footer>
    </div>
  )
}
