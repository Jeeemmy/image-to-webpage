# UI DSL Extraction Rules

## Output Contract

Generate only valid JSON for the DSL step. Do not include Markdown fences, explanations, CSS, hex colors, shadow strings, font names, or implementation code.

Capture:

- Page hierarchy and semantic roles.
- Visible text exactly as shown.
- Every visible icon as an icon node, `icon`, `leading_icon`, or `trailing_icon`.
- Interactivity for every visible control: buttons, links, nav items, tabs, switches, checkboxes/radios, icon buttons, dropdown/select triggers, card action menus, row actions, and sortable/filter controls should carry interactive hints and pointer-cursor intent unless disabled.
- Borders, dividers, outlines, selected states, and panel boundaries.
- Component-specific types such as `nav_item`, `tabs`, `tab`, `switch`, `badge`, `avatar`, `icon_button`, `search_input`, `card`, and `section`.
- Approximate layout measurements only where useful for rendering fidelity.
- High-visual-weight text roles where targeted typography matters, such as prices, brand/logo text, hero headings, large KPI/counter numbers, and visually dominant CTA labels. Low-visual-weight text can rely on global typography tokens.
- Tabbars and horizontal controls: distribution, item sizing, and outer edge insets when visible.
- Wrapper classification: every visible outer canvas/artboard/frame candidate, whether it was ignored or preserved, why, confidence, and the real product UI `effective_source_bounds` used for all measurements.
- Real product app-shell boundaries, including asymmetric border sides and directional edge shadows.
- Inner/inset control shadows separately from outside cast shadows.
- Real product shell offsets from the surrounding app canvas, including top offsets that belong outside the scroll container.
- Clipping/scroll hierarchy for inset main stages: outer shell boundary vs inner scroll container vs sticky topbar vs normal-flow content.
- Local overflow ownership for bounded list containers such as sidebars, navigation lists, builder palettes, menus, inspector panels, and repeated grouped lists.
- Important image-based visual elements, including whether they should be restored as layered coded background plus transparent subject asset plus separate overlays, or whether source crop/clean generation fallback is required.
- Source visual bounding boxes for generated transparent subjects, exact original-source-pixel crop bounds for screenshot assets/references, and edge behavior for horizontal scrollers inside padded mobile content.
- Hero/photo/map underlay relationships with floating bottom sheets, rounded cards, booking panels, player panels, or detail panels, including `overlap_px` and z-order when the panel covers part of the image.
- Ignored mobile system chrome such as iOS home indicators and Android gesture/navigation bars when visible.
- Viewport adaptation intent: the confirmed adaptation width is a fidelity calibration point, not a fixed output size; record fluid root behavior, fixed-vs-flex regions, breakpoint/wrapping intent, and scoped overflow needs.

Use `null` for unknown, ambiguous, unreadable, or not visible values.

## Targeted Typography Roles

Do not do per-element font analysis for every text node. Use global typography for low-visual-weight body copy, descriptions, labels, captions, metadata, secondary navigation labels, and ordinary form text.

For high-visual-weight text, record enough role information for the renderer to apply targeted typography tokens from the design-token artifact. High-visual-weight text includes:

- Prices and sale/original price pairs.
- Brand/logo text.
- Hero headlines and large marketing/product names.
- Large KPI/counter/stat numbers.
- Visually dominant CTA labels.

For those nodes, add a semantic role or typography hint when extension fields are available, for example:

```json
{
  "type": "text",
  "id": "sale_price",
  "content": "$615.99",
  "role": "price",
  "typography_role": "price"
}
```

Do not include font names in the DSL. Font candidates, confidence, exact availability, close visual fallback availability, user-notice decisions, and fallback stacks belong in design tokens and render artifacts.

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

## Ignored Mobile System Chrome

For mobile screenshots, explicitly distinguish OS/device chrome from product UI.

- Classify isolated elements at the physical screen edge as system chrome when they match OS navigation patterns: iOS home indicator/gesture pill, Android gesture bar, Android three-button navigation bar, or customized OEM Android navigation strip.
- Record these in `request.ignored_system_chrome` with approximate bounds, type, visual signals, decision `ignore`, confidence, and reason.
- Do not create DSL nodes for them. Do not classify them as `divider`, `progress`, `button`, `nav`, `nav_item`, `tabs`, `drag_handle`, `spacer`, or decorative `container`.
- Preserve product-owned bottom navigation, tabbars, and sheet drag handles only when they attach to a product surface, have product semantics, or align with product controls. When ambiguous, prefer ignored system chrome for an isolated pill/bar flush with the screenshot's bottom edge.
- If such system chrome appears inside an important image crop, list it in the image asset contamination check and negative prompt features.

## Screenshot Edge Corner Gate

Do not infer special asymmetric UI from the physical screenshot edge. When a component boundary continues beyond the screenshot, viewport, scroll cutoff, or crop:

- Mark the affected corner visibility as `cropped_by_screenshot_edge`, `occluded`, or `unknown`.
- Do not record the cropped corner as square, `0`, or `"none"` unless the actual in-product boundary is visible as square.
- For ordinary cards, content panels, containers, modals, menus, and sections, if visible same-surface corners are rounded and the missing corners are cropped by the screenshot edge, infer a uniform radius from the visible corners.
- Record the inference in `appearance.radius.inference` rather than claiming all corners were directly observed.
- Use asymmetric radius only with positive product evidence, such as a bottom sheet attached to the viewport bottom, a drawer joined to an edge, a split shell merged into another pane, or a visibly square boundary inside the screenshot.

Example: a desktop content panel titled "All Integrations" whose top corners are visible rounded but bottom corners continue off the screenshot should be modeled as a normal uniform-radius panel. The image bottom edge is not evidence that the panel's bottom corners are square.

## Image Asset Strategy

When an important visual element is image-based, decide whether rendering should use a layered generated subject, a source crop, or a generated clean asset.

Before allowing final `source_crop`, run an asset contamination gate. This gate is mandatory for hero photos, venue/product photos, maps, artwork, screenshot previews, and other high-visual-weight raster regions. A crop is contaminated if it contains pixels from phone/device/browser/mock frames, OS status bars, iOS home indicators, Android gesture/navigation bars, notches/dynamic islands, clock/battery/wifi/signal indicators, app navigation/action buttons, carousel controls, chips, badges, text overlays, cards, bottom sheets, modals, popovers, or any other UI surface that should be reconstructed separately or ignored as presentation chrome. A contaminated crop is not a valid final asset; use it only as a generation reference.

All source crop and crop-reference bounds are absolute source screenshot pixel coordinates. They are not CSS pixels, not relative to the adapted `1200px`/`402px` render width, and not inferred from the final display size. The adaptation scale is for layout measurement only. For bitmap assets such as avatars, thumbnails, photos, maps, and artwork, record the original crop size separately from the intended rendered CSS size when they differ.

Use `asset_strategy: "generate_transparent_subject"` when:

- The element is important to fidelity, such as a hero/product photo, screenshot preview, map tile, artwork, illustration, or raster-style visual composition.
- The screenshot provides a usable reference crop for the subject.
- The subject can be separated from its background, even if the image element is not obstructed.
- The user has or may have an image generation skill that can preserve the subject while removing background and overlays, unless the user explicitly declined image generation.

For transparent subject generation, record:

- `generation.user_image_generation_skill_required = true`.
- `generation.preserve_subject = true`.
- `generation.remove_background = true`.
- `generation.remove_interactive_elements = true`.
- `generation.transparent_background_preferred = true`.
- `layering.background_strategy = "code"` when the background is a solid fill, gradient, glow, or simple geometric backdrop.
- `layering.subject_strategy = "transparent_generated_asset"`.
- `layering.overlay_strategy = "separate_interactive_nodes"` when any buttons, chips, badges, carousel controls, play/save/share controls, or hover actions sit above the image.
- `generation.reference_image = "source_crop"` or `"screenshot_region"` and concise `prompt_features` describing the subject, material, lighting, perspective, crop, and style.

Use `asset_strategy: "source_crop"` when:

- Image generation is unavailable, explicitly declined by the user, or not suitable.
- No interactive element overlaps the visual element.
- No system, device, presentation, or product UI contaminant overlaps the would-be crop.
- The whole image element is visible enough to crop as one intact asset.
- The element's background cannot be reliably recreated with code or should intentionally remain baked into the asset.

For source crops, record source-image bounds for the entire visual element. The crop should be the whole image element, not a small texture patch. Set `source_crop.required = true`, `whole_element = true`, `include_occluders = false`, `coordinate_space = "absolute_source_image_pixels"`, `pixel_copy_required = true`, and record `source_crop.contamination_check` with `passed = true`, an empty contaminant list, and `decision = "clean_source_crop_allowed"`. When a user image generation skill is available and the subject is separable, do not choose `source_crop` just because cropping is easier; use `generate_transparent_subject` and record coded background layering instead. If the crop includes contaminants, set `passed = false`, list them, and reject final `source_crop`.

Use `asset_strategy: "generate_clean_asset"` when:

- The image-based element is important to fidelity.
- Buttons, icon buttons, badges, chips, carousel controls, play/save/share controls, or other interactive overlays cover part of it.
- Presentation/device/system chrome such as a phone frame, browser frame, status bar, iOS home indicator, Android gesture/navigation bar, notch/dynamic island, clock, battery/wifi/signal icons, or system home indicator appears inside the would-be crop.
- Product surfaces such as bottom sheets, text/price cards, toolbars, modals, or popovers cover the underlying image and no clean unobstructed crop exists.
- The visible screenshot cannot provide a clean unobstructed crop of the element.
- Transparent subject extraction is unavailable, unsupported, or inappropriate for the visual.

For generated clean assets, record:

- `is_obstructed = true`.
- `occluding_element_ids` for every overlay that should remain as a separate DSL node.
- `generation.user_image_generation_skill_required = true`.
- `generation.transparent_background_preferred = true`.
- `generation.allow_non_transparent_fallback = true` only as a fallback for user skills that cannot generate transparent backgrounds.
- `generation.reference_image = "source_crop"` or `"screenshot_region"` when the obstructed crop can guide generation.
- `generation.prompt_features`, including subject, composition, perspective, color palette, material/texture, lighting, style, crop, and background relationship.
- `generation.negative_prompt_features`, explicitly listing contaminants to remove, such as phone frame, status bar, iOS home indicator, Android navigation bar, gesture pill, dynamic island, battery/wifi icons, navigation buttons, favorite/share buttons, bottom sheet, text/card overlay, badges, and modal surfaces.

Do not bake overlay controls, phone/device/browser chrome, OS status bars, iOS home indicators, Android gesture/navigation bars, dynamic islands/notches, text/card overlays, or bottom sheets into the generated asset. The clean asset should represent the underlying image only; render product-owned occluding controls as normal interactive nodes above it and ignore presentation-only chrome. Do not screenshot gradients or simple visual backgrounds into subject assets when those backgrounds can be recreated with code.

For image areas with visible gradient/tonal backdrops, record the backdrop separately from the subject:

- Put the gradient/fill on the image container or background layer with `layering.background_strategy = "code"`.
- Put the object/person/product itself in a transparent subject asset when generation is available.
- If the source crop visibly contains backdrop pixels around the subject and the backdrop can be described with CSS, that is evidence against final `source_crop`.

## Hero Underlay And Floating Sheet Overlap

When a bottom sheet, rounded card, booking panel, player panel, profile/detail panel, or similar surface floats over a hero/photo/map:

- Record the image/photo/map as an underlay layer.
- Record the sheet/card/panel as an overlay layer with higher z-order.
- Estimate `overlap_px = underlay_bottom - overlay_top` when the panel covers part of the image.
- Preserve sheet-owned rounded top corners, top shadow, fill, and padding as overlay properties.
- Do not bake the overlay surface into the image asset.
- Do not collapse the relationship into adjacent blocks where the underlay ends exactly at the overlay top unless the screenshot clearly shows a hard seam.
- If rounded sheet corners reveal the image behind them, keep the underlay image extending behind the overlay at least past the radius/shadow area.

Example:

```json
{
  "type": "image",
  "id": "product_hero_visual",
  "alt": "product hero visual",
  "layout": {
    "width": 520,
    "height": 360
  },
  "asset": {
    "importance": "primary",
    "bounds": {
      "x": 640,
      "y": 180,
      "width": 520,
      "height": 360
    },
    "is_obstructed": true,
    "occluding_element_ids": ["save_image_button"],
    "asset_strategy": "generate_transparent_subject",
    "layering": {
      "background_strategy": "code",
      "subject_strategy": "transparent_generated_asset",
      "overlay_strategy": "separate_interactive_nodes",
      "recommended_stack": ["coded_background", "transparent_subject", "interactive_overlays"]
    },
    "source_crop": {
      "required": false,
      "whole_element": true,
      "include_occluders": false,
      "bounds": {
        "x": 640,
        "y": 180,
        "width": 520,
        "height": 360
      }
    },
    "generation": {
      "required": true,
      "user_image_generation_skill_required": true,
      "transparent_background_preferred": true,
      "allow_non_transparent_fallback": true,
      "reference_image": "screenshot_region",
      "preserve_subject": true,
      "remove_background": true,
      "remove_interactive_elements": true,
      "prompt_features": ["preserve product subject", "same perspective", "same material and lighting"],
      "negative_prompt_features": ["floating button", "badge", "text overlay"]
    }
  }
}
```

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

When adjacent large regions have intentionally different fills, preserve that separation as surface/background tokens rather than borders or shadows. A sidebar/navigation rail, topbar, main canvas, and main stage may use close but distinct pale neutrals. Do not merge them into one shared surface unless they visually read as a continuous app canvas. If the sidebar tint clearly differs from the main canvas, record distinct region roles and backgrounds.

## Icon And Interactivity Extraction

Do not omit tiny repeated action icons on cards, panels, table rows, stat cards, nav items, or list items. Vertical kebab menus, cog/settings controls, refresh/sync indicators, notification bells, search icons, more menus, and status glyphs should be captured even when they are only 12-18px.

Use `type = "icon_button"` for standalone clickable icons such as a card settings/menu trigger, notification bell, sidebar collapse control, share/favorite button, toolbar icon, or row action. If extension fields are allowed, set `behavior.interactive = true`, `behavior.cursor = "pointer"`, `requires_pointer_cursor = true`, and a semantic `behavior.action`.

Mark controls as interactive from semantic affordance, not from visible hover state. Screenshots usually show default state, but buttons, links, nav items, tabs, segmented options, switches, checkboxes, radio buttons, icon buttons, dropdown/select triggers, search/input clear buttons, row/card Details actions, card action menus, and sortable table headers are still interactive.

Use `cursor = "text"` for text inputs/search fields, and `cursor = "not-allowed"` only for disabled controls. Do not leave interactive SVG/icon wrappers as inert decorative spans when they represent actions; the renderer needs button/link semantics and pointer cursor behavior.

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

For horizontal scrollers inside padded mobile content, record whether the scroll strip is clipped to the padded content column or visually bleeds to the screen edge. If the first chip/card/tab aligns with page padding but later content continues into the padding area, record an edge behavior hint such as `full_bleed_scroll_with_inner_padding` so rendering uses negative inline margins plus matching inner padding/scroll-padding.

On mobile, do not model ordinary browser scrollbars as UI nodes. Scrollbar visibility is a render-layer decision: scrollbars are hidden by default unless the source screenshot shows a meaningful in-product scrollbar or scroll indicator.

## Metric And Card Internal Layout

For KPI/stat/summary cards with an inner tinted value band, metric well, or bottom value strip, model the outer card and inner band as separate nodes. Record the outer padding, inner band background, band height, band padding, and the band's bottom/right/left inset from the card edge. Do not collapse the band into the outer card background or stretch it until it nearly touches the edge unless the source actually shows that spacing.

Preserve the title/action row above the metric band separately from the value/trend/status row inside the band. Small title-row icons and action/menu icons remain icon or icon_button nodes, not decorative omissions.

For repeated cards or list items with a visually separated bottom action strip, model the footer as its own child region instead of flattening the item to one generic `card`. Common examples include integration/app cards, file cards, product cards, row cards, and message cards where the bottom strip contains a settings/action icon, "Details"/open button, switch/toggle, status button, menu, or other controls.

Record the repeated card with at least these structural regions when visible:

- `card_body`: main logo/media/title/description area. Record whether it flexes or fills remaining height.
- `card_action_footer`: bottom strip. Record height or min-height, top divider/border, background, padding, vertical alignment, left action group, right action group, and distribution such as `justify: "space-between"`.
- Footer controls: every icon button, text button, switch/toggle, menu trigger, status badge, and their state. Do not leave these as inferred generic controls outside the card.

Example:

```json
{
  "type": "card",
  "role": "integration_card",
  "layout": { "direction": "column", "height": 182 },
  "children": [
    {
      "type": "container",
      "role": "card_body",
      "layout": { "flex": 1, "padding": 16 }
    },
    {
      "type": "footer",
      "role": "card_action_footer",
      "layout": {
        "height": 52,
        "padding_x": 14,
        "padding_y": 10,
        "align": "center",
        "justify": "space-between",
        "shrink": 0
      },
      "appearance": {
        "border": { "visible": true, "sides": ["top"], "role": "divider" }
      },
      "children": [
        { "type": "icon_button", "role": "settings", "icon": "settings" },
        { "type": "button", "role": "open_details", "content": "Details" },
        { "type": "switch", "role": "enabled_toggle", "state": { "checked": true } }
      ]
    }
  ]
}
```

If the screenshot cuts off lower repeated items but the same card template is visible above, propagate the visible footer structure to repeated sibling cards of the same type. If only a sliver of the footer is visible, still record it as a footer with unknown exact height rather than omitting it or allowing renderer heuristics to invent a too-small strip.

For ordinary cards with media/illustration regions and bottom text, record whether the media fills remaining space or the text is bottom-anchored. The renderer needs to know which internal region flexes and which region stays pinned.

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

Also capture responsive viewport adaptation as layout intent:

- Set `request.viewport_adaptation.calibration_width_is_fixed_output = false` unless the user explicitly requested a static artboard export.
- Do not use source screenshot width/height, effective source bounds, or adaptation width as fixed final root dimensions.
- Identify fixed regions only when they are real product-owned panels or chrome, such as desktop sidebars, navigation rails, fixed headers, bottom navs, or table minimum-width content inside a horizontal scroll owner.
- Identify fluid regions that should expand or contract with the viewport, such as main stages, content panes, cards grids, hero sections, and page backgrounds.
- Record breakpoint intent for rows, toolbars, grids, and forms: wrap, stack, collapse columns, or use scoped horizontal scroll for genuinely wide content.
- If a screenshot appears to be a full-screen app, record a viewport-bounded shell with local scroll panes rather than a fixed screenshot-height document.

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
- Mobile page-level navigation should be persistent by default when it switches screens/routes/pages or primary app sections. This includes top back/action navigation bars, top tabbars, bottom tabbars, floating bottom tabbars, and bottom navigation rails. Use `positioning: "sticky"` or `"fixed"` with `sticky_edge`/`fixed_edge` set to `"top"` or `"bottom"` and record `scroll_behavior: "persistent"` when extension fields are available.
- Mobile content-local tabs, segmented controls, filters, chips, and card/section tabs should remain in the scrollable content unless they clearly switch pages/routes or primary app sections.
- When mobile status bars or page-level navigation are persistent, measure both the navigation's internal safe padding around controls and the original gap between persistent top chrome and the first scrollable content. Record internal nav padding/height separately from `scroll_architecture.content_insets.top`, content pane `padding_top`, or the first content node's `margin_top`. Do the same for bottom chrome with internal bottom-nav padding plus `content_insets.bottom` or content pane `padding_bottom`. Do not set these to zero unless the screenshot truly shows chrome and content touching, and do not move all visible separation into the scroll pane when nav controls need their own safe gutter.
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
