---
name: image-to-webpage
description: Recreate images, UI screenshots, style board images, app snapshots, or webpage screenshots as real high-fidelity web pages. Use when the user sends or references an image and asks Codex to restore, recreate, copy, reproduce, convert, implement, or render it as a real page, especially with React, Tailwind, HTML/CSS, or the current frontend stack. The skill runs three core steps: generate Design Tokens from the screenshot with the preset prompt, generate UI DSL from the screenshot with the preset prompt, then render and verify the page from those artifacts.
---

# Image To Webpage

## Core Workflow

This skill has exactly three core production steps. Do not skip the first two artifacts when rendering from an image.

### Step 1: Generate Design Tokens

If the user has not provided a screenshot/snapshot/image, ask for one before continuing.

Use the preset prompt in `references/design-token-prompt.md` with the user's screenshot. Output only valid JSON and save the result locally, for example:

```text
workflow-artifacts/<name>-design-tokens.json
```

### Step 2: Generate UI DSL

Use the preset prompt in `references/ui-dsl-prompt.md` with the same screenshot. Output only valid JSON and save the result locally, for example:

```text
workflow-artifacts/<name>-ui-dsl.json
```

Before extracting DSL, identify whether the screenshot is a design showcase image rather than a raw product screenshot. If the real UI is placed inside an outer presentation canvas, gray background, browser/device mock frame, decorative rounded frame, or drop-shadow wrapper, ignore those presentation-only containers and generate the DSL from the actual UI content inside the frame.

### Step 3: Render The Page

Use the generated Design Tokens, generated UI DSL, and `references/rendering.md` to implement the page in the repo's existing frontend stack.

Before rendering, confirm adaptation width:

- Landscape screenshots default to `1440px` PC layout width.
- Portrait screenshots default to `414px` mobile layout width.
- Tell the user which width will be used.
- Continue if the user confirms.
- If the user gives a specific width, use the user's width instead.

Record the render result locally, for example:

```text
workflow-artifacts/<name>-render-step3.json
```

Include source artifacts, adaptation width, scale, files changed, scroll architecture, verification commands, and browser checks.

## Required References

- `references/design-token-prompt.md`: canonical Step 1 prompt template. Load it before generating Design Tokens.
- `references/ui-dsl-prompt.md`: canonical Step 2 prompt template. Load it before generating UI DSL.
- `references/rendering.md`: Step 3 rendering, normalization, shadow, scroll, and verification rules. Load it before editing code.

## Constraints

- Do not infer a page from text alone when the user asked for image restoration; require the screenshot.
- Do not use raw bitmap pixels as CSS pixels unless the user explicitly says the image is 1:1 CSS pixels.
- Compute normalized scale as `adaptation_width / screenshot_pixel_width`.
- Preserve visible text exactly when readable.
- Use `null` for unknown or ambiguous values in JSON artifacts.
- Do not silently fall back to mock data, fake success, or broad defensive degradation.
- Treat borders, surface contrast, elevation, scroll behavior, and overlay behavior as separate signals.
- Ignore design-presentation wrappers such as gray showcase backgrounds, decorative rounded frames, device/browser mockups, and outer drop shadows unless they are part of the actual product UI.
- Verify with a real build and browser checks when possible.
