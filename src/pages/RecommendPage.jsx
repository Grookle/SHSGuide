import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { pathwayResults, quizSteps } from '../data/recommendationQuiz'

const initialScores = () => ({ academic: 0, techpro: 0 })

function resolvePathway(scores) {
  const { academic, techpro } = scores
  const max = Math.max(academic, techpro)
  if (max === 0) return null
  if (academic === techpro) return pathwayResults.balanced
  return academic > techpro ? pathwayResults.academic : pathwayResults.techpro
}

export default function RecommendPage() {
  const [stepIndex, setStepIndex] = useState(0)
  const [scores, setScores] = useState(initialScores)
  const [electiveHints, setElectiveHints] = useState([])
  const [, setHistory] = useState([])
  const [selected, setSelected] = useState(() => new Set())

  const step = quizSteps[stepIndex]
  const isLast = stepIndex === quizSteps.length - 1

  const pathway = useMemo(() => resolvePathway(scores), [scores])

  const reset = () => {
    setStepIndex(0)
    setScores(initialScores())
    setElectiveHints([])
    setHistory([])
    setSelected(new Set())
  }

  const toggleMulti = (option) => {
    if (!step.multi) {
      setSelected(new Set([option.id]))
      return
    }
    setSelected((prev) => {
      const next = new Set(prev)
      if (next.has(option.id)) next.delete(option.id)
      else next.add(option.id)
      return next
    })
  }

  const handleBack = () => {
    setHistory((h) => {
      if (!h.length) return h
      const snap = h[h.length - 1]
      setScores(snap.scores)
      setElectiveHints(snap.electiveHints)
      setStepIndex((i) => Math.max(0, i - 1))
      setSelected(new Set())
      return h.slice(0, -1)
    })
  }

  const applyStep = () => {
    if (!step) return
    const opts = step.options.filter((o) => selected.has(o.id))
    if (!opts.length) return
    setHistory((h) => [...h, { scores: { ...scores }, electiveHints: [...electiveHints] }])
    setScores((prev) => {
      const next = { ...prev }
      opts.forEach((o) => {
        next.academic += o.scores.academic ?? 0
        next.techpro += o.scores.techpro ?? 0
      })
      return next
    })
    setElectiveHints((prev) => {
      const merged = new Set(prev)
      opts.forEach((o) => (o.electiveTags ?? []).forEach((t) => merged.add(t)))
      return [...merged]
    })
    setSelected(new Set())
    if (isLast) setStepIndex(quizSteps.length)
    else setStepIndex((i) => i + 1)
  }

  if (stepIndex >= quizSteps.length) {
    return (
      <div className="sg-page">
        <header className="sg-page-head">
          <h1>Your pathway suggestion</h1>
          <p className="sg-page-intro">
            Personalized decision support—not official placement. Use it with your family and guidance
            office to finalize track, elective clusters, and doorway choices.
          </p>
        </header>
        <div className="sg-matcher-result sg-matcher-result-rich">
          {pathway ? (
            <>
              <p className="sg-matcher-label">Suggested track focus</p>
              <h2 className="sg-matcher-track">{pathway.name}</h2>
              <p>{pathway.hint}</p>
              {electiveHints.length > 0 && (
                <div className="sg-matcher-electives">
                  <p className="sg-matcher-label">Elective & career ideas</p>
                  <ul>
                    {electiveHints.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                </div>
              )}
              <div className="sg-matcher-callouts">
                <p>
                  <strong>Five cores:</strong> Communication, Math, Science, Life &amp; Career Skills,
                  Philippine Studies—then your electives build the rest of your path.
                </p>
                <p>
                  <strong>Doorway:</strong> You may be able to take 1–2 electives from the other
                  track—ask your school.
                </p>
                <p>
                  <strong>Skills to grow:</strong> critical thinking, communication, digital literacy,
                  problem-solving, adaptability—whatever track you choose.
                </p>
              </div>
            </>
          ) : (
            <p>Try again and pick at least one option per step so we can suggest a direction.</p>
          )}
          <div className="sg-matcher-actions">
            <button type="button" className="sg-btn sg-btn-primary" onClick={reset}>
              Start over
            </button>
            <Link to="/curriculum" className="sg-btn sg-btn-ghost">
              Read curriculum
            </Link>
            <Link to="/chat" className="sg-btn sg-btn-ghost">
              Ask in chat
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="sg-page">
      <header className="sg-page-head">
        <h1>Pathway advisor</h1>
        <p className="sg-page-intro">
          Step {stepIndex + 1} of {quizSteps.length}. {step.subtitle} We use your goals and interests
          to suggest a track and elective directions—like a lightweight career recommender.
        </p>
      </header>

      <div className="sg-matcher">
        <h2 className="sg-matcher-title">{step.title}</h2>
        <div className="sg-matcher-options" role={step.multi ? 'group' : 'radiogroup'}>
          {step.options.map((opt) => {
            const active = selected.has(opt.id)
            return (
              <button
                key={opt.id}
                type="button"
                className={active ? 'sg-matcher-opt sg-matcher-opt-on' : 'sg-matcher-opt'}
                aria-pressed={active}
                onClick={() => toggleMulti(opt)}
              >
                {opt.label}
              </button>
            )
          })}
        </div>
        <div className="sg-matcher-footer">
          <button
            type="button"
            className="sg-btn sg-btn-primary"
            disabled={selected.size === 0}
            onClick={applyStep}
          >
            {isLast ? 'See suggestion' : 'Next'}
          </button>
          {stepIndex > 0 && (
            <button type="button" className="sg-btn sg-btn-ghost" onClick={handleBack}>
              Back
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
