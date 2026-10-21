import { Link } from 'react-router-dom'
import { siteConfig } from '../data/site'

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div>
            <p className="eyebrow">Association for Computing Machinery</p>
            <h2>Keep<br /><em>building</em></h2>
          </div>
          <div className="footer-links">
            <Link to="/about">About</Link>
            <Link to="/events">Events</Link>
            <Link to="/team">Team</Link>
            <Link to="/gallery">Gallery</Link>
            <Link to="/join">Join us</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} {siteConfig.chapterName}</span>
          <div className="socials">
            <a href={siteConfig.links.instagram} target="_blank" rel="noreferrer">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
