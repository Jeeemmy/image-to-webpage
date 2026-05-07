# Image to Webpage

Convert screenshots, app snapshots, webpage screenshots, or visual mockups into runnable and maintainable React web pages.

## Core Capability

After a screenshot is provided, the project organizes reconstruction around three stages: design token extraction, UI DSL extraction, and webpage rendering implementation.

Design tokens record colors, typography, corner radii, shadows, spacing, borders, hierarchy, and important visual asset strategies, so styles are not written from guesswork alone.

The UI DSL describes page structure, layout relationships, persistent navigation, scroll regions, component hierarchy, image layering, and presentation wrappers that should be ignored.

The rendering stage turns the design tokens and UI DSL into React, CSS, and runnable project pages, then uses build logs, artifact checks, and non-browser validation to confirm that no obvious pieces are missing.

## Use Cases

This project is suitable for turning product screenshots, dashboard interfaces, mobile app screens, landing page sections, card-based interfaces, or design explorations into real web pages.

If a screenshot includes phone frames, browser frames, gray presentation canvases, outer rounded mockups, iOS Home Indicators, Android navigation bars, or other presentation/system chrome, they should usually be identified as non-product UI instead of being reconstructed as page content.

## Tech Stack

The current project scripts cover the development server, production build, and local preview. The full project includes many screenshot reconstruction examples; download the complete project if you want to inspect those examples. If you only need the skill, see Getting Started.

During testing, this project was tested with codex and gpt-5.5/5.4/5.3 throughout. Results in other IDEs or with other models are not guaranteed. For best results, the model should support image input and ideally image generation capabilities; this document uses codex's image gen skill.

```bash
npm run dev
npm run build
npm run preview
```

## Getting Started

1. Install the Skill

Use the following instruction to install the Image-to-webpage Skill in any IDE.

```markdown
Install the skill from https://github.com/Jeeemmy/image-to-webpage/blob/main/skills/image-to-webpage/SKILL.md.
```

2. Start reconstructing

Send the screenshot directly and ask the AI to start reconstructing it.

```markdown
Attachment: screenshot
Recreate the screenshot as a page.
```

## Showcase Template

The following template is suitable for showcasing multiple screenshot reconstruction cases in the README. You can copy the whole case block and replace the title, image paths, model names, and notes.

### Case 1: Fill In The Page Or Screenshot Name Here

Add a short description for this case, such as where the input screenshot comes from, which models are being compared, and which visual details should be observed.

| Original | Model A Result | Model B Result |
|---|---|---|
| ![Original](./docs/screenshots/case-01-original.png) | ![Model A Result](./docs/screenshots/case-01-model-a.png) | ![Model B Result](./docs/screenshots/case-01-model-b.png) |

| Item | Notes |
|---|---|
| Screenshot type | Example: mobile app / desktop dashboard / landing page section |
| Adaptation width | Example: 414px / 1200px / custom width |
| Model A | Fill in the model name, prompt version, or generation parameters |
| Model B | Fill in the model name, prompt version, or generation parameters |
| Focus areas | Example: layout, typography, image assets, scroll regions, fixed navigation, shadows, radius |
| Conclusion | Fill in your comparison summary for the two results |
