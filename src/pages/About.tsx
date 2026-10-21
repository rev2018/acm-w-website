import { Reveal } from '../components/Reveal'
import { SectionHeader } from '../components/SectionHeader'
import { siteConfig } from '../data/site'

export function About() {
  return <div className="page container">
    <header className="page-hero"><p className="eyebrow">About the chapter / 01</p><h1>More than<br /><em>a club</em></h1><p className="lede">A student community for learning, experimentation and the strange little joy of figuring things out with other people.</p></header>
    <section className="about-intro section"><Reveal><div className="editorial-label">THE SHORT VERSION</div><h2>Computing gets better when it stops being a solo sport</h2></Reveal><Reveal delay={.1}><div className="about-copy"><p>{siteConfig.chapterName} is the student chapter of the Association for Computing Machinery at {siteConfig.collegeName}. It brings students together to explore computing, exchange ideas and take part in learning experiences beyond the classroom.</p><p>What belongs here is simple: a place where students can encounter ideas, build projects, meet mentors, test their skills and find collaborators.</p></div></Reveal></section>
    <section className="split-section section"><SectionHeader index="02" kicker="Mission" title="Learn Build Share" text="Three verbs, one community. The rest is up to the people who show up." /><div className="value-grid"><Reveal><article><span>01</span><h3>Curiosity</h3><p>Follow the question even when it is not on the syllabus.</p></article></Reveal><Reveal delay={.08}><article><span>02</span><h3>Community</h3><p>Make room for beginners, specialists, mentors and weird side quests.</p></article></Reveal><Reveal delay={.16}><article><span>03</span><h3>Perspective</h3><p>Connect campus learning to the wider computing community.</p></article></Reveal></div></section>
    <section className="about-statement section"><p className="eyebrow">03 — Why ACM?</p><h2>Because the best learning rarely happens in a perfectly labelled box</h2><p>Through workshops, talks, competitions, peer learning and collaborative activities, students can explore new technologies, strengthen practical skills and connect with others who share an interest in computing.</p></section>
    <section className="page-cta"><div><p className="eyebrow">Ready?</p><h2>Find your people</h2></div><a className="button button-dark" href="/join">See how to join</a></section>
  </div>
}
