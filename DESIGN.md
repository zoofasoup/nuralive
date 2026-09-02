---
name: NurAlive
description: Warm, clean DTC-wellness canon for an Indonesian family herbal drops brand — quality bar ritual.com.
colors:
  paper: "#fbf8f2"
  cream: "#f3eee1"
  cream-deep: "#e8e0cc"
  ink: "#22301c"
  ink-soft: "#516049"
  forest: "#2f4f2a"
  forest-deep: "#1f3a1c"
  forest-pale: "#dde6d2"
  clay: "#ae501f"
  clay-deep: "#8b3f17"
  clay-pale: "#f3dcc9"
  line: "#ddd5c0"
  danger: "#b3261e"
typography:
  display:
    fontFamily: "Parkinsans, system-ui, sans-serif"
    fontWeight: 700
    letterSpacing: "-0.01em"
  body:
    fontFamily: "SN Pro, system-ui, sans-serif"
    fontWeight: 400
rounded:
  sm: "8px"
  md: "12px"
components:
  button-primary:
    backgroundColor: "{colors.clay}"
    textColor: "#ffffff"
    rounded: "{rounded.sm}"
    padding: "16px 32px"
  button-primary-hover:
    backgroundColor: "{colors.clay-deep}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.forest}"
    rounded: "{rounded.sm}"
  badge-tag:
    backgroundColor: "{colors.clay-pale}"
    textColor: "{colors.clay-deep}"
    rounded: "{rounded.md}"
---

## Overview

NurAlive is a Next.js static-export marketing hub (no internal checkout —
every purchase path routes to Shopee, Tokopedia, the Jubelio webstore, or
WhatsApp) for a family herbal-drops product. The design canon was chosen
deliberately over an assigned, culturally-grounded "vintage Indonesian jamu
advertising" direction: the owner picked the standing exit — a clean,
modern DTC-wellness look — with **ritual.com** named explicitly as the
craft-quality bar. Execute this canon at full fidelity: restrained,
confident, flat, generous with space. Never smuggle in the rejected
direction's vintage/poster energy.

## Colors

Color strategy is **Restrained-plus-one-accent**, not Full-palette: warm
paper/cream neutrals carry the page, deep forest green is the primary
brand/action color, and a single burnt-clay accent marks price, savings,
and secondary emphasis. No gradients anywhere — every fill is flat. All
text-color pairings are verified ≥4.5:1 (body) or ≥3:1 (large/decorative);
`clay` (not `clay-deep`) is reserved for decorative/large use only since it
only clears 3.98:1 on `paper`.

- `paper` / `cream` / `cream-deep`: three neutral steps for section
  alternation, darkest to lightest ground.
- `ink` / `ink-soft`: text — `ink-soft` is a desaturated forest-green tint,
  never plain gray (tint secondary text from the page's own hue).
- `forest` / `forest-deep` / `forest-pale`: primary brand green — links,
  primary icons, the highlighted pricing tier, dark section backgrounds
  (Komposisi).
- `clay` / `clay-deep` / `clay-pale`: the one accent — CTA buttons
  (`clay`/`clay-deep` hover), price emphasis, savings badges.

## Typography

Display face is **Parkinsans** (headline, `font-display` utility, weight
600–800, tight tracking), body face is **SN Pro** (weight 400–600). Both
loaded via `next/font/google` in `src/app/layout.tsx` — real Google Fonts
entries, not a self-hosted substitute. No kicker/eyebrow labels above any
heading anywhere on the site — headings carry their own weight, full stop.

## Layout

Content max-width `max-w-6xl` (pricing/testimonials use narrower
`max-w-4xl`/`max-w-3xl`). Sections alternate `bg-paper` / `bg-cream` for
rhythm; one section (`Ingredients`) inverts to `bg-forest-deep` as the
page's single dark moment. Mobile-first Tailwind breakpoints throughout;
persona chips wrap via flexbox, comparison table scrolls horizontally on
narrow viewports rather than breaking.

## Elevation & Depth

Mostly flat — borders (`border-line`) and background-color steps do the
separating work, not shadows. The one exception: the highlighted "Paling
Populer" pricing card gets `shadow-lg` plus a `border-forest` and a
`-translate-y-3` lift, so exactly one card in that row reads as elevated.
The hero carousel's prev/next controls float on `bg-black/30 backdrop-blur`
over photography — the only blur-as-legibility-aid in the system.

## Shapes

`rounded-lg`/`rounded-xl` on cards, buttons, and image containers — no
`rounded-full` pill buttons in this canon (that was the previous
iteration's habit). Carousel dot indicators are the one `rounded-full` use,
appropriate for their form.

## Components

- **Icon system** (`src/components/Icon.tsx`): every icon is an authored
  SVG in one consistent 1.5px-stroke line style (24×24 viewBox), including
  `star`, `check`, `chevron`, `shield`, `badge`, `seed`, `drop` — added
  specifically to retire emoji and Unicode glyphs (★, ✓, +, 🛡️, 🇮🇩, 🚚)
  that the previous iteration used as icons.
- **ChannelButtons** (`src/components/ChannelButtons.tsx`): the "buy
  anywhere" row — Shopee/Tokopedia/Website/WhatsApp, each brand-tinted but
  contrast-corrected (see component comment for the exact darkened values).
- **HeroCarousel** (`src/components/landing/HeroCarousel.tsx`): full-bleed
  banner above the two-column Hero. Real campaign photography from the
  design team (not this build's own imagery), art-directed per breakpoint
  via `<picture>` (750×900 portrait crop below `sm`, 1920×720 landscape
  crop above), functional-state autoplay (6s, pauses on hover/focus,
  disabled under `prefers-reduced-motion`), dot + arrow navigation, every
  slide links to `#paket`.
- **Persona chips** (ForWho section): pill-shaped icon+label chips in a
  wrapping flex row — deliberately not another icon-card grid, to avoid
  repeating TrustBar's and Guarantee's card language a third time.

## Do's and Don'ts

- **Don't** add a kicker/eyebrow line above any heading — banned outright,
  no exception, per this project's craft floor.
- **Don't** re-introduce emoji or bare Unicode glyphs (★ ✓ + 🛡️) as icons —
  use `Icon.tsx`.
- **Don't** use a gradient fill on text or buttons — every fill is flat.
- **Don't** show a certification number that isn't real — both are real now
  (`BRAND.bpomNumber` = TR266032421, `BRAND.halalNumber` = ID
  35410035265411125). The rule that matters going forward: never hardcode
  a *new* cert/registration number without the owner confirming it first.
- **Don't** fabricate live stock/order counters — `UrgencyBar` intentionally
  only states evergreen shipping facts, not numbers that would freeze
  forever on this static-export site.
- **Do** darken any new brand-adjacent hue (a marketplace's brand color,
  a new accent) before using it as text color on `paper`/`cream` — verify
  ≥4.5:1 the way `ChannelButtons` and this file's palette already do.
