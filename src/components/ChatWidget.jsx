import { useEffect, useRef, useState } from 'react'
import { getWhatsAppLink } from './WhatsAppButton.jsx'
import { quickQuestions, matchRule, matchById } from '../data/chatRules.js'

const WELCOME_MESSAGE = {
  role: 'assistant',
  content:
    "Hello! I'm the Lins Kente Collections assistant. Tap a question below, or type your own — for anything I can't answer, I'll connect you straight to WhatsApp.",
}

const THINKING_DELAY_MS = 450 // small pause so replies don't feel instant/robotic

export default function ChatWidget() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([WELCOME_MESSAGE])
  const [input, setInput] = useState('')
  const [thinking, setThinking] = useState(false)
  const [askedCount, setAskedCount] = useState(0)
  const scrollRef = useRef(null)

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages, thinking, open])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const reply = (userText, answer) => {
    setMessages((prev) => [...prev, { role: 'user', content: userText }])
    setThinking(true)
    setAskedCount((c) => c + 1)
    window.setTimeout(() => {
      setMessages((prev) => [...prev, { role: 'assistant', content: answer }])
      setThinking(false)
    }, THINKING_DELAY_MS)
  }

  const handleQuickQuestion = (q) => {
    reply(q.label, matchById(q.id))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const text = input.trim()
    if (!text || thinking) return
    reply(text, matchRule(text))
    setInput('')
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? 'Close chat' : 'Open chat with our assistant'}
        aria-expanded={open}
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-ink text-cream shadow-lg shadow-ink/30 transition-transform hover:scale-105 sm:bottom-7 sm:right-7"
      >
        {open ? (
          <span className="text-2xl leading-none">&times;</span>
        ) : (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-6 w-6">
            <path
              d="M4 12a8 8 0 1 1 3.2 6.4L4 19.5l1.1-3.2A7.96 7.96 0 0 1 4 12Z"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </button>

      <div
        className={`fixed inset-x-4 bottom-24 z-50 flex max-h-[70vh] flex-col rounded-2xl border border-ink/10 bg-cream shadow-2xl shadow-ink/20 transition-all duration-200 sm:inset-x-auto sm:bottom-28 sm:right-7 sm:w-96 ${
          open ? 'pointer-events-auto translate-y-0 opacity-100' : 'pointer-events-none translate-y-3 opacity-0'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Chat with Lins Kente Collections assistant"
      >
        <div className="flex items-center justify-between rounded-t-2xl bg-ink px-5 py-4 text-cream">
          <div>
            <p className="font-display text-base font-semibold">Lins Kente Assistant</p>
            <p className="text-xs text-cream/60">Quick answers &middot; instant replies</p>
          </div>
          <button type="button" onClick={() => setOpen(false)} aria-label="Close chat" className="text-xl leading-none sm:hidden">
            &times;
          </button>
        </div>

        <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
          {messages.map((m, i) => (
            <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <p
                className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                  m.role === 'user'
                    ? 'rounded-br-sm bg-ink text-cream'
                    : 'rounded-bl-sm bg-ink/5 text-ink'
                }`}
              >
                {m.content}
              </p>
            </div>
          ))}

          {thinking && (
            <div className="flex justify-start">
              <div className="flex items-center gap-1 rounded-2xl rounded-bl-sm bg-ink/5 px-4 py-3">
                <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-ink/40 [animation-delay:-0.3s]" />
                <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-ink/40 [animation-delay:-0.15s]" />
                <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-ink/40" />
              </div>
            </div>
          )}

          {!thinking && (
            <div className="flex flex-wrap gap-2 pt-1">
              {quickQuestions.map((q) => (
                <button
                  key={q.id}
                  type="button"
                  onClick={() => handleQuickQuestion(q)}
                  className="rounded-full border border-ink/15 px-3 py-1.5 text-xs font-medium text-ink/70 hover:border-ink/30 hover:text-ink"
                >
                  {q.label}
                </button>
              ))}
            </div>
          )}

          {askedCount >= 2 && !thinking && (
            <div className="rounded-xl border border-forest/25 bg-forest/5 p-3 text-sm text-ink/80">
              Still have questions?{' '}
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline font-semibold text-forest"
              >
                Continue on WhatsApp
              </a>{' '}
              for a real, personal answer.
            </div>
          )}
        </div>

        <form onSubmit={handleSubmit} className="flex items-center gap-2 border-t border-ink/10 p-3">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about our Kente styles..."
            className="flex-1 rounded-full bg-ink/5 px-4 py-2.5 text-sm text-ink outline-none focus:bg-ink/10"
          />
          <button
            type="submit"
            disabled={thinking || !input.trim()}
            aria-label="Send message"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-ink text-cream transition-opacity disabled:opacity-40"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
              <path d="M3 20l18-8L3 4v6l12 2-12 2z" />
            </svg>
          </button>
        </form>
      </div>
    </>
  )
}
