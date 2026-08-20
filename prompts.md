# Промты для fashion-галереи PAFFO

Все промты сгенерированы через `test-graphics.py themed fashion <промпт>`
(категория `fashion`) — AI-генерация picsum.dev.

Номера `Fashion Image #N` — это ID генераций на picsum.dev (порядок генерации).
Базовые промты найдены в истории сессии генерации (12.08.2026), расширенные
версии с суффиксами качества — скопированы с picsum.dev.

## Соответствие файлам

Все опубликованные изображения: **формат `.webp`, разрешение 512×512, соотношение сторон 1:1 (квадрат)**.
На сайте квадратные файлы кроятся через CSS `aspect-ratio` + `object-fit:cover` под вьюшку секции.

Вьюшки: hero = 4/5 · коллекции = 3/4 · lookbook (rail) = 2/3 · товары = 4/5 · процесс/ателье = 4/3

| Файл | ID на picsum.dev | Формат | Разрешение | Соотношение файла | Вьюшка на сайте | Базовый промт |
|---|---|---|---|---|---|---|
| `img/hero.webp` | #1074 | webp | 512×512 | 1:1 | hero 4/5 | elegant wool overcoat on model, studio, fashion editorial |
| `img/collections/winter-elegance.webp` | #1075 | webp | 512×512 | 1:1 | коллекции 3/4 | woman in winter wool coat, luxury fashion editorial |
| `img/collections/urban-luxe.webp` | #1076 | webp | 512×512 | 1:1 | коллекции 3/4 · lookbook 2/3 | man in dark tailored overcoat, city street, luxury |
| `img/collections/evening-opulence.webp` | #1077 | webp | 512×512 | 1:1 | коллекции 3/4 · lookbook 2/3 | evening velvet gown, luxury opulence fashion |
| `img/products/cashmere-scarf.webp` | #1078 | webp | 512×512 | 1:1 | товары 4/5 · lookbook 2/3 | cashmere scarf draped detail, luxury accessory |
| `img/products/wool-coat.webp` | #1079 | webp | 512×512 | 1:1 | товары 4/5 · lookbook 2/3 | wool coat fabric detail, herringbone texture |
| `img/products/leather-gloves.webp` | #1080 | webp | 512×512 | 1:1 | товары 4/5 | luxury leather gloves, detail shot |
| `img/products/silk-belt.webp` | #1081 | webp | 512×512 | 1:1 | товары 4/5 | silk belt detail, luxury accessory |
| `img/craftsmanship/atelier.webp` | #1082 | webp | 512×512 | 1:1 | процесс 4/3 | tailor atelier, hands sewing garment, craftsmanship |
| `img/lookbook/look-01.webp` | #1083 | webp | 512×512 | 1:1 | lookbook 2/3 | fashion editorial, model in coat, studio light |

## Где используется каждый файл и какие соотношения нужны

Контейнер сайта: `--maxw: 1320px`. Картинки кроятся через CSS `aspect-ratio` + `object-fit:cover`,
поэтому файл должен быть **не уже** целевого размера вьюшки (лучше с запасом ×2 для retina).

### 1. Места на сайте (вьюшки)

| Место | Секция | Файлы | Вьюшка (aspect-ratio) | Размер на десктопе | Целевой размер файла (мин) |
|---|---|---|---|---|---|
| Hero | `#top` (hero-grid 1.05fr/0.95fr) | `hero.webp` | **4/5** (портрет) | ~627×784 | **1200×1500** |
| Коллекции | `#collections` (grid3) | `winter-elegance`, `urban-luxe`, `evening-opulence` | **3/4** (портрет) | ~424×565 | **1024×1365** |
| Lookbook | `#lookbook` (rail, 5 карточек) | `look-01`, `urban-luxe`, `evening-opulence`, `wool-coat`, `cashmere-scarf` | **2/3** (портрет) | ~251×377 | **1024×1536** |
| Товары | `#shelf` (grid4) | `wool-coat`, `cashmere-scarf`, `leather-gloves`, `silk-belt` | **4/5** (портрет) | ~312×390 | **1024×1280** |
| Процесс/ателье | `#process` (split 1fr/1fr) | `atelier` | **4/3** (альбомная) | ~610×457 | **1600×1200** |

### 2. Файлы с двойным использованием (важно для генерации)

Четыре файла показываются сразу в двух местах с **разными** вьюшками. При `object-fit:cover`
один файл не может идеально лечь в обе формы без кропа:

| Файл | Используется в | Вьюшки | Компромисс |
|---|---|---|---|
| `img/collections/urban-luxe.webp` | Коллекции «Городской люкс» + Lookbook №02 | 3/4 и 2/3 | Генерировать 2/3 (1024×1536) → в коллекциях кроп по бокам; **лучше: отдельный образ для Lookbook №02** |
| `img/collections/evening-opulence.webp` | Коллекции «Вечерняя роскошь» + Lookbook №03 | 3/4 и 2/3 | То же → отдельный образ для Lookbook №03 |
| `img/products/wool-coat.webp` | Товары «Пальто» + Lookbook №04 | 4/5 и 2/3 | То же → отдельный образ для Lookbook №04 |
| `img/products/cashmere-scarf.webp` | Товары «Шарф» + Lookbook №05 | 4/5 и 2/3 | То же → отдельный образ для Lookbook №05 |

**Рекомендация для генерации**: чтобы всё было корректно без кропов —
- генерировать **10 файлов по месту**: hero 4/5, коллекции 3/4, товары 4/5, ателье 4/3;
- добавить **4 новых файла под Lookbook №02–05** (2/3, 1024×1536) — образы, отличные от коллекционных/товарных кадров;
- итого 14 изображений, каждое в своей форме.

### 3. Итоговые целевые параметры (для внешней модели)

| Форма | Соотношение | Целевой размер | Сколько файлов |
|---|---|---|---|
| Hero | 4/5 | 1200×1500 | 1 |
| Коллекция | 3/4 | 1024×1365 | 3 |
| Товар | 4/5 | 1024×1280 | 4 |
| Ателье | 4/3 | 1600×1200 | 1 |
| Lookbook (новые) | 2/3 | 1024×1536 | 4 (№02–05) + текущий №01 = 5 |

Формат: `.webp`, quality 80–85. Текущие файлы: 512×512 (1:1), размеры на сайте подтянуты через `width`/`height` атрибуты в HTML.

### Отдельно (не AI-генерация)

| Файл | Формат | Разрешение | Соотношение | Описание |
|---|---|---|---|---|
| `img/og-image.jpg` | jpg | 1200×630 | ~1.9:1 | Заглушка Pillow (фон `#1A1917`, текст «PAFFO») — не AI-фото |

## Полные промты (расширенные, с picsum.dev)

### hero — Fashion Image #1074
```
elegant wool overcoat on model, studio, fashion editorial, bright and airy, pastel tones, dreamy aesthetic
```

### collections/winter-elegance — Fashion Image #1075
```
woman in winter wool coat, luxury fashion editorial, highly detailed, 8k, professional photography, sharp focus
```

### collections/urban-luxe — Fashion Image #1076
```
man in dark tailored overcoat, city street, luxury, minimalist composition, clean background, elegant
```

### collections/evening-opulence — Fashion Image #1077
```
evening velvet gown, luxury opulence fashion, ultra realistic, crisp details, studio quality
```

### products/cashmere-scarf — Fashion Image #1078
```
cashmere scarf draped detail, luxury accessory, moody lighting, high contrast, fine art photography
```

### products/wool-coat — Fashion Image #1079
```
wool coat fabric detail, herringbone texture, highly detailed, 8k, professional photography, sharp focus
```

### products/leather-gloves — Fashion Image #1080
```
luxury leather gloves, detail shot, minimalist composition, clean background, elegant
```

### products/silk-belt — Fashion Image #1081
```
silk belt detail, luxury accessory, golden hour lighting, warm tones, atmospheric
```

### craftsmanship/atelier — Fashion Image #1082
```
tailor atelier, hands sewing garment, craftsmanship, highly detailed, 8k, professional photography, sharp focus
```

### lookbook/look-01 — Fashion Image #1083
```
fashion editorial, model in coat, studio light, soft natural light, shallow depth of field, bokeh
```