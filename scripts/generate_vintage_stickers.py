import json

# Script to generate src/data/vintageCartoonStickers.ts
# 50 Vintage 1930s Rubber Hose / Steamboat Willie / Early Mickey Mouse style stickers

def create_svg(inner_svg, view_box="0 0 120 120"):
    return f"""<svg xmlns="http://www.w3.org/2000/svg" viewBox="{view_box}" width="100%" height="100%" fill="none">{inner_svg}</svg>"""

print("Generator script template ready")
