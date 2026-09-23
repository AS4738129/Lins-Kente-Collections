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

## AI chat agent

The site includes a chat widget (bottom-right, every page) backed by a Vercel serverless
function at `api/chat.js`, which calls the Claude API server-side so your API key is never
exposed to visitors.

**Setup:**

1. Get an API key from [console.anthropic.com](https://console.anthropic.com).
2. In your Vercel project settings, add an environment variable:
   - Name: `ANTHROPIC_API_KEY`
   - Value: your key
3. Deploy (or redeploy). The widget will start working automatically — no frontend changes
   needed.

**Local testing:** `npm run dev` (plain Vite) does not run the `/api` function, so the chat
widget will show its "couldn't respond, try WhatsApp" fallback locally. To test the real chat
agent before deploying:

```bash
npm install -g vercel   # one-time
cp .env.example .env    # then fill in your real key
vercel dev
```

**What the assistant knows:** only what's in `api/chat.js`'s system prompt — the business name,
location, phone/WhatsApp number, and the kinds of products sold. It's instructed not to invent
prices, stock, specifications, or hours, and to direct real purchase questions to WhatsApp. Edit
the `SYSTEM_PROMPT` constant in `api/chat.js` to add real details (hours, more product info) as
you confirm them.

**Cost:** each message is a small API call (Claude Sonnet 5, capped at 500 output tokens, with
history trimmed to the last 12 messages). Keep an eye on usage in the Anthropic Console,
especially once the site gets real traffic.

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
