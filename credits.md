# RoopKala — imagery, data and licensing notes

This site is an **original build** for the RoopKala brand concept. The layout, CSS,
JavaScript, product names, prices and all prose were written for this project.
Nothing was copied from another company's website.

---

## 1. Every image on this site is generated

There are **no photographs of real places, real people or real merchandise** anywhere
in `assets/img/`. An earlier draft used five Creative Commons photographs from
Wikimedia Commons — two shop interiors (in Thailand and Spain), a handloom from
Odisha and two textile close-ups. All five have been removed and replaced with
generated imagery, because a photograph of someone else's shop was sitting under a
heading that read "The Muzaffarpur floor."

Consequences of that change, both good and bad:

- **Good:** no attribution obligations, no share-alike constraints, and no risk of
  implying that a real business's premises or a real artisan's work is yours.
- **Bad:** nothing here is evidence of anything. No real store, no real weaver,
  no real saree.

| Files | Content |
|---|---|
| `saree-kanj-1..4.jpg` | Kanjivaram-style silk sarees, single model, studio |
| `saree-tussar-1..4.jpg` | Tussar / raw silk sarees, single model, studio |
| `lehenga-1..4.jpg` | Lehenga sets, single model, studio |
| `kurta-1..4.jpg` | Kurta and co-ord sets, single model, studio |
| `salwar-1..4.jpg` | Salwar suits, single model, studio |
| `fabric-1..4.jpg` | Unstitched material and blouse flat-lays |
| `hero-festive.jpg`, `hero-wedding.jpg`, `hero-craft.jpg` | Wide campaign banners |
| `store-boutique.jpg`, `store-display.jpg` | Showroom interior and display table |
| `craft-loom.jpg`, `craft-embroidery.jpg` | Loom and running-stitch craft detail |

**The garments and models are fictional.** If you publish these as your own stock,
customers will arrive expecting sarees that do not exist. That is the main reason to
replace them, and the reason the layout is built to make replacing them easy — see
section 3.

---

## 2. All text data is invented

Replace every one of these before publishing:

- **Product names** (`Neel Kamal Kanchan Silk Saree`, etc.) and **reference codes**
  (`RK-S-101` … `RK-D-504`).
- **Prices, list prices and discount percentages** — plausible INR bands, not real.
- **Fabric descriptions, sizes, stock levels and "where it hangs"** on the product page.
- **Contact details have been removed at the owner's request.** There is currently no phone number,
  email or WhatsApp link anywhere on the site. Enquiries route to the catalogue request form and to
  the counter itself. Add real contact details deliberately, not by pasting placeholders back in.
- **The address** — "Ground Floor, Shastri Maidan Road, Near Aish Bagh Crossing,
  Muzaffarpur 842001" is a plausible-sounding construction, **not a verified
  location**. Do not put it on Google Maps or in the Maps links until it is real.
- **Store hours**, the "since 2011" founding year, the "12 looms" and "31 embroiderers"
  claims in the craft section, and the Sujani sourcing narrative.

The category taxonomy (Sarees / Lehenga Sets / Kurta & Co-ord / Salwar Suits /
Dress Materials / Blouses) is generic to the trade and safe to keep.

---

## 3. Swapping in your own photographs

The site reads every product image from `assets/img/<key>.jpg`, where the key comes
from the `img` field in `assets/js/catalog.js`. So:

1. Photograph your stock — one garment per frame, full length, ideally on a plain
   backdrop.
2. Export at a **2:3 portrait ratio** (e.g. 1200 × 1800). Every card, tile, chip and
   gallery is sized to 2:3 specifically so nothing gets cropped.
3. Overwrite the existing files using the **same filenames**. No code changes needed.
4. Update names and prices in `assets/js/catalog.js` — that one file drives the
   homepage grids, the listing page and the product page.

For the interior and craft images, keep them landscape (3:2) and overwrite
`store-boutique.jpg`, `store-display.jpg`, `craft-loom.jpg` and
`craft-embroidery.jpg`.

---

## 4. Fonts and third-party requests

`assets/css/site.css` loads **Fraunces** and **Karla** from Google Fonts. That is a
third-party request made by your visitors' browsers and may need a mention in a
privacy notice. To self-host, download the two families and replace the `@import`
with local `@font-face` rules.

The two "Open in Maps" links point at a Google Maps search for the placeholder
address. There are no phone, email or WhatsApp links anywhere on the site — they
were removed by request, and all enquiry calls-to-action now route to the
catalogue request form or to the counter. That form submits nowhere; it only shows
a confirmation message locally.

---

## 5. Before going live

- Replace or remove the `#` placeholder hrefs on the Instagram and Facebook footer icons.
- Replace the placeholder contact block in `assets/js/catalog.js` (`STORE`).
- Wire the catalogue request form to something real, or remove it.
- Re-read section 2 and replace everything listed there.
