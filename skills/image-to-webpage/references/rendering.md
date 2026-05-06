# Rendering Rules

## Viewport Normalization

Before implementation, confirm adaptation width with the user.

- Landscape screenshot default: `1200px` PC layout width.
- Portrait screenshot default: `414px` mobile layout width.
- If the user provides a width, use that width.

Keep raw image dimensions in artifacts, but normalize implementation measurements:

```text
effective_source_width = ignored_outer_container ? real_product_ui_bounds.width : screenshot_pixel_width
scale = adaptation_width / effective_source_width
css_value = observed_bitmap_value * scale
```

Use normalized values for layout width, spacing, component dimensions, and responsive reconstruction. When a presentation wrapper is ignored, the render source is the inner real product UI bounds, not the full screenshot dimensions.

## React + Tailwind Implementation

Prefer existing project conventions. In React + Tailwind projects:

- Build semantic components from the DSL rather than dumping one huge JSX tree.
- Use Design Tokens for color, typography, radius, border, spacing, and control size.
- Use Tailwind arbitrary values for fidelity-critical dimensions.
- Keep repeated components data-driven.
- Use local SVG/CSS approximations for logos/icons when external assets are unavailable.
- Preserve responsive behavior explicitly: grids collapse, toolbars wrap, inputs keep usable widths.
- Respect shared app-shell background tokens. If tokens or DSL indicate sidebar, topbar, and main stage share one app canvas color, apply the same background to all of those large regions and sticky header cover layers. Do not introduce a visible seam by choosing nearby but different neutral colors.
- Render card internal distribution from DSL hints. For media cards with `media_fills_remaining_space` or `text_anchored_bottom`, use a fixed/min height flex column, a `flex-1` media region with centered content, and a bottom text stack pinned with `mt-auto` or equivalent. Do not render those cards as a plain natural vertical stack that leaves accidental bottom whitespace.

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

- For uniform radii, use the repo's normal radius utility or token.
- For asymmetric radii, use corner-specific utilities such as `rounded-tl-*`, `rounded-tr-*`, `rounded-br-*`, `rounded-bl-*`, or a CSS `border-radius: top-left top-right bottom-right bottom-left` value.
- Do not replace a top-left-only radius with `rounded-*` on all corners.
- Put `overflow-hidden` or equivalent on the shell that owns the radius when its children/topbar/content should be clipped by that corner.

## Shell Offsets And Clipping

Preserve real product shell offsets separately from scroll/topbar padding. A main-stage shell may sit a few pixels below or away from the surrounding app canvas, and that offset must remain visible when it belongs to the product UI.

Use a two-layer pattern when an inset shell contains a sticky topbar:

- Outer shell: owns `margin-top`/side offsets, asymmetric border sides, directional shadow, radius if present, height constraints, and `overflow-hidden`/clipping.
- Inner scroll pane: fills the shell and owns `overflow-y-auto` or equivalent.
- Sticky topbar: lives inside the inner scroll pane, uses `sticky top-0`, full-width opaque background, and sufficient `z-index`.
- Content area: appears below the topbar in normal flow inside the same inner scroll pane.

Do not remove the outer shell offset to satisfy topbar bleed prevention. The rule against top padding outside a sticky topbar applies inside the scroll container; it does not prohibit a product shell wrapper from having a visible external top margin.

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
- Convert primary navigation to a top nav, drawer, bottom nav, or horizontally scrollable nav according to the screenshot.
- Bottom navs are usually `fixed bottom-0` when they are persistent app controls.
- Add bottom padding to scrollable content when a fixed bottom nav or FAB overlaps the viewport.

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

Verification checklist for scrolling:

- On desktop, scrolling main content does not move persistent sidebar or global topbar.
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
- Shadows match the screenshot: if the screenshot is mostly flat, remove shadows before adjusting colors.
- Inner/inset control shadows match the screenshot: controls with inner-only bevels should not gain outside drop shadows.
- Shadow strength records are honest: guessed/visually judged strength must include confidence/evidence/notes and must not be presented as measured.
- Directional shell-edge shadows match the source size. Tight top/left app-stage shadows should remain `xs`/small, not become broad ambient elevation.
- Tabbars match the screenshot's distribution: no accidental `space-around` outer gutters when the source uses edge-spread/space-between alignment.
- Non-symmetric shell borders and directional shadows are preserved on the correct sides, especially top/left-only or side-only app-stage edges.
- Shared boundaries are rendered once and attached to the correct owner; borderless sidebars remain borderless when the visible line belongs to an adjacent pane.
- Asymmetric corner radii are preserved per corner and are not normalized to a uniform rounded rectangle.
- Main-stage shell offsets are preserved when visible in the source, and those offsets do not create transparent sticky-topbar bleed because scrolling is owned by the inner pane.
- Persistent sidebar/topbar/bottom nav/floating controls keep the correct scroll behavior.
- If `ignored_outer_container = true`, no ignored wrapper leaks into the implementation: no all-sides viewport padding, centered artboard wrapper, copied showcase background band, copied device/browser frame radius, fixed artboard height, or copied outer-frame shadow remains around the real product UI.
- If `ignored_outer_container = false` and wrapper candidates exist, each rendered outer wrapper has documented product-semantics evidence. No large centered decorative artboard/frame is preserved solely because it contains the product UI.

After verification, always start the local page and open it for the user. Use the project's normal dev or preview server, choose another available port if needed, and open the rendered page route.
