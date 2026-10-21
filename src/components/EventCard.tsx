import { motion } from 'motion/react'
import { getEventStatus, type EventCategory } from '../data/site'

export type EventItem = { id: string; title: string; date: string; dateValue?: string; category: EventCategory; status: string; description: string; accent: string; registerUrl?: string }

export function EventCard({event, compact = false}: {event: EventItem; compact?: boolean}) {
  return (
    <motion.article className={`event-card ${compact ? 'compact' : ''}`} whileHover={{y: -5}}>
      <div className={`event-art art-${event.accent}`} aria-hidden="true">
        <span>ACM</span><b>{event.category.toUpperCase()}</b><i>/{event.id.replace('event-', '')}</i>
      </div>
      <div className="event-copy">
        <div className="event-meta"><span>{getEventStatus(event.dateValue)}</span><span>{event.date}</span></div>
        <h3>{event.title}</h3>
        <p>{event.description}</p>
      </div>
    </motion.article>
  )
}
