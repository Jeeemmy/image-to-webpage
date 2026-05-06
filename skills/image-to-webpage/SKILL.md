---
name: image-to-webpage
description: Recreate images, UI screenshots, style board images, app snapshots, or webpage screenshots as real high-fidelity web pages. Use when the user sends or references an image and asks Codex to restore, recreate, copy, reproduce, convert, implement, or render it as a real page, especially with React, Tailwind, HTML/CSS, or the current frontend stack. The skill runs three core steps: generate Design Tokens from the screenshot with the preset prompt, generate UI DSL from the screenshot with the preset prompt, then render and verify the page from those artifacts.
---

# Image To Webpage

## Core Workflow

This skill has exactly three core production steps. Do not skip the first two artifacts when rendering from an image.

## First Response

When this skill triggers, keep the first user-facing reply limited to confirming only:

- Default adaptation width: `1200px` for PC/landscape screenshots unless the user specified another width.
- Planned page route and page name.

Do not include implementation details, file lists, or extended plans in the first reply.

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

Before extracting DSL, run a wrapper classification gate. Enumerate any outer canvas, centered artboard, browser/device/mock frame, decorative rounded frame, clipping frame, or drop-shadow wrapper as a candidate. This gate is mandatory even when the final decision is to preserve the candidate.

For each wrapper candidate, decide whether the wrapper boundary itself has product semantics. A wrapper containing product controls is not enough evidence; the boundary must itself be a real product app/window/shell/pane edge with layout ownership, scroll/clipping ownership, or alignment to internal product regions. If the boundary is only a visual board/frame around the product, ignore it.

Record the wrapper candidates and final decision in the DSL request metadata. If a large centered rounded frame/artboard is preserved, document concrete product-semantics evidence and confidence. If the evidence is ambiguous, default to treating the candidate as a presentation wrapper rather than silently preserving a showcase shell.

When a presentation wrapper is ignored, record the effective source bounds of the real product UI and use those bounds as the render source. The ignored wrapper must not reappear later as body/page padding, a centered artboard, a rounded outer frame, a device/browser shell, or a background band around the rendered page.

### Step 3: Render The Page

Use the generated Design Tokens, generated UI DSL, and `references/rendering.md` to implement the page in the repo's existing frontend stack.

Before rendering, confirm adaptation width:

- Landscape screenshots default to `1200px` PC layout width.
- Portrait screenshots default to `414px` mobile layout width.
- Tell the user which width will be used in the first reply.
- Continue if the user confirms.
- If the user gives a specific width, use the user's width instead.

Record the render result locally, for example:

```text
workflow-artifacts/<name>-render-step3.json
```

Include source artifacts, adaptation width, scale, files changed, scroll architecture, verification commands, and browser checks.

After implementation and verification, always start the page locally and open it for the user. Prefer the repo's existing dev/preview command; if the intended port is occupied, use another available port and open the final page route.

## Required References

- `references/design-token-prompt.md`: canonical Step 1 prompt template. Load it before generating Design Tokens.
- `references/ui-dsl-prompt.md`: canonical Step 2 prompt template. Load it before generating UI DSL.
- `references/rendering.md`: Step 3 rendering, normalization, shadow, scroll, and verification rules. Load it before editing code.

## Constraints

- Do not infer a page from text alone when the user asked for image restoration; require the screenshot.
- Do not use raw bitmap pixels as CSS pixels unless the user explicitly says the image is 1:1 CSS pixels.
- Compute normalized scale as `adaptation_width / effective_source_width`. `effective_source_width` is the inner real UI width when a presentation wrapper is ignored, otherwise it is `screenshot_pixel_width`.
- Preserve visible text exactly when readable.
- Use `null` for unknown or ambiguous values in JSON artifacts.
- Do not silently fall back to mock data, fake success, or broad defensive degradation.
- Treat borders, surface contrast, elevation, scroll behavior, and overlay behavior as separate signals.
- Treat inner/inset control shadows as separate from outside cast shadows and elevation. If a button/control only has an inner bevel, record and render an inset shadow without adding outside drop shadow.
- Do not present guessed shadow strength as measured. When shadow strength is extracted, record confidence/evidence/notes or leave strength null when the screenshot only proves placement.
- Ignore design-presentation wrappers such as gray showcase backgrounds, decorative rounded frames, device/browser mockups, and outer drop shadows unless they are part of the actual product UI.
- Always record wrapper classification when an outer full-scene container or large centered frame is visible. Do not decide `ignored_outer_container = false` without explaining why each wrapper candidate is real product chrome.
- Do not use "the wrapper contains logo/tabs/cards/buttons" as evidence that the wrapper boundary is product UI. The evidence must attach to the boundary itself, such as real app-window chrome, product scroll/clipping ownership, in-product pane alignment, or functional app-shell constraints.
- Treat presentation-wrapper removal as a required render contract, not just an extraction note. If `ignored_outer_container = true`, audit the implementation root before finalizing: the page must not add showcase-style centering, viewport padding, max-width artboard wrappers, fixed artboard heights, copied wrapper background colors, copied wrapper radius, or copied wrapper shadows around the real product UI.
- Treat wrapper preservation as a required render contract too. If `ignored_outer_container = false` while wrapper candidates exist, audit that every preserved outer shell has documented product-semantics evidence and is not merely a decorative centered artboard.
- When ignoring a presentation wrapper, still preserve real in-product shell boundaries such as top/left-only borders, raised panes, and directional edge shadows.
- Assign shared visual boundaries to the node that owns them. Do not duplicate one separator on both adjacent panes, and do not assign a main-stage left edge to a neighboring sidebar just because the line sits on the boundary between them.
- Capture corner radius per corner when the screenshot is asymmetric. Do not collapse a top-left-only or one-side-only rounded shell into a uniform rounded shape.
- Preserve real in-product shell offsets from the surrounding app canvas. Do not remove a main-stage top/side margin just because sticky topbar rules prohibit transparent padding inside the scroll container.
- When an inset main stage contains a persistent topbar, model/render it as an outer clipped shell with the offset/border/shadow, an inner scroll container, a sticky opaque topbar inside that scroll container, and content below the topbar in normal flow.
- Bounded repeated-content containers such as sidebars, navigation lists, builder palettes, menus, and inspector panels must own local scrolling when content can exceed their visible height. Do not hide overflow on repeated list content without an inner scroll pane.
- For directional shell-edge shadows, preserve strength separately. Default to `xs` for tight, barely visible top/left edge shadows unless the screenshot clearly shows a larger cast shadow.
- For tabbars and horizontal navigation, capture and render edge distribution explicitly. Do not silently substitute equal grid tracks or `space-around` gutters for source layouts that use content-sized `space-between`/edge-spread alignment.
- Verify with a real build and browser checks when possible.
