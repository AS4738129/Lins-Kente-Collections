# Lins Kente Collections — Website

A React + Vite + Tailwind CSS website for Lins Kente Collections, a Kente fashion and textile
business in Tanoso, Techiman, Ghana.

## Getting started

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually `http://localhost:5173`).

## Build for production

```bash
npm run build
```

This outputs a static site to `dist/`, ready to deploy.

## Chat widget

The site includes a chat widget (bottom-right, every page) at
`src/components/ChatWidget.jsx`. It's **rule-based, not AI** — no API key, no backend, no
ongoing cost:

- Tapping a suggested question, or typing something that matches a known topic (styles,
  location, ordering, fabric, price, hours, contact), gets an instant canned answer.
- Anything it doesn't recognize gets an honest "I don't have a confirmed answer for that" reply.
- After two exchanges, it surfaces a "Continue on WhatsApp" prompt so real questions reach a
  real person.

**To edit the answers:** open `src/data/chatRules.js`. Each entry has a list of trigger
`keywords` and an `answer` string — add new topics or adjust wording there. Add or remove the
buttons shown at the start of a chat in the `quickQuestions` array in the same file.

Because this is plain client-side matching, none of it needs Vercel functions, environment
variables, or a paid API key — if you'd like a true AI-powered version later (one that can hold
a real conversation), that's a separate build using something like a Vercel serverless function
calling the Claude API, and it does require an Anthropic API key.

## Deploying

- **Vercel:** import the project, framework preset "Vite", build command `npm run build`,
  output directory `dist`.
- **Cloudflare Pages:** build command `npm run build`, output directory `dist`.

## Images

All photos in `src/assets/images/` were extracted directly from the images supplied for this
project (the shop's own fabric and garment photography). No stock or AI-generated images were
used. If you have additional photos or video footage to add later:

1. Export still frames from the video (e.g. with `ffmpeg -i video.mp4 -vf fps=1 frame_%03d.jpg`).
2. Pick the clearest, least-blurry frames and crop as needed.
3. Save them into `src/assets/images/` and add an entry to `src/assets/images/index.js` (and to
   `galleryItems` if it should appear in the Collections/Gallery pages).

## Content notes

- No prices, stock levels, fabric specifications, founding date, or map coordinates were
  invented — the spec asked for these to be left out until verified, and they have been.
- The contact form is front-end only: it prepares a WhatsApp message rather than emailing the
  business, since no backend/email service is connected. See `src/components/ContactForm.jsx`
  if you'd like to wire it up to a real form service (e.g. Formspree, Resend, or a custom API).
- WhatsApp number used throughout: `+233241868025` (wa.me link: `https://wa.me/233241868025`).

## Project structure

```
src/
  assets/images/      Real product & shop photography + registry (index.js)
  components/         Navbar, Footer, Hero, WhyChooseUs, FeaturedCollections,
                       CTASection, GalleryLightbox, ContactForm, WhatsAppButton, Layout, PageHero
  pages/               Home, About, Collections, Gallery, Contact, NotFound
```
