# Design Token Prompt

Use this prompt for Step 1. Provide the user's screenshot/image as the visual input.

```text
You are a design system extractor.

Given a UI style board image, extract a structured design token JSON.

Requirements:
- Output ONLY valid JSON.
- Do not hallucinate values. Infer conservatively from visible evidence.
- Use null for unknown, ambiguous, or not visible values.
- Use numeric values when possible.
- Use px as the default unit for size, spacing, radius, border width, and shadow offsets.
- Use hex color values when possible. Use rgba() only when opacity is clearly visible or explicitly shown.
- Prefer observed values over inferred values.
- If multiple variants exist, include them as arrays or named tokens.
- Keep token names semantic when usage is clear; otherwise use scale names such as 50, 100, 200 or sm, md, lg.
- Include confidence values from 0 to 1 where useful.
- For adjacent large app-shell regions such as a sidebar, topbar, and main stage, compare whether their apparent background colors are semantically the same surface. Do not split them into separate background tokens just because of screenshot compression, antialiasing, noise, slight local contrast, or nearby borders.
- If sidebar and main stage backgrounds visually read as one continuous app canvas, record a shared semantic alias such as `app_shell.background` and reuse that value for `background.page`, `background.canvas`, and region aliases. Only create a distinct `sidebar.background` or `main.background` when a clear intentional color boundary is visible.
- Conversely, if the sidebar/navigation rail has a visibly different tint from the main canvas or main stage, create separate region tokens such as `sidebar.background`, `nav_rail.background`, `main_canvas.background`, and `main_stage.background` even when the colors are close pale neutrals. Do not average distinct product regions into one shared alias.
- When uncertain between very close pale neutrals for the same app shell, prefer one averaged/representative token and document the uncertainty in `meta.assumptions` instead of encoding a visible color mismatch into semantic aliases.
- When uncertain whether close pale neutrals are one surface or separate intentional regions, compare the full region behavior: vertical boundary, active nav item contrast, topbar continuation, shadows/borders, and whether the region fills a persistent navigation column. If evidence supports distinct regions, record distinct tokens with confidence instead of forcing a shared app-shell token.
- For side-anchored text/link stacks such as hero helper copy, support links, account prompts, and contact panels, record alignment as a layout-sensitive token or measured element when visible. Capture the edge anchor (`left_safe_area`, `right_safe_area`, `center`, or similar), internal alignment (`start`, `center`, `end`), text alignment (`left`, `center`, `right`), and approximate edge inset. Do not treat a right-anchored text stack as left-aligned merely because it is positioned on the right side.
- For horizontal product/card carousels, record outer repeated-card dimensions separately from media/image dimensions. Include card width, height, aspect ratio, gap, padding, media region bounds, and whether sibling items share one template. Do not derive the card height from a product image crop, visible media content, or the current viewport slice; the outer rounded card boundary is the source of item proportions.
- For KPI, stat, metric, and summary cards, record both the outer card surface and any inner tinted value band/metric well as separate component tokens. Include outer padding, inner band padding, inner band height, corner radius, background color, and bottom/right inset when visible. Do not collapse the inner value band into the card background or leave its spacing implicit.
- For repeated cards/list items with separated bottom action strips, record footer-specific component tokens instead of relying only on generic card/button/switch tokens. Capture card body height or flex behavior, footer height/min-height, top divider color/width, footer padding, action-group gap, control vertical alignment, icon-button size, text-button size, switch size, and whether the footer must be non-shrinking.
- For corner radius, do not treat the physical screenshot edge, viewport crop, or an off-screen continuation as evidence that a component corner is square. If a regular card, panel, container, modal, or section is clipped by the screenshot edge and only some corners are visible, mark the missing corners as cropped/unknown and prefer the same uniform radius as the visible corners unless there is positive in-product evidence of asymmetric geometry. Positive evidence means the actual component boundary is visible and intentionally square, joined to another surface, or shaped like a bottom sheet/drawer/tabbar/split shell. A crop line at the image edge is not positive evidence. Record this assumption in `meta.assumptions`.
- Before extracting layout-sensitive tokens, identify outer wrapper candidates such as showcase canvases, centered artboards, decorative rounded frames, browser/device/mock frames, clipping frames, and drop-shadow wrappers. Record them in `raw_observations.image.wrapper_candidates` with approximate bounds, visual signals, decision, confidence, and evidence.
- Do not decide a wrapper is product UI merely because it contains product controls or cards. Preserve wrapper tokens only when the wrapper boundary itself has product semantics such as app/window chrome, in-product shell layout ownership, scroll/clipping ownership, or alignment with internal product panes.
- If a presentation wrapper is ignored, record the real product UI bounds in `raw_observations.image.effective_source_bounds` and base layout/token measurements on those bounds. Do not use the full screenshot width/height as the measurement denominator when the screenshot includes an ignored showcase canvas or device/browser frame.
- Treat screenshot/image dimensions as source measurements only. Do not turn the raw screenshot width/height, effective source bounds, or confirmed adaptation width into fixed output page dimensions. Record enough layout tokens to preserve fidelity at the confirmed adaptation width while allowing a viewport-adaptive implementation.
- Record the confirmed adaptation width and how it was selected. The width must come from the user's explicit width or from screenshot-based inference confirmed by the user, not from a fixed PC/mobile default. Include target device classification, source image dimensions, effective product UI bounds when a wrapper is ignored, the inferred candidate width, confidence, evidence, and alternate plausible widths when uncertain.
- Infer adaptation width for both PC/desktop and mobile screenshots. Use visible source evidence such as effective UI width, screenshot aspect ratio, browser/device chrome, mobile status/navigation bars, common viewport families, and export scaling. Do not assume all landscape screenshots use one desktop width or all portrait screenshots use one mobile width.
- Extract responsive layout intent where visible or inferable: whether the root should fill the viewport, whether major shell regions are fixed-size or flexible, which content has max-width constraints, which grids/toolbars should wrap or collapse, and which wide regions need scoped horizontal scrolling. Store this in `layout.viewport_adaptation`.
- If a real product main stage or raised pane is inset from the surrounding app canvas, record the observed shell offset in `raw_observations.measured_elements` and map repeated offset values into spacing tokens when appropriate. Do not treat this as presentation-wrapper padding when it belongs to the product UI.
- For directional app-shell edge shadows, measure the visible shadow size conservatively. A tight 1-3px edge darkening with a short blur should map to `shadow.xs` or a very subtle `shadow.shell_edge`, not to generic card/popover shadows.
- `shadow.shell_edge`, `directional_top`, `directional_left`, and `directional_top_left` should represent side-specific product edge treatments. Keep them low-alpha and short-radius unless the screenshot clearly shows a broad cast shadow.
- Record inner/inset shadows separately from outside cast shadows. Inner shadows are visible inside the component boundary, often as a pressed bevel, top/left inner highlight, or bottom/right inner darkening on buttons and controls. Do not map them to `shadow.button`, `shadow.card`, `shadow.popover`, or generic elevation tokens.
- If a control has only an inner/inset shadow and no visible outside cast shadow, create an inner control/button shadow token and keep the corresponding outside shadow token null.
- For shadow tokens, distinguish measured values from visual judgments. If the exact blur/offset/alpha cannot be measured from the screenshot, keep the token conservative and record the uncertainty in `meta.assumptions` or `meta.notes`; do not imply precision that the image does not support.
- When important image visuals sit on gradients, solid fills, glows, or simple geometric backdrops, extract those backgrounds as code-renderable color/gradient tokens instead of treating them as part of a screenshot asset. The render step should be able to layer a coded background behind a transparent subject image.
- Record imagery treatment with layered restoration in mind: transparent subject assets should preserve the subject/material while background gradients and floating controls remain separate code/UI layers.
- Record source subject visual bounds for important generated/transparent image subjects when visible or inferable. The rendered subject should keep the same relative width/height and position inside its image/card container even if the generated asset has different natural dimensions. When transparent padding preserves source crop/canvas coordinates, record that the alpha asset should remain untrimmed or that any trim offsets/insets must be compensated during rendering.
- For every important image area that might be saved as a screenshot crop, record an asset contamination check. Contaminants include phone/device/browser/mock frames, OS status bars, iOS home indicators, Android gesture/navigation bars, notches/dynamic islands, clock/battery/wifi/signal indicators, app navigation/action buttons, carousel controls, chips, badges, text overlays, cards, bottom sheets, modals, popovers, and any UI surface that should be rendered separately or ignored as presentation chrome. If contaminants are present, record that final `source_crop` is disallowed and that a clean generated/edited asset is required unless a clean unobstructed crop exists.
- When a bottom sheet, rounded card, booking panel, player panel, detail panel, or similar surface floats over a hero/photo/map region, record the overlap as a design token or measured element. Include approximate `underlay_bottom`, `overlay_top`, `overlap_px`, overlay radius, shadow confidence, and whether the image is visible behind the sheet's rounded corners. This is a layering token, not part of the clean image asset.
- For mobile screens with status bars, top page navigation, bottom navigation, or page-level tabbars, record measured chrome-to-content gaps and the navigation's own internal safe padding around controls. Include the source-image distance from the bottom of persistent top chrome to the first scrollable content element, the local gutter around top-nav buttons/tabs/icons, and the distance from the last scrollable content element to the top of persistent bottom chrome when visible. These gaps must survive when chrome is moved outside the scrollable content during rendering, split between chrome internal padding and scroll content inset rather than assigned entirely to one layer.
- For bottom OS navigation and gesture indicators, record them as ignored system chrome rather than product UI tokens. This includes the iOS home indicator/gesture pill, Android gesture bar, Android three-button navigation bar, and customized OEM Android navigation bars. Do not create color, radius, size, divider, bottom-nav, or drag-handle tokens from these elements unless the user explicitly asks to recreate OS/device chrome.
- If a product image area contains a visible gradient or tonal backdrop behind the subject, extract that backdrop as gradient/background tokens even when the subject will be restored by image generation. Do not let a screenshot crop bake a visible gradient into the subject asset when the gradient can be recreated with code.
- Keep global typography concise, but add targeted typography records for high-visual-weight text only. High-weight text includes prices, brand/logo text, hero headlines, large KPI/counter numbers, and visually dominant CTA labels. For these records, include role, visible text sample, font-family candidates, generic class (serif/sans/mono/display), digit style when relevant (lining/oldstyle, tabular/proportional, high/low contrast), weight, size, letter spacing, confidence, visual evidence, and fallback notes. Do not spend this detail on low-visual-weight body/supporting text; global typography is enough for those.
- If an exact font is uncertain, record candidates and confidence instead of a single overconfident family. If the likely font may not be available in the project/browser, record `availability.exact_font = "unknown"` and a recommended fallback class rather than silently pretending it is installed.
- For high-visual-weight typography, record both exact font availability and close visual fallback availability. Use fields such as `availability.exact_installed`, `availability.close_style_available`, `availability.close_style_candidates`, `fallback.selected`, and `user_notice_required`. Set `user_notice_required = true` only when the inferred font is not installed and no close project/local/system font with a similar visual style is available. If a close style fallback exists, set `user_notice_required = false` and record the fallback silently.

Schema:
{
  "meta": {
    "source_type": "ui_snapshot",
    "target_device": "pc_desktop | mobile | unknown | null",
    "source_dimensions": {
      "width": null,
      "height": null
    },
    "effective_source_width": null,
    "adaptation_width": null,
    "adaptation_width_inference": {
      "source": "user_provided | inferred_from_screenshot | unknown | null",
      "user_confirmed": null,
      "candidate_width": null,
      "confidence": null,
      "evidence": [],
      "alternate_candidates": [
        {
          "width": null,
          "reason": null,
          "confidence": null
        }
      ],
      "notes": null
    },
    "normalized_scale": null,
    "extraction_confidence": null,
    "notes": [],
    "assumptions": [],
    "unknowns": []
  },
  "colors": {
    "brand": {
      "primary": null,
      "primary_hover": null,
      "primary_active": null,
      "primary_subtle": null,
      "secondary": null,
      "accent": null
    },
    "background": {
      "page": null,
      "canvas": null,
      "surface": null,
      "surface_raised": null,
      "surface_overlay": null,
      "inverse": null
    },
    "text": {
      "primary": null,
      "secondary": null,
      "tertiary": null,
      "muted": null,
      "disabled": null,
      "inverse": null,
      "link": null,
      "link_hover": null
    },
    "border": {
      "default": null,
      "subtle": null,
      "strong": null,
      "focus": null,
      "divider": null
    },
    "state": {
      "success": null,
      "success_bg": null,
      "warning": null,
      "warning_bg": null,
      "error": null,
      "error_bg": null,
      "info": null,
      "info_bg": null,
      "disabled_bg": null,
      "disabled_text": null
    },
    "neutral_scale": {
      "0": null,
      "50": null,
      "100": null,
      "200": null,
      "300": null,
      "400": null,
      "500": null,
      "600": null,
      "700": null,
      "800": null,
      "900": null,
      "1000": null
    },
    "semantic_aliases": []
  },
  "opacity": {
    "disabled": null,
    "hover_overlay": null,
    "pressed_overlay": null,
    "scrim": null
  },
  "typography": {
    "font_family": {
      "primary": null,
      "secondary": null,
      "mono": null
    },
    "font_size": {
      "display": null,
      "h1": null,
      "h2": null,
      "h3": null,
      "h4": null,
      "title": null,
      "subtitle": null,
      "body": null,
      "body_sm": null,
      "caption": null,
      "label": null,
      "button": null
    },
    "line_height": {
      "display": null,
      "h1": null,
      "h2": null,
      "h3": null,
      "body": null,
      "caption": null,
      "button": null
    },
    "font_weight": {
      "regular": 400,
      "medium": 500,
      "semibold": 600,
      "bold": 700
    },
    "letter_spacing": {
      "display": null,
      "heading": null,
      "body": null,
      "caption": null,
      "button": null
    },
    "text_transform": {
      "button": null,
      "label": null
    },
    "high_visual_weight_text": [
      {
        "role": "price | brand | hero_heading | kpi | primary_cta | other",
        "sample": null,
        "font_family_candidates": [],
        "generic_class": "serif | sans | mono | display | script | null",
        "digit_style": {
          "numeric_forms": "lining | oldstyle | unknown | null",
          "spacing": "tabular | proportional | unknown | null",
          "contrast": "high | medium | low | unknown | null"
        },
        "font_size": null,
        "font_weight": null,
        "letter_spacing": null,
        "confidence": null,
        "evidence": null,
        "availability": {
          "exact_font": "available | unavailable | unknown | null",
          "exact_installed": null,
          "project_font": null,
          "local_asset": null,
          "close_style_available": null,
          "close_style_candidates": [],
          "checked_sources": ["project_css", "local_assets", "system_fonts"]
        },
        "fallback": {
          "strategy": "project_font | system_fallback | import_font | global_typography | null",
          "selected": null,
          "family_stack": [],
          "notes": null
        },
        "user_notice_required": null
      }
    ]
  },
  "spacing": {
    "base": null,
    "scale": {
      "0": 0,
      "2xs": null,
      "xs": null,
      "sm": null,
      "md": null,
      "lg": null,
      "xl": null,
      "2xl": null,
      "3xl": null,
      "4xl": null
    },
    "component_gap": {
      "inline": null,
      "stack": null,
      "section": null,
      "page_margin": null,
      "card_padding": null,
      "form_gap": null
    }
  },
  "sizing": {
    "icon": {
      "xs": null,
      "sm": null,
      "md": null,
      "lg": null
    },
    "control_height": {
      "xs": null,
      "sm": null,
      "md": null,
      "lg": null
    },
    "container": {
      "max_width": null,
      "sidebar_width": null,
      "content_width": null
    }
  },
  "radius": {
    "none": 0,
    "xs": null,
    "sm": null,
    "md": null,
    "lg": null,
    "xl": null,
    "2xl": null,
    "pill": null,
    "circle": null,
    "component": {
      "button": null,
      "input": null,
      "card": null,
      "modal": null,
      "badge": null,
      "avatar": null
    },
    "corner": {
      "top_left": null,
      "top_right": null,
      "bottom_right": null,
      "bottom_left": null
    },
    "corner_visibility": {
      "top_left": "visible | cropped_by_screenshot_edge | occluded | unknown | null",
      "top_right": "visible | cropped_by_screenshot_edge | occluded | unknown | null",
      "bottom_right": "visible | cropped_by_screenshot_edge | occluded | unknown | null",
      "bottom_left": "visible | cropped_by_screenshot_edge | occluded | unknown | null"
    },
    "corner_inference": {
      "strategy": "observed_uniform | inferred_uniform_from_visible_corners | observed_asymmetric | unknown | null",
      "evidence": null,
      "notes": null
    },
    "shell": {
      "top_left": null,
      "top_right": null,
      "bottom_right": null,
      "bottom_left": null
    }
  },
  "border": {
    "width": {
      "none": 0,
      "hairline": null,
      "sm": null,
      "md": null,
      "lg": null
    },
    "style": {
      "default": null,
      "focus": null
    }
  },
  "shadow": {
    "none": null,
    "xs": null,
    "sm": null,
    "md": null,
    "lg": null,
    "xl": null,
    "directional_top": null,
    "directional_left": null,
    "directional_top_left": null,
    "shell_edge": null,
    "inner_xs": null,
    "inner_sm": null,
    "control_inner": null,
    "button_inner": null,
    "primary_button_inner": null,
    "card": null,
    "popover": null,
    "modal": null,
    "button": null,
    "focus_ring": null
  },
  "blur": {
    "backdrop": null,
    "glass": null
  },
  "gradient": {
    "brand": null,
    "surface": null,
    "overlay": null
  },
  "layout": {
    "viewport_adaptation": {
      "calibration_width_is_fixed_output": false,
      "root_sizing": "fill_viewport | fluid_document | fixed_artboard_requested | unknown | null",
      "height_strategy": "min_viewport_height | viewport_bounded_shell | content_driven | fixed_artboard_requested | unknown | null",
      "width_strategy": "fluid_width | content_max_width | viewport_bounded_shell | fixed_artboard_requested | unknown | null",
      "fluid_regions": [],
      "fixed_regions": [],
      "content_max_width": null,
      "grid_behavior": "wrap | collapse_columns | scoped_horizontal_scroll | fixed_tracks_inside_fluid_shell | unknown | null",
      "notes": null
    },
    "grid": {
      "columns": null,
      "gutter": null,
      "margin": null
    },
    "breakpoints": {
      "mobile": null,
      "tablet": null,
      "desktop": null,
      "wide": null
    },
    "density": null,
    "alignment": null
  },
  "motion": {
    "duration": {
      "fast": null,
      "normal": null,
      "slow": null
    },
    "easing": {
      "standard": null,
      "enter": null,
      "exit": null
    }
  },
  "components": {
    "button": {
      "variants": {
        "primary": {
          "height": null,
          "padding_x": null,
          "padding_y": null,
          "radius": null,
          "background": null,
          "text_color": null,
          "border": null,
          "shadow": null,
          "font_size": null,
          "font_weight": null
        },
        "secondary": {
          "height": null,
          "padding_x": null,
          "padding_y": null,
          "radius": null,
          "background": null,
          "text_color": null,
          "border": null,
          "shadow": null
        },
        "ghost": {
          "height": null,
          "padding_x": null,
          "background": null,
          "text_color": null
        },
        "danger": {
          "height": null,
          "background": null,
          "text_color": null
        }
      },
      "states": {
        "default": {},
        "hover": {},
        "active": {},
        "focus": {},
        "disabled": {}
      }
    },
    "input": {
      "height": null,
      "padding_x": null,
      "padding_y": null,
      "radius": null,
      "background": null,
      "text_color": null,
      "placeholder_color": null,
      "border_color": null,
      "border_width": null,
      "font_size": null,
      "states": {
        "default": {},
        "focus": {},
        "error": {},
        "disabled": {}
      }
    },
    "select": {
      "height": null,
      "padding_x": null,
      "radius": null,
      "background": null,
      "border_color": null,
      "icon_size": null
    },
    "checkbox": {
      "size": null,
      "radius": null,
      "border_color": null,
      "checked_background": null,
      "check_color": null
    },
    "radio": {
      "size": null,
      "border_color": null,
      "checked_color": null
    },
    "switch": {
      "width": null,
      "height": null,
      "thumb_size": null,
      "track_off": null,
      "track_on": null
    },
    "card": {
      "background": null,
      "padding": null,
      "radius": null,
      "border_color": null,
      "shadow": null
    },
    "card_action_footer": {
      "height": null,
      "min_height": null,
      "padding_x": null,
      "padding_y": null,
      "background": null,
      "border_top_color": null,
      "border_top_width": null,
      "action_gap": null,
      "justify": "space-between | start | end | center | null",
      "align": "center | start | end | null",
      "non_shrinking": null,
      "icon_button_size": null,
      "text_button_height": null,
      "switch_width": null,
      "switch_height": null
    },
    "modal": {
      "background": null,
      "width": null,
      "padding": null,
      "radius": null,
      "shadow": null,
      "scrim_color": null
    },
    "tooltip": {
      "background": null,
      "text_color": null,
      "padding_x": null,
      "padding_y": null,
      "radius": null,
      "font_size": null
    },
    "badge": {
      "height": null,
      "padding_x": null,
      "radius": null,
      "background": null,
      "text_color": null,
      "font_size": null,
      "font_weight": null
    },
    "avatar": {
      "size_sm": null,
      "size_md": null,
      "size_lg": null,
      "radius": null
    },
    "tabs": {
      "height": null,
      "gap": null,
      "edge_inset_start": null,
      "edge_inset_end": null,
      "active_text": null,
      "inactive_text": null,
      "indicator_color": null,
      "indicator_height": null
    },
    "navigation": {
      "item_height": null,
      "item_padding_x": null,
      "background": null,
      "active_background": null,
      "active_text": null,
      "inactive_text": null,
      "icon_size": null
    },
    "stat_card": {
      "background": null,
      "padding": null,
      "radius": null,
      "border_color": null,
      "inner_band_background": null,
      "inner_band_height": null,
      "inner_band_padding_x": null,
      "inner_band_padding_y": null,
      "inner_band_inset_top": null,
      "inner_band_inset_bottom": null,
      "inner_band_inset_left": null,
      "inner_band_inset_right": null,
      "inner_band_radius": null
    },
    "table": {
      "header_height": null,
      "row_height": null,
      "cell_padding_x": null,
      "border_color": null,
      "header_background": null,
      "row_background": null,
      "row_hover_background": null
    }
  },
  "icons": {
    "style": null,
    "stroke_width": null,
    "corner_style": null,
    "default_size": null,
    "color": null,
    "preferred_source": "existing_project_icons | lucide | heroicons | tabler | inline_svg | brand_asset | null",
    "missing_icon_risk": null
  },
  "imagery": {
    "style": null,
    "corner_radius": null,
    "aspect_ratios": [],
    "treatment": null,
    "layering": {
      "background_rendering": "code | image | mixed | null",
      "transparent_subject_preferred": null,
      "overlay_controls_separate": null
    }
  },
  "accessibility": {
    "minimum_text_contrast_observed": null,
    "focus_visible": null,
    "touch_target_min": null
  },
  "raw_observations": {
    "image": {
      "width": null,
      "height": null,
      "wrapper_candidates": [],
      "wrapper_decision": null,
      "effective_source_bounds": null,
      "ignored_system_chrome": [
        {
          "type": "ios_home_indicator | android_gesture_bar | android_three_button_nav | oem_android_navigation_bar | status_bar | device_frame | other",
          "bounds": {
            "x": null,
            "y": null,
            "width": null,
            "height": null
          },
          "visual_signals": [],
          "decision": "ignore",
          "reason": "system_or_device_chrome_not_product_ui",
          "confidence": null
        }
      ]
    },
    "visible_text_samples": [],
    "detected_color_samples": [],
    "measured_elements": []
  }
}
```
