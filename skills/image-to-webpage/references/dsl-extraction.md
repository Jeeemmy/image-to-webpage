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

Use `null` for unknown, ambiguous, unreadable, or not visible values.

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

Use elevation only when a cast shadow is clearly visible outside the component boundary.

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

## Border And Surface Separation

Use `appearance.border` for:

- Card outlines.
- Input outlines.
- Panel boundaries.
- Selected nav/tab outlines.
- Dividers and separators.

Use `divider` nodes for visible internal separator lines. Do not model separators as shadows.

Use semantic appearance variants for surface changes:

- `variant: "active"` for active navigation.
- `variant: "selected"` for selected options.
- `variant: "neutral"` for normal surfaces.
- `tone: "brand"` for branded primary controls.

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
    "scroll_container": null
  }
}
```

Allowed behavior values:

- `positioning`: `"static"`, `"sticky"`, `"fixed"`, `"absolute"`, or `null`.
- `sticky_edge`: `"top"`, `"bottom"`, `"left"`, `"right"`, or `null`.
- `fixed_edge`: `"top-left"`, `"top-right"`, `"bottom-left"`, `"bottom-right"`, `"left"`, `"right"`, `"top"`, `"bottom"`, or `null`.
- `scroll_container`: `"self"`, `"main"`, `"page"`, or `null`.

Default dashboard/app-shell interpretation:

- Desktop sidebar primary navigation should be persistent: `positioning: "sticky"` or `"fixed"` with `sticky_edge: "top"`.
- Global topbar containing search, notifications, account actions, or primary app actions should be persistent: `positioning: "sticky"`, `sticky_edge: "top"`.
- Main content should be the scroll container: `scroll_container: "main"`.
- Sidebar content that may exceed viewport height should scroll internally: `scroll_container: "self"`.
- Floating action buttons, chat/help launchers, toasts, modals, drawers, and global overlays should not participate in normal document flow.

Do not mark these sticky/fixed by default:

- Ordinary article/page section headings.
- Content filters or tabs inside a scrollable content panel.
- Card headers.
- Table headers unless the screenshot or app semantics clearly indicate sticky table behavior.
- Marketing navigation unless the screenshot shows a sticky/fixed website header.

If persistence is ambiguous, record the ambiguity in the DSL artifact notes or render artifact rather than silently choosing ordinary document scrolling.
