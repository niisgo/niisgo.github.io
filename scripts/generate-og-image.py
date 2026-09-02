"""Generiert das Open-Graph-Vorschaubild (1200x630) fuer niisgo.github.io.
Nutzt System-Fonts (Windows). Ausgabe: src/assets/og-image.png
Neu ausfuehren nach Text-/Design-Aenderungen:  python scripts/generate-og-image.py
"""
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

W, H = 1200, 630
BG    = (247, 245, 240)   # Creme
INK   = (26, 26, 26)      # fast-schwarz
GREEN = (27, 94, 56)      # Akzent
MUTED = (107, 107, 107)   # gedaempft
LINE  = (222, 219, 212)   # feine Linien

FONTS = Path("C:/Windows/Fonts")

def font(name, size):
    return ImageFont.truetype(str(FONTS / name), size)

serif_bold = font("georgiab.ttf", 118)   # Display / Name
sans_semi  = font("seguisb.ttf", 34)      # Untertitel
sans_reg   = font("segoeui.ttf", 27)      # Fliesstext
mono       = font("consola.ttf", 26)      # URL / Tags
mono_b     = font("consolab.ttf", 26)

img = Image.new("RGB", (W, H), BG)
d = ImageDraw.Draw(img)

# feiner Innenrahmen
d.rectangle([24, 24, W - 25, H - 25], outline=LINE, width=2)

# gruener Akzentbalken links
d.rectangle([90, 150, 98, 480], fill=GREEN)

x = 138
# Name
d.text((x, 150), "Nico", font=serif_bold, fill=INK)
d.text((x, 272), "Tillmann", font=serif_bold, fill=INK)
# gruener Punkt hinter "Tillmann"
tw = d.textlength("Tillmann", font=serif_bold)
d.text((x + tw + 6, 272), ".", font=serif_bold, fill=GREEN)

# Untertitel
d.text((x + 4, 420), "Fachinformatiker Anwendungsentwicklung", font=sans_semi, fill=INK)
d.text((x + 4, 466), "blue solution \u00b7 Rheine", font=sans_reg, fill=MUTED)

# Fusszeile: URL links, Tags rechts
d.line([90, 545, W - 90, 545], fill=LINE, width=2)
d.text((138, 566), "niisgo.github.io", font=mono_b, fill=GREEN)

tags = "Java \u00b7 TypeScript \u00b7 Angular"
tags_w = d.textlength(tags, font=mono)
d.text((W - 90 - tags_w, 567), tags, font=mono, fill=MUTED)

out = Path("src/assets/og-image.png")
out.parent.mkdir(parents=True, exist_ok=True)
img.save(out, "PNG", optimize=True)
print(f"OK -> {out}  ({out.stat().st_size} bytes)")
