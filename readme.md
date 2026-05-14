# Image to Webpage

Convert screenshots, app snapshots, webpage screenshots, or visual mockups into runnable and maintainable React web pages.

## Core Capability

After a screenshot is provided, the project organizes reconstruction around three stages: design token extraction, UI DSL extraction, and webpage rendering implementation.

Design tokens record colors, typography, corner radii, shadows, spacing, borders, hierarchy, and important visual asset strategies, so styles are not written from guesswork alone.

The UI DSL describes page structure, layout relationships, persistent navigation, scroll regions, component hierarchy, image layering, and any presentation wrappers that should be ignored.

The rendering stage turns the design tokens and UI DSL into React, CSS, and runnable project pages, then uses build logs, artifact checks, and non-browser validation to confirm that no obvious pieces are missing.

## Use Cases

This project is suitable for turning product screenshots, dashboard interfaces, mobile app screens, landing page sections, card-based interfaces, or design explorations into real web pages.

If a screenshot includes phone frames, browser frames, presentation canvases, outer rounded mockups, iOS Home Indicators, Android navigation bars, or other presentation/system chrome, they should be treated as non-product UI instead of being reconstructed as page content.

## Tech Stack and Project Layout

The project is built with Vite + React + Tailwind CSS, and it provides scripts for local development, production builds, and previewing the output.

Example pages, assets, and artifacts live under `src/pages/<page-name>/`, with design tokens, UI DSL, and render records stored in the corresponding `artifacts/` directory. Example folders include:

- `src/pages/flowmail-gpt-5.5/`
- `src/pages/applestore-gpt-5.5/`
- `src/pages/evilrabbit-gpt-5.5/`

During testing, this project was verified end-to-end with Codex and gpt-5.5/5.4/5.3. Results in other IDEs or with other models are not guaranteed. For best results, the model should support image input and ideally image generation; this document uses Codex's image generation skill.

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Getting Started

### 1. Install the Skill

Use the following command to install or update the Image-to-Webpage Skill in any IDE.

```markdown
Install or update the skill from https://github.com/Jeeemmy/image-to-webpage/blob/main/skills/image-to-webpage/SKILL.md.
```

### 2. Start Reconstructing

Send the screenshot directly and ask the AI to start reconstructing it.

```markdown
<Attachment: screenshot>
Recreate the screenshot as a page.
```

## Showcase

All examples below are first-pass outputs without extra manual adjustment.

### Case 1: Regular Dashboard

| Original | GPT-5.5 |
|---|---|
| ![Original](comparison-image/pc-regular/flowmail.webp) | ![GPT-5.5](comparison-image/pc-regular/flowmail-gpt-5.5.webp) |
