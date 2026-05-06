---
name: Neobrutalist Developer Portfolio
colors:
  surface: "#f9f9f9"
  surface-dim: "#dadada"
  surface-bright: "#f9f9f9"
  surface-container-lowest: "#ffffff"
  surface-container-low: "#f3f3f3"
  surface-container: "#eeeeee"
  surface-container-high: "#e8e8e8"
  surface-container-highest: "#e2e2e2"
  on-surface: "#1b1b1b"
  on-surface-variant: "#4d4732"
  inverse-surface: "#303030"
  inverse-on-surface: "#f1f1f1"
  outline: "#7e775f"
  outline-variant: "#d0c6ab"
  surface-tint: "#705d00"
  primary: "#705d00"
  on-primary: "#ffffff"
  primary-container: "#ffd700"
  on-primary-container: "#705e00"
  inverse-primary: "#e9c400"
  secondary: "#426900"
  on-secondary: "#ffffff"
  secondary-container: "#a5f624"
  on-secondary-container: "#456e00"
  tertiary: "#5d5f5f"
  on-tertiary: "#ffffff"
  tertiary-container: "#d9dada"
  on-tertiary-container: "#5e5f60"
  error: "#ba1a1a"
  on-error: "#ffffff"
  error-container: "#ffdad6"
  on-error-container: "#93000a"
  primary-fixed: "#ffe16d"
  primary-fixed-dim: "#e9c400"
  on-primary-fixed: "#221b00"
  on-primary-fixed-variant: "#544600"
  secondary-fixed: "#a8f928"
  secondary-fixed-dim: "#8fdb00"
  on-secondary-fixed: "#112000"
  on-secondary-fixed-variant: "#314f00"
  tertiary-fixed: "#e2e2e2"
  tertiary-fixed-dim: "#c6c6c7"
  on-tertiary-fixed: "#1a1c1c"
  on-tertiary-fixed-variant: "#454747"
  background: "#f9f9f9"
  on-background: "#1b1b1b"
  surface-variant: "#e2e2e2"
typography:
  h1:
    fontFamily: Lexend
    fontSize: 80px
    fontWeight: "900"
    lineHeight: "1.1"
    letterSpacing: -0.04em
  h2:
    fontFamily: Lexend
    fontSize: 48px
    fontWeight: "800"
    lineHeight: "1.2"
    letterSpacing: -0.02em
  h3:
    fontFamily: Lexend
    fontSize: 32px
    fontWeight: "700"
    lineHeight: "1.2"
    letterSpacing: 0em
  body-lg:
    fontFamily: Space Grotesk
    fontSize: 20px
    fontWeight: "500"
    lineHeight: "1.6"
  body-md:
    fontFamily: Space Grotesk
    fontSize: 16px
    fontWeight: "400"
    lineHeight: "1.6"
  label-bold:
    fontFamily: Space Grotesk
    fontSize: 14px
    fontWeight: "700"
    lineHeight: "1.2"
spacing:
  xs: 0.5rem
  sm: 1rem
  md: 2rem
  lg: 4rem
  xl: 8rem
  border-width: 4px
  border-width-heavy: 8px
  gutter: 24px
---

## Brand & Style

The design system is built for a high-impact web developer portfolio. It rejects the soft, airy trends of modern SaaS design in favor of **Neobrutalism**: a raw, unapologetic aesthetic characterized by heavy structural lines, high-contrast vibrancy, and flat geometry.

The brand personality is confident, technically proficient, and intentionally loud. It evokes an emotional response of clarity and energy. By using "honest" materials—stark blacks, primary yellows, and zero-diffusion shadows—the UI signals a developer who values structure, performance, and distinctive creative choices over generic polish.

## Colors

The palette is anchored by extreme contrast to ensure maximum legibility and visual punch.

- **Primary (Bright Yellow):** Used for main action areas, hero highlights, and decorative accents.
- **Secondary (Neon Green):** Reserved for success states, code snippets, or secondary call-to-actions.
- **Background:** A pure, stark white (#FFFFFF) to provide a clean canvas for heavy black elements.
- **Stroke & Shadow:** A deep, absolute black (#000000) used for all borders, shadows, and primary text to maintain a "comic-book" structural rigidity.

## Typography

Typography in this design system functions as a structural element.

**Headlines** utilize **Lexend** at its heaviest weights (800-900). The extra-bold presence creates a rhythmic "thumping" effect across the page. Letter spacing is slightly tightened on large headings to increase the density of the type blocks.

**Body Text** utilizes **Space Grotesk**. Its geometric quirks and technical feel align with the web developer persona while maintaining high readability. It should be set with generous line height to balance the visual weight of the heavy borders surrounding it.

## Layout & Spacing

The layout follows a **fixed grid** philosophy. Content is housed within 12-column containers that break clearly and intentionally.

- **Separation:** Elements should never feel crowded. Use generous margins (`lg` or `xl`) between major sections to allow the heavy borders to "breathe."
- **Padding:** Internal card padding should be consistent (typically `md`).
- **Alignment:** Stick to a strict hard-edge alignment. Avoid centering text in large blocks; left-aligned text reinforces the brutalist grid.

## Elevation & Depth

This design system completely avoids Z-axis depth created by light and physics. Instead, it uses **Graphic Depth**.

- **Hard Shadows:** All interactive or floating elements must feature a 100% opaque, non-blurry black offset shadow. The standard offset is `6px 6px 0px #000000`.
- **Stacking:** Depth is communicated by the thickness of the border and the size of the shadow offset. A "higher" element has a larger offset, not a softer shadow.
- **Flat Planes:** Backgrounds are always flat. There are no gradients or blurs.

## Shapes

The design system utilizes **Sharp (0px)** corners for all primary UI components. The use of right angles reinforces the "raw" and "unrefined" nature of Neobrutalism.

Circular shapes are permitted only for specific decorative elements (like orbiting tech icons or avatars) to provide a geometric counterpoint to the rigid rectangular grid.

## Components

### Buttons

Buttons are the core interactive element. They feature a `4px` black border and a `primary` or `secondary` fill.

- **State Change:** On `:hover`, the shadow offset increases slightly (e.g., from 6px to 8px).
- **State Change:** On `:active`, the shadow disappears (`0px 0px 0px`), and the button body transforms `translate(6px, 6px)` to physically occupy the space where the shadow was, simulating a "pressed" physical switch.

### Cards

Cards are used to wrap project previews and blog posts.

- **Border:** `4px` black solid.
- **Shadow:** Permanent `8px 8px 0px #000000`.
- **Header:** Often includes a secondary background color strip at the top, separated by a `4px` horizontal line.

### Form Inputs

Input fields use a white background with a `4px` border. On `:focus`, the border color does not change, but the element gains the standard hard shadow to indicate it is "active."

### Chips/Tags

Small rectangular boxes used for tech stacks (e.g., "React", "TypeScript"). Use a `2px` border and no shadow to differentiate them from primary actionable buttons.

### Section Dividers

Instead of thin lines, use `8px` thick black bars or high-contrast "caution tape" patterns (diagonal stripes of yellow and black) to separate major landing page sections.
