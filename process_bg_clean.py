from rembg import remove
from PIL import Image

input_path = '/Users/macbookair/Downloads/dr-zaidul-akbar-jsr-fixme-solusi-pernapasan.png_2K_202607141541.jpeg'
output_path = '/Users/macbookair/Antrophic/Claude Code/nuralive/public/hero-dr-clean.png'

print("Opening image...")
inp = Image.open(input_path)

print("Removing background with alpha matting to remove black edges...")
out = remove(
    inp,
    alpha_matting=True,
    alpha_matting_foreground_threshold=240,
    alpha_matting_background_threshold=10,
    alpha_matting_erode_size=15
)

print("Saving image...")
out.save(output_path)
print("Done!")
