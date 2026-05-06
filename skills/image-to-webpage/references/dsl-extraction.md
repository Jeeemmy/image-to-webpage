# UI DSL Extraction Rules

## Output Contract

Generate only valid JSON for the DSL step. Do not include Markdown fences, explanations, CSS, hex colors, shadow strings, font names, or implementation code.

Capture:

- Page hierarchy and semantic roles.
- Visible text exactly as shown.
- Every visible icon as an icon node, `icon`, `leading_icon`, or `trailing_icon`.
- Borders, dividers, outlines, selected states, and panel boundaries.
- Component-specific types such as `nav_item`, `tabs`, `tab`, `switch`, `badge`, `avatar`, `icon_button`, `search_input`, `card`, and `section`.
- Approximate layout measurements only where useful for rendering fidelity.
- Tabbars and horizontal controls: distribution, item sizing, and outer edge insets when visible.
- Wrapper classification: every visible outer canvas/artboard/frame candidate, whether it was ignored or preserved, why, confidence, and the real product UI `effective_source_bounds` used for all measurements.
- Real product app-shell boundaries, including asymmetric border sides and directional edge shadows.
- Inner/inset control shadows separately from outside cast shadows.
- Real product shell offsets from the surrounding app canvas, including top offsets that belong outside the scroll container.
- Clipping/scroll hierarchy for inset main stages: outer shell boundary vs inner scroll container vs sticky topbar vs normal-flow content.
- Local overflow ownership for bounded list containers such as sidebars, navigation lists, builder palettes, menus, inspector panels, and repeated grouped lists.

Use `null` for unknown, ambiguous, unreadable, or not visible values.

## Wrapper Classification Gate

Before generating the DSL root, classify outer wrappers. This is a hard gate, not an optional note.

Enumerate `request.wrapper_candidates` for every outer visual container that encloses most or all of the UI, including:

- Outer screenshot/showcase canvas with a different background from the UI.
- Centered artboard or fixed-format presentation surface.
- Decorative rounded frame, clipping frame, white/gray outline, or broad container radius.
- Browser/device/mock frame.
- Drop-shadow wrapper or glow that sits outside the product UI.

For each candidate, record approximate source-image bounds, visual signals, whether it contains product UI, whether the boundary itself has product semantics, the decision (`ignore`, `preserve`, or `uncertain`), confidence, and evidence.

Do not use "the wrapper contains logo, tabs, cards, charts, buttons, or text" as evidence that the wrapper boundary is product UI. That only proves the wrapper contains product UI. The question is whether the wrapper boundary itself is functional product chrome.

Preserve a wrapper candidate only when the boundary itself has concrete product semantics, such as:

- Real app/window/browser/device chrome that the user asked to recreate.
- Product app-shell or pane boundary that owns scrolling, clipping, or layout constraints.
- Boundary edges that align with internal product regions such as a sidebar, topbar, pane, canvas, modal, or scroll container.
- A visible shell whose border/radius/shadow continues as part of in-product layout rather than an outer presentation board.

Ignore a wrapper candidate when it is only:

- A centered showcase/artboard frame.
- A decorative rounded rectangle around the whole composition.
- A clipping mask for presentation.
- A canvas/background band outside the actual UI.
- An outer shadow or glow added for display.

If a large centered rounded frame or artboard exists and product-semantics evidence is weak, set `request.ignored_outer_container = true`. Do not silently preserve ambiguous showcase shells.

When `ignored_outer_container` is true:

- Record `request.effective_source_bounds` with `x`, `y`, `width`, and `height` in source-image pixels.
- Treat those effective bounds as the root measurement area for the DSL.
- Do not model the ignored wrapper as a `container`, `card`, `modal`, page background, app shell, radius, shadow, margin, or padding.
- Do not copy the ignored wrapper's surrounding color, centering, rounded clipping, fixed artboard dimensions, or shadow into the DSL.
- Keep only real product UI inside the effective bounds, including genuine in-product app shells, sidebars, topbars, pane offsets, borders, and shadows.

When `ignored_outer_container` is false but wrapper candidates exist:

- `request.wrapper_decision.ignored` must be false.
- List all preserved candidates and record evidence for why each boundary is product chrome.
- If the only evidence is that the candidate contains product content, change the decision to ignored.
- If confidence is below 0.7 for a large centered frame/artboard, prefer ignoring it or set the candidate decision to `uncertain` and avoid copying its radius, padding, shadow, and surrounding background into the root.

## Elevation And Shadow

Default `appearance.elevation` to `"none"` or `null`.

Do not set elevation just because a component has:

- A white or raised-looking surface.
- A visible border or outline.
- Rounded corners.
- Padding.
- A selected/active state.
- A grouped card-like structure.
- A different background from the page.

Use elevation only when a cast shadow is clearly visible outside the component boundary. When the shadow is directional, side-specific, or inset, record it separately as `appearance.shadow`.

Represent flat visual separation like this:

```json
{
  "appearance": {
    "border": {
      "visible": true,
      "sides": ["all"],
      "role": "outline"
    },
    "elevation": "none"
  }
}
```

Use `border.role = "selected"` and `state.active = true` for active nav items or tabs. Active/selected state must not imply elevation.

For segmented controls, tabs, inputs, outline buttons, flat cards, nav items, sidebars, toolbars, and panels whose separation is primarily border/surface contrast, set elevation to `"none"`.

If uncertain whether a shadow exists, set elevation to `null` or `"none"`, not `"low"`.

Do not infer elevation from component type. A `card` can be flat.

Directional edge shadows are not the same as generic elevation. If a real product shell, main stage, raised pane, or topbar shows a shadow only on one side or on top+left, preserve it with:

```json
{
  "appearance": {
    "shadow": {
      "visible": true,
      "sides": ["top", "left"],
      "role": "shell_edge",
      "strength": "xs",
      "strength_confidence": 0.7,
      "evidence": "visually_observed",
      "notes": "Tight edge shadow is visible, but exact blur/alpha is estimated."
    },
    "elevation": "none"
  }
}
```

Use `strength: "xs"` for tight directional edge shadows that are only a few pixels wide or barely visible. Use `"sm"` only for a clearly visible but still subtle cast shadow, and reserve `"md"`/`"lg"` for unmistakably floating overlays or broad shadows. Whenever a strength bucket is set, also record `strength_confidence`, `evidence`, and short `notes`; do not make a guessed bucket look measured.

Do not copy presentation-wrapper shadows into the product DSL. Keep only shadows aligned to the actual product UI.

Inner/inset control shadows are also not generic elevation. If a button, icon button, segmented control, chip, or input shows a bevel or shadow inside its rounded boundary, preserve it with `placement: "inner"` and do not create outside elevation:

```json
{
  "appearance": {
    "shadow": {
      "visible": true,
      "placement": "inner",
      "sides": ["top", "bottom"],
      "role": "inner_control",
      "strength": "xs",
      "strength_confidence": 0.65,
      "evidence": "visually_observed",
      "notes": "Internal bevel is visible; exact inset values are inferred during rendering."
    },
    "elevation": "none"
  }
}
```

If both an inner bevel and an outside cast shadow are clearly visible, use `placement: "both"` and describe only the visible sides. If only the inner bevel is visible, do not set `elevation: "low"` or map the control to a raised button/card shadow.

If the screenshot proves placement but not strength, prefer `strength: null` with `evidence: "visually_observed"` and notes such as "inner shadow present, exact strength ambiguous". The renderer can then choose a conservative token and document it in the render artifact.

## Border And Surface Separation

Use `appearance.border` for:

- Card outlines.
- Input outlines.
- Panel boundaries.
- Selected nav/tab outlines.
- Dividers and separators.
- First-level app shell, main stage, raised pane, and topbar edges, including non-symmetric sides such as `["top", "left"]`.

Use `divider` nodes for visible internal separator lines. Do not model separators as shadows.

For shared boundaries between adjacent regions, record ownership explicitly by placing the border on only one node. Prefer the owner whose visible outline, clipped surface, directional shadow, or raised shell continues around the corner. Do not put a `border-right` on a sidebar when the line is actually the left edge of an inset main stage, profile pane, or workspace shell. If the regions are separated only by background contrast, leave `appearance.border.visible` false/null instead of inventing a divider.

Use semantic appearance variants for surface changes:

- `variant: "active"` for active navigation.
- `variant: "selected"` for selected options.
- `variant: "neutral"` for normal surfaces.
- `tone: "brand"` for branded primary controls.

## Corner Radius

Inspect corners independently. `appearance.shape` is only a coarse semantic label; it is not enough for asymmetric shells.

Use `appearance.radius` when radius is visible or affects clipping:

```json
{
  "shape": "rounded",
  "radius": {
    "top_left": 8,
    "top_right": 0,
    "bottom_right": 0,
    "bottom_left": 0,
    "role": "asymmetric"
  }
}
```

If only the top-left corner of a main stage is rounded, record only that corner as rounded and leave the other corners square/zero. Do not normalize it to a uniform rounded rectangle. Do not copy corner radius from ignored showcase frames.

## Tabbars And Horizontal Distribution

Do not treat every horizontal tabbar as an equal grid.

Record `layout.distribution`, `layout.item_sizing`, and edge insets when visible:

- `distribution: "edge-spread"` plus `justify: "space-between"` when the first and last tabs sit close to the container edges and extra space is between items.
- `distribution: "equal-tracks"` plus `item_sizing: "equal"` when each tab occupies an equal-width track and label text is centered in each track.
- `distribution: "centered-group"` when tabs form a centered cluster with significant equal outer gutters.
- `distribution: "fixed-gap"` when the labels are content-width with mostly constant gaps.

Estimate `edge_inset_start` and `edge_inset_end` if they are important for fidelity. These describe the visual gutter from the tabbar edge to the first/last tab content or indicator.

## Shell Offset And Clipping

Preserve visible offsets between real product surfaces. If a main stage, workspace surface, raised pane, or app frame begins slightly below/away from the surrounding app canvas, record that as product layout (`layout.margin_top`, side margins, or `offset_*`) instead of removing it as wrapper padding.

Do not confuse external shell offset with scroll-container padding. Sticky topbar bleed is prevented inside the scroll container; it does not require the product shell to be flush with the outer canvas.

For an inset shell that contains a sticky topbar, prefer this DSL shape:

```json
{
  "type": "main",
  "role": "main_stage_shell",
  "layout": {
    "margin_top": 8
  },
  "appearance": {
    "radius": {
      "top_left": 8,
      "top_right": 0,
      "bottom_right": 0,
      "bottom_left": 0,
      "role": "asymmetric"
    }
  },
  "behavior": {
    "overflow": "hidden",
    "scroll_container": "child",
    "internal_scroll_container": "child"
  },
  "children": [
    {
      "type": "container",
      "role": "main_stage_scroll_pane",
      "behavior": {
        "scroll_container": "self",
        "overflow": "auto"
      },
      "children": [
        {
          "type": "header",
          "role": "app_header",
          "behavior": {
            "positioning": "sticky",
            "sticky_edge": "top"
          }
        }
      ]
    }
  ]
}
```

## Bounded Lists And Local Scroll

Repeated-content containers with a finite visible height must not silently clip overflowing content. This applies to:

- Sidebars and navigation rails with many nav items.
- Builder palettes/toolboxes with grouped items.
- Menus, command palettes, inspectors, property panels, and filter panels.
- File/card/message lists inside fixed-height cards or panes.

If the content can exceed the visible bounds, model local scrolling explicitly:

```json
{
  "type": "container",
  "role": "builder_palette",
  "layout": {
    "height": 707
  },
  "behavior": {
    "overflow": "hidden",
    "scroll_container": "child",
    "internal_scroll_container": "child",
    "clip_content": true
  },
  "children": [
    {
      "type": "list",
      "role": "builder_palette_items",
      "behavior": {
        "scroll_container": "self",
        "overflow": "auto",
        "scroll_axis": "y",
        "scroll_reason": "repeated_list_overflow"
      }
    }
  ]
}
```

For sidebars with a pinned footer/profile area, make only the middle nav/list area scroll. The footer remains outside the scrolling child so it stays reachable and does not overlap list content.

Do not solve overflow by shrinking text, hiding trailing items, dropping groups, or using `overflow: hidden` on the repeated content itself. If a source screenshot cuts off content because the panel is scrollable, preserve that scrollability.

## Shadow Red Flags

Review and correct the DSL if many nodes have `elevation: "low"`. This often means border/surface separation was mistaken for shadow.

Common false positives:

- Active sidebar items.
- Active tabs inside segmented controls.
- Outline cards in a grid.
- Large white panels with a thin outline.
- Secondary buttons with a border.
- Icon-only outline buttons.

Legitimate elevation candidates:

- Primary CTA buttons with visible glow or cast shadow.
- Floating popovers, modals, drawers, menus, or tooltips.
- Brand marks or hero elements with obvious glow.
- Cards that visibly cast a shadow beyond their border on the page background.

## Scroll And Persistence

Capture persistent viewport behavior as layout intent. Do not leave app-shell regions as ordinary content when the screenshot is a dashboard, SaaS app, admin panel, mail app, CRM, analytics UI, editor, or other workspace-style product.

Use the existing DSL fields first:

- `type: "sidebar"` with `role: "primary_navigation"` for desktop side navigation.
- `type: "header"` with `role: "page_toolbar"` or `role: "app_header"` for global topbars.
- `type: "main"` with `role: "page"` for the scrollable content pane.
- `type: "drawer"`, `modal`, `popover`, or `toast` for overlays.
- `type: "button"` or `icon_button` with `role: "floating_action"` for floating action buttons or chat/help launchers.

Add explicit layout hints when the base schema allows extension fields:

```json
{
  "behavior": {
    "positioning": "sticky",
    "sticky_edge": "top",
    "scroll_container": null,
    "internal_scroll_container": null,
    "overflow": null,
    "clip_content": null,
    "scroll_axis": null,
    "scroll_reason": null
  }
}
```

Allowed behavior values:

- `positioning`: `"static"`, `"sticky"`, `"fixed"`, `"absolute"`, or `null`.
- `sticky_edge`: `"top"`, `"bottom"`, `"left"`, `"right"`, or `null`.
- `fixed_edge`: `"top-left"`, `"top-right"`, `"bottom-left"`, `"bottom-right"`, `"left"`, `"right"`, `"top"`, `"bottom"`, or `null`.
- `scroll_container`: `"self"`, `"child"`, `"main"`, `"page"`, or `null`.
- `internal_scroll_container`: `"self"`, `"child"`, `"descendant"`, or `null`.
- `overflow`: `"visible"`, `"hidden"`, `"auto"`, `"scroll"`, `"clip"`, or `null`.
- `clip_content`: `true`, `false`, or `null`.
- `scroll_axis`: `"x"`, `"y"`, `"both"`, or `null`.
- `scroll_reason`: `"viewport_bounded"`, `"fixed_panel_height"`, `"repeated_list_overflow"`, `"canvas_overflow"`, `"table_overflow"`, or `null`.

Default dashboard/app-shell interpretation:

- Desktop sidebar primary navigation should be persistent: `positioning: "sticky"` or `"fixed"` with `sticky_edge: "top"`.
- Global topbar containing search, notifications, account actions, or primary app actions should be persistent: `positioning: "sticky"`, `sticky_edge: "top"`.
- Main content should be the scroll container: `scroll_container: "main"`.
- If a main stage is visibly inset and clipped, the outer main stage should carry the offset/border/shadow and clipping intent, while an inner child should carry `scroll_container: "self"`.
- Sidebar content that may exceed viewport height should scroll internally: `scroll_container: "self"`.
- Bounded repeated-content panels should have localized internal scrolling instead of clipping: `scroll_container: "self"` or child scroll with `overflow: "auto"` and `scroll_axis: "y"`.
- Floating action buttons, chat/help launchers, toasts, modals, drawers, and global overlays should not participate in normal document flow.

Do not mark these sticky/fixed by default:

- Ordinary article/page section headings.
- Content filters or tabs inside a scrollable content panel.
- Card headers.
- Table headers unless the screenshot or app semantics clearly indicate sticky table behavior.
- Marketing navigation unless the screenshot shows a sticky/fixed website header.

If persistence is ambiguous, record the ambiguity in the DSL artifact notes or render artifact rather than silently choosing ordinary document scrolling.
