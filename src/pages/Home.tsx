import { useMotionValue, useSpring, useTransform, motion } from 'motion/react'
import type { PointerEvent } from 'react'
import { Link } from 'react-router-dom'
import { EventCard } from '../components/EventCard'
import { IntroLoader } from '../components/IntroLoader'
import { Reveal } from '../components/Reveal'
import { SectionHeader } from '../components/SectionHeader'
import { events, siteConfig } from '../data/site'

const activities = [
  ['01', 'Workshops', 'Learn by doing. Small rooms, real tools, questions welcome.'],
  ['02', 'Technical talks', 'Meet ideas from outside the syllabus — and the people behind them.'],
  ['03', 'Hackathons', 'Take an idea from a messy sketch to something that actually runs.'],
  ['04', 'Competitions', 'Sharpen your problem-solving with people who enjoy the challenge.'],
  ['05', 'Projects', 'Build useful things together. Ship, document, iterate.'],
  ['06', 'Community', 'Find your people. Share what you know. Ask when you do not.']
]

const featuredEvents = [...events].sort((a, b) => b.dateValue.localeCompare(a.dateValue)).slice(0, 2)

export function Home() {
  const pointerX = useMotionValue(0)
  const pointerY = useMotionValue(0)
  const smoothX = useSpring(pointerX, { stiffness: 110, damping: 22, mass: 0.45 })
  const smoothY = useSpring(pointerY, { stiffness: 110, damping: 22, mass: 0.45 })
  const markX = useTransform(smoothX, [-1, 1], [-18, 18])
  const markY = useTransform(smoothY, [-1, 1], [-12, 12])
  const gridX = useTransform(smoothX, [-1, 1], [-10, 10])
  const gridY = useTransform(smoothY, [-1, 1], [-7, 7])
  const glowX = useTransform(smoothX, [-1, 1], ['-30%', '30%'])
  const glowY = useTransform(smoothY, [-1, 1], ['-25%', '25%'])

  const handleHeroPointer = (event: PointerEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect()
    pointerX.set(((event.clientX - rect.left) / rect.width) * 2 - 1)
    pointerY.set(((event.clientY - rect.top) / rect.height) * 2 - 1)
  }

  return <div className="home"><IntroLoader />
    <section className="hero container" onPointerMove={handleHeroPointer} onPointerLeave={() => { pointerX.set(0); pointerY.set(0) }}>
      <motion.div className="hero-cursor-glow" style={{ left: glowX, top: glowY }} />
      <motion.div className="hero-grid" style={{ x: gridX, y: gridY }}></motion.div>
      <div className="hero-main">
        <div className="hero-side-note"><span>IISU / JAIPUR</span><span>BUILDING IN PUBLIC</span></div>
        <div>
          <motion.p className="eyebrow hero-kicker" initial={{opacity:0}} animate={{opacity:1}} transition={{delay:.1}}>Association for Computing Machinery</motion.p>
          <motion.h1 initial={{opacity:0, y:30}} animate={{opacity:1, y:0}} transition={{duration:.8, delay:.12}}>Where<br /><span>computing</span><br />meets curiosity</motion.h1>
          <motion.p className="hero-copy" initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:.6, delay:.3}}>{siteConfig.description}</motion.p>
        </div>
        <motion.div className="hero-mark" initial={{opacity:0, scale:.8, rotate:-5}} animate={{opacity:1, scale:1, rotate:0}} transition={{duration:.8, delay:.25}}>
          <img src={siteConfig.logo} alt="ACM chapter logo" />
          <div className="hero-orbit orbit-one"></div><div className="hero-orbit orbit-two"></div>
        </motion.div>
      </div>
      <div className="hero-bottom"><span>SCROLL TO EXPLORE</span><span className="mono">01001011 01000101 01000101 01010000</span></div>
    </section>

    <section className="manifesto section container">
      <Reveal><p className="eyebrow">01 — A little about us</p><h2>We build<br />We break<br /><em>We learn</em><br />We do it together</h2></Reveal>
      <Reveal delay={.12} className="manifesto-copy"><p>ACM is a place to get curious about computing beyond the timetable. Come for a workshop, stay for a project, ask a ridiculous question, teach someone a thing you just figured out.</p><Link className="text-link" to="/about">Meet the chapter</Link></Reveal>
    </section>

    <section className="activities section container">
      <SectionHeader index="02" kicker="What we do" title="Six ways to get involved" text="Different interests. Same permission to start before you feel ready." />
      <div className="activity-list">{activities.map(([n, title, desc]) => <Reveal key={String(n)}><div className="activity-row"><span className="activity-number">{n}</span><h3>{String(title)}</h3><p>{String(desc)}</p></div></Reveal>)}</div>
    </section>

    <section className="events-preview section container">
      <SectionHeader index="03" kicker="From the calendar" title="Things worth showing up for" text="Explore workshops, talks, competitions and activities from the ACM-W IISU community." />
      <div className="featured-events">{featuredEvents.map((event, i) => <Reveal key={event.id} delay={i * .05}><EventCard event={event} compact /></Reveal>)}</div>
      <div className="section-end"><Link className="text-link" to="/events">View the event archive</Link></div>
    </section>

    <section className="join-strip">
      <div className="container join-inner"><div className="join-noise"></div><p className="eyebrow">04 — Your move</p><h2>You don't have to<br /><em>know everything</em><br />You just have to start</h2><Link className="button button-light" to="/join">Join ACM</Link><span className="join-coord">11° / 42° / START</span></div>
    </section>
  </div>
}
