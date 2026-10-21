export function SectionHeader({index, kicker, title, text}: {index: string; kicker: string; title: string; text?: string}) {
  return <div className="section-head"><span className="section-index">{index}</span><div><p className="eyebrow">{kicker}</p><h2>{title}</h2>{text && <p className="section-text">{text}</p>}</div></div>
}
