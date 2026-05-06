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
- When uncertain between very close pale neutrals for the same app shell, prefer one averaged/representative token and document the uncertainty in `meta.assumptions` instead of encoding a visible color mismatch into semantic aliases.
- Before extracting layout-sensitive tokens, identify outer wrapper candidates such as showcase canvases, centered artboards, decorative rounded frames, browser/device/mock frames, clipping frames, and drop-shadow wrappers. Record them in `raw_observations.image.wrapper_candidates` with approximate bounds, visual signals, decision, confidence, and evidence.
- Do not decide a wrapper is product UI merely because it contains product controls or cards. Preserve wrapper tokens only when the wrapper boundary itself has product semantics such as app/window chrome, in-product shell layout ownership, scroll/clipping ownership, or alignment with internal product panes.
- If a presentation wrapper is ignored, record the real product UI bounds in `raw_observations.image.effective_source_bounds` and base layout/token measurements on those bounds. Do not use the full screenshot width/height as the measurement denominator when the screenshot includes an ignored showcase canvas or device/browser frame.
- If a real product main stage or raised pane is inset from the surrounding app canvas, record the observed shell offset in `raw_observations.measured_elements` and map repeated offset values into spacing tokens when appropriate. Do not treat this as presentation-wrapper padding when it belongs to the product UI.
- For directional app-shell edge shadows, measure the visible shadow size conservatively. A tight 1-3px edge darkening with a short blur should map to `shadow.xs` or a very subtle `shadow.shell_edge`, not to generic card/popover shadows.
- `shadow.shell_edge`, `directional_top`, `directional_left`, and `directional_top_left` should represent side-specific product edge treatments. Keep them low-alpha and short-radius unless the screenshot clearly shows a broad cast shadow.
- Record inner/inset shadows separately from outside cast shadows. Inner shadows are visible inside the component boundary, often as a pressed bevel, top/left inner highlight, or bottom/right inner darkening on buttons and controls. Do not map them to `shadow.button`, `shadow.card`, `shadow.popover`, or generic elevation tokens.
- If a control has only an inner/inset shadow and no visible outside cast shadow, create an inner control/button shadow token and keep the corresponding outside shadow token null.
- For shadow tokens, distinguish measured values from visual judgments. If the exact blur/offset/alpha cannot be measured from the screenshot, keep the token conservative and record the uncertainty in `meta.assumptions` or `meta.notes`; do not imply precision that the image does not support.

Schema:
{
  "meta": {
    "source_type": "ui_snapshot",
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
    }
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
      "active_background": null,
      "active_text": null,
      "inactive_text": null,
      "icon_size": null
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
    "color": null
  },
  "imagery": {
    "style": null,
    "corner_radius": null,
    "aspect_ratios": [],
    "treatment": null
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
      "effective_source_bounds": null
    },
    "visible_text_samples": [],
    "detected_color_samples": [],
    "measured_elements": []
  }
}
```
