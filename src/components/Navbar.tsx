import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { NavLink } from 'react-router-dom'
import { Logo } from './Logo'

const links = [
  ['About', '/about'],
  ['Events', '/events'],
  ['Team', '/team'],
  ['Gallery', '/gallery'],
  ['Join us', '/join'],
  ['Contact', '/contact']
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="nav-wrap">
      <nav className="nav container">
        <Logo />
        <div className="desktop-nav">
          {links.map(([label, to]) => <NavLink key={to} to={to}>{label}</NavLink>)}
          <NavLink className="nav-cta" to="/join">Join community</NavLink>
        </div>
        <button className="menu-button" onClick={() => setOpen(!open)} aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open}>
          {open ? 'Close' : 'Menu'}
        </button>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div className="mobile-menu" initial={{height: 0, opacity: 0}} animate={{height: 'auto', opacity: 1}} exit={{height: 0, opacity: 0}}>
            <div className="container mobile-menu-inner">
              {links.map(([label, to], i) => (
                <motion.div key={to} initial={{x: -18, opacity: 0}} animate={{x: 0, opacity: 1}} transition={{delay: i * .04}}>
                  <NavLink onClick={() => setOpen(false)} to={to}>{label}<span>0{i + 1}</span></NavLink>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
