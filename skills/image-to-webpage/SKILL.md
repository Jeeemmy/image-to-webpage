---
name: image-to-webpage
description: >-
  Recreate images, UI screenshots, style board images, app snapshots, or webpage
  screenshots as real high-fidelity web pages. Use when the user sends or
  references an image and asks Codex to restore, recreate, copy, reproduce,
  convert, implement, or render it as a real page, especially with React,
  Tailwind, HTML/CSS, or the current frontend stack. The skill runs three core
  steps: generate Design Tokens from the screenshot with the preset prompt,
  generate UI DSL from the screenshot with the preset prompt, then render and
  verify the page from those artifacts.
---

# Image To Webpage

## Core Workflow

This skill has exactly three core production steps. Do not skip the first two artifacts when rendering from an image.

## First Response

When this skill triggers, keep the first user-facing reply limited to confirming:

- The recognized target device type: PC/desktop or mobile.
- Default adaptation width: `1200px` for PC/landscape screenshots unless the user specified another width.
- Default adaptation width: `414px` for mobile/portrait screenshots unless the user specified another width.
- Planned page target and page name. Before replying, inspect the user's project structure and dependencies to determine whether it has a routing/page framework or page registry. If routing exists, state the exact route to add, for example `路由/文件：检测到项目已有路由，放到 /pages/<name> 对应页面。` If no routing framework exists, state the exact static HTML target, for example `路由/文件：未检测到路由框架，使用 <name>.html。` Do not give a conditional fallback such as "优先做成 /xxx；如果没有路由框架，则使用 xxx.html", and do not ask the user to judge whether routing exists.
- Whether image generation is available for this session when important image-based visuals are likely present. If available, explicitly say image generation will be used to restore separable image subjects with transparent backgrounds and coded backgrounds/overlays. If the user explicitly declines image generation, use the no-AI asset fallback path and record that choice.
- A font availability notice only when high-visual-weight text appears to use a font that is not installed and no project/local/system font with a close visual style is available. Do not warn for low-visual-weight text or when a close style fallback is available. Use this form: "识别到截图中 <part> 部分文字推测是 <font> 字体。当前系统没有安装，也没有检测到近似风格字体，建议安装 <font>。如果没有，将使用 <fallback> 字体替代。"

Do not include file lists or extended implementation plans in the first reply.

### Step 1: Generate Design Tokens

If the user has not provided a screenshot/snapshot/image, ask for one before continuing.

Use the preset prompt in `references/design-token-prompt.md` with the user's screenshot. Output only valid JSON and save the result locally, for example:

```text
<page-or-workflow-artifacts>/<name>-design-tokens.json
```

Prefer page-local artifact storage when the target project has route/page modules, for example `src/pages/<name>/artifacts/design-tokens.json` or the project's equivalent convention. Use a global `workflow-artifacts/` directory only when the project has no page-local convention or the output is a standalone static file.

### Step 2: Generate UI DSL

Use the preset prompt in `references/ui-dsl-prompt.md` with the same screenshot. Output only valid JSON and save the result locally, for example:

```text
<page-or-workflow-artifacts>/<name>-ui-dsl.json
```

Store the UI DSL beside the generated page artifacts when the project has page-local modules. Keep each generated page's tokens, DSL, render record, and source assets namespaced by page so adding another screenshot reconstruction does not overwrite or confuse prior outputs.

Before extracting DSL, run a wrapper classification gate. Enumerate any outer canvas, centered artboard, browser/device/mock frame, decorative rounded frame, clipping frame, or drop-shadow wrapper as a candidate. This gate is mandatory even when the final decision is to preserve the candidate.

For each wrapper candidate, decide whether the wrapper boundary itself has product semantics. A wrapper containing product controls is not enough evidence; the boundary must itself be a real product app/window/shell/pane edge with layout ownership, scroll/clipping ownership, or alignment to internal product regions. If the boundary is only a visual board/frame around the product, ignore it.

Record the wrapper candidates and final decision in the DSL request metadata. If a large centered rounded frame/artboard is preserved, document concrete product-semantics evidence and confidence. If the evidence is ambiguous, default to treating the candidate as a presentation wrapper rather than silently preserving a showcase shell.

When a presentation wrapper is ignored, record the effective source bounds of the real product UI and use those bounds as the render source. The ignored wrapper must not reappear later as body/page padding, a centered artboard, a rounded outer frame, a device/browser shell, or a background band around the rendered page.

For important visual elements that are rendered as images, record a layered asset strategy in the DSL. When the user has an image generation skill available and the user has not explicitly declined it, use the screenshot crop as a reference to generate a transparent subject cutout: preserve the main subject/material, erase the visual background, and erase interactive overlays. Recreate simple or gradient backgrounds with code/design tokens, then layer the transparent subject asset and any floating interactive controls above it. Use a whole-element source crop as the final asset only when image generation is unavailable, the user explicitly declined image generation, or the element cannot be separated cleanly.

Before accepting any screenshot crop as a final image asset, run an asset contamination gate. A crop is contaminated if it contains presentation/device chrome or interactive UI that should be rendered separately, including phone frames, browser/device mockups, OS status bars, iOS home indicators, Android gesture/navigation bars, notches/dynamic islands, battery/wifi indicators, app back/favorite/share buttons, carousel controls, badges, text labels, cards, bottom sheets, modals, or floating action surfaces. For primary hero photos, venue/product photos, map tiles, artwork, and other high-visual-weight raster regions, a contaminated crop is not a valid final `source_crop`. If the underlying image cannot be cleanly cropped without those elements, set the strategy to `generate_clean_asset` or `generate_transparent_subject` and include explicit generation negative prompt features for every contaminant. Render the removed UI chrome and controls as normal DOM/components above the clean asset when they belong to the product UI; ignore presentation-only chrome.

### Step 3: Render The Page

Use the generated Design Tokens, generated UI DSL, and `references/rendering.md` to implement the page in the repo's existing frontend stack.

Before rendering, confirm adaptation width:

- Landscape screenshots default to `1200px` PC layout width.
- Portrait screenshots default to `414px` mobile layout width.
- Tell the user whether the screenshot was recognized as PC/desktop or mobile.
- Tell the user which width will be used in the first reply.
- Continue if the user confirms.
- If the user gives a specific width, use the user's width instead.

Record the render result locally, for example:

```text
<page-or-workflow-artifacts>/<name>-render-step3.json
```

Include source artifacts, adaptation width, scale, files changed, scroll architecture, verification commands, style/asset integrity checks, and browser checks.

For DSL image nodes with `asset_strategy = "generate_transparent_subject"`, use the user's available image generation skill with the screenshot crop/reference to preserve the subject while removing background and interactive elements, then render any background gradients in code and overlay controls separately. If image generation is available and not explicitly declined, do not downgrade a separable important image to `source_crop`; correct the DSL/render plan instead. For `asset_strategy = "source_crop"`, create/use the recorded whole-element crop only as a fallback final asset when image generation is unavailable, the user declined image generation, or the DSL documents why transparent separation is unsuitable. Before saving a `source_crop`, inspect the crop bounds against the screenshot and artifact: if the crop includes device/browser chrome, status bars, iOS/Android system navigation indicators, notches, navigation buttons, bottom sheets, text/cards, badges, or any other overlay that should not be part of the underlying image, reject that source crop and switch to `generate_clean_asset` or a clean crop that excludes contaminants. For `asset_strategy = "generate_clean_asset"`, use the DSL prompt features or reference crop to generate a clean non-layered asset only when transparent subject extraction is not supported or not appropriate; prompts must explicitly ask to remove all detected contaminating UI and presentation chrome.

After implementation and verification, always start the page locally and open it for the user when the environment allows browser/page opening. Prefer the repo's existing dev/preview command; if the intended port is occupied, use another available port and open the final page route.

If browser/page opening is unavailable or prohibited by project instructions, build success alone is not sufficient for a visual reconstruction. Run a non-browser style and asset integrity gate before reporting success:

- For React + Tailwind or generated utility CSS, identify the fidelity-critical classes or style values for the page root, persistent chrome, primary cards/hero/gallery, main image asset, key buttons/CTA, and high-visual-weight text.
- Inspect the built CSS emitted by the actual build output and confirm those critical selectors or equivalent CSS values exist. If critical utility classes are absent, fix the implementation with static class strings, a safelist, inline styles, or page-scoped CSS before finalizing.
- Inspect the built JS/asset output and confirm imported image assets used by important image nodes are present and referenced by the bundle.
- Prefer the bundled non-browser helper for this gate when the project emits static build assets:
  `node skills/image-to-webpage/scripts/check-build-integrity.mjs --dist dist --class "<critical-tailwind-class>" --asset-name-contains "<asset-substring>" --js-contains "<asset-or-page-substring>"`.
- If the user will view an already-running dev server, assume Tailwind/content-scanner CSS can be stale after new files are created. Restart the dev/preview server when allowed, or explicitly tell the user a refresh/restart is required. Do not claim visual fidelity from a stale server.

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
- Treat interactivity as a render contract, not just visual shape. Clickable controls, buttons, icon buttons, links, nav items, tabs, segmented controls, checkboxes/radios, switches, menu triggers, card action menus, sortable headers, and any element with a visible action affordance must render with appropriate interactive semantics and `cursor: pointer` on hover unless disabled.
- Preserve intentionally distinct app-shell region backgrounds. Do not merge sidebar, navigation rail, topbar, main canvas, and main stage backgrounds into one token merely because they are close pale neutrals; share a background token only when the regions visually read as one continuous surface.
- Keep global typography extraction broad, but record targeted typography for high-visual-weight text. High-weight text includes prices, brand/logo text, hero headlines, large KPI/counter numbers, and visually dominant CTA labels. For these, record role, text sample, font-family candidates, digit style when relevant, confidence, evidence, and fallback/availability notes. Low-visual-weight body/supporting text may use the global typography fallback without per-element font analysis.
- For high-visual-weight font availability, distinguish exact-font absence from style absence. If the exact inferred font is missing but a close project/local/system font exists in the same visual class, use that fallback silently and record it in the artifact. Tell the user only when no close visual fallback is available.
- For mobile/system status bars, prefer an existing project-level default status bar component or standard status bar style when one exists. Do not hand-roll a per-page status bar unless no reusable default exists, the screenshot shows product-specific status bar customization, or the user explicitly asks for exact custom reconstruction. Record the status bar strategy and reason in the render artifact.
- If a status bar is rendered, it is persistent system chrome and must never scroll with page content. Render it outside the scrolling content region, or as a fixed/sticky top layer with an opaque background and content offset/compensation so page content cannot pass under or through it.
- Treat bottom OS navigation and gesture indicators as ignored system chrome by default, not as product UI. This includes the iOS home indicator/gesture pill, Android gesture bar, Android three-button navigation bar, and customized OEM Android navigation bars. Do not model or render them as dividers, progress bars, handles, bottom navs, buttons, or decorative page elements unless the user explicitly asks to reproduce OS/device chrome or the page itself is an OS UI demonstration. Record them as ignored system chrome in artifacts when visible.
- For mobile page-level navigation, default to persistent scroll behavior. If an element is identified as page navigation, route navigation, screen switching, or a page-level tabbar, render it outside the content scroll region or fixed/sticky to its edge so it does not scroll away. This includes top back/action navigation bars, top tabbars, bottom tabbars, and floating bottom tabbars. Only content-local tabs/filters inside a scrollable section should scroll with that section.
- Persistent mobile navigation must own its own internal safe padding around buttons/tabs/icons. Do not create all visible separation by putting a large `padding-top` on the scroll pane while the nav buttons sit flush against the nav boundary. Split the measured chrome-to-content distance between nav internal padding/height and scroll content inset so controls still have breathing room when content scrolls.
- When persistent status bars or page-level navigation are moved outside the scrollable content, preserve the original visual gap between the bottom of the persistent top chrome and the first scrollable content, and between the last scrollable content and persistent bottom chrome. Allocate that measured space across the chrome's own internal padding and the scroll pane's `padding-top`/`padding-bottom` or first/last content margin. Do not collapse chrome and content until they touch, and do not keep increasing only the content inset when the nav itself lacks safe padding.
- Treat important image-based visual elements as layered assets, not approximations by default. When a user image generation skill is available, prefer transparent subject extraction from a screenshot reference: preserve the subject/material, erase backgrounds and interactive overlays, recreate gradients/backgrounds with code, and layer controls separately. Whole-element source crops are fallback final assets, not the first choice when transparent extraction is viable.
- Treat screenshot crops for important image nodes as unsafe until proven clean. A crop that includes phone hardware, device/browser frames, OS status bars, iOS home indicators, Android gesture/navigation bars, dynamic islands/notches, app navigation/action buttons, text overlays, cards, bottom sheets, badges, modals, or other UI chrome must not become the final hero/photo asset. Either crop a clean unobstructed image-only region, or generate/edit a clean asset using the contaminated crop only as reference and record the contaminants removed. Do not bake UI chrome into a photo and then render another copy of the same chrome in DOM.
- Treat hero/photo underlap and floating content panels as an explicit layering relationship. If a bottom sheet, rounded card, booking panel, player panel, or detail panel visually floats over the hero/photo/map area, record the sheet's top edge, the underlay image's bottom edge, `overlap_px`, z-order, corner radius, and shadow. Do not collapse these into adjacent vertical regions where `hero.bottom === sheet.top`; the image must continue underneath the overlay enough for rounded corners and shadows to reveal the layered depth.
- Preserve image subject size from the screenshot, not from the generated asset's natural dimensions. For generated transparent subjects, record the source subject visual bounding box inside its container and render the asset so the visible subject occupies the same scaled width/height and position. Do not trim transparent padding when that padding preserves the source crop/canvas coordinate system needed for placement. If a generated/trimmed PNG fills its canvas more tightly than the source subject did, prefer using the untrimmed alpha asset or regenerate with source-like transparent padding; only trim when trim offsets/insets are recorded and compensated in CSS.
- For horizontal scrollers inside padded mobile content, decide whether the screenshot shows edge bleed. Chip rows, carousels, tab strips, and horizontal option lists often align the first item with page padding but let subsequent content scroll into the left/right padding area up to the screen edge. Render those as full-bleed scroll containers with negative inline margins and matching internal padding/scroll-padding, not as rows clipped to the padded content column.
- For mobile render targets, hide scrollbars by default on page and local scroll containers while preserving touch scrolling. Use `scrollbar-width: none`, `-ms-overflow-style: none`, and `::-webkit-scrollbar { display: none; width: 0; height: 0; }` on the mobile scroll owner. Do not hide scrollbars only when the source screenshot explicitly shows a meaningful scrollbar/scroll indicator that should be reconstructed.
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
- For KPI/stat/summary cards with an inner tinted value band or metric well, capture and render the outer card padding, inner band padding, and bottom/right inset separately. Do not stretch the inner band until it nearly touches the card edge unless the screenshot actually shows that tight spacing.
- Prefer high-quality icon components over hand-drawn approximations for common UI icons. In JavaScript apps, use an existing project icon package when available; otherwise prefer a tree-shakeable icon package such as `lucide-react` or another ESM per-icon import library, importing only the icons used. If dependencies cannot be added, use inline SVGs copied from a consistent open-source icon set rather than crude CSS/ASCII approximations. Every visible settings, menu, search, action, status, and navigation icon should be represented.
- When using Tailwind arbitrary values or generated utility CSS, treat compiled style availability as part of correctness. A page that relies on uncompiled classes can degrade into mostly default text while still passing build. Do not consider build-only verification complete unless critical visual utilities/assets are present in the built output or the same styles are applied by inline/page-scoped CSS.
- Verify with a real build and browser checks when possible.
