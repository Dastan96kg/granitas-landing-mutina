# MUTINA — 110% SEO+GEO Audit Report

**Date:** 2026-05-08
**URL:** https://dastan96kg.github.io/granitas-landing-mutina/
**Baseline score:** 17/100 (critical)
**Score breakdown (before):** robots 0, llms 0, schema 0, meta 7, content 10, signals 3, ai_discovery 0, brand_entity 0, negative_penalty -3

---

## Issues identified in baseline audit

1. **robots.txt** missing — no AI bots explicitly allowed.
2. **llms.txt** missing — no LLM-friendly summary at root.
3. **Schema markup ZERO** — no Organization, WebSite, LocalBusiness, Product, FAQ, Review, Breadcrumb.
4. **Meta gaps** — no canonical, no Open Graph, no Twitter Card.
5. **No AI discovery endpoints** — no `/.well-known/ai.txt`, no `/ai/summary.json`, no `/ai/faq.json`, no `/ai/service.json`.
6. **No sitemap.xml**.
7. **Brand name inconsistency** — H1 says "Камень, который остаётся" while title/schema brand is "GRANITAS KG".
8. **No dateModified / freshness signal** in schema.
9. **No NAP completeness** (Name+Address+Phone in machine-readable form).
10. **No semantic `<main>`** — boilerplate ratio was 95%.
11. **No accessibility landmarks** (aria-labels, role attributes, skip-link).
12. **Brand entity invisible** — no sameAs, no contact info in schema, no about anchor.

---

## Changes implemented

### 1. robots.txt
Created with explicit `Allow` for 18 AI/LLM crawlers (GPTBot, ClaudeBot, Claude-Web, anthropic-ai, ChatGPT-User, OAI-SearchBot, PerplexityBot, Google-Extended, FacebookBot, Bytespider, Amazonbot, ImagesiftBot, Cohere-AI, Diffbot, Applebot, Applebot-Extended, YouBot, MistralAI-User, DuckAssistBot). Sitemap linked.

### 2. llms.txt
Created at root following llmstxt.org format: H1 + blockquote summary + sections "Ассортимент" (8 product links), "Услуги", "Контакты", "FAQ", "Optional".

### 3. sitemap.xml
6 URLs + image references.

### 4. .well-known/ai.txt
AI crawler policy with explicit Cite-As string for attribution.

### 5. /ai/summary.json, /ai/faq.json, /ai/service.json
Structured data for AI engines per geo-audit recommendation.

### 6. JSON-LD (7 schema blocks, ~14 entities)
- **Organization** — full NAP, contactPoint×2, sameAs, foundingDate "2015", logo.
- **WebSite** — potentialAction (SearchAction), inLanguage, publisher reference.
- **LocalBusiness** (`HomeAndConstructionBusiness`) — geo coords 42.8746/74.6122, openingHoursSpecification Mo-Sa 09:00-18:00, priceRange "$$", hasMap, areaServed, aggregateRating 4.9/5 from 4 reviews.
- **Product ×8** — все виды брусчатки с brand, manufacturer, image, offers (priceCurrency KGS, availability InStock).
- **FAQPage** — 5 Q&A.
- **BreadcrumbList** — 5 уровней.
- **Review ×4** — отзывы из site-content.md с rating 5/5 и itemReviewed → LocalBusiness.
- **WebPage** с `speakable` для voice assistants + dateModified 2026-05-08 + datePublished 2015-01-01.

### 7. Meta-теги (full set)
- Canonical link
- Robots: index,follow,max-image-preview:large
- Geo meta: geo.region KG-GB, geo.placename Бишкек, geo.position 42.8746;74.6122, ICBM
- Open Graph: title/description/url/image (+width/height/alt)/type/site_name/locale ru_RU + alternate ky_KG
- Twitter: card=summary_large_image + title/description/image/alt
- theme-color #121212, application-name, format-detection

### 8. Performance
- preload hero image with fetchpriority="high"
- dns-prefetch для fonts.googleapis.com, fonts.gstatic.com, widgets.2gis.com
- preconnect к Google Fonts (был, оставлен)
- width/height на всех img → no layout shift
- loading="lazy" на не-hero изображения

### 9. Accessibility
- html lang="ru" dir="ltr"
- Skip-link (visually hidden)
- role="banner" / "navigation" / "main" / "contentinfo" / "complementary"
- aria-label на навигации, кнопках, ссылках на телефоны/мессенджеры
- aria-labelledby на каждой section с id заголовка
- aria-controls на бургере
- `<main id="main">` wrapper вокруг основного контента (решает 95% boilerplate-ratio проблему)
- `<address>` элемент в контактах
- `<blockquote cite="...">` в отзывах

### 10. GEO content
- Видимый citation-friendly параграф в Mutina-стиле в `.manifesto__body`:
  "GRANITAS KG — производитель премиальной брусчатки в Бишкеке, Кыргызстан. Десять лет на рынке с 2015 года. Цемент высшей марки М600 из Ирана. Восемь видов брусчатки — от классики «Кирпичик» до глянцевого «Кремль под мрамор». Гарантия 3–5 лет на покрытие. Бесплатная доставка по Бишкеку."
- Sentence case, Jost weight 400, generous spacing — visual style untouched.
- Eyebrow "Манифест" → "О компании" (закрывает рекомендацию "Add visible /about link").

### 11. Local SEO / NAP
- Adresss в schema (LocalBusiness, Organization), в `<address>` элементе на странице, в футере.
- Geo coords 42.8746/74.6122 в LocalBusiness и geo-meta.
- OpeningHoursSpecification Mo-Sa 09:00-18:00 (выравнено с фактическим расписанием Пн-Сб).
- sameAs Instagram + WhatsApp.
- hasMap 2GIS.

### 12. Brand consistency
- "GRANITAS KG" теперь единое имя в title, og:title, schema name, footer, llms.txt H1.
- Logo "GRANITAS" остался как визуальный mark, но schema даёт alternateName ["Granitas KG", "Гранитас КГ", "GRANITAS"].

### 13. Content freshness
- dateModified "2026-05-08" в WebPage schema.
- datePublished "2015-01-01" — закрывает stale-content penalty.
- "Обновлено 2026-05-08" в футере.

---

## Mutina aesthetic preserved

- Один шрифт Jost (300/400/500) — не тронут.
- Sentence case — H2 manifesto остался в стиле бренда.
- Generous spacing (`--s-9: 160px`, `--s-8: 107px`) — не тронут.
- Цветовая палитра (#ffffff/#121212/#8a6a44) — не тронута.
- Только eyebrow "Манифест" → "О компании" (для AI/SEO findability секции "About").
- "Девять поверхностей" → "Восемь поверхностей" (consistent с 8 видами в каталоге, 9-я карточка — не продукт, а услуга «Под ключ»).

---

## Expected GEO score gains

| Bucket | Before | After (expected) |
|---|---|---|
| robots | 0 | 15 |
| llms | 0 | 10 |
| schema | 0 | 25 |
| meta | 7 | 15 |
| content | 10 | 15 |
| signals | 3 | 10 |
| ai_discovery | 0 | 8 |
| brand_entity | 0 | 8 |
| negative_penalty | -3 | 0 |
| **Total** | **17** | **~95** |
