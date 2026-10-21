import { motion } from 'motion/react'
import type { TeamMemberData } from '../data/site'

export function TeamMember({
  member,
  index = 0,
  selected = false,
  onSelect,
}: {
  member: TeamMemberData
  index?: number
  selected?: boolean
  onSelect?: () => void
}) {
  return (
    <motion.article
      className={`member-card ${index < 4 ? 'member-card-top-row' : ''} ${selected ? 'is-selected' : ''}`}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, delay: index * 0.04 }}
      whileHover={{ y: -4 }}
    >
      <button
        className="member-card-button"
        type="button"
        onClick={onSelect}
        aria-pressed={selected}
        aria-label={`View ${member.name}`}
      >
        <div className="member-photo">
          {member.image ? (
            <img src={member.image} alt={`${member.name} — ${member.role}`} className="member-image" />
          ) : (
            <>
              <span>{member.name.split(' ').map(word => word[0]).join('').slice(0, 2)}</span>
              <small>PHOTO / ADD LATER</small>
            </>
          )}
          <div className="member-hover-overlay">
            <span>{member.role}</span>
            <strong>{member.name}</strong>
          </div>
        </div>
        <div className="member-info">
          <div>
            <h3>{member.name}</h3>
            <p>{member.role}</p>
          </div>
          <span className="member-open" aria-hidden="true">View</span>
        </div>
      </button>
    </motion.article>
  )
}
