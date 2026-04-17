import FAQList from '../components/FAQList'

export default function FAQPage() {
  return (
    <div className="sg-page">
      <header className="sg-page-head">
        <h1>Frequently asked questions</h1>
        <p className="sg-page-intro">
          Short answers to typical questions. For school-specific rules (shifting strands, class
          schedules), ask your school directly.
        </p>
      </header>
      <FAQList />
    </div>
  )
}
