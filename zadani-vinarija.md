# Zadání: Demonstrační web — Vinarija Vrh

Ukázkový portfolio web pro fiktivní slovinskou rodinnou vinárnu.
Třetí web ze série slovinských demonstračních projektů.

---

## Kontext & cíl

Ukázkový (fiktivní) web do portfolia pro zákazníky ze Slovinska.
Web musí vypadat jako skutečný prémiový business — realisticky, lákavě, profesionálně.

Pracovní adresář: `d:\Projekty\vinarija_vrh`

---

## Fiktivní firma

| | |
|---|---|
| **Název** | Vinarija Vrh |
| **Typ** | Rodinná vinárna, degustace, prodej vín |
| **Region** | Goriška brda, Slovenija (nejprestižnější slovinský vinařský region) |
| **Příběh** | Vinárna rodiny Vrhovec od roku 1962, dnes třetí generace — Luka Vrhovec. 4 hektary vinic na svazích Brdy, 8 druhů vín, export do 12 zemí. Filosofie: minimální zásahy, terroir jako zákon. |
| **Telefon** | +386 5 123 4567 (fiktivní) |
| **Email** | info@vinarija-vrh.si (fiktivní) |
| **Degustace** | Po–So 10:00–18:00, pouze po domluvě |
| **Poloha na mapě** | Goriška brda centrum: 45.9914° N, 13.5272° E, zoom 13 |
| **Pod mapou** | *"Točen naslov in parkirišče sporočimo ob rezervaciji."* |

### Katalog vín (8 vín — fiktivní)

| Název | Typ | Sorta | Ročník |
|---|---|---|---|
| Vrh Belo | Bela | Rebula | 2022 |
| Vrh Belo Reserve | Bela | Chardonnay | 2021 |
| Vrh Rosé | Rosé | Merlot | 2023 |
| Vrh Rdeče | Rdeča | Merlot | 2020 |
| Vrh Rdeče Reserve | Rdeča | Cabernet Sauvignon | 2019 |
| Cru Vrhovec | Rdeča | Merlot + Cab Sauv | 2018 |
| Brda Rumeni Muškat | Sladka | Muškat | 2023 |
| Vrh Peneče | Peneča | Rebula | 2022 |

---

## Tech stack

| Vrstva | Technologie | Proč |
|---|---|---|
| Framework | **Astro 4+** | Ideální pro statické weby — nulový JS bundle, islands architektura |
| Styling | **Tailwind CSS 3** | Ukazuje třetí přístup (po vanilla CSS a CSS Modules) |
| Interaktivita | Astro islands (vanilla JS) | Language switcher, filtr, lightbox, mapa |
| Katalog vín | **Astro Content Collections** | Flagship funkce Astra — vína jako typovaná YAML/JSON data |
| Mapa | Leaflet.js (dynamický import) | Stejná knihovna, tentokrát s Voyager tile stylem |
| Fonty | Astro + Google Fonts | Playfair Display + Libre Baskerville |
| Hosting | GitHub Pages (statický export) | Konzistence s předchozími projekty |
| Správa kódu | Git | |

### Proč Astro (argument pro zákazníky)

Astro generuje čisté HTML — žádný JavaScript se neposílá prohlížeči pokud není potřeba.
Pro prezentační web vinárny to znamená rychlost blízkou statickému HTML,
při zachování moderního vývojářského workflow a komponentového přístupu.
Content Collections umožňují přidávat nová vína do katalogu editací YAML souboru
bez dotyku HTML — ideální pro klienty, kteří chtějí web snadno aktualizovat.

---

## Design systém

### Charakter

Rustikální elegance. Kámen, dřevo, pergamen, víno. Ani příliš moderní, ani příliš staromódní.
Inspirace: italská a francouzská vinná etiketová grafika + středoevropská solidnost.

### Paleta (Tailwind extend v config)

```js
colors: {
  'wine':      '#5c1a1a',   // tmavá burgundy — hlavní akcent
  'wine-mid':  '#8b2e2e',   // střední červená
  'wine-light':'#c4626200', // světlejší, hover stav
  'stone':     '#f5f0e8',   // teplá smetanová — pozadí stránek
  'parch':     '#ede5d5',   // pergamenová — karta pozadí
  'oak':       '#8b6a3e',   // teplá hnědá — akcent text
  'vine':      '#4a5e2d',   // olivová zelená — sekundární akcent
  'gold':      '#b8960c',   // zlatá — pro etikety a ocenění
  'ink':       '#1a1208',   // text nadpisů
  'muted':     '#7a6248',   // sekundární text
}
```

### Typografie

| Použití | Font | Váha |
|---|---|---|
| Velké nadpisy (H1, H2) | Playfair Display | 400, 700 |
| Etikety, kategorie | Libre Baskerville | 400 italic |
| Tělo textu | Lato | 300, 400 |
| Malé popisky, kategorie | Montserrat | 500, letter-spacing |

### Vizuální prvky

- Jemná textura pozadí: SVG noise pattern nebo CSS grain overlay (papír/len)
- Tenko linky (1px, barva `wine` s 20% opacity) jako oddělovače a rámečky
- Border-radius: 2–4px (ne zcela hranaté, ne kulaté)
- Etikety vín — stylizované jako fyzické vinné etikety (box s rámečkem, centrovaný text)

### Animace

**Žádný canvas** — pro vinárnu platí klidnější estetika.

Místo toho:
- **Parallax** na hero pozadí (CSS transform + scroll event, nebo CSS-only)
- **Fade-up reveal** na sekce (IntersectionObserver, stejný princip jako u kovárny)
- **Hover karty vín** — lift (translateY -4px) + box-shadow prohloubení + tenká wine-barevná border
- **Animovaný počítadlo** statistik při scrollu do view
- **Smooth scroll** celostránkový

---

## Struktura webu (single-page, kotvy)

### 1. NAV
- Logo: `Vinarija` větší + `Vrh` zlatě akcent, podnadpis `Goriška brda · est. 1962`
- Kotvy: O vinárni | Vina | Vinograd | Degustacije | Kontakt
- Přepínač SL / EN
- Průhledná → tmavá při scrollu

### 2. HERO — celá výška viewportu
- Pozadí: `./public/images/hero-bg.jpg` (vinice, západ slunce, dramatické)
- Tmavý gradient overlay (zespodu tmavší, nahoře průhledný)
- Nadpis + podnadpis + 2 CTA: `Odkrijte naša vina` | `Rezervirajte degustacijo`
- Bez canvas animace — čistota

### 3. STATS BAR (tmavý, kontrastní)
- `62 let tradicije` | `8 vrst vin` | `12 držav izvoza` | `100% družinska klet`

### 4. O VINÁRNI — sekce
- Grid: velký obrázek (vinice nebo sklep) + text příběhu
- Překrývající menší foto (detail sudu nebo rukou při sběru)
- Badge: `est. 1962`
- Text: příběh Luka Vrhovec, filosofie terroir, minimální intervence

### 5. KATALOG VÍN — klíčová sekce
- Filtry: `Vsa vina` | `Bela` | `Rdeča` | `Rosé` | `Peneča` | `Sladka`
- Grid karet — každá karta vypadá jako stylizovaná vinná etiketa:
  - Jméno vína (Playfair Display)
  - Rok ročníku
  - Odrůda
  - Krátká chuťová nota (2 řádky)
  - Doporučení k jídlu (ikonky)
  - Tlačítko `Izvedi več` (bez e-shopu — jen vizuální)
- Data vín z **Astro Content Collections** (`src/content/wines/*.yaml`)
- Filtrace přes Astro island (malý vanilla JS client komponent)

### 6. VINOGRAD — sekce o terroir
- Fullwidth foto vinic
- Text o poloze, půdě, klimatu Goriških brd
- 3 ikony: Lega (poloha) | Tla (půda) | Podnebje (klima)

### 7. DEGUSTACIJE — rezervace degustace
- 3 karty typů degustace:
  - Osnovna degustacija — 4 vína, 45 min, 15 € / os
  - Izbrana degustacija — 6 vín + sýry, 90 min, 35 € / os
  - Ekskluzivna — celý katalog + sklep tour, 2h, 65 € / os
- Demo rezervační formulář: jméno, email, datum, počet osob, typ, zpráva
- Simulace odeslání (žádný backend)

### 8. NAGRADE — ocenění (vizuální sekce)
- Timeline nebo grid: fiktivní ocenění s rokem a názvem
  - 2023 — Zlata medalja, Decanter World Wine Awards
  - 2022 — 92 bodov, Wine Spectator
  - 2021 — Najboljše slovensko vino, Vino Ljubljana
  - 2019 — Platinasta medalja, Concours Mondial de Bruxelles

### 9. KONTAKT + MAPA
- 2 sloupce: info vlevo, mapa vpravo
- Leaflet + **CartoDB Voyager** tiles (světlý, přírodní styl — vhodný pro vinárnu)
- Pin na Goriška brda centrum, zoom 13
- Kontaktní info (fiktivní)

### 10. FOOTER
- Logo, navigace, social ikonky
- Malý text: `© 2024 Vinarija Vrh. Vse pravice pridržane.`
- Disclaimer (povinné):
  `Ta spletna stran je demonstracijski primer. / This is a fictional portfolio project.`

---

## Bilingvalita

- Výchozí: Slovinština (`sl`)
- Přepínač: `SL / EN` v navigaci, preference do `localStorage`
- Překlady jako TypeScript objekt v `src/lib/translations.ts`
  (stejný pattern jako u čajovny, ne i18n knihovna)
- Přeložit vše: navigace, texty, katalog vín, degustace, formulář, mapa popis, footer
- Jména vín **nepřekládat** (vlastní jména zůstanou stejná v obou jazycích)

---

## Astro Content Collections — katalog vín

Toto je klíčová ukázka Astro funkce. Každé víno je YAML soubor:

```yaml
# src/content/wines/vrh-belo.yaml
name: "Vrh Belo"
type: "bela"          # bela | rdeca | rose | peneca | sladka
grape: "Rebula"
vintage: 2022
description_sl: "Svež, mineralen, s priokusom citrusov in zelenih jabolk."
description_en: "Fresh, mineral, with hints of citrus and green apple."
food_sl: "Morski sadeži, lahke testenine, kozji sir"
food_en: "Seafood, light pasta, goat cheese"
featured: true
```

Schema v `src/content/config.ts` s Zod validací.
Stránka katalogu generuje karty přes `getCollection('wines')`.

---

## Adresářová struktura

```
vinarija_vrh/
├── src/
│   ├── content/
│   │   ├── config.ts           # Content Collections schema
│   │   └── wines/
│   │       ├── vrh-belo.yaml
│   │       ├── vrh-rdece.yaml
│   │       └── ... (8 vín)
│   ├── components/
│   │   ├── Nav.astro
│   │   ├── Hero.astro
│   │   ├── Stats.astro
│   │   ├── About.astro
│   │   ├── WineCatalog.astro   # server-rendered grid
│   │   ├── WineFilter.astro    # client island pro filtraci
│   │   ├── WineCard.astro
│   │   ├── Vineyard.astro
│   │   ├── Tastings.astro
│   │   ├── Awards.astro
│   │   ├── Contact.astro
│   │   ├── Map.astro           # wrapper pro dynamický Leaflet import
│   │   └── Footer.astro
│   ├── layouts/
│   │   └── Base.astro          # HTML shell, fonty, metadata, OG tagy
│   ├── pages/
│   │   └── index.astro         # hlavní stránka
│   ├── lib/
│   │   └── translations.ts     # SL + EN překlady
│   └── styles/
│       └── global.css          # Tailwind direktivy + custom CSS variables
├── public/
│   └── images/
│       └── IMAGES.md
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
└── package.json
```

---

## Sloty pro obrázky (`public/images/`)

Vytvoř `IMAGES.md` se seznamem. Web musí fungovat bez obrázků.

| Soubor | Obsah | Doporučený poměr |
|---|---|---|
| `hero-bg.jpg` | Vinice, západ slunce, dramatická obloha | 16:9, min 1920px |
| `about-vineyard.jpg` | Řady vinic nebo pohled na krajinu Brdy | 4:5 |
| `about-cellar.jpg` | Vinný sklep, sudy nebo detail lahví | 4:3 (menší překrývající) |
| `vineyard-wide.jpg` | Fullwidth záběr vinic | 21:9 nebo 16:9 |
| `gallery-1 až 12.jpg` | Mix: vinice, sklep, lahve, degustace, krajina | různé |
| `tasting-1.jpg` | Degustace, skleničky, stůl | 3:2 |
| `og-image.jpg` | Pro Open Graph sdílení | 1200×630 px |

---

## Konfigurace Astro pro GitHub Pages

```js
// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://daasadr.github.io',
  base: '/vinarija-vrh',          // název GitHub repo
  output: 'static',
  integrations: [tailwind()],
});
```

GitHub Pages: Settings → Pages → Branch: `main` → folder: `/dist`

Nebo použít GitHub Action `withastro/action` pro automatický deploy při každém push.

---

## Instalace závislostí

```bash
cd d:\Projekty\vinarija_vrh
npm create astro@latest . -- --template minimal --typescript strict --no-git
npx astro add tailwind
npm install leaflet @types/leaflet
```

---

## Performance (poučení z předchozích projektů)

- **Obrázky komprimovat** před přidáním: max 1920px, JPEG kvalita 82 %
  (PowerShell + System.Drawing skript je připraven z kovárna projektu)
- Astro `<Image>` komponent pro automatickou optimalizaci při build
- `<link rel="preload">` na hero-bg.jpg v Base.astro
- `<link rel="preconnect">` na CDN (fonts, leaflet, cartodb)
- Open Graph meta tagy v Base.astro
- `theme-color`: `#5c1a1a` (wine barva pro mobilní prohlížeč)

---

## Bezpečnost

Statický web, žádný backend, stejná situace jako předchozí projekty.
Formulář degustace je demo — simulace odeslání bez skutečného endpointu.

---

## Git & nasazení

1. `git init && git add . && git commit -m "Initial commit"`
2. Vytvořit prázdné repo na GitHubu: `daasadr/vinarija-vrh`
3. `git remote add origin https://github.com/daasadr/vinarija-vrh.git`
4. `git push -u origin main`
5. GitHub Pages: Settings → Pages → Branch: `main` → folder: `/dist`
6. Nebo přidat GitHub Action pro automatický build + deploy

---

## Série ukázkových webů

| # | Web | Repo | Tech stack | Status |
|---|---|---|---|---|
| 1 | Kovinarsko atelje Breznik | `kovinarsko-web` | Vanilla HTML/CSS/JS | ✅ Hotovo |
| 2 | Čajna hiša Dolina | `cajna-hisa` | Next.js 14 + TypeScript + CSS Modules | 🔜 Plánováno |
| 3 | Vinarija Vrh | `vinarija-vrh` | Astro 4 + Tailwind CSS | 📋 Toto zadání |
