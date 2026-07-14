from rembg import remove
from PIL import Image

input_path = '/Users/macbookair/Downloads/dr-zaidul-akbar-jsr-fixme-solusi-pernapasan.png_2K_202607141541.jpeg'
output_path = '/Users/macbookair/Antrophic/Claude Code/nuralive/public/hero.png'

print("Opening image...")
inp = Image.open(input_path)

print("Removing background...")
out = remove(inp)

print("Saving image...")
out.save(output_path)
print("Done!")
