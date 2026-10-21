import { siteConfig } from '../data/site'

export function Contact() {
  const links = [
    ['Instagram', '@iisu_acm_w', siteConfig.links.instagram],
    ['WhatsApp', 'Community group', siteConfig.links.whatsapp],
  ] as const

  return (
    <div className="page container contact-page">
      <header className="page-hero">
        <p className="eyebrow">Contact / say hello</p>
        <h1>Let's keep<br /><em>the loop open</em></h1>
        <p className="lede">Questions, collaborations, speakers, ideas, feedback — point them in the right direction.</p>
      </header>

      <section className="contact-grid">
        <div className="contact-note">
          <p className="eyebrow">Chapter information</p>
          <h2>{siteConfig.chapterName}</h2>
          <p>{siteConfig.collegeName}</p>

          <div className="contact-location">
            <div className="contact-location-heading">
              <div>
                <span className="editorial-label">FIND US</span>
                <strong>{siteConfig.location.name}</strong>
              </div>
            </div>
            <p>{siteConfig.location.address}</p>
            <div className="contact-location-actions">
              <a href={siteConfig.links.college} target="_blank" rel="noreferrer">
                College website
              </a>
              <a href={siteConfig.links.map} target="_blank" rel="noreferrer">
                Open in Google Maps
              </a>
            </div>
          </div>
        </div>

        <div className="contact-links">
          {links.map(([label, text, href]) => (
            <a key={label} href={href} target="_blank" rel="noreferrer">
              <span><small>{label}</small><strong>{text}</strong></span>
            </a>
          ))}
        </div>
      </section>

      <section className="map-section">
        <div className="map-heading">
          <div>
            <p className="eyebrow">Campus / Jaipur</p>
            <h2>Come say hello</h2>
          </div>
          <a className="text-link" href={siteConfig.links.map} target="_blank" rel="noreferrer">
            Open larger map
          </a>
        </div>
        <div className="map-frame">
          <iframe
            title="Map showing IIS (Deemed to be University), Jaipur"
            src="https://www.google.com/maps?q=IIS%20Deemed%20to%20be%20University%2C%20Jaipur&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </div>
  )
}
