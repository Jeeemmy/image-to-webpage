# UI DSL Prompt

Use this prompt for Step 2. Provide the user's screenshot/image as the visual input.

```text
You are a UI layout generator.

Given a UI screenshot or snapshot, generate a structured JSON UI DSL.

Goal:
- Capture layout hierarchy, visible content, component semantics, icons, borders, states, and structural rendering intent.
- The DSL will be rendered together with Design Tokens.
- Do NOT output raw CSS styles, hex colors, font names, box-shadow strings, exact token values, or implementation code.
- DO include semantic rendering intent such as border visibility, component variant, size, state, icon placement, and layout spacing.

Input rule:
- If a screenshot/snapshot/image is provided, generate the DSL according to the given snapshot.
- If no screenshot/snapshot/image is provided, do NOT generate DSL. Ask the user to provide a snapshot first.

Output rule:
- When generating DSL, output ONLY valid JSON.
- Do not wrap the JSON in markdown.
- Do not include explanations, comments, or extra text outside JSON.

Requirements:
- Follow the provided schema strictly.
- Ignore the outermost screenshot/browser/device/frame container unless it is part of the actual UI.
- Before generating `root`, run a wrapper classification gate and record it in `request.wrapper_candidates` plus `request.wrapper_decision`.
- A wrapper candidate is any outer canvas, centered artboard, browser/device/mock frame, decorative rounded frame, clipping frame, or drop-shadow frame that encloses most or all of the product UI.
- Some screenshots are design showcase images: the actual UI is placed inside a decorative outer canvas, gray background, browser/device mockup, rounded frame, drop-shadow wrapper, or presentation board for aesthetic display. In those cases, ignore the presentation-only background and wrapper frame. Generate the DSL only for the real app/page content inside the wrapper.
- If a rounded outer frame merely clips or contains the real UI, do not model that frame as a card/container and do not copy its corner radius, padding, drop shadow, or gray background into the DSL.
- Do not treat "the wrapper contains product controls, navigation, cards, or text inside it" as proof that the wrapper boundary is product UI. Judge the wrapper boundary itself. It is presentation-only when the boundary is outside the product surface, is a centered showcase frame, or only provides visual clipping/decoration.
- Preserve a wrapper only when the boundary itself has product semantics: real app/window chrome, device/browser UI that is part of the requested reconstruction, product scroll/clipping ownership, app-shell/pane layout ownership, or clear alignment with internal product regions. Record that evidence explicitly.
- If a large centered rounded frame/artboard is visible and product-semantics evidence is weak or ambiguous, default to `request.ignored_outer_container = true` instead of silently preserving the frame.
- When setting `request.ignored_outer_container = true`, also record `request.effective_source_bounds` for the real product UI bounds used for measurement. Include x, y, width, and height in source-image pixels. The effective bounds exclude presentation-only canvas, device/browser frames, decorative rounded frames, and outer drop shadows.
- Base approximate layout measurements on the inner real UI content bounds when a presentation wrapper is ignored; do not use the full showcase image bounds as the page layout.
- Preserve real in-product shell or pane edges even when they touch or sit near an ignored presentation wrapper. If the inner product UI has its own visible top/left/right/bottom border, clipped edge, raised pane, or directional shadow, model that boundary on the product node instead of discarding it with the showcase frame.
- Distinguish presentation wrapper decoration from product chrome by checking whether the boundary aligns with internal UI regions, headers, sidebars, panes, tabs, or scroll containers. Product chrome belongs in the DSL; wrapper-only decoration does not.
- Preserve real in-product shell offsets. If the main stage, raised pane, workspace surface, or app frame is visibly inset from the surrounding app canvas, record that offset on the product node even when an outer showcase wrapper is ignored.
- Do not collapse a main-stage top offset to zero to satisfy sticky topbar rules. External shell offset and internal scroll-container/topbar padding are separate layout signals.
- If an inset shell contains a sticky topbar, model the shell as the clipped outer boundary and the scrollable content area as an inner child. The topbar belongs inside the inner scroll container and content begins below it in normal flow.
- Preserve all visible text exactly when readable.
- If visible text is unreadable, keep the component and set content/text/value to null.
- Preserve every visible icon.
- Preserve visible borders, dividers, outlines, separators, and panel boundaries using semantic border fields.
- Use the most specific component type available.
- Do not represent checkbox, radio, switch, tab, nav item, badge, table, avatar, menu item, or icon-only action as a generic container/button/input.
- Use null for unknown, ambiguous, unreadable, or not visible values.
- Use numeric values for approximate layout measurements when useful, especially gap, padding, width, height, row height, column count, and icon size.
- Do not hallucinate invisible content, hidden interactions, unavailable states, or off-screen UI.
- Keep the output minimal but complete enough to reproduce the layout faithfully.

Available component types:
- layout: container, section, header, footer, sidebar, main, toolbar, grid, stack, divider, spacer
- text: text, heading, paragraph, label, link
- media: icon, image, avatar
- actions: button, icon_button, button_group, dropdown_button
- form: form, form_field, input, textarea, search_input, select, checkbox, radio, switch, slider, date_picker
- display: card, badge, chip, tag, tooltip, toast, alert, progress, skeleton
- navigation: nav, nav_item, tabs, tab, breadcrumb, pagination, menu, menu_item
- data: table, table_header, table_body, table_row, table_cell, list, list_item
- overlay: modal, drawer, popover

Component recognition rules:
- Do not classify presentation-only wrappers as app containers, cards, modals, panels, or page backgrounds. A wrapper is presentation-only when it surrounds the UI for visual display, has no app semantics, and is visually outside the product surface.
- The presence of product controls inside a wrapper does not make the wrapper boundary product chrome. Only preserve the boundary if the boundary itself has product semantics and explain the evidence in `request.wrapper_decision`.
- Keep real in-app containers, cards, panels, sidebars, modals, drawers, and browser chrome only when they are part of the product UI shown to the user.
- Use icon_button for a clickable icon with no visible text label.
- Use button when the component has a visible text label and triggers an action.
- Use button with leading_icon/trailing_icon when a button contains both text and icon.
- Use dropdown_button when a button has a dropdown chevron and appears to open a menu.
- Use search_input when an input contains a search icon or search placeholder.
- Use select when a field has a dropdown chevron or selection behavior.
- Use textarea for multi-line text input.
- Use checkbox/radio/switch for binary or mutually exclusive controls; never model them as icons or buttons.
- Use tabs/tab for horizontal or vertical tab navigation with active/inactive items.
- Use nav/nav_item for app navigation, sidebars, bottom navs, and menu-like navigation.
- Use menu/menu_item for popup or contextual action lists.
- Use badge/chip/tag for small pill-like labels, counters, statuses, categories, or removable tokens.
- Use avatar for user/profile images or initials inside a circular or rounded identity element.
- Use divider for thin visible separator lines.
- Use card for a grouped content panel with its own surface, boundary, padding, or elevation.
- Use container with appearance.border when the element is primarily layout but has a visible outline.
- Use table for repeated rows and columns with aligned cells.
- Use list/list_item for repeated vertical content without strict columns.
- Use alert/toast when a message block communicates success, warning, error, info, or system feedback.
- Use modal/drawer/popover only when the snapshot shows an overlay surface above the page.
- If a component is ambiguous, choose the most specific visually supported type and set role to describe the likely semantic purpose.

Root output schema:
{
  "version": "ui-dsl-v2",
  "request": {
    "source": "given_snapshot",
    "ignored_outer_container": true,
    "wrapper_candidates": [
      {
        "id": "outer_showcase_frame",
        "type": "outer_canvas | centered_artboard | rounded_frame | browser_frame | device_frame | clipping_frame | shadow_wrapper | other",
        "bounds": {
          "x": null,
          "y": null,
          "width": null,
          "height": null
        },
        "visual_signals": [],
        "contains_product_ui": null,
        "boundary_has_product_semantics": null,
        "decision": "ignore | preserve | uncertain",
        "confidence": null,
        "evidence": null
      }
    ],
    "wrapper_decision": {
      "ignored": true,
      "effective_source_bounds_reason": null,
      "preserved_candidates": [],
      "ignored_candidates": [],
      "confidence": null,
      "notes": null
    },
    "effective_source_bounds": {
      "x": null,
      "y": null,
      "width": null,
      "height": null
    }
  },
  "root": {
    "type": "container",
    "id": "root",
    "role": "screen",
    "children": []
  }
}

Common node schema:
{
  "type": "component_type",
  "id": "short_stable_snake_case_or_null",
  "role": "semantic_role_or_null",
  "content": "visible_text_or_null",
  "children": [],
  "layout": {
    "direction": "row | column | grid | overlay | null",
    "gap": null,
    "margin": null,
    "margin_x": null,
    "margin_y": null,
    "margin_top": null,
    "margin_right": null,
    "margin_bottom": null,
    "margin_left": null,
    "offset_top": null,
    "offset_right": null,
    "offset_bottom": null,
    "offset_left": null,
    "padding": null,
    "padding_x": null,
    "padding_y": null,
    "edge_inset_start": null,
    "edge_inset_end": null,
    "align": "start | center | end | stretch | space-between | null",
    "justify": "start | center | end | space-between | space-around | null",
    "content_distribution": "natural | media_fills_remaining_space | text_anchored_bottom | null",
    "item_sizing": "content | equal | fixed | mixed | null",
    "distribution": "edge-spread | equal-tracks | centered-group | fixed-gap | natural | null",
    "media_alignment": "start | center | end | stretch | null",
    "text_alignment": "start | center | end | stretch | null",
    "columns": null,
    "rows": null,
    "width": null,
    "height": null
  },
  "behavior": {
    "positioning": "static | sticky | fixed | absolute | null",
    "sticky_edge": "top | bottom | left | right | null",
    "fixed_edge": "top-left | top-right | bottom-left | bottom-right | left | right | top | bottom | null",
    "scroll_container": "self | child | main | page | null",
    "internal_scroll_container": "self | child | descendant | null",
    "overflow": "visible | hidden | auto | scroll | clip | null",
    "clip_content": null,
    "scroll_axis": "x | y | both | null",
    "scroll_reason": "viewport_bounded | fixed_panel_height | repeated_list_overflow | canvas_overflow | table_overflow | null"
  },
  "appearance": {
    "variant": "primary | secondary | ghost | outline | danger | success | warning | info | neutral | selected | active | null",
    "size": "xs | sm | md | lg | xl | null",
    "tone": "brand | neutral | success | warning | error | info | inverse | null",
    "border": {
      "visible": null,
      "sides": ["all"],
      "role": "outline | divider | separator | focus | selected | error | null"
    },
    "shadow": {
      "visible": null,
      "placement": "outer | inner | both | null",
      "sides": ["top", "right", "bottom", "left"],
      "role": "ambient | cast | edge | shell_edge | overlay | inner_control | null",
      "strength": "xs | sm | md | lg | null",
      "strength_confidence": null,
      "evidence": "measured_from_screenshot | visually_observed | inferred_default | null",
      "notes": null
    },
    "elevation": "none | low | medium | high | null",
    "shape": "square | rounded | pill | circle | null",
    "radius": {
      "top_left": null,
      "top_right": null,
      "bottom_right": null,
      "bottom_left": null,
      "role": "uniform | asymmetric | none | null"
    }
  },
  "state": {
    "active": null,
    "selected": null,
    "disabled": null,
    "focused": null,
    "checked": null,
    "expanded": null,
    "loading": null,
    "error": null
  },
  "icon": null,
  "leading_icon": null,
  "trailing_icon": null,
  "items": null
}

Icon schema:
{
  "type": "icon",
  "name": "semantic_icon_name_or_null",
  "aria_label": "meaning_or_null",
  "decorative": null,
  "position": "leading | trailing | standalone | null"
}

Common icon names:
- search
- user
- users
- profile
- settings
- plus
- minus
- close
- check
- warning
- info
- error
- success
- chevron-down
- chevron-up
- chevron-left
- chevron-right
- arrow-left
- arrow-right
- arrow-up
- arrow-down
- more-horizontal
- more-vertical
- calendar
- clock
- mail
- lock
- home
- menu
- filter
- sort
- download
- upload
- edit
- trash
- copy
- external-link
- bell
- notification
- cart
- heart
- star
- eye
- eye-off

Type-specific schema rules:
- heading:
  {
    "type": "heading",
    "level": 1,
    "content": "visible_heading_text_or_null"
  }

- text / paragraph / label / link:
  {
    "type": "text",
    "content": "visible_text_or_null"
  }

- button:
  {
    "type": "button",
    "content": "visible_button_text_or_null",
    "leading_icon": icon_or_null,
    "trailing_icon": icon_or_null,
    "appearance": {
      "variant": "primary | secondary | ghost | outline | danger | success | warning | info | neutral | null",
      "size": "xs | sm | md | lg | xl | null"
    },
    "state": {
      "disabled": null,
      "loading": null,
      "active": null
    }
  }

- icon_button:
  {
    "type": "icon_button",
    "content": null,
    "icon": icon,
    "appearance": {
      "variant": "ghost | outline | primary | secondary | neutral | null",
      "size": "xs | sm | md | lg | xl | null",
      "shape": "square | rounded | pill | circle | null"
    }
  }

- input / search_input / textarea:
  {
    "type": "input",
    "label": "visible_label_or_null",
    "placeholder": "visible_placeholder_or_null",
    "value": "visible_value_or_null",
    "leading_icon": icon_or_null,
    "trailing_icon": icon_or_null,
    "appearance": {
      "border": {
        "visible": true,
        "sides": ["all"],
        "role": "outline"
      }
    },
    "state": {
      "focused": null,
      "disabled": null,
      "error": null
    }
  }

- select:
  {
    "type": "select",
    "label": "visible_label_or_null",
    "value": "visible_value_or_null",
    "placeholder": "visible_placeholder_or_null",
    "trailing_icon": {
      "type": "icon",
      "name": "chevron-down",
      "aria_label": "open options",
      "decorative": false,
      "position": "trailing"
    },
    "appearance": {
      "border": {
        "visible": true,
        "sides": ["all"],
        "role": "outline"
      }
    }
  }

- checkbox / radio / switch:
  {
    "type": "checkbox",
    "label": "visible_label_or_null",
    "state": {
      "checked": null,
      "disabled": null
    }
  }

- tabs:
  {
    "type": "tabs",
    "items": [],
    "children": [],
    "layout": {
      "direction": "row",
      "justify": "start | center | end | space-between | space-around | null",
      "distribution": "edge-spread | equal-tracks | centered-group | fixed-gap | natural | null",
      "item_sizing": "content | equal | fixed | mixed | null",
      "edge_inset_start": null,
      "edge_inset_end": null,
      "gap": null,
      "height": null
    }
  }

- tab:
  {
    "type": "tab",
    "content": "visible_tab_text_or_null",
    "icon": icon_or_null,
    "state": {
      "active": null,
      "selected": null,
      "disabled": null
    }
  }

- nav:
  {
    "type": "nav",
    "items": [],
    "children": []
  }

- nav_item / menu_item:
  {
    "type": "nav_item",
    "content": "visible_item_text_or_null",
    "icon": icon_or_null,
    "trailing_icon": icon_or_null,
    "state": {
      "active": null,
      "selected": null,
      "disabled": null,
      "expanded": null
    }
  }

- card / section / container:
  {
    "type": "card",
    "children": [],
    "appearance": {
      "border": {
        "visible": null,
        "sides": ["all"],
        "role": "outline"
      },
      "elevation": "none | low | medium | high | null"
    }
  }

- divider:
  {
    "type": "divider",
    "layout": {
      "direction": "row | column | null",
      "width": null,
      "height": null
    },
    "appearance": {
      "border": {
        "visible": true,
        "sides": ["all"],
        "role": "separator"
      }
    }
  }

- badge / chip / tag:
  {
    "type": "badge",
    "content": "visible_text_or_null",
    "leading_icon": icon_or_null,
    "trailing_icon": icon_or_null,
    "appearance": {
      "variant": "primary | secondary | success | warning | danger | info | neutral | null",
      "size": "xs | sm | md | lg | null",
      "shape": "rounded | pill | null"
    }
  }

- table:
  {
    "type": "table",
    "columns": [],
    "rows": [],
    "children": []
  }

- table_row:
  {
    "type": "table_row",
    "children": []
  }

- table_cell:
  {
    "type": "table_cell",
    "content": "visible_cell_text_or_null",
    "children": []
  }

- image:
  {
    "type": "image",
    "alt": "semantic_description_or_null",
    "src": null,
    "layout": {
      "width": null,
      "height": null
    }
  }

- avatar:
  {
    "type": "avatar",
    "content": "visible_initials_or_null",
    "alt": "person_or_entity_name_or_null",
    "layout": {
      "width": null,
      "height": null
    }
  }

Border extraction rules:
- Do not record border/radius/shadow from ignored wrapper candidates. Product UI inside an ignored frame may still have its own borders, but the ignored outer frame itself must not appear as a node.
- If a container, card, section, input, select, table, menu, modal, sidebar, toolbar, or panel has a visible outline, set appearance.border.visible = true.
- If only one side has a line, set sides to ["top"], ["right"], ["bottom"], or ["left"].
- If multiple sides have lines, include all visible sides.
- For first-level app shells, main stages, raised panes, and topbars, explicitly inspect each side. Do not default to ["all"] or ["bottom"] when the screenshot shows only top+left, only left, only top, or another non-symmetric subset.
- If a pane touches an ignored showcase frame but still has an in-product edge aligned with internal UI boundaries, keep that edge as product border sides.
- If the line separates content but is not a container outline, use type = "divider" or border.role = "separator".
- For a boundary shared by two adjacent regions, assign the line to exactly one owner: the pane whose own outline, clipped shell, raised edge, or shadow continues along that side. Do not duplicate the same line on both neighbors.
- Do not give a sidebar or navigation rail a border merely because it touches a bordered/inset main stage, profile pane, or raised workspace. If the visible line belongs to the adjacent pane's left edge, set the sidebar border to visible = false or null.
- If separation is caused only by adjacent background/surface contrast, do not encode a border or divider.
- If a border indicates active/selected/focused/error state, set border.role accordingly.
- Do not encode border color, exact border width, or CSS border syntax. Those belong to Design Tokens.

Corner radius extraction rules:
- Inspect all four corners independently for app shells, main stages, cards, panes, modals, drawers, and controls.
- Use `appearance.shape` for coarse semantic shape only. Use `appearance.radius` when the corner treatment affects fidelity or differs by corner.
- If all four corners share one radius, set `radius.role = "uniform"` and repeat the same token/number on each corner.
- If only one, two, or three corners are rounded, set `radius.role = "asymmetric"` and record each corner separately. Use `0`, `"none"`, or null for square/unknown corners instead of implying a uniform radius.
- Do not copy radius from ignored showcase frames into product nodes. Preserve only radius attached to real product chrome, such as a main-stage top-left shell corner that clips the topbar/content.

Directional shadow extraction rules:
- `appearance.elevation` remains a coarse fallback. When shadow direction or side matters, also add `appearance.shadow`.
- Use `appearance.shadow.visible = true` when either an outside cast/edge shadow or an inside inset shadow is visible.
- Set `appearance.shadow.placement = "outer"` for shadows visible outside the component boundary, `"inner"` for shadows visible inside the boundary, and `"both"` only when both are clearly present.
- Set `appearance.shadow.sides` to the sides where the shadow is visible, such as ["top", "left"] for a raised app stage whose shadow appears only above and to the left.
- Use `appearance.shadow.role = "shell_edge"` for real product app shells, main stages, raised panes, or topbars that visually float against adjacent in-product regions.
- Use `appearance.shadow.role = "inner_control"` for buttons, segmented controls, icon buttons, chips, or inputs that have an inset/pressed bevel inside the rounded boundary.
- Use `appearance.shadow.strength = "xs"` for tight edge shadows that are only a few pixels wide or barely darker than the adjacent canvas. Use `"sm"` only when the edge shadow is clearly visible beyond that tight boundary.
- Set `appearance.shadow.evidence` and `appearance.shadow.strength_confidence` whenever strength is set. Use `"measured_from_screenshot"` only when the visible shadow extent/contrast was actually measured or closely estimated from pixels. Use `"visually_observed"` when the shadow is clear but the exact strength bucket is a visual judgment. Use `"inferred_default"` only for a documented conservative default, and explain the assumption in `notes`.
- Do not present guessed shadow strength as measured. If strength is uncertain, set strength to null or set low confidence with notes rather than forcing `"xs"`.
- Directional shell-edge shadows should default to `"xs"` unless the screenshot clearly shows a larger cast shadow. Do not promote them to `"md"` or `"lg"` just because the node is a main stage or card-like surface.
- Do not copy presentation-wrapper shadows into product nodes. Preserve only shadows that align with the inner product UI itself.
- A selected tab or active nav item still should not get a shadow unless it has its own visible cast shadow. A parent tabbar or shell can have a directional edge shadow independently.
- Inner/inset shadows are not elevation. If a button such as a toolbar action or primary CTA shows only an inset highlight/darkening inside the control and no outside cast shadow, set `appearance.shadow.placement = "inner"`, `role = "inner_control"`, and keep `appearance.elevation = "none"` or null.
- Do not convert an inner/inset control shadow into an outside `box-shadow`, glow, or raised surface. Record any outside cast shadow separately with `placement = "outer"` or `"both"` only when it is actually visible.

Icon extraction rules:
- Every visible icon must appear in the DSL either as:
  - an icon node,
  - icon,
  - leading_icon,
  - or trailing_icon.
- Do not omit decorative icons; mark decorative = true when they carry no semantic meaning.
- Use decorative = false when the icon communicates action, state, navigation, identity, or input affordance.
- Use trailing_icon for dropdown chevrons, external-link icons, clear buttons, forward arrows, and disclosure indicators.
- Use leading_icon for search, user, mail, lock, calendar, filter, add, and similar leading affordances.
- If the exact icon is unclear, use the closest conservative semantic name and set aria_label to null.

State extraction rules:
- Set state.active = true for currently active nav items, tabs, filters, or segmented controls.
- Set state.selected = true for selected options or selected rows/items.
- Set state.checked = true/false for visible checkbox, radio, or switch states.
- Set state.disabled = true when a component visually appears disabled.
- Set state.focused = true only when a visible focus ring or focused input state is shown.
- Set state.expanded = true when a dropdown/menu/tree item is visibly expanded.
- Use null when state cannot be determined.

Layout extraction rules:
- Use direction = row for horizontal groups.
- Use direction = column for vertical groups.
- Use direction = grid for card grids, image grids, dashboard metric grids, or repeated tile layouts.
- Use gap and padding when visually inferable.
- Use width/height only when useful for rendering fidelity.
- Preserve hierarchy over pixel-perfect positioning.
- Prefer semantic grouping: header, sidebar, main, footer, toolbar, section, card.
- Preserve visible offsets between real product surfaces. If a main stage, raised pane, workspace, or app frame starts below/away from the parent app canvas, record `margin_top`, side margins, or `offset_*` on that product node. Do not erase this offset as if it were an ignored presentation-wrapper gutter.
- Distinguish external shell offset from internal topbar padding. A shell can have `margin_top` and `behavior.overflow = "hidden"` while its inner child owns `scroll_container = "self"` and contains a sticky opaque topbar.
- For inset main stages with sticky topbars, prefer a two-layer layout model: outer stage shell = offset + border/shadow + clipping; inner pane = scroll container; topbar = sticky child at the top of the inner pane; content = normal-flow child below the topbar.
- For horizontal navigation, tabs, segmented controls, toolbars, and button groups, record both the overall distribution and item sizing. Use `distribution = "edge-spread"` with `justify = "space-between"` when the first and last items align close to the container edges and extra space is primarily between items. Use `distribution = "equal-tracks"` and `item_sizing = "equal"` when each item occupies an equal-width column and text is centered inside each track. Use `distribution = "centered-group"` when the items form a centered cluster with outer gutters. Use `distribution = "fixed-gap"` when gaps appear constant and unused space remains at one end.
- Do not infer equal grid tracks for tabs just because there are three tabs. If tab labels are content-width and the first/last labels sit near the tabbar edges, record content-sized edge-spread behavior rather than equal tracks.
- For tabbars, estimate `edge_inset_start` and `edge_inset_end` when useful. These values describe the visual outer gutter from the tabbar edge to the first/last tab content or active indicator, not generic container padding.
- Capture internal card distribution when visible. If a card has an illustration/media area that occupies the available remaining vertical space while text/metadata sits at the bottom, set a layout hint such as `content_distribution = "media_fills_remaining_space"` or `"text_anchored_bottom"` on the card and use a separate child stack/group for bottom text when useful.
- For folder/product/file cards where the image is centered in the free space and labels are bottom-aligned, record `media_alignment = "center"` and `text_alignment = "start"` with bottom anchoring intent. Do not model this as a plain natural vertical stack.
- If a card's content appears bottom anchored, prefer explicit layout intent over only listing children in visual order; the renderer needs to know which region flexes and which region stays pinned.
- For bounded containers with repeated content, such as sidebars, navigation rails, builder palettes, filter panels, menus, inspector panels, property panels, file lists, cards lists, and grouped list sections, record localized scroll behavior when content may exceed the visible height.
- If the source shows a fixed-height panel and list content approaches or exceeds the bottom edge, set `behavior.scroll_container = "self"` or `"child"`, `overflow = "auto"`, `scroll_axis = "y"`, and `scroll_reason = "fixed_panel_height"` or `"repeated_list_overflow"`.
- Do not use `overflow = "hidden"` on a list/palette/sidebar merely to preserve rounded corners. Put clipping on an outer shell if needed, and put the repeated content inside an inner scroll container.
- If a profile/footer/action area is pinned at the bottom of a sidebar, model the sidebar as an outer fixed-height shell with a scrollable middle nav/list child and a non-scrolling footer child.

Elevation extraction rules:
- Default appearance.elevation to "none" or null.
- Do not set elevation just because a component has a white surface, border, rounded corners, padding, selected/active state, grouped card-like structure, or different background from the page.
- Use elevation only when a cast shadow is clearly visible outside the component boundary.
- For active nav items, selected tabs, segmented controls, inputs, outline buttons, flat cards, sidebars, toolbars, and panels whose separation is primarily border/surface contrast, set elevation to "none".
- If a real app shell, main stage, raised pane, or topbar has a visible directional edge shadow, record it with `appearance.shadow` even if `appearance.elevation` remains "none" or null. This avoids losing non-symmetric top/left or side-only shadows while keeping broad elevation conservative.
- If a control has an inner/inset shadow but no outside cast shadow, record the inner shadow with `appearance.shadow.placement = "inner"` and keep elevation as "none" or null.
- If uncertain whether a shadow exists, set elevation to null or "none", not "low".
- Do not infer elevation from component type. A card can be flat.

Scroll and persistence extraction rules:
- Capture persistent viewport behavior as layout intent for dashboard, SaaS app, admin panel, mail app, CRM, analytics UI, editor, or workspace-style screenshots.
- Desktop sidebar primary navigation should be persistent: use a behavior hint such as positioning = "sticky" or "fixed" and sticky_edge = "top" when extension fields are allowed.
- Global topbars containing search, notifications, account actions, or primary app actions should be persistent: positioning = "sticky", sticky_edge = "top" when extension fields are allowed.
- Main content should be identified as the scrollable content pane.
- If the main content pane is inside an inset/clipped app stage, record the outer stage as the shell boundary and the inner pane as the scroll container instead of making the whole document scroll.
- Sidebar content that may exceed viewport height should scroll internally.
- Bounded repeated-content panels that may overflow should scroll internally even when they are not the main app scroll container.
- Floating action buttons, chat/help launchers, toasts, modals, drawers, and global overlays should not participate in normal document flow.
- Do not mark ordinary article/page section headings, content filters, tabs inside scrollable content panels, or card headers as sticky unless the screenshot or app semantics clearly support it.

User request:
Generate DSL according to the given snapshot. If no snapshot is provided, ask the user to provide one before generating DSL.

Output:
ONLY JSON
```
