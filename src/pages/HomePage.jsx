import { Link } from 'react-router-dom'
import { techProCardSubtitle, techProHeroTagline } from '../data/techProDirective'

export default function HomePage() {
  return (
    <div className="sg-page sg-home">
      <section className="sg-hero">
        <div className="sg-hero-copy">
          <p className="sg-eyebrow">Senior High School · Philippines</p>
          <h1>Understand SHS tracks, subjects, and pathways—anytime.</h1>
          <p className="sg-lead">
            SHSGuide is a smart-style companion for the updated SHS: two tracks (Academic and
            TechPro), elective clusters instead of fixed strands, five core subjects, doorway
            electives, and stronger career alignment—explore in the curriculum module, pathway
            advisor, chat (preview), and FAQ.
          </p>
          <div className="sg-hero-actions">
            <Link to="/chat" className="sg-btn sg-btn-primary">
              Open chat
            </Link>
            <Link to="/curriculum" className="sg-btn sg-btn-ghost">
              Browse curriculum
            </Link>
          </div>
        </div>
        <div className="sg-hero-cards">
          <div className="sg-hero-card">
            <span className="sg-hero-card-title">Academic</span>
            <span className="sg-hero-card-sub">Elective clusters · Doorway · Five cores</span>
          </div>
          <div className="sg-hero-card sg-hero-card-alt">
            <span className="sg-hero-card-title">TechPro</span>
            <span className="sg-hero-card-sub">{techProCardSubtitle}</span>
            <span className="sg-hero-card-sub sg-hero-card-tagline">{techProHeroTagline}</span>
          </div>
        </div>
      </section>

      <section className="sg-features" aria-labelledby="features-heading">
        <h2 id="features-heading" className="sg-section-title">
          What you can do here
        </h2>
        <ul className="sg-feature-grid">
          <li className="sg-feature">
            <h3>Curriculum explainer chat (preview)</h3>
            <p>
              Ask about tracks, elective clusters, doorway mixes, immersion hours, cores vs electives,
              and jobs—with suggested prompts when you do not know what to ask.
            </p>
            <Link to="/chat" className="sg-text-link">
              Go to chat →
            </Link>
          </li>
          <li className="sg-feature">
            <h3>Curriculum &amp; reform overview</h3>
            <p>
              Two tracks, elective cluster examples, five core subjects, simplification, 320–640 hour
              immersion, 21st century skills, and career alignment—browse without chatting.
            </p>
            <Link to="/curriculum" className="sg-text-link">
              View curriculum →
            </Link>
          </li>
          <li className="sg-feature">
            <h3>Pathway advisor</h3>
            <p>
              Goals, elective interests, and learning style—suggests Academic vs TechPro plus elective
              directions (career recommender style). Not official placement.
            </p>
            <Link to="/matcher" className="sg-text-link">
              Open pathway advisor →
            </Link>
          </li>
          <li className="sg-feature">
            <h3>FAQ</h3>
            <p>FAQs on clusters vs strands, doorway, subject load, immersion, cores, and careers.</p>
            <Link to="/faq" className="sg-text-link">
              Read FAQ →
            </Link>
          </li>
        </ul>
      </section>
    </div>
  )
}
