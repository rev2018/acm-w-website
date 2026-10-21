import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { PageShell } from './components/PageShell'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Events } from './pages/Events'
import { Team } from './pages/Team'
import { Join } from './pages/Join'
import { Contact } from './pages/Contact'
import { Gallery } from './pages/Gallery'

function AnimatedRoutes() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [location.pathname])

  return <AnimatePresence mode="wait"><motion.div key={location.pathname} initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration:.2}}><Routes location={location}><Route path="/" element={<Home/>}/><Route path="/about" element={<About/>}/><Route path="/events" element={<Events/>}/><Route path="/team" element={<Team/>}/><Route path="/join" element={<Join/>}/><Route path="/contact" element={<Contact/>}/><Route path="/gallery" element={<Gallery/>}/></Routes></motion.div></AnimatePresence>
}

export default function App() {
  return <BrowserRouter><PageShell><AnimatedRoutes/></PageShell></BrowserRouter>
}
