# PAFFO

A coat atelier. PAFFO makes custom coats from Italian wool, cashmere, and leather. Each garment is cut to the client's measurements, fitted twice, and sewn by a single tailor over 21 days.

The site is a single static page that presents the atelier, its materials, and the commission process. It ships with a dark theme (ink background, ivory text, brass accents) and a light alternative, switched from the page header.

## Tech Stack

- **HTML** — semantic single-page markup (`index.html`)
- **CSS** — hand-written styles, CSS custom properties for theming, no framework
- **JavaScript** — theme toggle and small interaction logic, no build step
- **Google Fonts** — Cormorant Garamond (display), Lora (body), JetBrains Mono (labels)
- **JSON-LD** — `ClothingStore` schema for search and social cards
- **Sitemap & robots** — `sitemap.xml`, `robots.txt`, `CNAME` for the custom domain

## Structure

```
paffo/
├── index.html          # main page (markup, styles, scripts, JSON-LD)
├── sitemap.xml         # search engine sitemap
├── robots.txt          # crawler rules
├── CNAME               # paffo.ru
├── og-social.html      # Open Graph preview source
├── img/                # photography and og-image
├── new-img/            # recent collection assets
└── .well-known/        # domain verification files
```

## Development

The site is static and needs no build or dependencies.

1. Clone the repository:
   ```bash
   git clone https://github.com/bestdeejay-design/paffo.git
   cd paffo
   ```
2. Serve the folder with any static server:
   ```bash
   python3 -m http.server 8000
   ```
3. Open `http://localhost:8000` in your browser.

Edit `index.html` directly. Styles and scripts live inline in that file; images sit in `img/` and `new-img/`.

## Links

- Live site: https://paffo.ru/
- Contact: hello@paffo.ru

## License

Released under the [MIT License](LICENSE).
