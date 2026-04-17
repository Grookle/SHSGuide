import { useCallback, useEffect, useRef, useState } from 'react'
import { suggestedPrompts } from '../data/suggestedPrompts'
import { getMockReply } from '../lib/getMockReply'

function formatAssistantText(text) {
  return text.split(/\*\*(.+?)\*\*/g).map((part, i) =>
    i % 2 === 1 ? (
      <strong key={i}>{part}</strong>
    ) : (
      <span key={i}>{part}</span>
    ),
  )
}

export default function ChatInterface() {
  const [messages, setMessages] = useState([
    {
      id: 'welcome',
      role: 'assistant',
      content:
        'Welcome to SHSGuide. Ask about the two tracks, elective clusters, doorway options, work immersion, or careers—or tap a suggested question. (Preview mode: simulated replies until your AI backend is connected.)',
    },
  ])
  const [input, setInput] = useState('')
  const [busy, setBusy] = useState(false)
  const listRef = useRef(null)

  const scrollToBottom = useCallback(() => {
    const el = listRef.current
    if (el) el.scrollTop = el.scrollHeight
  }, [])

  useEffect(() => {
    scrollToBottom()
  }, [messages, scrollToBottom])

  const sendText = useCallback(
    (raw) => {
      const text = typeof raw === 'string' ? raw.trim() : input.trim()
      if (!text || busy) return
      setInput('')
      const userMsg = { id: `u-${Date.now()}`, role: 'user', content: text }
      setMessages((m) => [...m, userMsg])
      setBusy(true)
      window.setTimeout(() => {
        const reply = getMockReply(text)
        setMessages((m) => [
          ...m,
          { id: `a-${Date.now()}`, role: 'assistant', content: reply },
        ])
        setBusy(false)
      }, 450)
    },
    [input, busy],
  )

  return (
    <div className="sg-chat">
      <div className="sg-chat-panel" aria-live="polite">
        <div className="sg-chat-messages" ref={listRef} role="log" aria-relevant="additions">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={msg.role === 'user' ? 'sg-bubble sg-bubble-user' : 'sg-bubble sg-bubble-assistant'}
            >
              <span className="sg-bubble-label">
                {msg.role === 'user' ? 'You' : 'SHSGuide'}
              </span>
              <div className="sg-bubble-body">
                {msg.role === 'assistant' ? formatAssistantText(msg.content) : msg.content}
              </div>
            </div>
          ))}
          {busy && (
            <div className="sg-bubble sg-bubble-assistant sg-bubble-typing" aria-busy="true">
              <span className="sg-bubble-label">SHSGuide</span>
              <div className="sg-typing">
                <span />
                <span />
                <span />
              </div>
            </div>
          )}
        </div>

        <div className="sg-prompts" role="group" aria-label="Suggested questions">
          {suggestedPrompts.map((p) => (
            <button
              key={p}
              type="button"
              className="sg-chip"
              disabled={busy}
              onClick={() => sendText(p)}
            >
              {p}
            </button>
          ))}
        </div>

        <form
          className="sg-composer"
          onSubmit={(e) => {
            e.preventDefault()
            sendText()
          }}
        >
          <label htmlFor="chat-input" className="visually-hidden">
            Message
          </label>
          <input
            id="chat-input"
            className="sg-input"
            placeholder="Ask about SHS tracks, subjects, or careers…"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            disabled={busy}
            autoComplete="off"
          />
          <button type="submit" className="sg-btn sg-btn-primary" disabled={busy || !input.trim()}>
            Send
          </button>
        </form>
      </div>
    </div>
  )
}
