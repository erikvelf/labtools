# LabTools design identity

**Lab instrument, not a marketing page.** The look borrows from engineering paper
and oscilloscopes: flat graphite or white surfaces, thin lines, one blue, one cyan.
If something looks like it could be printed on graph paper or shown on a scope, it fits.

## Principles

1. **Flat.** Solid colors only. No gradients, no glows, no glass/blur effects.
2. **Two colors.** Blue for structure and anything you can click. Cyan for the "signal":
   the one thing on screen that should catch the eye. Everything else is grey.
3. **Lines over shadows.** Separate things with 1px borders. Shadows are only for things
   that float above the page (tooltips, popovers).
4. **Square-ish.** Small radii (4–6px). Nothing pill-shaped except tiny dots.
5. **Grid paper is a texture, not a background.** It appears in one place per page
   (the hero), never behind text-heavy content.
6. **Quiet by default.** Color appears on hover, focus and the single highlighted word.
   A calm page makes the cyan mean something.

## Color

| Token | Role | Light | Dark |
|---|---|---|---|
| `--blue` | Brand, links, focus ring, card top edge, category markers | `#228be6` | `#228be6` |
| `--cyan` | Signal: highlighted word, icons, status dots, hover accents | `#0c8599` | `#3bc9db` |
| `--bg` | Page | `#ffffff` | `#141414` |
| `--surface` | Cards, inputs, footer | `#f8f9fa` | `#1b1b1b` |
| `--surface-2` | Hovered surface | `#f1f3f5` | `#242424` |
| `--border` | All lines and dividers | `#dee2e6` | `#2e2e2e` |
| `--strong` | Headings, names | `#212529` | `#ffffff` |
| `--text` | Body text | `#495057` | `#c9c9c9` |
| `--muted` | Secondary text, labels, captions | `#868e96` | `#828282` |
| `--grid` | Engineering-grid lines | `#0000000d` | `#ffffff0b` |

All values come from [Mantine's](https://mantine.dev/theming/colors/) default palette, so they
match the tools, which are built with Mantine.

**Tints** (only these two, both from cyan):
`--cyan-soft` = cyan at 12% (icon backgrounds, dot halos) ·
`--cyan-line` = cyan at 40% (icon borders).

**Rules**
- Cyan is darker in light mode on purpose: bright cyan on white is unreadable.
- Never add a third hue. No purple, orange, green or red for decoration.
- If you need an error or warning color in a tool, use Mantine `red`/`yellow` **only** for
  that state, never as decoration.
- Placeholder text is `--muted` + italic, so it's visibly unfinished without adding a color.

## Typography

| Use | Size | Weight | Notes |
|---|---|---|---|
| Hero headline | `clamp(36px, 6vw, 60px)` | 800 | letter-spacing `-0.035em`, line-height `1.02` |
| Section heading | 24px | 700 | letter-spacing `-0.02em` |
| Card title | 17px | 700 | |
| Body | 15px | 400 | line-height `1.55` |
| Lead (hero subtitle) | 17px | 400 | max width ~560px |
| Small / description | 12.5–13px | 400 | `--muted` |
| Section label | 13px | 600 | UPPERCASE, letter-spacing `0.08em`, `--muted` |
| Technical bits | 11–13px | 400–600 | monospace: `kbd`, `src` tags, step numbers `01 02 03`, language switch |

- **Sans:** Inter (variable, self-hosted via `@fontsource-variable/inter`, no Google Fonts
  request), falling back to the system UI font.
- **Mono:** `ui-monospace`, `JetBrains Mono`, `Menlo`. Use it for anything that reads like a
  label on an instrument: keys, codes, counters, tags.
- Highlight at most **one word** per headline, in solid `--cyan`.

## Shape and spacing

- **Radius:** `6px` for cards and tooltips, `4px` for buttons, inputs, badges, icon squares,
  `3px` for tiny tags. Dots are round.
- **Borders:** always `1px solid var(--border)`. Emphasis is a **colored edge**, not a thicker box:
  - card top edge: `2px solid var(--blue)`
  - list item / roadmap left edge: `2–3px` in `--border`, turning `--cyan` on hover
- **Spacing scale:** 4 · 8 · 12 · 16 · 20 · 24 · 32 · 48 · 64 · 72 px.
  Gaps inside components 8–16, between components 16–24, between page sections 48–72.
- **Layout:** max width `1200px`, side padding `24px` (`16px` on phones).
  Header is `56px`, sticky, with a bottom border.

## The engineering grid

The one decorative element.

- **Where:** behind the hero only. One grid area per page.
- **How:** an SVG pattern with crisp 1px lines in `--grid`: **minor every 24px, major every 120px**.
  It isn't a CSS gradient, so it stays flat.
- **Never:** fade it out, tint it blue/cyan, animate it, or put it behind body text.

## Components

- **Tool card:** compact horizontal row: `--surface`, 1px border, 2px blue top edge, a 40px
  icon square (cyan icon on `--cyan-soft` with a `--cyan-line` border) on the left, name and
  muted subtitle on the right, `src` tag top right in mono. Text never wraps.
  **All cards are the same size:** the widest card sets the width for all of them and the tallest
  sets the height. On phones they fill the full width.
  On hover it lifts 2px, the border turns cyan and the background changes to `--surface-2`.
- **Tooltip:** `--bg`, 1px border, `--shadow`, 6px radius. Preview image on top, the tool's
  description below. Appears after 0.2s. Not shown on touch screens.
- **Previews:** abstract line diagrams of each tool (320×180 SVG, graphite window, one cyan
  accent), **not screenshots**. They describe what the tool does, not its exact interface, so a
  tool's UI can change without touching this site.
- **Badge:** 1px border, 4px radius, a 7px cyan dot with a 3px `--cyan-soft` halo, then the text.
- **Icon button:** 34×34, 1px border, transparent. On hover the border turns blue.
- **Input / search:** `--surface`, 1px border, 34px tall. On focus the border turns blue.
  Keyboard hint in a mono `kbd`.
- **Empty channel slot:** fills unused grid cells next to the tool cards, with the same size as a
  card and a 1px **dashed** border. Mono label top left: `CH 04 · nessun segnale`. A dotted
  idle baseline runs across the bottom. On hover the border turns `--cyan-line`, "in arrivo"
  appears top right in cyan, and a waveform (sine / square / saw / triangle, cycling per channel)
  **draws once from left to right** like a scope sweep. Always at least one row; more rows only
  while the sidebar is taller (max two extra). Hidden while searching.
- **Instrument panel (sidebar link groups):** one collapsible bordered box per category, 6px
  radius. The header bar is `--surface` with a chevron + uppercase label left and a two-digit
  cyan mono count right (`01`, `02`, which updates while searching). **One line per site:** name
  + ↗ on the left, domain in mono on the right. The description is a small tooltip to the right
  on hover (below the row on narrow screens). On hover the row gets `--surface` and a 2px cyan
  inner left edge.

## Logo

An **LT monogram** drawn like a signal trace, on a 24×24 grid, with square line caps:

```
M5 5 V18.5 H10        L: down, then the foot
M14 5.5 V18.5         T stem
M8.5 5.5 H19.5        T bar, reaching just over the L's top
```

The small gap between the L's foot (ends at x=10) and the T stem (x=14) keeps it reading as
"LT" while staying one compact block.

| Use | Background | Trace | Stroke |
|---|---|---|---|
| Header / README (**scope screen**) | `#141414` with a 1.5px `--blue` frame, 3.5 radius, the same in both themes | cyan `#3bc9db` | 2.3 |
| Favicon / small sizes (**blue square**) | solid `#228be6`, 4 radius | white | 2.6 |

Don't redraw the letters in a font, add effects, or put the trace in any color except cyan or white.

## Icons

Line icons on a 24×24 grid, `stroke-width 1.8`, round caps and joins, `currentColor`.
No filled or multicolor icons (the logo is the exception).

## Motion

Short and functional: `0.15s` for color, border and 2px lifts, `0.2s` delay before tooltips.
No looping animations and no parallax. Smooth scrolling for in-page links only.
The one "show" animation is the channel sweep: `0.7s` linear, once per hover, drawn with a
dash (`pathLength="1"`), not a moving glow.

## Light and dark

Both modes are first-class. The system preference is the default, and the toggle choice is remembered.
Design in dark first (graphite plus a glowing cyan trace is the identity), then check light.
Swap tokens, never hard-code a color in a component.

## Don'ts

- Gradients (backgrounds, text, borders, glows)
- Purple, or any third accent color
- Large radii, pills, heavy drop shadows
- More than one highlighted word or one grid area per view
- Decorative illustrations or stock imagery: abstract line diagrams in the palette only
