#!/usr/bin/env python3
"""Crop a source screenshot rectangle with pixel-copy semantics and verify it."""

from __future__ import annotations

import argparse
import json
from pathlib import Path
import sys

try:
    from PIL import Image
except ImportError as exc:  # pragma: no cover - environment dependent
    raise SystemExit(
        "Pillow is required for exact crop verification. Install Pillow or use an "
        "equivalent pixel-copy crop tool and compare pixels against the source rectangle."
    ) from exc


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(
        description=(
            "Crop from the original screenshot pixel grid and verify the saved crop "
            "matches the source rectangle with zero pixel mismatches."
        )
    )
    parser.add_argument("--source", required=True, help="Path to the original screenshot.")
    parser.add_argument("--out", required=True, help="Path to write the PNG crop.")
    parser.add_argument("--x", required=True, type=int, help="Crop x in source pixels.")
    parser.add_argument("--y", required=True, type=int, help="Crop y in source pixels.")
    parser.add_argument("--width", required=True, type=int, help="Crop width in source pixels.")
    parser.add_argument("--height", required=True, type=int, help="Crop height in source pixels.")
    return parser.parse_args()


def count_mismatches(expected: Image.Image, actual: Image.Image) -> int:
    expected_rgba = expected.convert("RGBA")
    actual_rgba = actual.convert("RGBA")
    if expected_rgba.size != actual_rgba.size:
        return max(expected_rgba.size[0] * expected_rgba.size[1], actual_rgba.size[0] * actual_rgba.size[1])

    expected_bytes = expected_rgba.tobytes()
    actual_bytes = actual_rgba.tobytes()
    return sum(
        1
        for index in range(0, len(expected_bytes), 4)
        if expected_bytes[index : index + 4] != actual_bytes[index : index + 4]
    )


def main() -> int:
    args = parse_args()
    source_path = Path(args.source)
    out_path = Path(args.out)
    rect = (args.x, args.y, args.x + args.width, args.y + args.height)

    if args.width <= 0 or args.height <= 0:
        raise SystemExit("--width and --height must be positive integers.")
    if args.x < 0 or args.y < 0:
        raise SystemExit("--x and --y must be non-negative source pixel coordinates.")

    with Image.open(source_path) as source:
        source.load()
        source_width, source_height = source.size
        if rect[2] > source_width or rect[3] > source_height:
            raise SystemExit(
                f"Crop rectangle {rect} exceeds source bounds {source_width}x{source_height}."
            )

        crop = source.crop(rect)
        out_path.parent.mkdir(parents=True, exist_ok=True)
        crop.save(out_path, format="PNG")

        with Image.open(out_path) as saved:
            saved.load()
            mismatches = count_mismatches(crop, saved)
            output_width, output_height = saved.size

    result = {
        "source": str(source_path),
        "out": str(out_path),
        "coordinate_space": "absolute_source_image_pixels",
        "method": "Pillow.Image.crop_pixel_copy",
        "source_dimensions": {"width": source_width, "height": source_height},
        "crop": {"x": args.x, "y": args.y, "width": args.width, "height": args.height},
        "output": {"width": output_width, "height": output_height},
        "pixel_mismatches": mismatches,
    }
    print(json.dumps(result, ensure_ascii=False, indent=2))
    return 0 if mismatches == 0 and (output_width, output_height) == (args.width, args.height) else 1


if __name__ == "__main__":
    sys.exit(main())
