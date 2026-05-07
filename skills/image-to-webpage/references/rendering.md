# Rendering Rules

## Viewport Normalization

Before implementation, confirm adaptation width with the user and verify that the First Response Confirmation Gate in `SKILL.md` has completed. The user's original screenshot reconstruction request does not count as confirmation. If the user has not explicitly confirmed after seeing the device classification, adaptation width, page target, and asset-generation decision, stop and ask for confirmation before implementing.

- Landscape screenshot default: `1200px` PC layout width.
- Portrait screenshot default: `402px` mobile layout width.
- First tell the user whether the screenshot was recognized as PC/desktop or mobile.
- Continue only after the user explicitly confirms the first reply or approves a corrected width/target.
- If the user provides a width, use that width.

Keep raw image dimensions in artifacts, but normalize implementation measurements:

```text
effective_source_width = ignored_outer_container ? real_product_ui_bounds.width : screenshot_pixel_width
scale = adaptation_width / effective_source_width
css_value = observed_bitmap_value * scale
```

Use normalized values for layout width, spacing, component dimensions, and responsive reconstruction. When a presentation wrapper is ignored, the render source is the inner real product UI bounds, not the full screenshot dimensions.

## Responsive Output Contract

The confirmed adaptation width is the scale calibration point for screenshot fidelity, not the output viewport size. At the confirmed width, the page should match the source proportions closely; at other viewport sizes, the page must remain usable and coherent.

Do not implement the root, body, page shell, or primary scroll container as a fixed screenshot/artboard rectangle, such as `width: 1200px; height: 854px`, `w-[1200px] h-[854px]`, `width: 402px`, `height: 896px`, or a centered fixed-size stage. Fixed dimensions are allowed only for measured component internals, real product-owned fixed-width panels, table minimum widths inside a horizontal scroll region, or max/min constraints inside a fluid shell.

Prefer these implementation patterns:

- Desktop app shells: `width: 100%` or `100vw`, `min-height: 100vh`/dynamic viewport units, grid or flex tracks such as fixed sidebar plus `minmax(0, 1fr)` content, and local scroll panes for viewport-bounded areas.
- Desktop document/marketing pages: fluid sections with content-level `max-width`, responsive gutters via `clamp()`/breakpoints, and `min-height` only where the screenshot shows a first-viewport composition.
- Mobile screens: a fluid screen width, `min-height: 100dvh` or equivalent, persistent chrome outside the scroll pane when appropriate, safe-area compensation, and content scrolling instead of a fixed phone-height wrapper.
- Repeated grids/toolbars/form rows: preserve the confirmed-width layout at the calibration width, then wrap, stack, collapse columns, or use scoped horizontal scroll for genuinely wide content on smaller viewports.

Record the chosen strategy in the render artifact, including the calibration width, whether the root is fluid, the primary viewport units used, min/max constraints, breakpoint behavior, and any intentional fixed panels or scoped horizontal overflow.

## Page Integration And Artifact Ownership

Integrate the generated page at the narrowest existing page boundary. If the project has file-based routing, route modules, a page registry, a pages directory, or static page files, create/register one page-local module or file for the reconstruction instead of folding the page implementation, data, icons, styles, and artifacts into the global app entry file.

Keep generated page assets and workflow artifacts namespaced by page when the project supports it. Prefer a page-local `artifacts/` or equivalent folder beside the generated page over a shared flat artifact directory that can collide across multiple reconstructions. For standalone static output, keep the HTML, CSS, assets, and artifacts grouped by the generated page name.

## React + Tailwind Implementation

Before editing code, load `references/frontend-design.md` as a hard design-quality reference. Apply its production-grade frontend standards to the reconstruction's typography, composition, spacing, visual detail, motion, and avoidance of generic AI aesthetics. Use it to raise implementation polish while preserving screenshot fidelity as the higher-priority contract. Do not reinterpret the screenshot into a new creative direction when the source provides clear evidence; measured layout, exact readable text, wrapper decisions, asset strategy, adaptation width, and existing project conventions remain authoritative.

Prefer existing project conventions. In React + Tailwind projects:

- Build semantic components from the DSL rather than dumping one huge JSX tree.
- Use Design Tokens for color, typography, radius, border, spacing, and control size.
- Apply targeted typography only where the design-token artifact records high-visual-weight text roles. Prices, brand/logo text, hero headlines, large KPI/counter numbers, and dominant CTA labels may use role-specific font candidates, digit style, and fallback stacks. Low-visual-weight text should normally use the global typography tokens and should not trigger extra font work.
- For targeted typography, check whether the chosen font is already available through project CSS, local assets, or normal system fonts. If it is unavailable and the project/request does not allow adding a font, use the recorded fallback stack and write the fallback decision in the render artifact. Do not silently claim an unavailable exact font is being used.
- Distinguish exact font availability from close visual fallback availability. If the inferred exact font for high-visual-weight text is missing but a close project/local/system font exists in the same visual class, use the close fallback without a user-facing warning and record the fallback in the artifact. Tell the user only when no close visual fallback is available; the notice should identify the affected text part, inferred font, missing installation, recommended install, and fallback that will be used.
- Use Tailwind arbitrary values for fidelity-critical dimensions.
- Keep Tailwind class names statically discoverable by the project's content scanner. Do not build fidelity-critical classes through runtime string interpolation unless the exact complete class strings also appear statically, are safelisted, or are replaced by inline/page-scoped CSS.
- If the page relies on many arbitrary Tailwind values, add a build-output style integrity check. Confirm the compiled CSS contains the critical utilities or equivalent CSS for the page root, persistent chrome, main card/gallery, important image positioning/sizing, controls, CTA, and high-visual-weight text. If any are missing, fix before reporting success.
- Keep repeated components data-driven.
- Use high-quality icons for common UI glyphs. Prefer an existing project icon package first. If none exists and dependencies may be added, prefer a tree-shakeable ESM package such as `lucide-react`, `@heroicons/react`, or `@tabler/icons-react`, importing only the named icons used by the page. If dependencies cannot be added, use consistent inline SVGs from an open-source icon set. Avoid crude CSS, emoji, text-character, or hand-drawn approximations for settings, menu, search, nav, status, and action icons.
- Render standalone actionable icons as real buttons or links with accessible labels, not inert spans. Repeated card settings/menu icons should be present on every card where the screenshot shows them.
- Use the confirmed adaptation width as the point where measured pixel values are most faithful, then place those values inside a fluid shell. Do not combine high-fidelity arbitrary values into a fixed-size screenshot replica at the root.
- Preserve responsive behavior explicitly: grids collapse, toolbars wrap, inputs keep usable widths.
- Treat row layouts from DSL as source intent, not as a license for fixed one-line flex everywhere. Filter rows, toolbars, form rows, action groups, pagination controls, and mixed input/button rows must wrap or stack at narrow widths with usable control sizes.
- Scope horizontal overflow to the content that actually needs it. Tables, code blocks, timelines, and wide data grids may scroll horizontally inside their own region, but pagination, filters, toolbar buttons, and surrounding page controls should remain outside that horizontal scroll container unless the screenshot clearly shows them scrolling together.
- Respect shared app-shell background tokens. If tokens or DSL indicate sidebar, topbar, and main stage share one app canvas color, apply the same background to all of those large regions and sticky header cover layers. Do not introduce a visible seam by choosing nearby but different neutral colors.
- Do not over-apply shared app-shell background tokens. If tokens or DSL record distinct backgrounds for a sidebar/navigation rail and main canvas/main stage, preserve those separate fills even when they are close pale neutrals. A persistent nav column that has its own tint should not be recolored to match the main stage just for consistency.
- Render card internal distribution from DSL hints. For media cards with `media_fills_remaining_space` or `text_anchored_bottom`, use a fixed/min height flex column, a `flex-1` media region with centered content, and a bottom text stack pinned with `mt-auto` or equivalent. Do not render those cards as a plain natural vertical stack that leaves accidental bottom whitespace.
- Render KPI/stat/summary cards from their recorded internal structure. When a card has an inner tinted value band or metric well, keep the outer card padding, inner band height, band padding, and bottom/right/left inset from the source. Do not stretch the band until it nearly touches the card edge unless the screenshot does.
- Render repeated card/list-item action footers from their recorded structure. Use a flex column card, make the body the flexible region, and make the footer `shrink-0` with its measured `height` or at least `min-height`. The footer must own its top divider, padding, background, and `justify-between`/left-right action distribution. Ensure `footer min-height >= tallest footer control + padding-top + padding-bottom`; do not let a fixed card height, `overflow-hidden`, or border-box mistake crop settings icons, "Details" buttons, switches, or row actions. If the card needs rounded clipping, put controls inside the clipped footer region rather than absolutely positioning them through the card edge.

## Interactivity And Cursor Affordance

Clickable UI must feel clickable. Render enabled buttons, links, nav items, tabs, segmented options, switches, checkboxes, radio buttons, icon buttons, select/dropdown triggers, card action menus, sortable headers, and row/card details actions with the appropriate semantic element and `cursor: pointer` on hover. Disabled controls may use `cursor: not-allowed`; text inputs and search fields should use the text cursor in the editable area.

If the DSL marks `requires_pointer_cursor = true`, `behavior.interactive = true`, or a known control type, apply pointer cursor even if the screenshot only shows the default state. Do not require a visible hover screenshot to add cursor affordance.

## Image Asset Rendering

Use the DSL `asset` or `request.image_asset_strategy` fields to decide how important image-based visual elements are restored. Prefer layered restoration when image generation is available: coded background, transparent subject asset, then separate interactive overlays.

## Hero Underlay And Floating Sheet Overlap

When a mobile screen has a hero/photo/map area with a rounded bottom sheet, booking card, player panel, profile panel, or detail panel floating over it, render that as layered geometry rather than adjacent blocks.

- The hero/photo/map is the underlay and should extend behind the floating panel by the measured overlap amount.
- The floating sheet/card is the overlay and owns the rounded top corners, surface fill, shadow, content padding, and scroll behavior.
- Record and render `overlap_px = hero_underlay_bottom - overlay_top` when the screenshot shows the panel covering part of the image. Do not set `hero.height` equal to `sheet.top` unless the source truly has a hard seam with no overlap.
- Keep the image asset itself clean: do not bake the sheet/card pixels into the hero asset. The sheet/card is DOM/CSS above the image.
- If the top corners of the sheet reveal image behind them, the hero underlay must continue underneath at least far enough to fill those corner/shadow areas.
- If the sheet has a subtle top shadow, cast it over the image underlay rather than over a blank page background.

### Asset Contamination Gate

Before creating or accepting any screenshot crop as a final rendered asset, inspect whether the crop is clean. This gate is mandatory for primary hero photos, venue/product photos, maps, artwork, preview images, and any high-visual-weight raster region.

A crop is contaminated when it includes pixels from elements that should be separate UI or ignored presentation chrome, including:

- Device/browser/mockup frames or screenshot presentation shells.
- OS status bars, battery/wifi/signal indicators, clock text, notches, dynamic islands, iOS home indicators, or Android gesture/navigation bars.
- Product navigation/action controls such as back, favorite, share, menu, carousel arrows, zoom buttons, chips, badges, or floating buttons.
- Text overlays, price/title cards, bottom sheets, dialogs, modals, popovers, toolbars, or other UI surfaces covering the underlying image.

Contaminated crops must not be used as final `source_crop` assets for important image nodes. If a clean unobstructed crop of the same underlying image exists in the screenshot, crop only that clean image region. If a clean crop does not exist, switch to `asset_strategy = "generate_clean_asset"` or `generate_transparent_subject` and use the contaminated crop only as a reference. The generation prompt must explicitly list every contaminant to remove. Render product-owned controls and overlays as DOM/components above the clean asset; do not bake them into the asset. Ignore presentation-only contaminants entirely.

For `asset_strategy = "generate_transparent_subject"`:

- Use the screenshot crop/reference with the user's image generation skill to preserve the main subject/material while removing the visual background and interactive elements.
- Ask for transparent background output. The generation instruction should explicitly say to keep the subject, erase/remove the background, and erase/remove buttons, badges, chips, text overlays, carousel controls, and other interactive UI elements.
- Recreate simple backgrounds with code instead of screenshots: CSS/Tailwind gradients, solid fills, glows, noise-free shapes, blurred blobs that are actually in the product, and geometric backdrops should live in DOM/CSS/canvas layers.
- Render the final composition as layers, typically: coded background/gradient, transparent generated subject image, then floating buttons/chips/badges/controls as separate DOM nodes.
- Record the generated transparent asset path, reference crop, coded background strategy, overlay node ids, and any fallback in the render artifact.

For `asset_strategy = "source_crop"`:

- Treat this as a fallback final asset when image generation is unavailable, explicitly declined by the user, or transparent subject separation is not suitable. Create or use a single crop covering the whole visual element from the source screenshot.
- If image generation is available and not explicitly declined, do not render a separable important image as final `source_crop`. Correct the DSL/render artifact to `generate_transparent_subject` or document concrete evidence that separation is unsuitable.
- Do not crop only an internal patch when the DSL says `whole_element = true`.
- Do not include overlay controls in the crop. If an element is actually obstructed by interactive controls, correct the strategy to `generate_clean_asset` rather than saving an occluded crop as the final asset.
- Do not include presentation or system chrome in the crop, including phone frames, browser/device mockups, OS status bars, iOS home indicators, Android gesture/navigation bars, notches/dynamic islands, clock/battery/wifi indicators, or outer screenshot chrome. If those pixels are present, the crop fails the asset contamination gate.
- Do not include bottom sheets, cards, text blocks, price panels, buttons, badges, or navigation controls in a photo/hero asset just because they overlap the source screenshot. Those overlays must be reconstructed separately as UI.
- Do not bake obvious gradient/tonal background pixels into a subject asset when the background can be recreated with CSS. Use coded background plus transparent subject instead.
- Render the crop with the recorded aspect ratio, object-fit, radius, clipping, and surrounding layout from the DSL/design tokens.

For `asset_strategy = "generate_clean_asset"`:

- Use this when a clean non-layered image is needed and transparent subject extraction is unavailable or inappropriate.
- Use the DSL `generation.prompt_features` and `generation.reference_image` or source screenshot region as the generation brief/reference.
- Request a clean asset without the occluding controls, system chrome, and presentation/device chrome. Preserve product-owned controls as separate UI nodes layered above the asset.
- Include explicit negative prompt features for detected contaminants, for example: "no phone frame", "no status bar", "no iOS home indicator", "no Android navigation bar", "no gesture pill", "no dynamic island", "no battery/wifi icons", "no back/favorite/share buttons", "no bottom sheet", "no text/card overlay".
- Ask for transparent background output first because it usually blends most reliably with the reconstructed page. Fall back to a non-transparent generated asset only when the user's image generation skill cannot create transparency.
- Record the generated asset path, whether transparency was supported, reference used, and any fallback in the render artifact.

If generation is required but no user image generation skill is available, do not silently invent a low-fidelity placeholder. Use the best available source crop as a temporary reference/fallback asset if needed, record the limitation in the render artifact, and keep backgrounds and occluding controls separate where possible so the asset can be regenerated cleanly later.

## Presentation Wrapper Removal And Preservation Audit

If `request.ignored_outer_container = true`, treat wrapper removal as a hard render contract.

- Render the DSL root as the first real product surface. Do not add a separate body/page wrapper that recreates the screenshot's presentation canvas.
- Do not center the product UI inside a viewport-colored artboard with `items-center`, `justify-center`, auto margins, or similar showcase positioning unless that centering belongs to the product UI itself.
- Do not add viewport padding around all sides of the product root to mimic a design board, browser/device mockup, or screenshot background.
- Do not apply `max-width`, fixed artboard height, outer `border-radius`, or outer `box-shadow` to the product root just because the ignored wrapper had those traits.
- The page background outside the product root should normally match the product root/app-shell background, or the product root should fill the viewport. A different surrounding color band is allowed only when it is a real in-product region recorded in the DSL.
- Preserve real in-product shells inside the effective source bounds, but do not reintroduce ignored shells outside those bounds.

If `request.ignored_outer_container = false` but `request.wrapper_candidates` is non-empty, treat wrapper preservation as a hard render contract.

- Read `request.wrapper_decision` before coding. Every preserved outer candidate must have evidence that the boundary itself is product chrome.
- Do not render a preserved large rounded frame/artboard when its evidence only says that it contains product UI. Contained logo, tabs, cards, and buttons do not prove the boundary is product UI.
- If a candidate was marked `uncertain` or has confidence below 0.7, avoid copying its radius, fixed dimensions, all-sides viewport padding, centering, shadow, and surrounding background into the rendered root unless the user explicitly asked to preserve the showcase frame.
- For preserved candidates, map only the product-owned boundary traits documented in the DSL. Do not add unrelated presentation-board traits.

## Tabs And Horizontal Distribution

Render tabbars from the DSL distribution hints. Do not default to equal grid columns just because a tabbar has two, three, or four items.

- `distribution: "edge-spread"`: use content-sized tab items in a flex row with `justify-between` or equivalent. Avoid outer gutters unless `edge_inset_start` or `edge_inset_end` is nonzero in the DSL.
- `distribution: "equal-tracks"` or `item_sizing: "equal"`: use equal-width tracks (`grid-cols-*` or flex children with `flex-1`) and center labels inside each track.
- `distribution: "centered-group"`: render a content-width group centered in the available space.
- `distribution: "fixed-gap"`: render content-sized items with the recorded or inferred fixed gap.

Active tab indicators should follow the screenshot: text-width/content-width indicators stay near the label, while track-width indicators fill the tab track. Do not automatically make the indicator full track width or centered in an equal column if the DSL says items are content-sized.

Before finalizing, visually compare the first and last tab positions against the source. If the screenshot has near-zero tabbar edge gutters, the render should not show `space-around`-style outer gutters.

## Asymmetric Shell Edges

Preserve real in-product app-shell, main-stage, raised-pane, and topbar boundaries even when an outer showcase wrapper is ignored.

- If DSL border sides are non-symmetric, render only those sides. Do not replace `["top", "left"]` with a full border, and do not collapse it to only `border-bottom`.
- If `appearance.shadow` is present, map its `sides`, `role`, and `strength` to a directional shadow or pseudo-element that matches the visible sides. For example, a `shell_edge` shadow on `["top", "left"]` can be rendered with a wrapper or `before` layer that casts subtle shadow upward/leftward without adding right/bottom shadow.
- For `shell_edge` shadows, start from `strength: "xs"` unless the DSL or source clearly indicates a larger shadow. A tight app-stage edge shadow should read as a small edge darkening, not a broad card shadow.
- Directional shell-edge shadows are allowed even when generic `elevation` is `"none"` or `null`; they represent an edge treatment, not generic floating-card elevation.
- Do not copy ignored presentation-wrapper shadows. Only render shadows attached to real product nodes captured in the DSL.

## Boundary Ownership

Render each visible separator once. If the DSL assigns a main-stage/profile-pane left border, do not also add a right border to the neighboring sidebar for the same shared boundary. When a sidebar has `appearance.border.visible = false` or null, keep it borderless even if the adjacent main pane has its own edge treatment. Surface contrast alone should be rendered with background colors, not invented border lines.

## Corner Radius

Render per-corner radius when `appearance.radius` is present.

- For uniform or `inferred_uniform` radii, use the repo's normal radius utility or token on all four corners.
- For asymmetric radii, use corner-specific utilities such as `rounded-tl-*`, `rounded-tr-*`, `rounded-br-*`, `rounded-bl-*`, or a CSS `border-radius: top-left top-right bottom-right bottom-left` value.
- Do not replace a top-left-only radius with `rounded-*` on all corners.
- Do not convert corners marked `cropped_by_screenshot_edge`, `occluded`, or `unknown` into square corners. If a normal card, panel, section, container, menu, or modal has visible rounded corners on the same surface and the missing corners are cropped by the screenshot edge, render a uniform radius and record the inference in the render artifact.
- Use asymmetric bottom-square/top-rounded rendering only when the DSL provides positive in-product evidence, such as a bottom sheet attached to a viewport edge, a drawer or split pane joined to another surface, or a visible square component boundary. A physical screenshot crop line is not enough evidence.
- For panels that continue beyond the captured image, such as an "All Integrations" card grid container cut off at the screenshot bottom, prefer the regular symmetric panel radius from the visible top corners instead of treating the cropped bottom edge as square.
- Put `overflow-hidden` or equivalent on the shell that owns the radius when its children/topbar/content should be clipped by that corner.

## Shell Offsets And Clipping

Preserve real product shell offsets separately from scroll/topbar padding. A main-stage shell may sit a few pixels below or away from the surrounding app canvas, and that offset must remain visible when it belongs to the product UI.

Use a two-layer pattern when an inset shell contains a sticky topbar:

- Outer shell: owns `margin-top`/side offsets, asymmetric border sides, directional shadow, radius if present, height constraints, and `overflow-hidden`/clipping.
- Inner scroll pane: fills the shell and owns `overflow-y-auto` or equivalent.
- Sticky topbar: lives inside the inner scroll pane, uses `sticky top-0`, full-width opaque background, and sufficient `z-index`.
- Content area: appears below the topbar in normal flow inside the same inner scroll pane.

Do not remove the outer shell offset to satisfy topbar bleed prevention. The rule against top padding outside a sticky topbar applies inside the scroll container; it does not prohibit a product shell wrapper from having a visible external top margin.

## Mobile Status Bars

When rendering a mobile/system status bar, treat it as persistent system chrome rather than ordinary page content.

- First search for an existing project-level status bar component or standard status bar style, such as `MobileStatusBar`, and reuse it when available. Prefer tone/variant props over hand-built per-page SVG or HTML.
- Hand-roll a status bar only when no reusable default exists, the screenshot shows product-specific status bar customization that the default cannot represent, or the user explicitly asks for exact custom reconstruction. Record that reason in the render artifact.
- If a status bar is rendered, it must not scroll with content. Put the status bar outside the scrollable content region, or render it as `position: sticky` / `position: fixed` at the top of the mobile viewport/screen.
- Give the status bar an opaque background matching the app canvas or top surface. Do not leave transparent status-bar gutters where scrolled content can show through.
- Offset the scrollable content below the status bar with normal flow, padding, or an explicit top inset so the first content is not hidden under the fixed/sticky layer.
- The render artifact must include a `status_bar` or equivalent entry in `scroll_architecture`, recording `rendered`, `strategy`, `component_reused`, and `scroll_behavior: "persistent" | "not_rendered"`.

## Mobile System Navigation Indicators

Bottom OS navigation and gesture indicators are system chrome by default and should not be reconstructed as page UI.

- Treat the iOS home indicator/gesture pill, Android gesture bar, Android three-button navigation bar, and customized OEM Android navigation bars as ignored system chrome unless the user explicitly asks to reproduce device/OS chrome or the target page is itself an OS UI demonstration.
- Do not model these elements as product bottom navs, drag handles, dividers, progress bars, buttons, decorative pills, or sheet controls. A product-owned bottom nav or sheet drag handle must have product semantics or contextual attachment to a product surface; an isolated pill at the physical screen edge is system chrome.
- Do not render a visible home indicator or Android navigation bar in the final page. If bottom spacing is needed after ignoring it, use normal product safe-area padding or content padding without drawing the OS indicator.
- Treat these indicators as asset contaminants. They must not appear inside hero/photo/map/image crops or generated assets; include them in negative prompt features when generating clean assets from contaminated references.
- Record visible indicators in artifacts as ignored system chrome, for example `ignored_system_chrome: [{ "type": "ios_home_indicator", "decision": "ignore" }]`, so the omission is intentional and auditable.

## Mobile Page Navigation

When rendering mobile page-level navigation, treat it as persistent app chrome by default.

- Classify navigation from interaction semantics, not just shape. Elements that navigate back, switch screens/routes, switch primary app sections, or act as page-level tabs are page navigation.
- Page-level navigation includes top back/action navigation bars, top tabbars, bottom tabbars, floating bottom tabbars, bottom navigation rails, and compact icon/tab bars that switch pages or major app sections.
- Render page-level navigation outside the scrollable content region, or as `position: sticky` / `position: fixed` attached to the appropriate viewport/screen edge. It should not scroll away with product/content text, cards, lists, or forms.
- For top page navigation, keep it below the persistent status bar when one is rendered. Use an opaque background and offset the content pane below it so content cannot slide under or show through the nav layer.
- For bottom or floating bottom page navigation, use fixed/sticky bottom positioning and add bottom padding or inset compensation to the scrollable content so the final content is reachable and not hidden behind the nav.
- Persistent navigation bars must include internal safe padding around their controls. A top back/action bar, top tabbar, bottom tabbar, or floating tabbar should not place buttons/tabs flush against the nav boundary and rely entirely on scroll-content padding for visual separation.
- When persistent top chrome is split out of the content scroll stack, preserve the source distance from navigation controls to the first scrollable content by splitting it between nav internal padding/height and content pane `padding-top` or the first content node's `margin-top`. The fact that chrome is persistent must not collapse a visible source gap, but also must not move the whole gap into the scroll pane if that leaves the nav controls visually touching the scrolling content once the page moves.
- When persistent bottom chrome is split out, preserve the source gap/overlap relationship with content by splitting it between nav internal padding and content pane `padding-bottom` or bottom inset compensation.
- Distinguish page navigation from content-local controls. Tabs, segmented controls, filters, sort chips, card tabs, or section tabs inside a scrollable content area should scroll with that content unless they clearly switch pages/routes or primary app sections.
- If the semantic level is ambiguous, prefer persistent behavior only when the element is visually/positionally global or clearly page-switching; otherwise record the ambiguity in the DSL/render artifact.
- The render artifact must include page-level navigation entries in `scroll_architecture`, recording each nav's `id`, `kind`, `edge`, `scroll_behavior: "persistent"`, and whether it is outside the scroll region, fixed, or sticky.

## Scroll Architecture

Decide scroll architecture before coding. Do not let the browser document become the default scroll container for dashboard/app-shell layouts unless the UI is clearly a static document page.

For desktop dashboards with sidebar plus topbar:

- Use an app shell such as `lg:h-screen lg:overflow-hidden lg:flex`.
- Keep the desktop sidebar persistent with `lg:sticky lg:top-0 lg:h-screen` or an equivalent fixed grid column.
- If sidebar content may exceed viewport height, make the sidebar body/nav scroll internally with `overflow-y-auto`; do not scroll the whole shell.
- Put the right-side app pane in `lg:h-screen lg:overflow-y-auto` or equivalent when it is flush with the app canvas.
- If the DSL shows an inset main-stage shell, put the offset on an outer non-scrolling/clipped shell and put `overflow-y-auto` on an inner pane. Size the outer shell with a height calculation or flex constraints so the visible offset does not create document scrolling.
- Keep the global topbar persistent with `sticky top-0 z-*`.
- Give sticky/fixed regions solid backgrounds and appropriate `z-index` so content does not bleed underneath.
- Sticky/fixed topbars must cover the entire top occlusion region of their scroll container, including any visual top padding, safe-area inset, or toolbar gutter. Do not leave a transparent padding strip above or around a sticky header where scrolled content can show through.
- Do not put top padding on the scroll container outside the sticky topbar. Either move that top padding into the sticky topbar itself, make the sticky topbar full-bleed with negative margins and matching inner padding, or wrap the sticky topbar in an opaque full-width/fill-height sticky background layer.
- The first scrollable content below a sticky topbar must begin after the topbar's covered area. Use normal document flow, explicit padding/offset compensation, or a topbar+content stack; do not rely on `z-index` alone when the sticky element is smaller than the region it is meant to mask.
- Keep main page content in the scrollable pane below the topbar.

For mobile layouts:

- Do not keep a large desktop sidebar fixed on screen.
- If a status bar is rendered, keep it persistent at the top and out of the scrolling content. Page scrolling must begin below the status bar, and scrolling the product content must not move the status bar off screen.
- Convert primary navigation to a top nav, drawer, bottom nav, floating bottom nav, or horizontally scrollable nav according to the screenshot.
- Top page navigation, including back/action bars and page-level tabbars, is persistent by default and should sit outside the scrolling content or use sticky/fixed top positioning.
- Bottom page navigation, bottom tabbars, and floating bottom tabbars are persistent by default and should sit outside the scrolling content or use fixed/sticky bottom positioning.
- Add top or bottom padding/inset compensation to scrollable content when fixed/sticky status bars, top navs, bottom navs, tabbars, or FABs overlap the viewport, and also when the screenshot shows a visible gap between persistent chrome and content. Preserve measured chrome-to-content spacing, not just overlap safety, but first give persistent navigation controls their own internal safe padding so scrolling content never appears tightly attached to the buttons/tabs.
- Hide scrollbars by default on mobile page scroll owners and local mobile scroll containers, unless the source screenshot explicitly shows a meaningful scrollbar or scroll indicator that should be reconstructed. Keep scrolling enabled with touch momentum; do not replace `overflow-y-auto` with `overflow-hidden`.
- Use a cross-browser mobile scrollbar-hidden utility or page-scoped CSS on each mobile scroll owner:
  `scrollbar-width: none; -ms-overflow-style: none;` plus `selector::-webkit-scrollbar { display: none; width: 0; height: 0; }`.

For floating and overlay components:

- Floating action buttons, chat/help launchers, and quick-create buttons should use `fixed` positioning and a stable viewport edge.
- Modals, drawers, popovers, and toasts must render in an overlay layer, not inside normal content flow.
- Drawers should be fixed to their visible edge.
- Toasts usually use fixed top/right or bottom/right placement.
- Popovers may be anchored, but they should not push surrounding layout unless the screenshot shows an expanded inline disclosure.

For bounded lists and local overflow:

- Any fixed-height or max-height sidebar, navigation list, builder palette, menu, inspector, filter panel, card list, or grouped list whose content may exceed the visible height must have a local scroll owner.
- Prefer a two-layer pattern when rounded clipping is needed: outer shell owns border/radius/shadow/`overflow-hidden`; inner list body owns `min-h-0 overflow-y-auto`.
- For app sidebars with a pinned brand/header and footer/profile area, use a flex column: header and footer are non-scrolling, the middle nav/list gets `min-h-0 flex-1 overflow-y-auto`.
- For builder palettes/toolboxes with a title area and repeated groups, keep the title fixed inside the panel and make the groups/body `min-h-0 overflow-y-auto` when the panel height is bounded.
- Do not use `overflow-hidden` on repeated list content as a substitute for scrollability. Hidden overflow is allowed only on the outer clipping shell when an inner scroll pane exists.
- Add appropriate bottom padding to scrollable list bodies so the last item can fully scroll above rounded corners or pinned footers.

For tables and dense data regions:

- Table headers can be sticky only when the screenshot or product semantics clearly show a scrollable data region.
- Scope horizontal overflow to the table/content region, not the whole app shell.
- Keep pagination, filters, and non-table controls outside the table's horizontal overflow container unless the screenshot shows otherwise.
- On narrow viewports, keep filter inputs, select controls, search fields, primary actions, and pagination controls readable and tappable. They may wrap, stack, or switch to full-width controls, but must not shrink into tiny unusable boxes merely because the source desktop row was horizontal.
- If a table needs a minimum width, apply that minimum to the table itself or its immediate scroll wrapper, not to the entire card footer, filter bar, or pagination row.

Verification checklist for scrolling:

- On desktop, scrolling main content does not move persistent sidebar or global topbar.
- On mobile, any rendered system status bar remains visible and fixed/sticky while page content scrolls; it is not part of the scrolling content stack.
- On mobile, bottom OS navigation indicators are intentionally not rendered. If a source screenshot shows an iOS home indicator, Android gesture bar, Android three-button bar, or OEM navigation strip, the render artifact records it as ignored system chrome and the final DOM/CSS does not draw it.
- On mobile, page-level navigation and page-switching tabbars remain visible and fixed/sticky while page content scrolls; top back/action navs, top tabbars, bottom tabbars, and floating bottom tabbars are not part of the content scroll stack.
- No content is visible inside the status-bar occlusion region while scrolling, including through transparent status-bar gutters, padding strips, or rounded clipping gaps.
- No content is hidden behind persistent mobile navigation; scrollable content has top/bottom inset compensation for fixed/sticky nav layers.
- Persistent mobile navigation controls have safe internal padding around buttons/tabs/icons. Scrolling content should not visually attach to the nav controls after the initial top content scrolls away.
- Persistent mobile chrome does not collapse visible source spacing. The first scrollable content preserves the measured source gap below status/top navigation chrome, and bottom content preserves measured spacing or inset above bottom navigation/tabbars, with spacing allocated between chrome internal padding and scroll content inset rather than dumped into only one layer.
- Horizontal scrollers in padded mobile content preserve edge behavior. If source chips/cards/tabs extend into the screen-edge padding area, render the scroll strip full-bleed with negative inline margins and matching inner padding/scroll-padding so the first item aligns with the text column but overflow continues to the screen edge.
- Mobile scrollbars are hidden by default on the owning scroll containers while scrolling remains possible. If a visible scrollbar is kept, the render artifact documents that the source screenshot showed a meaningful scrollbar/scroll indicator.
- Sticky/fixed regions do not cover content without padding/offset compensation.
- No content is visible inside the topbar occlusion region while scrolling, including through scroll-container padding, rounded clipping gaps, transparent header margins, or partially covered toolbar gutters.
- Sidebar can still access bottom profile/account controls.
- Bounded list panels can reach their last item by scrolling locally; sidebars, builder palettes, menus, and inspectors do not clip final items.
- Mobile navigation remains usable and does not trap or hide content.
- Floating controls remain attached to their viewport edge during scroll.

## Shadow Mapping

Treat DSL `elevation` as a high-risk field. Do not map it mechanically.

Recommended mapping:

- `elevation: "none"`: no box-shadow.
- `elevation: null`: no box-shadow unless visual verification proves otherwise.
- `elevation: "low"`: use only an extremely subtle shadow, and only for nodes that visibly cast a shadow.
- `elevation: "medium"`: use for clear raised controls such as primary CTA buttons or visible floating surfaces.
- `elevation: "high"`: reserve for modals, popovers, drawers, or unmistakably floating elements.

Recommended `appearance.shadow.strength` mapping for side-specific shadows:

- `xs`: tight edge treatment, roughly 1-3px offset with short blur and low opacity. Use this by default for app-shell/top-left shell-edge shadows.
- `sm`: subtle but clearly visible cast shadow, still side-specific and restrained.
- `md`/`lg`: only for broad, unmistakable floating surfaces or overlays; do not use for ordinary shell edges.

For directional shell-edge shadows, prefer pseudo-elements, layered wrappers, or side-specific shadows that affect only the recorded sides. Avoid broad generic card shadows when the source shows only a small top/left edge darkening.

For inner/inset control shadows:

- Treat `appearance.shadow.placement = "inner"` as an inset shadow, not elevation.
- Render with CSS inset shadows, for example Tailwind arbitrary `shadow-[inset_0_1px_0_rgba(...),inset_0_-1px_2px_rgba(...)]` or a component CSS rule using `box-shadow: inset ...`.
- Keep `elevation: "none"` or null from adding any outside shadow when the DSL says `placement = "inner"`.
- Use inner shadows for buttons, icon buttons, segmented controls, chips, and inputs when the screenshot shows an internal bevel/pressed highlight. Secondary toolbar buttons and primary CTA buttons can both be inner-only.
- Use `placement = "both"` only when the screenshot clearly shows an inner bevel and an outside cast shadow. Render the two layers explicitly instead of replacing one with the other.
- Treat `strength`, `strength_confidence`, and `evidence` as part of the render contract. If strength is low confidence or `evidence = "visually_observed"`, choose a conservative inset value and document that it is an estimate in the render artifact. If strength is null, render the smallest visible shadow needed to preserve the observed placement, not a generic raised style.

Do not add shadow for:

- Flat cards with borders.
- Large white panels with outlines.
- Active nav items.
- Selected tabs.
- Segmented controls.
- Search inputs and normal inputs.
- Secondary outline buttons.
- Icon-only outline buttons.

For those elements, do not add outside shadows. Use border, background, selected/active styling, and any explicitly recorded inner/inset shadow instead.

Exception: if `appearance.shadow.visible = true` on a real app shell, main stage, raised pane, or topbar, render that directional edge shadow even if the node would otherwise be treated as a flat panel. Keep it subtle and side-specific.

If the rendered page looks too floaty, first audit:

1. DSL nodes with `elevation: "low"`.
2. Component variants that add shadow by default.
3. Token aliases such as `button.secondary.shadow` or `card.shadow`.
4. Controls with `appearance.shadow.placement = "inner"` that were accidentally rendered as outside `box-shadow`.

## Verification

Always run the available build command. Then verify in a real browser when possible:

- Required text appears.
- Old unrelated page text is gone.
- Console errors are absent.
- Desktop and mobile layouts do not clip, overlap, or overflow incoherently.
- The page root/app shell is viewport-adaptive, not a fixed screenshot-size artboard. Search the implemented files for hard-coded root patterns such as `w-[1200px]`, `h-[854px]`, `width: 1200px`, `height: 854px`, `width: 402px`, or fixed `body`/root dimensions. If such values exist, they must be justified as component internals or replaced with fluid shell sizing.
- The render artifact includes a `viewport_adaptation` or equivalent section recording calibration width, fluid root behavior, dynamic viewport units, breakpoints/wrapping behavior, and any intentional fixed panels/min-width scroll regions.
- Enabled interactive controls expose pointer affordance: buttons, nav items, tabs, icon buttons, card action menus, switches, row actions, and links use semantic controls and `cursor: pointer` on hover; disabled controls do not.
- Sidebar/navigation rail and main canvas backgrounds match the source relationship. Distinct tints remain distinct; shared app-shell backgrounds are used only when the source reads as a continuous surface.
- KPI/stat/summary cards preserve internal spacing: title/action row, inner tinted value band/metric well, band padding, and band bottom/right/left inset match the source instead of collapsing to the card edge.
- Repeated cards/list items preserve separated action footers: footer top divider is visible when present, footer height/min-height fits its controls, settings/action buttons and "Details" buttons are fully visible, switches are vertically centered and not clipped, and the body/footer split matches the source rather than being inferred from generic card padding.
- Visible action/status/navigation icons are present and consistent in quality. Repeated card settings/menu icons, search icons, notification icons, nav icons, and stat icons are not dropped; icon packages are imported per-icon or tree-shaken rather than wholesale.
- Shadows match the screenshot: if the screenshot is mostly flat, remove shadows before adjusting colors.
- Inner/inset control shadows match the screenshot: controls with inner-only bevels should not gain outside drop shadows.
- Shadow strength records are honest: guessed/visually judged strength must include confidence/evidence/notes and must not be presented as measured.
- Directional shell-edge shadows match the source size. Tight top/left app-stage shadows should remain `xs`/small, not become broad ambient elevation.
- Tabbars match the screenshot's distribution: no accidental `space-around` outer gutters when the source uses edge-spread/space-between alignment.
- Non-symmetric shell borders and directional shadows are preserved on the correct sides, especially top/left-only or side-only app-stage edges.
- Shared boundaries are rendered once and attached to the correct owner; borderless sidebars remain borderless when the visible line belongs to an adjacent pane.
- Asymmetric corner radii are preserved per corner only when supported by positive in-product evidence; screenshot-edge-cropped corners are not treated as square and ordinary panels default to symmetric radius inference.
- Main-stage shell offsets are preserved when visible in the source, and those offsets do not create transparent sticky-topbar bleed because scrolling is owned by the inner pane.
- Important image elements use layered restoration when image generation is available: coded background/gradient, transparent subject asset, and separate interactive overlays.
- Whole-element source crops are used only as fallback final assets or when the DSL documents that the subject/background cannot be separated cleanly.
- Generated image assets omit overlay controls, prefer transparent backgrounds, and preserve the subject/material from the screenshot reference.
- Generated transparent subjects must preserve the source subject's visual size. Render from the source subject bbox inside the gallery/hero, not from the generated PNG's natural or trimmed dimensions. Do not run `trim`, `-trim`, tight crop, or equivalent transparent-padding removal on a subject asset when the original transparent canvas represents the source crop coordinate system. If trimming is necessary for optimization, record the removed top/right/bottom/left transparent insets and compensate the CSS `left`/`top`/`width`/`height` so the visible subject keeps the same source bbox. If the generated asset has less transparent padding than the screenshot subject area, use the untrimmed alpha asset, reduce CSS display size, or regenerate with transparent padding so the visible product/hero subject does not become larger than the reference.
- When image generation is available and not declined, separable product/hero subjects are not left as source crops with baked-in gradient/background pixels. The render artifact records the generated transparent asset and coded background strategy.
- The built CSS contains the page's fidelity-critical visual rules. For Tailwind, inspect the actual emitted CSS file after build for key root/card/gallery/control/CTA/high-weight text utilities, especially arbitrary color, dimension, positioning, radius, shadow, cursor, and background-gradient classes. Build success is not enough when missing CSS would leave only default text/flow visible.
- The built CSS/JS does not make the reconstruction root a fixed screenshot-size page. When browser checks are prohibited, use text/build-output inspection to confirm responsive root rules such as `width:100%`, `100vw`, `min-height:100vh`/`100dvh`, flex/grid `minmax(0,1fr)`, `clamp()`, or breakpoint rules are present where relevant, and that fixed screenshot dimensions are absent from root-level selectors.
- Important imported image assets are present in the built output and referenced by the built JS/CSS bundle. Product/hero/gallery assets must not disappear because of a bad import path, missing file, stale dev server, or unreferenced generated asset.
- When available, run the bundled helper for non-browser integrity checks, for example:
  `node skills/image-to-webpage/scripts/check-build-integrity.mjs --dist dist --class "h-[333px]" --class "bg-[#17140e]" --asset-name-contains "diamond-ring" --js-contains "Diamond ring"`.
- Persistent sidebar/topbar/bottom nav/floating controls keep the correct scroll behavior.
- Rendered mobile/system status bars reuse the project default component or record a justified custom strategy, and they remain persistent instead of scrolling away with page content.
- Mobile page-level navigation and page-switching tabbars are persistent by default, while content-local tabs/filters scroll with their owning content region unless explicitly identified as page navigation.
- Persistent mobile navigation bars include their own safe padding/gutter around controls; chrome-to-content spacing is split between nav internal padding and scroll content inset so scrolling does not make controls appear glued to content.
- Mobile scroll containers hide browser scrollbars by default without disabling scrolling, unless the source explicitly includes a scrollbar/scroll indicator that should be visible.
- Image subjects match source visual bbox size after generation/cropping, and horizontal scrollers match source edge bleed instead of being clipped by page padding when the screenshot shows edge-to-edge overflow.
- If `ignored_outer_container = true`, no ignored wrapper leaks into the implementation: no all-sides viewport padding, centered artboard wrapper, copied showcase background band, copied device/browser frame radius, fixed artboard height, or copied outer-frame shadow remains around the real product UI.
- If `ignored_outer_container = false` and wrapper candidates exist, each rendered outer wrapper has documented product-semantics evidence. No large centered decorative artboard/frame is preserved solely because it contains the product UI.

After verification, always start the local page and open it for the user when the environment allows it. Use the project's normal dev or preview server, choose another available port if needed, and open the rendered page route.

When project instructions prohibit browser/page opening, do not substitute only a build and text presence check. Record that browser verification was skipped, and include non-browser integrity checks for compiled CSS and asset references in the render artifact. If the user is viewing an existing dev server, warn that a stale Tailwind/Vite process may not include classes from newly created files; restart the server when allowed, or ask the user to restart it.
