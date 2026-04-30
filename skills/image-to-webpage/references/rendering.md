# Rendering Rules

## Viewport Normalization

Before implementation, confirm adaptation width with the user.

- Landscape screenshot default: `1440px` PC layout width.
- Portrait screenshot default: `414px` mobile layout width.
- If the user provides a width, use that width.

Keep raw image dimensions in artifacts, but normalize implementation measurements:

```text
scale = adaptation_width / screenshot_pixel_width
css_value = observed_bitmap_value * scale
```

Use normalized values for layout width, spacing, component dimensions, and responsive reconstruction.

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

## Scroll Architecture

Decide scroll architecture before coding. Do not let the browser document become the default scroll container for dashboard/app-shell layouts unless the UI is clearly a static document page.

For desktop dashboards with sidebar plus topbar:

- Use an app shell such as `lg:h-screen lg:overflow-hidden lg:flex`.
- Keep the desktop sidebar persistent with `lg:sticky lg:top-0 lg:h-screen` or an equivalent fixed grid column.
- If sidebar content may exceed viewport height, make the sidebar body/nav scroll internally with `overflow-y-auto`; do not scroll the whole shell.
- Put the right-side app pane in `lg:h-screen lg:overflow-y-auto` or equivalent.
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

For tables and dense data regions:

- Table headers can be sticky only when the screenshot or product semantics clearly show a scrollable data region.
- Scope horizontal overflow to the table/content region, not the whole app shell.
- Keep pagination, filters, and non-table controls outside the table's horizontal overflow container unless the screenshot shows otherwise.

Verification checklist for scrolling:

- On desktop, scrolling main content does not move persistent sidebar or global topbar.
- Sticky/fixed regions do not cover content without padding/offset compensation.
- No content is visible inside the topbar occlusion region while scrolling, including through scroll-container padding, rounded clipping gaps, transparent header margins, or partially covered toolbar gutters.
- Sidebar can still access bottom profile/account controls.
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

Do not add shadow for:

- Flat cards with borders.
- Large white panels with outlines.
- Active nav items.
- Selected tabs.
- Segmented controls.
- Search inputs and normal inputs.
- Secondary outline buttons.
- Icon-only outline buttons.

For those elements, use border, background, and selected/active styling instead.

If the rendered page looks too floaty, first audit:

1. DSL nodes with `elevation: "low"`.
2. Component variants that add shadow by default.
3. Token aliases such as `button.secondary.shadow` or `card.shadow`.

## Verification

Always run the available build command. Then verify in a real browser when possible:

- Required text appears.
- Old unrelated page text is gone.
- Console errors are absent.
- Desktop and mobile layouts do not clip, overlap, or overflow incoherently.
- Shadows match the screenshot: if the screenshot is mostly flat, remove shadows before adjusting colors.
- Persistent sidebar/topbar/bottom nav/floating controls keep the correct scroll behavior.
