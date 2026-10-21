import { Link } from 'react-router-dom'
import { siteConfig } from '../data/site'

export function Logo() {
  return (
    <Link className="brand" to="/" aria-label="IISU ACM-W home">
      <img src={siteConfig.logo} alt="ACM Student Chapter logo" />
      <span>IISU ACM-W<small>STUDENT CHAPTER</small></span>
    </Link>
  )
}
