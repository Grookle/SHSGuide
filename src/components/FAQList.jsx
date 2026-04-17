import { useId, useState } from 'react'
import { faqs } from '../data/faqs'

export default function FAQList() {
  const baseId = useId()
  const [openId, setOpenId] = useState(faqs[0]?.id ?? null)

  return (
    <div className="sg-faq">
      {faqs.map((item) => {
        const panelId = `${baseId}-panel-${item.id}`
        const headerId = `${baseId}-header-${item.id}`
        const expanded = openId === item.id
        return (
          <div key={item.id} className="sg-faq-item">
            <h3 className="sg-faq-question">
              <button
                type="button"
                id={headerId}
                className="sg-faq-trigger"
                aria-expanded={expanded}
                aria-controls={panelId}
                onClick={() => setOpenId(expanded ? null : item.id)}
              >
                <span>{item.question}</span>
                <span className="sg-faq-icon" aria-hidden="true">
                  {expanded ? '−' : '+'}
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={headerId}
              className="sg-faq-panel"
              hidden={!expanded}
            >
              <p>{item.answer}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
