import CurriculumSections from '../components/CurriculumSections'

export default function CurriculumPage() {
  return (
    <div className="sg-page">
      <header className="sg-page-head">
        <h1>Curriculum information</h1>
        <p className="sg-page-intro">
          This page reflects the streamlined two-track model, elective clusters, five core subjects,
          doorway option, reduced load, and expanded immersion themes. Lists are illustrative—confirm
          elective menus, hours, and policies with your school and official DepEd issuances.
        </p>
      </header>
      <CurriculumSections />
    </div>
  )
}
