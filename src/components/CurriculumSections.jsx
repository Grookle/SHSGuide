import {
  careerAlignmentNote,
  curriculumCategories,
  curriculumSimplification,
  fiveCoreSubjects,
  personalizedPathwaysNote,
  shsReformPurpose,
  skills21stCentury,
  structuralChanges,
  workImmersionNote,
} from '../data/curriculum'

export default function CurriculumSections() {
  return (
    <div className="sg-curriculum">
      <section className="sg-overview" aria-labelledby="overview-heading">
        <h2 id="overview-heading" className="sg-overview-title">
          {shsReformPurpose.headline}
        </h2>
        <div className="sg-overview-grid">
          <div className="sg-overview-card">
            <h3>SHS prepares you for</h3>
            <ul className="sg-checklist">
              {shsReformPurpose.goals.map((g) => (
                <li key={g}>{g}</li>
              ))}
            </ul>
          </div>
          <div className="sg-overview-card sg-overview-card-muted">
            <h3>Common pain points the reform targets</h3>
            <ul className="sg-checklist">
              {shsReformPurpose.painPoints.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>
        </div>
        <p className="sg-overview-role">{shsReformPurpose.shsGuideRole}</p>

        <h3 className="sg-subsection-title">Major structural changes</h3>
        <ul className="sg-change-list">
          {structuralChanges.map((c) => (
            <li key={c.title}>
              <strong>{c.title}</strong>
              <span className="sg-change-body">{c.body}</span>
            </li>
          ))}
        </ul>

        <div className="sg-callout">
          <h3 className="sg-callout-title">Curriculum load</h3>
          <p>{curriculumSimplification}</p>
        </div>

        <div className="sg-callout sg-callout-teal">
          <h3 className="sg-callout-title">Work immersion</h3>
          <p>{workImmersionNote}</p>
        </div>

        <div className="sg-callout">
          <h3 className="sg-callout-title">Career alignment</h3>
          <p>{careerAlignmentNote}</p>
        </div>

        <h3 className="sg-subsection-title">21st century skills emphasized</h3>
        <ul className="sg-pill-list">
          {skills21stCentury.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
        <p className="sg-pathways-note">{personalizedPathwaysNote}</p>
      </section>

      <section className="sg-core-section" aria-labelledby="core-heading">
        <h2 id="core-heading">Five core subjects (shared foundation)</h2>
        <p className="sg-core-lead">
          These sit at the center of the simplified model—alongside your track and elective clusters.
        </p>
        <ol className="sg-core-list">
          {fiveCoreSubjects.map((name, i) => (
            <li key={name}>
              <span className="sg-core-num">{i + 1}</span>
              {name}
            </li>
          ))}
        </ol>
      </section>

      {curriculumCategories.map((cat) => (
        <section key={cat.id} className="sg-cat" aria-labelledby={`cat-${cat.id}`}>
          <div className="sg-cat-head">
            <h2 id={`cat-${cat.id}`}>{cat.title}</h2>
            <span className="sg-badge">{cat.badge}</span>
          </div>
          <p className="sg-cat-desc">{cat.description}</p>

          <h3 className="sg-clusters-heading">Elective cluster examples</h3>
          <p className="sg-clusters-lead">
            You build your pathway through electives inside your track; clusters below are examples—final
            menus depend on your school.
          </p>

          <div className="sg-track-grid">
            {cat.electiveClusters.map((cluster) => (
              <article key={cluster.id} className="sg-track-card">
                <header className="sg-track-card-head">
                  <h3>{cluster.name}</h3>
                </header>
                <div className="sg-track-block">
                  <h4>Example electives / activities</h4>
                  <ul>
                    {cluster.examples.map((s) => (
                      <li key={s}>{s}</li>
                    ))}
                  </ul>
                </div>
                <div className="sg-track-block">
                  <h4>Career alignment</h4>
                  <p className="sg-track-career">{cluster.careers}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}
