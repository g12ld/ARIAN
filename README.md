# AL ARYAN Industrial Website

Static premium landing page for AL ARYAN Industrial.

## Vercel deployment

- Framework preset: `Other`
- Build command: leave empty
- Output directory: leave empty / project root
- Entry file: `index.html`

## Live project structure

```text
index.html
al-aryan-industrial.html
assets/generated/
vercel.json
.vercelignore
```

`index.html` is the main site. `al-aryan-industrial.html` is kept as a redirect for older links.

The live page uses generated WebP images from `assets/generated/`. The PNG source assets are retained locally and in Git for future editing, while `.vercelignore` keeps unused legacy images out of Vercel deployments.
