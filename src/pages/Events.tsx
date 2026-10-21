import { useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { Reveal } from '../components/Reveal'
import { events, getEventStatus } from '../data/site'

const filters = ['All', 'Workshop', 'Talk', 'Competition', 'Hackathon', 'Community'] as const

export function Events() {
  const [now, setNow] = useState(() => new Date())
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 60_000)
    return () => clearInterval(id)
  }, [])
  const [filter, setFilter] = useState<typeof filters[number]>('All')
  const [selected, setSelected] = useState<(typeof events)[number] | null>(null)
  const filtered = useMemo(() => {
    const items = filter === 'All' ? [...events] : events.filter(e => e.category === filter)
    return items.sort((a, b) => {
      const aStatus = getEventStatus(a.dateValue, now)
      const bStatus = getEventStatus(b.dateValue, now)
      if (aStatus !== bStatus) return aStatus === 'Upcoming' ? -1 : 1
      const direction = aStatus === 'Upcoming' ? 1 : -1
      return direction * (new Date(a.dateValue).getTime() - new Date(b.dateValue).getTime())
    })
  }, [filter, now])
  return <div className="page container">
    <header className="page-hero page-hero-wide"><p className="eyebrow">Events / archive</p><h1>Show up<br /><em>Make something</em></h1><p className="lede">An evolving record of workshops, orientations, conferences and community experiments — past, present and what’s coming next.</p></header>
    <div className="filter-bar" role="group" aria-label="Filter events">{filters.map(f => <button key={f} className={filter === f ? 'active' : ''} onClick={() => setFilter(f)}>{f}</button>)}</div>
    <section className="event-archive">{filtered.map((event, i) => <Reveal key={event.id} delay={i * .04}><button className={`event-row ${getEventStatus(event.dateValue, now) === 'Upcoming' ? 'event-row-upcoming' : ''}`} onClick={() => setSelected(event)}><span className="event-row-date">{event.date}</span><span className="event-row-title">{event.title}</span><span className="event-row-type">{event.category}</span><span className={`status status-${getEventStatus(event.dateValue, now).toLowerCase()}`}>{getEventStatus(event.dateValue, now)}</span></button></Reveal>)}</section>
    <AnimatePresence>{selected && <motion.div className="modal-backdrop" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onClick={() => setSelected(null)}><motion.div className="event-modal" initial={{y:30, opacity:0}} animate={{y:0, opacity:1}} exit={{y:30, opacity:0}} onClick={e => e.stopPropagation()}><button className="modal-close" onClick={() => setSelected(null)}>Close</button><div className={`event-art art-${selected.accent}`}><span>ACM</span><b>{selected.category.toUpperCase()}</b></div><p className="eyebrow">{selected.date} · {getEventStatus(selected.dateValue, now)}</p><h2>{selected.title}</h2><p>{selected.description}</p></motion.div></motion.div>}</AnimatePresence>
  </div>
}
