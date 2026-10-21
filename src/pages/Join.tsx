import { motion } from 'motion/react'
import { siteConfig } from '../data/site'

const benefits = ['Learn new technologies', 'Attend hands-on workshops', 'Work on real projects', 'Meet other builders', 'Compete and collaborate', 'Grow technical & creative skills']

export function Join() {
  return <div className="page join-page container">
    <header className="page-hero join-hero"><p className="eyebrow">Join us / 01</p><h1>Your next<br /><em>project starts here</em></h1><p className="lede">You do not need a perfect GitHub, a 10/10 attendance record or a five-year master plan. You need a reason to be curious.</p></header>
    <section className="join-layout section"><div><p className="eyebrow">What you get</p><h2>Bring the question<br />We'll figure out the rest</h2></div><div className="benefit-list">{benefits.map((b, i) => <motion.div key={b} initial={{opacity:0, x:15}} whileInView={{opacity:1, x:0}} viewport={{once:true}} transition={{delay:i*.05}}><span>{b}</span><small>0{i+1}</small></motion.div>)}</div></section>
    <section className="join-card"><div><p className="eyebrow">02 — The easiest next step</p><h2>Join the<br /><em>community</em></h2></div><a className="button button-dark button-big" href={siteConfig.links.communityForm}>Join ACM community</a></section>
  </div>
}
