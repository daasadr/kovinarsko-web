# Kovinarsko atelje Breznik — Demonstrační web

Ukázkový portfolio web pro fiktivní slovinskou uměleckou kovárnu.
Vytvořeno jako demonstrace schopností při tvorbě webů pro zákazníky ze Slovinska.

> **Ta spletna stran je demonstracijski primer. / This is a fictional portfolio project.**

**Live demo:** [daasadr.github.io/kovinarsko-web](https://daasadr.github.io/kovinarsko-web)

---

## O projektu

Jednostránkový web v tmavém artisan stylu s kovářskou tematikou. Plně bilingvní (slovinština / angličtina), responzivní, s animovanými jiskrami, interaktivní galerií a mapou. Fiktivní firma, fiktivní kontakty — slouží čistě jako vizuální ukázka.

---

## Tech stack

| Vrstva | Technologie |
|---|---|
| HTML | Sémantické HTML5, single-page (kotvy) |
| CSS | Vanilla CSS — custom properties, Grid, Flexbox, animace |
| JavaScript | Vanilla ES6+, žádný framework |
| Mapa | [Leaflet.js](https://leafletjs.com/) + CartoDB Dark Matter tiles |
| Fonty | Google Fonts — Cinzel, Cinzel Decorative, Lato |
| Hosting | GitHub Pages (statický export) |
| Správa kódu | Git |

Žádný build step, žádný bundler, žádné závislosti — otevřít `index.html` v prohlížeči stačí.

---

## Funkce

- **Bilingualita (SL / EN)** — přepínač v navigaci, preference uložena v `localStorage`
- **Animované jiskry** — Canvas 2D particle system simulující žhavé jiskry z kovárny
- **Galerie s filtrem** — 12 fotografií, filtrování dle kategorie (Ograje / Vrata / Dekoracija / Pohištvo)
- **Lightbox** — kliknutí otevře fotku na celou obrazovku, navigace šipkami, klávesnicí i swipem
- **Mapa** — Leaflet + tmavý CartoDB styl, pin na Radovljica (záměrně nepřesná poloha)
- **Scroll reveal** — elementy se animovaně zobrazují při scrollování (IntersectionObserver)
- **Počítadlo statistik** — čísla se animovaně počítají při najetí do viewport
- **Kontaktní formulář** — demo simulace odeslání (žádný backend)
- **Responzivní** — hamburger menu, přizpůsobení pro mobil/tablet/desktop

---

## Adresářová struktura

```
slo_web/
├── index.html              # Celý web — jedna stránka, všechny sekce
├── css/
│   └── style.css           # Všechny styly (~600 řádků)
├── js/
│   └── app.js              # Veškerá logika (~500 řádků)
├── public/
│   └── images/
│       ├── hero-bg.jpg
│       ├── about-forge.jpg
│       ├── about-shop.jpg
│       ├── story-bg.jpg
│       ├── gallery-1.jpg … gallery-12.jpg
│       └── IMAGES.md       # Instrukce k obrázkům
└── README.md
```

---

## Technické detaily implementace

### Bilingvní systém

Překlady jsou uloženy jako JavaScript objekt v `app.js`:

```javascript
const TR = {
  sl: { nav_about: 'O nas', hero_eyebrow: 'Umetnost ognja in kovine', ... },
  en: { nav_about: 'About',  hero_eyebrow: 'The Art of Fire and Iron',  ... }
};
```

Každý překládaný element v HTML má atribut `data-tr="klíč"`. Funkce `applyTranslations()` iteruje všechny tyto elementy a nastaví `textContent` dle aktivního jazyka. Preference se ukládá do `localStorage` pod klíčem `breznik-lang`.

### Canvas animace jisker

Particle system postavený na Canvas 2D API (`js/app.js`, třída `Spark`).

**Fyzika každé částice:**
- Startuje z dolní třetiny hero sekce (náhodná x-pozice v rozmezí 35–65 % šířky)
- Počáteční vektor: převážně nahoru s náhodným úhlem ±55° od vertikály
- Odpor vzduchu (`drag: 0.988–0.996`), gravitace (`0.025–0.065 px/frame²`), boční drift
- Životnost: 55–185 snímků

**Vizuál:**
- Barva se mění s věkem částice: bílá → žlutá → oranžová → červená (simulace chladnutí)
- Trail — posledních 3–8 pozic tvoří světlecí stopu za jiskrou
- Glow efekt přes `ctx.shadowBlur` + `ctx.shadowColor`
- ~8 % jisker jsou „uhlíky" — při dopadu na zem chvíli doutná

**Optimalizace:**
- `IntersectionObserver` pauzuje animaci když hero není ve viewport (šetří CPU)
- `ResizeObserver` aktualizuje rozměry canvas při změně velikosti okna
- Maximum 180 současných částic

### Lightbox

Dynamicky vytvořený DOM element připojený na `<body>`. Sbírá viditelné položky galerie (respektuje aktivní filtr). Podporuje:
- Kliknutí na obrázek → otevření
- `←` `→` klávesy a tlačítka pro navigaci
- `Escape` nebo klik na tmavé pozadí pro zavření
- Touch swipe (mobilní zařízení) — práh 40 px

URL fotky se extrahuje z `background-image` CSS vlastnosti příslušného `.gal-img` elementu.

### Mapa

Leaflet.js s CartoDB Dark Matter tile vrstvou — vizuálně ladí s tmavým tématem webu.

```javascript
L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
  attribution: '© OpenStreetMap contributors © CARTO'
}).addTo(map);
```

Pin je záměrně na úrovni města (zoom 12), bez přesné adresy — standardní praxe pro řemeslníky pracující v soukromé dílně. Vlastní HTML marker ve firemní barvě (`#e85d04`).

### Scroll reveal

`IntersectionObserver` sleduje elementy s třídou `.reveal`. Při průniku přes 12% viewport výšky přidá třídu `.visible`, která spustí CSS transition:

```css
.reveal           { opacity: 0; transform: translateY(32px); transition: 0.75s ease; }
.reveal.visible   { opacity: 1; transform: translateY(0); }
```

### Galerie — filtr

Jednoduchý DOM filtr bez knihovny — při kliknutí na filtr tlačítko se přidá/odebere třída `.hidden` na galerii položkách:

```javascript
items.forEach(item => {
  const matches = cat === 'all' || item.getAttribute('data-cat') === cat;
  item.classList.toggle('hidden', !matches);
});
```

Lightbox respektuje aktuálně viditelné položky (naviguje jen přes nefiltrované).

---

## Výkon & optimalizace

### Obrázky
Všechny fotografie zkomprimovány pomocí PowerShell + `System.Drawing` .NET:
- Max rozměr: 1920 px na delší straně
- JPEG kvalita: 82 %
- Výsledek: ~60 MB → ~6,4 MB (−90 %)

### HTML resource hints
```html
<link rel="preload" as="image" href="./public/images/hero-bg.jpg">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://unpkg.com">
<link rel="preconnect" href="https://a.basemaps.cartocdn.com">
```

### Open Graph meta
Správný náhled při sdílení odkazu na sociálních sítích:
```html
<meta property="og:title"       content="Kovinarsko atelje Breznik | Umetna kovačija">
<meta property="og:description" content="Ročno kovano železo z dušo ...">
<meta property="og:image"       content="./public/images/hero-bg.jpg">
<meta property="og:locale"      content="sl_SI">
```

### CSS animace
`will-change: contents` na canvas element, `will-change: opacity, transform` na forge glow — umožňuje prohlížeči připravit kompozitní vrstvu pro animaci.

---

## Lokální spuštění

**Možnost 1 — Python (doporučeno, kvůli Leaflet mapě):**
```bash
cd slo_web
python -m http.server 8000
# otevřít http://localhost:8000
```

**Možnost 2 — VS Code Live Server extension:**
Otevřít `index.html`, klik na „Go Live" ve status baru.

**Možnost 3 — přímé otevření (omezené):**
Soubor `index.html` lze otevřít přímo v prohlížeči přes `file://`.
Leaflet mapa může mít omezení kvůli CORS, zbytek funguje.

---

## Nasazení — GitHub Pages

1. Repo: [github.com/daasadr/kovinarsko-web](https://github.com/daasadr/kovinarsko-web)
2. Settings → Pages → Source: **Deploy from branch** → `master` → `/ (root)`
3. Web je dostupný na: `https://daasadr.github.io/kovinarsko-web`
4. GitHub Pages automaticky zajišťuje HTTPS a CDN (Fastly)

Aktualizace: `git push` → GitHub Pages se aktualizuje automaticky do ~2 minut.

---

## Bezpečnost

Statický web bez backendu — velmi nízká útočná plocha:
- Žádné uživatelské přihlášení, žádné session tokeny
- Kontaktní formulář je demo (žádný skutečný endpoint)
- Překlady používají `textContent`, ne `innerHTML` — XSS nehrozí
- HTTPS vynucuje GitHub Pages automaticky
- `localStorage` ukládá pouze jazykovou preferenci

---

## Části série ukázkových webů

| Web | Repo | Tech | Status |
|---|---|---|---|
| Kovinarsko atelje Breznik | `kovinarsko-web` | Vanilla HTML/CSS/JS | ✅ Hotovo |
| Čajna hiša Dolina | `cajna-hisa` | Next.js 14 + TypeScript | 🔜 Plánováno |
| *(třetí web)* | — | — | 🔜 Plánováno |

---

*Vytvořeno jako demonstrační portfolio projekt. Firma, kontakty a příběh jsou fiktivní.*
