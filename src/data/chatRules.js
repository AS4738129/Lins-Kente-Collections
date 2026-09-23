// Rule-based answers for the chat widget. No API, no ongoing cost — just keyword
// matching against a small set of common questions, with everything else routed
// to WhatsApp so a real person can help.
//
// To add a new topic: add an entry with a few keyword variants and a short answer.
// Keep answers honest — don't add prices, stock counts, or hours unless confirmed.

export const quickQuestions = [
  { id: 'styles', label: 'What Kente styles do you have?' },
  { id: 'location', label: 'Where is the shop located?' },
  { id: 'order', label: 'How do I place an order?' },
  { id: 'fabric', label: 'Do you sell fabric by the yard?' },
]

export const rules = [
  {
    id: 'styles',
    keywords: ['style', 'styles', 'design', 'collection', 'dress', 'smock', 'outfit', 'wear', 'clothing', 'clothes'],
    answer:
      "We carry authentic Kente styles for both women and men — dresses, smocks, and pieces for everyday wear and special occasions, plus Kente fabric by the roll. Have a look at our Collections and Gallery pages for real photos from the shop.",
  },
  {
    id: 'fabric',
    keywords: ['fabric', 'cloth', 'material', 'yard', 'yards', 'textile', 'roll'],
    answer:
      "Yes, we stock authentic Kente fabric alongside finished clothing. For exact widths, lengths, and what's currently in stock, please reach out on WhatsApp — our fabric selection changes often.",
  },
  {
    id: 'location',
    keywords: ['where', 'location', 'located', 'address', 'shop', 'find you', 'directions', 'map'],
    answer:
      "We're based in Tanoso, Techiman, Ghana. We haven't listed exact GPS coordinates here yet — message us on WhatsApp or call and we'll help you find us.",
  },
  {
    id: 'order',
    keywords: ['order', 'buy', 'purchase', 'how do i get', 'delivery', 'ship', 'shipping'],
    answer:
      "The best way to order is to message us directly on WhatsApp with the style you're interested in — we'll take it from there and sort out the details with you personally.",
  },
  {
    id: 'price',
    keywords: ['price', 'cost', 'how much', 'cedis', 'ghc', 'expensive', 'cheap'],
    answer:
      "Prices depend on the style and fabric, so we don't quote them here. Send us a WhatsApp message with the piece you like (a photo helps!) and we'll get you an accurate price.",
  },
  {
    id: 'hours',
    keywords: ['hour', 'hours', 'open', 'opening', 'close', 'closing', 'time'],
    answer:
      "We haven't confirmed our exact opening hours here yet — the quickest way to check is to message us on WhatsApp before you visit.",
  },
  {
    id: 'contact',
    keywords: ['phone', 'number', 'call', 'contact', 'whatsapp', 'reach'],
    answer:
      "You can reach Lins Kente Collections at +233 24 186 8025, by phone or WhatsApp.",
  },
]

const FALLBACK_ANSWER =
  "I don't have a confirmed answer for that one, but our team can help directly — tap below to continue on WhatsApp."

export function matchRule(input) {
  const text = input.toLowerCase()
  const hit = rules.find((rule) => rule.keywords.some((k) => text.includes(k)))
  return hit ? hit.answer : FALLBACK_ANSWER
}

export function matchById(id) {
  const hit = rules.find((rule) => rule.id === id)
  return hit ? hit.answer : FALLBACK_ANSWER
}
