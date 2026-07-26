# 69b41ca7-0492-4dee-9d5b-fb379a6a3d5e implementation handoff

This archive is the source of truth for turning the design into production code. Start from `al-aryan-industrial.html`, then preserve the visual system, responsive behavior, and interactions found in the exported files.

## Implementation target
- Build production UI from the exported design, not a loose reinterpretation.
- Preserve typography scale, spacing rhythm, color tokens, border radii, shadows, motion timing, and component states.
- Replace static placeholders only when the target app has real data or functional equivalents.
- Keep generated product UI free of Open Design chrome, preview labels, or design-process annotations.
- Treat this handoff as a visual contract: if implementation choices conflict, match the exported pixels and behavior first, then refactor internals.

## Source map
- Primary entry: `al-aryan-industrial.html`
- HTML screens detected: 1
- Stylesheets detected: 0
- Script/component files detected: 0
- Supporting assets detected: 56

## Responsive contract
Validate the implementation across this 2025–2026 viewport matrix:
- Mobile compact: 360×800
- Mobile standard: 390×844
- Mobile large: 430×932
- Foldable / small tablet: 600×960
- Tablet portrait: 820×1180
- Tablet landscape: 1024×768
- Laptop: 1366×768
- Desktop: 1440×900
- Wide desktop: 1920×1080

For responsive web exports, treat these as a modern breakpoint system for one adaptive web experience, not three fixed screenshots. Do not split responsive web into unrelated native app screens unless the project explicitly includes native targets. Use semantic layout thresholds, fluid `clamp()` type/spacing, and container queries where component width matters more than viewport width. Preserve any CSS media queries, container queries, fluid `clamp()` scales, and layout changes already present in the exported files.

## Design fidelity contract
- Extract reusable tokens before writing components: background, surface, foreground, muted text, border, accent, radius, shadow, spacing, type scale, and motion duration/easing.
- Map product screens, in-app modules/components, optional landing page, and optional OS widget surfaces before coding. Keep these surfaces separate in the target architecture.
- Match layout geometry: max-widths, gutters, grid columns, card proportions, sticky/fixed elements, and viewport-specific navigation.
- Preserve real copy, labels, and data shown in the export. Do not replace specific text with generic marketing filler.
- Preserve interactive affordances: hover, focus, pressed, disabled, loading, validation, copy/share, tab/accordion, modal/sheet, and keyboard states where present.
- Preserve accessibility semantics when converting: headings stay hierarchical, controls remain buttons/links/inputs, focus states stay visible.
- Do not keep prototype-only annotations, frame labels, or Open Design chrome in the production UI.

## CJX-ready UX contract
- Use `DESIGN-MANIFEST.json` as the machine-readable map for screens, app modules, OS widgets, landing pages, tokens, interactions, and viewport checks.
- Screen-file-first: when multiple user-facing surfaces exist, implement each HTML screen as its own route/file. Treat `index.html` as a launcher/overview when the manifest marks it that way, not as a combined final UI.
- If `landing.html`, app screens, platform screens, or OS widget files exist, preserve those boundaries in the target app instead of merging them into one page.
- A single self-contained `al-aryan-industrial.html` is acceptable only when the export truly contains one user-facing screen and its CSS/JS are structured enough to extract tokens, components, states, and behavior.
- If separate `css/` or `js/` files exist, treat them as source of truth for token/component/interactions before porting to React, Vue, SwiftUI, Compose, or another target stack.
- In-app modules/components are product UI blocks inside the app. OS widgets are home-screen/lock-screen/quick-access surfaces outside the app. Do not merge those concepts.

## Color and brand contract
- Use the exported design tokens and product/domain context as the color source of truth.
- Do not introduce warm beige / cream / peach / pink / orange-brown background washes unless they are already explicit brand/reference colors in the export.
- No obvious token stylesheet was detected; sample colors from the entry file and convert them into named tokens before coding.

## Implementation sequence for AI coding tools
1. Open `al-aryan-industrial.html` and `DESIGN-MANIFEST.json`; identify every screen file, launcher/overview file, app module, and interaction before coding.
2. If multiple HTML screens exist, map them to separate routes/surfaces first; do not merge `landing.html`, product app screens, platform screens, or OS widgets into one route.
3. Extract a token table from CSS/root styles and inline styles before building framework components.
4. Build product screens and domain-specific in-app modules from largest layout regions down to controls; avoid starting with isolated atoms that lose spatial intent.
5. Port responsive behavior across the modern viewport matrix and test each semantic breakpoint before cleanup.
6. Port interactions and states, then replace static placeholders only with real app data or functional equivalents.
7. Keep optional landing page and OS widget surfaces as separate surfaces if present.
8. Compare final screenshots against the export at 360×800, 390×844, 430×932, 820×1180, 1024×768, 1366×768, 1440×900, and 1920×1080 before declaring done.

## Entry points
- `al-aryan-industrial.html`

## Styles
- None detected

## Scripts/components
- None detected

## Assets and supporting files
- `64f6a6f9-0e8e-4431-9834-4d560de0347d.jpg`
- `a4ae965d-ab94-4f30-8ace-76d23ea0b3e4.jpg`
- `assets/about-lowbed.jpg`
- `assets/hero-industrial.jpg`
- `assets/hero-oil-tankers.jpg`
- `assets/project-1.jpg`
- `assets/project-lowbed.jpg`
- `assets/project-machinery.jpg`
- `assets/project-tanks.jpg`
- `assets/team.jpg`
- `sketch-2026-07-19T19-26-27.sketch.json`
- `WhatsApp-Image-2026-07-19-at-22.50.54-_1_.jpeg`
- `WhatsApp-Image-2026-07-19-at-22.50.54.jpeg`
- `WhatsApp-Image-2026-07-19-at-22.50.55-_1_-1.jpeg`
- `WhatsApp-Image-2026-07-19-at-22.50.55-_1_.jpeg`
- `WhatsApp-Image-2026-07-19-at-22.50.55.jpeg`
- `WhatsApp-Image-2026-07-19-at-22.50.56-_1_.jpeg`
- `WhatsApp-Image-2026-07-19-at-22.50.56-1.jpeg`
- `WhatsApp-Image-2026-07-19-at-22.50.56.jpeg`
- `WhatsApp-Image-2026-07-19-at-22.50.57-1.jpeg`
- `WhatsApp-Image-2026-07-19-at-22.50.57.jpeg`
- `WhatsApp-Image-2026-07-19-at-22.50.58-_1_.jpeg`
- `WhatsApp-Image-2026-07-19-at-22.50.58.jpeg`
- `WhatsApp-Image-2026-07-19-at-22.50.59-_1_.jpeg`
- `WhatsApp-Image-2026-07-19-at-22.50.59-1.jpeg`
- `WhatsApp-Image-2026-07-19-at-22.50.59.jpeg`
- `WhatsApp-Image-2026-07-19-at-22.51.00-_1_-1.jpeg`
- `WhatsApp-Image-2026-07-19-at-22.51.00-_1_.jpeg`
- `WhatsApp-Image-2026-07-19-at-22.51.00-_2_.jpeg`
- `WhatsApp-Image-2026-07-19-at-22.51.00.jpeg`
- `WhatsApp-Image-2026-07-19-at-22.51.01.jpeg`
- `WhatsApp-Image-2026-07-19-at-22.51.02-_1_.jpeg`
- `WhatsApp-Image-2026-07-19-at-22.51.02.jpeg`
- `WhatsApp-Image-2026-07-19-at-22.51.03-1.jpeg`
- `WhatsApp-Image-2026-07-19-at-22.51.03.jpeg`
- `WhatsApp-Image-2026-07-19-at-22.51.04-_1_.jpeg`
- `WhatsApp-Image-2026-07-19-at-22.51.04.jpeg`
- `WhatsApp-Image-2026-07-19-at-22.51.05-_1_.jpeg`
- `WhatsApp-Image-2026-07-19-at-22.51.05-_2_.jpeg`
- `WhatsApp-Image-2026-07-19-at-22.51.05.jpeg`
- `WhatsApp-Image-2026-07-19-at-22.51.06-_1_.jpeg`
- `WhatsApp-Image-2026-07-19-at-22.51.06.jpeg`
- `WhatsApp-Image-2026-07-19-at-22.51.07-_1_-1.jpeg`
- `WhatsApp-Image-2026-07-19-at-22.51.07-_1_.jpeg`
- `WhatsApp-Image-2026-07-19-at-22.51.07-_2_.jpeg`
- `WhatsApp-Image-2026-07-19-at-22.51.07.jpeg`
- `WhatsApp-Image-2026-07-19-at-22.51.08-_1_.jpeg`
- `WhatsApp-Image-2026-07-19-at-22.51.08-_2_.jpeg`
- `WhatsApp-Image-2026-07-19-at-22.51.08.jpeg`
- `WhatsApp-Image-2026-07-19-at-22.51.09-1.jpeg`
- `WhatsApp-Image-2026-07-19-at-22.51.09.jpeg`
- `WhatsApp-Image-2026-07-19-at-22.52.00-_1_-1.jpeg`
- `WhatsApp-Image-2026-07-19-at-22.52.00-_1_.jpeg`
- `WhatsApp-Image-2026-07-19-at-22.52.00.jpeg`
- `WhatsApp-Image-2026-07-19-at-22.52.01.jpeg`
- `لقطة-شاشة-2026-07-20-211819.png`

## Coding checklist for AI tools
1. Inspect `al-aryan-industrial.html` and `DESIGN-MANIFEST.json` first and identify reusable components before coding.
2. Implement each user-facing screen file as its own route/surface; keep launcher, landing, app, platform, and OS widget files separate.
3. Extract design tokens into the target stack: colors, type scale, spacing, radius, shadows, and motion.
4. Implement layout with real 2025–2026 responsive breakpoints, fluid type/spacing, and container-query-aware component behavior; test with no horizontal overflow.
5. Preserve interactive controls, hover/focus/pressed states, form behavior, validation, and copy actions where present.
6. Implement domain-specific in-app modules with real states; do not flatten them into generic cards.
7. Keep landing page, product screens, and OS widget/quick-access surfaces separate when present.
8. Confirm the production result visually matches the exported design before refactoring internals.
9. Reject implementation shortcuts that flatten the design into generic cards, generic gradients, placeholder stats, or framework-default typography.
10. If a detail is ambiguous, keep the exported HTML/CSS/JS behavior rather than inventing a new pattern.
