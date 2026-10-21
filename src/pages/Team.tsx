import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { Reveal } from '../components/Reveal'
import { TeamMember } from '../components/TeamMember'
import { teamGroups, type TeamMemberData } from '../data/site'

function renderIntro(intro?: string) {
  if (!intro?.trim()) return <span>Short introduction goes here — add a few lines written by the member in their own words.</span>

  const lines = intro.split('\n')
  return lines.map((line, index) => {
    const match = line.match(/\[([^\]]+)\]\((https?:\/\/[^)]+)\)/)
    if (!match) {
      return (
        <span key={`${index}-${line}`}>
          {line}
          {index < lines.length - 1 ? <br /> : null}
        </span>
      )
    }

    const [full, label, href] = match
    const parts = line.split(full)
    return (
      <span key={`${index}-${line}`}>
        {parts[0]}
        <a href={href} target="_blank" rel="noreferrer">{label}</a>
        {parts[1]}
        {index < lines.length - 1 ? <br /> : null}
      </span>
    )
  })
}

function TeamGroup({ group, groupIndex }: { group: typeof teamGroups[number]; groupIndex: number }) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
  const selected = selectedIndex === null ? null : group.members[selectedIndex]

  const selectedRow = selectedIndex === null ? null : Math.floor(selectedIndex / 4)
  const rowMembers: TeamMemberData[][] = []
  for (let i = 0; i < group.members.length; i += 4) rowMembers.push(group.members.slice(i, i + 4))

  return (
    <section className="team-section">
      <Reveal>
        <div className="team-heading">
          <span>{String(groupIndex + 1).padStart(2, '0')}</span>
          <h2>{group.title}</h2>
        </div>
      </Reveal>

      <div className="team-grid">
        {rowMembers.map((row, rowIndex) => (
          <div className="team-row" key={`${group.title}-row-${rowIndex}`}>
            {row.map((member, indexInRow) => {
              const index = rowIndex * 4 + indexInRow
              return (
                <TeamMember
                  key={`${group.title}-${index}`}
                  member={member}
                  index={index}
                  selected={selectedIndex === index}
                  onSelect={() => setSelectedIndex(selectedIndex === index ? null : index)}
                />
              )
            })}

            <AnimatePresence initial={false}>
              {selected && selectedRow === rowIndex && (
                <motion.section
                  className="team-detail-panel"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
                  aria-label={`${selected.name} details`}
                >
                  <div className="team-detail-image">
                    {selected.image ? (
                      <img src={selected.image} alt="" />
                    ) : (
                      <span>{selected.name.split(' ').map(word => word[0]).join('').slice(0, 2)}</span>
                    )}
                  </div>

                  <div className="team-detail-copy">
                    <div className="team-detail-topline">
                      <p className="eyebrow">{selected.role}</p>
                      <button type="button" className="team-detail-close" onClick={() => setSelectedIndex(null)} aria-label="Close team details">
                        Close
                      </button>
                    </div>
                    <h3>{selected.name}</h3>
                    <div className="team-detail-intro">{renderIntro(selected.intro)}</div>
                    <a className="member-linkedin" href={selected.linkedin} target="_blank" rel="noreferrer">
                      <span>Connect with {selected.name.split(' ')[0]} on LinkedIn</span>
                    </a>
                  </div>
                </motion.section>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  )
}

export function Team() {
  return (
    <div className="page container">
      <header className="page-hero">
        <p className="eyebrow">Team / the people</p>
        <h1>Built by<br /><em>people</em></h1>
        <p className="lede">The chapter is the people behind the workshops, pull requests, posters, late-night ideas and suspiciously ambitious side projects.</p>
      </header>

      {teamGroups.map((group, gi) => (
        <TeamGroup key={group.title} group={group} groupIndex={gi} />
      ))}
    </div>
  )
}
