# TASK.md — INTERLANG Website Project Specification

## 1. Project Overview

### Company Details
- **Company:** Prekladateľská agentúra INTERLANG
- **Address:** Švabinského 13, 851 01 Bratislava - Petržalka, Slovakia
- **GPS:** 48.118414°N, 17.099286°E
- **Phone:** +421 2 38 100 330
- **Hotline:** +421 905 923 729
- **Email:** office@interlang.sk
- **Existing website:** www.interlang.sk

### Services
- Úradné (súdne) preklady s pečiatkou — prekladatelia zapísaní na Ministerstve spravodlivosti SR
- Komerčné preklady — ekonomické, právne, medicínske, technické, obchodné dokumenty
- Expresné preklady — dodanie do 24 hodín bez príplatku
- Tlmočenie — úradné, obchodné, konferenčné
- Pomoc s apostiláciou dokumentov
- Lokalizácia webstránok a marketingových materiálov
- Doručenie po celej Európe

### Supported Languages (16)
Angličtina, Nemčina, Francúzština, Španielčina, Holandčina, Taliančina, Ruština, Ukrajinčina, Čeština, Maďarčina, Poľština, Arabčina, Bulharčina, Srbčina, Chorvátčina, Rumunčina

### USPs (Unique Selling Points)
- Štátom autorizovaní prekladatelia zapísaní na Ministerstve spravodlivosti SR
- Dodanie do 24 hodín bez príplatku
- Bezplatné parkovanie pre klientov
- Individuálna cenová ponuka (ceny na mieru podľa objednávky)
- Doručenie po celej Európe poštou
- Transparentný prístup, žiadne skryté poplatky

### Project Goal
Vytvoriť statickú webovú stránku (HTML + CSS + JS) hostovanú na GitHub Pages (interlang.github.io), ktorá bude slúžiť ako **SEO satelit pre hlavnú stránku interlang.sk**. Primárny účel je dominovať vo výsledkoch vyhľadávania Google pre kľúčové slová súvisiace s úradnými prekladmi v Bratislave a presmerovať návštevníkov na kontaktovanie agentúry INTERLANG.

Stránka musí byť **primárne optimalizovaná pre smartfóny** (smartphone-first), pretože väčšina lokálnych vyhľadávaní prebieha na mobilných zariadeniach. Každá stránka musí umožniť okamžitý kontakt jedným kliknutím (click-to-call, click-to-email).

---

## 2. SEO Keyword Research

### Tier 1 — Primárne kľúčové slová (najvyšší objem vyhľadávania)

| Kľúčové slovo | Cieľová stránka | Poznámka |
|---|---|---|
| úradný preklad bratislava | uradne-preklady.html | Hlavné kľúčové slovo |
| úradné preklady bratislava | uradne-preklady.html | Plurálna varianta |
| súdny preklad bratislava | uradne-preklady.html | Synonymum pre úradný preklad |
| prekladateľská agentúra bratislava | index.html | Brand + lokácia |
| preklad dokumentov bratislava | preklad-dokumentov.html | Všeobecný preklad |

### Tier 2 — Kľúčové slová podľa typu dokumentu

| Kľúčové slovo | Cieľová stránka | Poznámka |
|---|---|---|
| preklad rodného listu | preklad-rodneho-listu.html | Bežný dokument pre emigráciu, sobáš |
| preklad rodného listu bratislava | preklad-rodneho-listu.html | Lokálna varianta |
| preklad zmluvy | preklad-zmluvy.html | Kúpne, pracovné, obchodné zmluvy |
| preklad zmluvy bratislava | preklad-zmluvy.html | Lokálna varianta |
| preklad vysvedčenia | preklad-vysvedcenia.html | Školy, univerzity, kvalifikácie |
| preklad diplomu | preklad-vysvedcenia.html | Synonymum |
| apostila bratislava | apostila.html | Haagsky dohovor, legalizácia |
| preklad s pečiatkou | uradne-preklady.html | Hovorový výraz pre úradný preklad |
| overený preklad | preklad-dokumentov.html | Alternatívny výraz |

### Tier 3 — Kľúčové slová podľa typu služby

| Kľúčové slovo | Cieľová stránka | Poznámka |
|---|---|---|
| expresný preklad bratislava | expresny-preklad.html | Urgentné preklady do 24h |
| úradný preklad cena | kontakt.html | Presmerovanie na individuálnu ponuku |
| tlmočenie bratislava | tlmocenie.html | Úradné a konferenčné tlmočenie |

### Tier 4 — Long-tail kľúčové slová

| Kľúčové slovo | Cieľová stránka | Poznámka |
|---|---|---|
| úradný preklad z angličtiny | preklady-z-anglictiny.html | Najžiadanejší jazykový pár |
| úradný preklad do angličtiny | preklady-z-anglictiny.html | Opačný smer |
| úradný preklad z nemčiny | preklady-z-nemciny.html | Druhý najžiadanejší pár |
| úradný preklad do nemčiny | preklady-z-nemciny.html | Opačný smer |
| preklad z ukrajinčiny | preklady-z-ukrajinciny.html | Vysoký dopyt — emigrácia z UA |
| preklad do ukrajinčiny | preklady-z-ukrajinciny.html | Opačný smer |
| preklad z ruštiny | preklady-z-rustiny.html | Dopyt — emigrácia, obchod s RU |
| preklad do ruštiny | preklady-z-rustiny.html | Opačný smer |
| preklad z maďarčiny | preklady-z-madarciny.html | Maďarská menšina na Slovensku |
| preklad do maďarčiny | preklady-z-madarciny.html | Opačný smer |
| preklad z francúzštiny | preklady-z-francuzstiny.html | EU obchod, emigrácia |
| preklad do francúzštiny | preklady-z-francuzstiny.html | Opačný smer |
| preklad z taliančiny | preklady-z-talianciny.html | EU obchod, turizmus |
| preklad do taliančiny | preklady-z-talianciny.html | Opačný smer |
| preklad zo španielčiny | preklady-zo-spanielciny.html | EU obchod, emigrácia |
| preklad do španielčiny | preklady-zo-spanielciny.html | Opačný smer |
| preklad z češtiny | preklady-z-cestiny.html | Susedná krajina, časté právne dokumenty |
| preklad do češtiny | preklady-z-cestiny.html | Opačný smer |
| preklad z poľštiny | preklady-z-polstiny.html | Susedná krajina, obchodné vzťahy |
| preklad do poľštiny | preklady-z-polstiny.html | Opačný smer |
| kde nájdem úradný preklad v bratislave | kontakt.html | Lokálny intent, hlasové vyhľadávanie |
| preklad výpisu z registra trestov | uradne-preklady.html | Špecifický dokument |
| preklad plnomocenstva | uradne-preklady.html | Špecifický dokument |
| preklad sobášneho listu | uradne-preklady.html | Špecifický dokument |
| preklad úmrtného listu | uradne-preklady.html | Špecifický dokument |

---

## 3. Competitor Analysis

### Hlavní konkurenti

| Konkurent | URL | Silné stránky | Slabiny |
|---|---|---|---|
| UradnyPreklad.com | uradnypreklad.com | Presná doménová zhoda s kľúčovým slovom, adresár prekladateľov | Generický obsah, chýba lokálny fokus |
| UradnePreklady.com | uradnepreklady.com | Expresná služba 24h, silný brand | Menej špecializovaných podstránok |
| Lexika.sk | lexika.sk | Veľká agentúra, silná doménová autorita, detailné podstránky pre typy dokumentov | Celoslovenský záber, nie len BA |
| Specta.sk | specta.sk | Certifikované preklady, viacjazyčný web | Zameraná viac na firemných klientov |
| TOP-Preklady.sk | top-preklady.sk | Edukačný obsah ("čo je úradný preklad"), dobrá FAQ | Slabší lokálny SEO |
| Presto-preklady.sk | presto-preklady.sk | Rýchle dodanie, jednoduché objednávanie | Menej detailných podstránok |
| KvalitnyPreklad.sk | kvalitnypreklad.sk | Multi-city prítomnosť, 24h služba | Rozptýlený lokálny fokus |
| PrekladyBezHranic.sk | prekladybezhranic.sk | Dve kancelárie v BA, viacjazyčné | Slabší on-page SEO |

### Stratégia na prekonanie konkurencie
1. **Viac dedikovaných podstránok** — samostatná stránka pre každý typ dokumentu a jazykový pár (12 stránok vs. typických 5-6 u konkurencie)
2. **FAQ sekcie s FAQPage schema** na každej stránke — rich snippets vo výsledkoch Google
3. **Silná interná prelinkovacia štruktúra** — každá stránka odkazuje na 5-10 súvisiacich stránok
4. **Kompletný Schema.org markup** — LocalBusiness, Service, BreadcrumbList, FAQPage na každej stránke
5. **Excelentné Core Web Vitals** — statický web bez frameworkov, systémové fonty, žiadne obrázky v hero sekciách
6. **E-E-A-T signály** — dôraz na registráciu na Ministerstve spravodlivosti, odbornosť prekladateľov

---

## 4. Site Architecture

### Page Inventory (20 stránok)

| # | Súbor | Cieľové kľúčové slová | H1 |
|---|---|---|---|
| 1 | index.html | prekladateľská agentúra bratislava, preklad dokumentov bratislava | Prekladateľská agentúra INTERLANG Bratislava |
| 2 | uradne-preklady.html | úradný preklad bratislava, súdny preklad bratislava | Úradné preklady Bratislava — Súdne preklady s pečiatkou |
| 3 | preklad-dokumentov.html | preklad dokumentov bratislava, overený preklad, preklad s pečiatkou | Preklad dokumentov Bratislava — Overené preklady s pečiatkou |
| 4 | preklad-rodneho-listu.html | preklad rodného listu, preklad rodného listu bratislava | Preklad rodného listu — Úradný preklad do 24 hodín |
| 5 | preklad-zmluvy.html | preklad zmluvy, preklad zmluvy bratislava | Preklad zmluvy — Úradné preklady zmlúv Bratislava |
| 6 | preklad-vysvedcenia.html | preklad vysvedčenia, preklad diplomu | Preklad vysvedčenia a diplomu — Úradné preklady Bratislava |
| 7 | apostila.html | apostila bratislava | Apostila Bratislava — Apostilácia dokumentov a preklady |
| 8 | expresny-preklad.html | expresný preklad bratislava | Expresný preklad Bratislava — Úradné preklady do 24 hodín |
| 9 | tlmocenie.html | tlmočenie bratislava | Tlmočenie Bratislava — Úradné a konferenčné tlmočenie |
| 10 | preklady-z-anglictiny.html | úradný preklad z angličtiny / do angličtiny | Úradný preklad z angličtiny a do angličtiny Bratislava |
| 11 | preklady-z-nemciny.html | úradný preklad z nemčiny / do nemčiny | Úradný preklad z nemčiny a do nemčiny Bratislava |
| 12 | preklady-z-ukrajinciny.html | preklad z ukrajinčiny / do ukrajinčiny | Preklad z ukrajinčiny a do ukrajinčiny Bratislava |
| 13 | preklady-z-rustiny.html | preklad z ruštiny / do ruštiny | Preklad z ruštiny a do ruštiny Bratislava |
| 14 | preklady-z-madarciny.html | preklad z maďarčiny / do maďarčiny | Preklad z maďarčiny a do maďarčiny Bratislava |
| 15 | preklady-z-francuzstiny.html | preklad z francúzštiny / do francúzštiny | Preklad z francúzštiny a do francúzštiny Bratislava |
| 16 | preklady-z-talianciny.html | preklad z taliančiny / do taliančiny | Preklad z taliančiny a do taliančiny Bratislava |
| 17 | preklady-zo-spanielciny.html | preklad zo španielčiny / do španielčiny | Preklad zo španielčiny a do španielčiny Bratislava |
| 18 | preklady-z-cestiny.html | preklad z češtiny / do češtiny | Preklad z češtiny a do češtiny Bratislava |
| 19 | preklady-z-polstiny.html | preklad z poľštiny / do poľštiny | Preklad z poľštiny a do poľštiny Bratislava |
| 20 | kontakt.html | kde nájdem úradný preklad v bratislave | Kontakt — Kde nájdete úradný preklad v Bratislave |

### SEO Meta tagy

| # | Súbor | Title tag | Meta description |
|---|---|---|---|
| 1 | index.html | Prekladateľská agentúra INTERLANG Bratislava | Úradné a komerčné preklady v Bratislave. Štátom autorizovaní prekladatelia, do 24 hodín. Kontaktujte nás: +421 905 923 729. |
| 2 | uradne-preklady.html | Úradné preklady Bratislava — Súdny preklad \| INTERLANG | Úradné (súdne) preklady s pečiatkou v Bratislave. Prekladatelia zapísaní na Ministerstve spravodlivosti SR. Do 24 hodín. |
| 3 | preklad-dokumentov.html | Preklad dokumentov Bratislava \| INTERLANG | Overené preklady dokumentov s pečiatkou. Odborné preklady — právo, medicína, technika, ekonomika. Kontaktujte nás. |
| 4 | preklad-rodneho-listu.html | Preklad rodného listu — Úradný preklad \| INTERLANG | Úradný preklad rodného listu v Bratislave do 24 hodín. S pečiatkou prekladateľa. Kontaktujte nás pre cenovú ponuku. |
| 5 | preklad-zmluvy.html | Preklad zmluvy — Úradné preklady zmlúv \| INTERLANG | Úradný preklad zmlúv v Bratislave. Kúpne, pracovné, obchodné zmluvy. Autorizovaní prekladatelia. Rýchle dodanie. |
| 6 | preklad-vysvedcenia.html | Preklad vysvedčenia a diplomu \| INTERLANG | Úradný preklad vysvedčení a diplomov v Bratislave. Pre štúdium v zahraničí, uznávanie kvalifikácií. Do 24 hodín. |
| 7 | apostila.html | Apostila Bratislava — Apostilácia dokumentov \| INTERLANG | Apostila a preklad dokumentov v Bratislave. Pomôžeme s apostiláciou a úradným prekladom. Kontaktujte nás. |
| 8 | expresny-preklad.html | Expresný preklad Bratislava — Do 24 hodín \| INTERLANG | Expresné úradné preklady v Bratislave. Dodanie do 24 hodín bez príplatku. Rýchly a spoľahlivý preklad dokumentov. |
| 9 | tlmocenie.html | Tlmočenie Bratislava — Úradné tlmočenie \| INTERLANG | Úradné a konferenčné tlmočenie v Bratislave. Súdne, notárske a obchodné tlmočenie. 16+ jazykov. |
| 10 | preklady-z-anglictiny.html | Úradný preklad z angličtiny Bratislava \| INTERLANG | Úradné preklady z angličtiny a do angličtiny v Bratislave. Autorizovaní prekladatelia. Rýchle dodanie. |
| 11 | preklady-z-nemciny.html | Úradný preklad z nemčiny Bratislava \| INTERLANG | Úradné preklady z nemčiny a do nemčiny v Bratislave. Odborní prekladatelia so skúsenosťami. |
| 12 | preklady-z-ukrajinciny.html | Preklad z ukrajinčiny Bratislava \| INTERLANG | Úradné preklady z ukrajinčiny a do ukrajinčiny v Bratislave. Autorizovaní prekladatelia. Do 24 hodín. |
| 13 | preklady-z-rustiny.html | Preklad z ruštiny Bratislava \| INTERLANG | Úradné preklady z ruštiny a do ruštiny v Bratislave. Odborní prekladatelia, rýchle dodanie. |
| 14 | preklady-z-madarciny.html | Preklad z maďarčiny Bratislava \| INTERLANG | Úradné preklady z maďarčiny a do maďarčiny v Bratislave. Autorizovaní prekladatelia. |
| 15 | preklady-z-francuzstiny.html | Preklad z francúzštiny Bratislava \| INTERLANG | Úradné preklady z francúzštiny a do francúzštiny v Bratislave. Rýchle a presné preklady. |
| 16 | preklady-z-talianciny.html | Preklad z taliančiny Bratislava \| INTERLANG | Úradné preklady z taliančiny a do taliančiny v Bratislave. Autorizovaní prekladatelia. |
| 17 | preklady-zo-spanielciny.html | Preklad zo španielčiny Bratislava \| INTERLANG | Úradné preklady zo španielčiny a do španielčiny v Bratislave. Odborní prekladatelia. |
| 18 | preklady-z-cestiny.html | Preklad z češtiny Bratislava \| INTERLANG | Úradné preklady z češtiny a do češtiny v Bratislave. Rýchle dodanie, autorizovaní prekladatelia. |
| 19 | preklady-z-polstiny.html | Preklad z poľštiny Bratislava \| INTERLANG | Úradné preklady z poľštiny a do poľštiny v Bratislave. Odborní prekladatelia so skúsenosťami. |
| 20 | kontakt.html | Kontakt \| INTERLANG — Úradné preklady Bratislava | Prekladateľská agentúra INTERLANG, Švabinského 13, Bratislava-Petržalka. Tel: +421 905 923 729. Bezplatné parkovanie. |

### File Structure

```
/
├── index.html                    (domovská stránka)
├── uradne-preklady.html          (úradné preklady)
├── preklad-dokumentov.html       (preklad dokumentov)
├── preklad-rodneho-listu.html    (rodný list)
├── preklad-zmluvy.html           (zmluvy)
├── preklad-vysvedcenia.html      (vysvedčenia a diplomy)
├── apostila.html                 (apostila)
├── expresny-preklad.html         (expresné preklady)
├── tlmocenie.html                (tlmočenie)
├── preklady-z-anglictiny.html    (preklady angličtina)
├── preklady-z-nemciny.html       (preklady nemčina)
├── preklady-z-ukrajinciny.html   (preklady ukrajinčina)
├── preklady-z-rustiny.html       (preklady ruština)
├── preklady-z-madarciny.html     (preklady maďarčina)
├── preklady-z-francuzstiny.html  (preklady francúzština)
├── preklady-z-talianciny.html    (preklady taliančina)
├── preklady-zo-spanielciny.html  (preklady španielčina)
├── preklady-z-cestiny.html       (preklady čeština)
├── preklady-z-polstiny.html      (preklady poľština)
├── kontakt.html                  (kontakt)
├── 404.html                      (chybová stránka)
├── sitemap.xml                   (mapa stránok pre Google)
├── robots.txt                    (inštrukcie pre crawlery)
├── .nojekyll                     (vypnutie Jekyll spracovania)
├── TASK.md                       (tento súbor)
├── CLAUDE.md                     (inštrukcie pre Claude Code)
├── css/
│   └── style.css                 (hlavný štýl)
├── js/
│   ├── components.js             (zdieľaný header/footer/nav)
│   └── main.js                   (lazy-load, interakcie)
└── img/
    └── og-image.jpg              (Open Graph obrázok 1200x630)
```

### Internal Linking Matrix

Každá stránka musí v tele obsahu odkazovať na súvisiace stránky:

| Stránka | Odkazy v obsahu na → |
|---|---|
| index.html | Všetkých 19 ďalších stránok (cez karty služieb, mriežku dokumentov, zoznam jazykov, FAQ odpovede) |
| uradne-preklady.html | rodný list, zmluvy, vysvedčenia, apostila, expresný, všetky jazykové stránky, kontakt |
| preklad-dokumentov.html | úradné preklady, rodný list, zmluvy, vysvedčenia, kontakt |
| preklad-rodneho-listu.html | úradné preklady, apostila, vysvedčenia, kontakt |
| preklad-zmluvy.html | úradné preklady, preklad dokumentov, kontakt |
| preklad-vysvedcenia.html | úradné preklady, apostila, rodný list, kontakt |
| apostila.html | úradné preklady, rodný list, vysvedčenia, zmluvy, kontakt |
| expresny-preklad.html | úradné preklady, kontakt |
| tlmocenie.html | úradné preklady, kontakt |
| preklady-z-anglictiny.html | úradné preklady, rodný list, zmluvy, kontakt, ostatné jazykové stránky |
| preklady-z-nemciny.html | úradné preklady, rodný list, zmluvy, kontakt, ostatné jazykové stránky |
| preklady-z-ukrajinciny.html | úradné preklady, rodný list, zmluvy, kontakt, ostatné jazykové stránky |
| preklady-z-rustiny.html | úradné preklady, rodný list, zmluvy, kontakt, ostatné jazykové stránky |
| preklady-z-madarciny.html | úradné preklady, rodný list, zmluvy, kontakt, ostatné jazykové stránky |
| preklady-z-francuzstiny.html | úradné preklady, rodný list, zmluvy, kontakt, ostatné jazykové stránky |
| preklady-z-talianciny.html | úradné preklady, rodný list, zmluvy, kontakt, ostatné jazykové stránky |
| preklady-zo-spanielciny.html | úradné preklady, rodný list, zmluvy, kontakt, ostatné jazykové stránky |
| preklady-z-cestiny.html | úradné preklady, rodný list, zmluvy, kontakt, ostatné jazykové stránky |
| preklady-z-polstiny.html | úradné preklady, rodný list, zmluvy, kontakt, ostatné jazykové stránky |
| kontakt.html | domov, úradné preklady |

---

## 5. Technical Requirements

### Hosting & Framework
- GitHub Pages (interlang.github.io)
- Čistý HTML + CSS + JS — žiadne frameworky, žiadny build proces
- Súbor `.nojekyll` na vypnutie Jekyll spracovania

### SEO — Schema.org (JSON-LD)
Každá stránka bude mať v statickom HTML (nie cez JS):

| Schema typ | Kde |
|---|---|
| LocalBusiness + ProfessionalService | Každá stránka (globálne) |
| BreadcrumbList | Každá podstránka (nie homepage) |
| FAQPage | Každá stránka so sekciou FAQ |
| Service | Stránky služieb (úradné preklady, tlmočenie, expresné, dokumenty) |
| WebSite | Iba homepage |

### SEO — Core Web Vitals ciele
- **LCP (Largest Contentful Paint):** < 2.5s — dosiahnuté systémovými fontami, žiadne hero obrázky, inline critical CSS
- **CLS (Cumulative Layout Shift):** < 0.1 — fixné rozmery pre placeholdery, min-height pre JS-injektované komponenty, žiadne web fonty
- **INP (Interaction to Next Paint):** < 200ms — minimálny JS, natívne `<details>`/`<summary>` pre FAQ

### SEO — On-page
- Unikátny H1 tag s primárnym kľúčovým slovom na každej stránke
- Meta title ≤ 60 znakov s kľúčovým slovom
- Meta description ≤ 160 znakov s CTA
- Canonical URL na každej stránke
- Open Graph meta tagy (og:title, og:description, og:url, og:image, og:locale sk_SK)
- Breadcrumb navigácia na každej podstránke
- NAP (Name, Address, Phone) konzistentne v pätičke každej stránky

### Design — Smartphone-first
- **Smartphone-first design** — nie len responsive, ale primárne navrhnuté pre mobilné zariadenia (360px základ)
- Veľké dotykové plochy pre tel: a mailto: odkazy (min. 48x48px podľa Google Material Design)
- **Click-to-call tlačidlo viditeľné na každej stránke bez scrollovania** (above the fold)
- Click-to-email prominentne zobrazený na každej stránke
- **Sticky header na mobile** s telefónnym číslom a hamburger menu
- Google Maps odkaz na mobile otvára natívnu Maps aplikáciu (`geo:` alebo `maps:` URI)
- Google Maps iframe embed iba na desktop verzii kontakt.html
- Kompaktný layout — krátke odseky, veľké nadpisy, dostatočný kontrast
- Rýchle načítanie na mobilných sieťach (3G/4G) — cieľ < 3s na 3G
- Systémové fonty (Segoe UI, system-ui, sans-serif) — žiadne web fonty
- Text-based logo (CSS/HTML)
- Farebná schéma: profesionálna modrá (#1a3a5c) + amber accent (#e8a838)
- Žiadne hero obrázky — typografický dizajn

### Components
- Header/footer/nav injektované cez `components.js` pre jednoduché udržiavanie NAP konzistencie
- `<noscript>` fallback s NAP informáciami v každej stránke
- FAQ sekcie pomocou natívnych `<details>`/`<summary>` elementov
- Google Maps iframe lazy-loaded cez IntersectionObserver (iba kontakt.html)
- Kontakt iba cez mailto: a tel: linky (žiadny formulár)

### Performance Budget
- HTML na stránku: < 25KB (nekomprimovaný)
- style.css: < 20KB
- components.js: < 5KB
- main.js: < 3KB
- Celkový download na stránku: < 50KB (pred gzip)

---

## 6. SEO Strategy

### E-E-A-T signály (Experience, Expertise, Authoritativeness, Trustworthiness)
- **Experience:** Dôraz na roky pôsobenia agentúry, počet preložených dokumentov
- **Expertise:** Registrácia prekladateľov na Ministerstve spravodlivosti SR, špecializácia (právne, medicínske, technické preklady)
- **Authoritativeness:** Štátna autorizácia, konzistentné NAP údaje naprieč celým webom
- **Trustworthiness:** Transparentné informácie, bezplatné parkovanie, individuálny prístup, kontaktné údaje na každej stránke

### FAQ Strategy
Každá služobná stránka bude mať sekciu FAQ (3-5 otázok) s FAQPage schema markup. Otázky budú formulované tak, ako ich ľudia skutočne vyhľadávajú:
- "Čo je úradný preklad?"
- "Aký je rozdiel medzi úradným a komerčným prekladom?"
- "Ako dlho trvá úradný preklad?"
- "Čo potrebujem na úradný preklad rodného listu?"
- "Kde nájdem úradný preklad v Bratislave?"
- "Je potrebná apostila pri použití dokumentu v zahraničí?"
- atď.

### Lokálne SEO
- Google Maps embed na kontaktnej stránke
- Presné GPS súradnice v Schema.org markup
- Dôraz na "Bratislava" a "Petržalka" v obsahu
- Navigačné inštrukcie (MHD, parkovanie)

---

## 7. User Decisions

- **Žiadna stránka s cenníkom** — ceny sú individuálne pre každú objednávku. CTA: "Kontaktujte nás pre cenovú ponuku"
- **Text-based CSS/HTML logo** — žiadny obrázkový súbor loga
- **Kontakt iba cez email/telefón** — žiadny kontaktný formulár, iba mailto: a tel: linky
- **Jazyk webu:** iba slovenčina
- **Hosting:** GitHub Pages (interlang.github.io)
- **Smartphone-first design** — primárne pre mobilné zariadenia, nie len responsive
- **SEO satelit pre interlang.sk** — tento web podporuje hlavnú stránku a slúži na dominovanie vo vyhľadávaní

---

## 8. Smartphone UX Requirements

### Princípy
Stránka je navrhnutá primárne pre používateľov smartfónov, ktorí hľadajú prekladateľské služby v Bratislave. Typický scenár: používateľ hľadá na Google "úradný preklad bratislava", nájde našu stránku a chce okamžite zavolať alebo napísať email.

### Povinné mobilné prvky na každej stránke
1. **Sticky header** — fixný na vrchu obrazovky, obsahuje:
   - Logo (text)
   - Telefónne číslo ako click-to-call tlačidlo (ikona telefónu + číslo)
   - Hamburger menu
2. **Hero sekcia** — hneď pod headerom:
   - H1 nadpis
   - Krátky popis (1-2 vety)
   - Dva veľké CTA tlačidlá: "Zavolajte nám" (tel:) a "Napíšte nám" (mailto:)
3. **Obsah** — kompaktný, scannovateľný:
   - Krátke odseky (max 3-4 riadky na mobile)
   - Veľké nadpisy (H2, H3) pre ľahkú navigáciu
   - Zoznamy namiesto dlhých textov
4. **FAQ** — natívne `<details>`/`<summary>` elementy (žiadny JS overhead)
5. **Footer** — plné kontaktné údaje (NAP) + mapa odkaz

### Dotykové ciele
- Všetky interaktívne prvky min. 48x48px
- Odstup medzi klikateľnými prvkami min. 8px
- Telefónne čísla a emaily vždy ako klikateľné odkazy

### Breakpoints
- **360px** — primárny dizajn (smartfóny)
- **768px** — tablety
- **1024px** — desktop
- **1440px** — veľký desktop

### Mobilná navigácia
- Hamburger menu (☰) s off-canvas panelom
- Panel obsahuje všetky stránky + telefónne číslo + email
- Zatvorenie kliknutím mimo panel alebo × tlačidlom

### Google Maps na mobile
- Na kontaktnej stránke: odkaz "Navigovať" ktorý otvára Google Maps / Apple Maps natívnu aplikáciu
- Formát: `https://maps.google.com/?q=48.118414,17.099286`
- Na desktope: iframe embed s lazy-loadingom
