// One-off: convert client work photos from Downloads into optimized
// 4:3 WebP tiles for /public/work. Run from tarbha-site/: node scripts/import-work-photos.js
const sharp = require("sharp");
const path = require("path");

const dl = "C:/Users/rathi/Downloads";
const out = path.join(__dirname, "..", "public", "work");

const jobs = [
  ["image.png_2K_202607151751 (1).jpeg", "clamps"],
  ["image.png_2K_202607151752.jpeg", "electric-poles"],
  ["image.png_2K_202607151751.jpeg", "street-light-brackets"],
  ["image.png_2K_202607151751 (2).jpeg", "chamber-frames"],
  ["image.png_2K_202607151751 (3).jpeg", "grills-gates"],
  ["tarbha_1.jpeg_2K_202607151657.jpeg", "workshop"],
];

(async () => {
  for (const [src, name] of jobs) {
    const dest = path.join(out, `${name}.webp`);
    await sharp(path.join(dl, src))
      .resize(1200, 900, { fit: "cover" })
      .webp({ quality: 80 })
      .toFile(dest);
    console.log("wrote", dest);
  }
})();
