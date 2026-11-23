# Silencio — Style Reference
> white room with floating artifacts. A warm-paper gallery vitrine where every element earns its space against negative volume, and silence is a deliberate design material.

**Theme:** light

Source measurements are normalized; roles and recommendations are interpreted. Font summary lists are independent, not paired by position. HTML examples are reconstructions, not source components.

Silencio operates as a visual silence — a monochrome gallery where objects float on warm paper-white and typography does nearly all the talking. The system strips away every non-essential: no chromatic accents, no shadows, no decorative geometry; instead it relies on extreme type contrast (141px display whispers next to 9px metadata) and one warm gray (#dbdad9) as the only departure from pure black-on-white. Surfaces are paper-flat, separated by hairline rules and small radius (7.2px) rather than elevation. The brand voice reads like museum wall text: centered, brief, slightly italicized by silence, with monospaced labels (PT Mono, 11px) used as quiet signatures next to a custom Haas grotesque. Components feel like printed catalog pages more than web UI — buttons are full pill shapes (129.6px), cards have a single rounded corner, and the whole composition breathes with the confidence of a room with nothing on its walls.

## Tokens — Colors

| Name | Value | Token | Role |
|------|-------|-------|------|
| Ink Black | `#000000` | `--color-ink-black` | Primary text, iconography, hairline rules, table borders — the only high-contrast element on the page |
| Paper Warm Gray | `#dbdad9` | `--color-paper-warm-gray` | Card surfaces, soft fills, the single chromatic departure from pure white, gentle gradient origin |
| Graphite Border | `#808080` | `--color-graphite-border` | Subtle table dividers and secondary rule lines — used when #000000 would feel too heavy |
| Bleach White | `#ffffff` | `--color-bleach-white` | Supporting palette color for small decorative accents when the core palette needs contrast. |

## Tokens — Typography

### HaasR — Workhorse grotesque for body, subheadings, and mid-size headings. Weight 100 is used for restraint in body contexts; 700 sparingly for emphasis. The single most-used face carries the page. · `--font-haasr`
- **Substitute:** Inter, Söhne, Neue Haas Grotesk
- **Weights:** 100, 400, 700
- **Sizes:** 9px, 12px, 16px, 19px, 22px, 39px, 58px
- **Line height:** 0.90–1.40
- **Role:** Workhorse grotesque for body, subheadings, and mid-size headings. Weight 100 is used for restraint in body contexts; 700 sparingly for emphasis. The single most-used face carries the page.

### HaasT — Display-only face at 141px with tightened leading (0.90). Used for hero statements and singular set-pieces — the only moment typography shouts, and it shouts at full volume against pure white. · `--font-haast`
- **Substitute:** Neue Haas Grotesk Display, Söhne Breit, Inter Display at weight 100
- **Weights:** 100, 400
- **Sizes:** 141px
- **Line height:** 0.90
- **Role:** Display-only face at 141px with tightened leading (0.90). Used for hero statements and singular set-pieces — the only moment typography shouts, and it shouts at full volume against pure white.

### PT Mono — Metadata, spec labels, catalog tags — the typographic equivalent of a printed museum label. Appears at 11px only; functions as a quiet signature rather than informational copy. · `--font-pt-mono`
- **Substitute:** IBM Plex Mono, JetBrains Mono
- **Weights:** 400
- **Sizes:** 11px
- **Line height:** 1.20
- **Role:** Metadata, spec labels, catalog tags — the typographic equivalent of a printed museum label. Appears at 11px only; functions as a quiet signature rather than informational copy.

### Type Scale

| Role | Family | Weight | Size | Line Height | Letter Spacing | Token |
|------|--------|--------|------|-------------|----------------|-------|
| body | — | — | 16px | 1.4 | — | `--text-body` |
| subheading | — | — | 22px | 1.1 | — | `--text-subheading` |
| heading-sm | — | — | 39px | 1 | — | `--text-heading-sm` |
| heading | — | — | 58px | 0.9 | — | `--text-heading` |
| display | — | — | 141px | 0.9 | — | `--text-display` |

## Tokens — Spacing & Shapes

**Base unit:** 4px

**Density:** comfortable

### Spacing Scale

| Name | Value | Token |
|------|-------|-------|
| 4 | 4px | `--spacing-4` |
| 6 | 6px | `--spacing-6` |
| 7 | 7px | `--spacing-7` |
| 10 | 10px | `--spacing-10` |
| 14 | 14px | `--spacing-14` |
| 16 | 16px | `--spacing-16` |
| 17 | 17px | `--spacing-17` |
| 22 | 22px | `--spacing-22` |
| 29 | 29px | `--spacing-29` |
| 43 | 43px | `--spacing-43` |
| 72 | 72px | `--spacing-72` |
| 144 | 144px | `--spacing-144` |
| 173 | 173px | `--spacing-173` |

### Border Radius

| Element | Value |
|---------|-------|
| tags | 9999px |
| cards | 7.2px |
| buttons | 129.6px |
| surfaces | 43.2px |

### Layout

- **Page max-width:** 1440px
- **Section gap:** 43px
- **Card padding:** 29px
- **Element gap:** 7px

## Components

### Pill Button
**Role:** Primary interactive element
Full pill radius (129.6px), 14px vertical × 29px horizontal padding, Inkwel Black border at 1px, transparent fill. Text in HaasR 12px weight 400 #000000. No fill state — the outline IS the button.

### Ghost Link
**Role:** Inline navigation and content links
No underline, no color shift. HaasR 16px weight 400 #000000. Underline appears only on hover at 1px, #000000, 2px offset. The link reads as a continuation of the sentence, not a clickable widget.

### Paper Card
**Role:** Grouped content surface
Background #dbdad9, no border, radius 7.2px, padding 29px on all sides. No shadow. The card's only separation from the white canvas is its warm gray fill — a whisper of elevation.

### Display Headline
**Role:** Hero and section set-pieces
HaasT weight 100 at 141px, lineHeight 0.90, color #000000, letter-spacing normal, centered. Used at most once per viewport. Pairs with PT Mono 11px caption directly beneath as a museum-style label.

### Museum Label
**Role:** Metadata, catalog tags, object captions
PT Mono 11px weight 400 #000000, lineHeight 1.20, letter-spacing normal, often uppercase. Functions as the only typographic ornament — a small typographic signature against the otherwise grotesque system.

### Hairline Divider
**Role:** Section separation
1px solid #000000, full-bleed or container-width. The primary structural divider — replaces shadows, padding, and color blocking.

### Table Rule
**Role:** Data and catalog row separation
1px #808080 border. Lighter than the primary hairline (#000000) to keep dense data tables from feeling heavy.

### Floating Product Showcase
**Role:** Primary visual carrier
Object photography rendered on transparent white, no frame, no shadow, no caption box. The object sits in the canvas like a museum artifact — the page itself is the pedestal.

### Centered Statement Block
**Role:** Editorial copy placement
HaasR 22px weight 400, lineHeight 1.10, #000000, centered, max width 640px. Used for manifesto text, section openers, and the SILENCIO ® VISUAL LANGUAGES signature.

### Micro Caption
**Role:** Image credit, footnote, and ancillary copy
HaasR 9px weight 400 #000000, lineHeight 1.20. The smallest text on the site — used for the kind of copy that would be printed in 6pt in a printed catalog.

### Navigation Anchor
**Role:** Top-level menu items
HaasR 12px weight 400 #000000, letter-spacing normal, uppercase optional. No background, no border, no hover fill — navigation is typographic only.

## Do's and Don'ts

### Do
- Use the full 141px HaasT weight 100 for display headlines — it is the only moment this system is allowed to be loud
- Reach for #dbdad9 as the only chromatic surface departure; every other surface stays #ffffff or #000000
- Separate content with 1px #000000 hairlines, not padding, not shadows, not color blocks
- Pair every display headline with a PT Mono 11px museum label directly beneath it
- Use radius 7.2px for cards and 129.6px for buttons — do not interpolate intermediate values
- Set lineHeight at 0.90 for any type at 39px or above; tight leading is a signature, not an accident
- Let product photography float on pure white with no frame, no caption box, and no drop shadow

### Don't
- Never introduce a chromatic color — the palette ends at #000000, #dbdad9, #808080, and #ffffff
- Never use drop shadows for elevation; the gradient #dbdad9 → #ffffff is the only depth the system allows
- Never set type above 141px or below 9px — the 132px range is the entire expressive spectrum
- Never use #0000ee or any default browser link color — links are #000000, no exception
- Never fill a button with color; the pill is always transparent with a 1px #000000 border
- Never center body text in paragraphs; only display statements and labels earn centered alignment
- Never use shadows, blurs, or glows on photographs or product imagery

## Surfaces

| Level | Name | Value | Purpose |
|-------|------|-------|---------|
| 0 | Page Canvas | `#ffffff` | The dominant background — silence made visible |
| 1 | Paper Card | `#dbdad9` | The only warm departure from white; soft cards, subtle fills, gradient origin |
| 2 | Ink Surface | `#000000` | Inverted moments — text blocks on black, dark contrast panels |

## Gradient System
A single gradient is sanctioned: `linear-gradient(0deg, #dbdad9, #ffffff)`. Use it to lift a card or section gently off the page — never horizontally, never as a decorative wash, never with additional stops.
