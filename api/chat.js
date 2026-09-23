// Vercel serverless function: POST /api/chat
// Keeps the Anthropic API key on the server. Never call api.anthropic.com directly
// from the browser — that would expose your key to every visitor.
//
// Setup:
//   1. In the Vercel project dashboard, add an environment variable named
//      ANTHROPIC_API_KEY with your key from https://console.anthropic.com
//   2. Redeploy (or run `vercel dev` locally with a `.env` file — see .env.example).

export const config = {
  runtime: 'nodejs',
}

const MODEL = 'claude-sonnet-5'
const MAX_TOKENS = 500
const MAX_HISTORY_MESSAGES = 12 // keep requests small and cheap

const SYSTEM_PROMPT = `You are the friendly virtual assistant for Lins Kente Collections, a Kente
fashion and textile business located in Tanoso, Techiman, Ghana. Phone/WhatsApp: +233 24 186 8025.

What you know and can talk about:
- The business sells authentic Kente fabrics and Kente clothing (dresses, smocks, and styles for
  men and women) for different occasions.
- The shop is based in Tanoso, Techiman, Ghana.
- Customers can reach the business by phone or WhatsApp at +233 24 186 8025.
- The website has Home, About, Collections, Gallery, and Contact pages.

Strict rules:
- Never invent prices, stock levels, exact fabric specifications, delivery times, opening hours,
  or an exact street address/map location — these are not confirmed. If asked, say you don't have
  that confirmed detail and suggest contacting the shop directly by phone or WhatsApp.
- Never invent promotions, discounts, or guarantees.
- For anything about buying a specific piece, checking availability, or pricing, warmly direct
  the customer to WhatsApp (+233 24 186 8025) or the Contact page so a real person can help.
- Keep replies short, warm, and conversational — a few sentences at most, like a helpful shop
  assistant, not a long essay.
- If asked something unrelated to Kente, fashion, or the business, gently steer back.`

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const apiKey = process.env.ANTHROPIC_API_KEY
  if (!apiKey) {
    return res.status(500).json({
      error: 'The chat assistant is not configured yet. Please contact the site owner.',
    })
  }

  let body
  try {
    body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body
  } catch {
    return res.status(400).json({ error: 'Invalid request body' })
  }

  const messages = Array.isArray(body?.messages) ? body.messages : null
  if (!messages || messages.length === 0) {
    return res.status(400).json({ error: 'A "messages" array is required.' })
  }

  const trimmed = messages
    .slice(-MAX_HISTORY_MESSAGES)
    .filter((m) => m && (m.role === 'user' || m.role === 'assistant') && typeof m.content === 'string')
    .map((m) => ({ role: m.role, content: m.content.slice(0, 2000) }))

  if (trimmed.length === 0) {
    return res.status(400).json({ error: 'No valid messages provided.' })
  }

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: MODEL,
        max_tokens: MAX_TOKENS,
        system: SYSTEM_PROMPT,
        messages: trimmed,
      }),
    })

    if (!response.ok) {
      const detail = await response.text()
      console.error('Anthropic API error:', response.status, detail)
      return res.status(502).json({ error: 'The chat assistant is having trouble right now.' })
    }

    const data = await response.json()
    const text = (data.content || [])
      .filter((block) => block.type === 'text')
      .map((block) => block.text)
      .join('\n')
      .trim()

    return res.status(200).json({ reply: text || "Sorry, I didn't catch that — could you try rephrasing?" })
  } catch (err) {
    console.error('Chat handler error:', err)
    return res.status(500).json({ error: 'Something went wrong. Please try again in a moment.' })
  }
}
