# Руководство по работе с CSS и позиционированием в проекте Blayden

## Оглавление
1. [Проблема: Видео в модальном окне](#1-видео-в-модальном-окне)
2. [Проблема: Размер контролов видео](#2-размер-контролов-видео)
3. [Проблема: Next.js Dev Indicator](#3-nextjs-dev-indicator)
4. [Проблема: z-index и наложение элементов](#4-z-index-и-наложение-элементов)
5. [Проблема: Верхний отступ на десктопе](#5-верхний-отступ-на-десктопе-критично)

---

## 1. Видео в модальном окне

### Проблема
Нужно было добавить видео в портфолио модальное окно с чередованием: фото1 → видео1 → фото2 → видео2...

### Решение
1. **Добавить поле `videoFolder` в `data/portfolios.json`** для каждого элемента портфолио
2. **Обновить тип в `contexts/PortfolioContext.tsx`** добавив `videoFolder?: string`
3. **В `PortfolioPopup.tsx`** использовать условный рендеринг:
```tsx
{selectedPortfolio?.videoFolder && (
  <div className="project__block">
    {[1, 2, 3, 4].map((num) => (
      <React.Fragment key={num}>
        <div className="col-12 col-md-6 col-xl-3">
          <img src={`/video/${selectedPortfolio.videoFolder}/${num}.jpg`} />
        </div>
        <div className="col-12 col-md-6 col-xl-3">
          <video controls preload="metadata" playsInline>
            <source src={`/video/${selectedPortfolio.videoFolder}/${num}.mp4`} />
          </video>
        </div>
      </React.Fragment>
    ))}
  </div>
)}
```

### Важно
- Использовать обычный `<img>` вместо Next.js `<Image>` для файлов из папки `/video/`
- Next.js Image optimization не работает с нестандартными путями

---

## 2. Размер контролов видео

### Проблема
Контролы видео слишком маленькие на мобильных устройствах.

### Попытки решения
- Попытка стилизовать через CSS: `video::-webkit-media-controls { font-size: 30px; }`
- Все CSS подходы **НЕ РАБОТАЮТ** из-за Shadow DOM ограничений

### Решение
**Оставить нативные контролы как есть** - они уже оптимизированы браузерами для мобильных устройств.

---

## 3. Next.js Dev Indicator

### Проблема
Появляется кнопка `#next-logo` в правом нижнем углу во время разработки.

### Решение
1. **В `next.config.ts`** добавить:
```typescript
const nextConfig: NextConfig = {
  devIndicators: false,
};
```

2. **В `main.css`** добавить для полной уверенности:
```css
button#next-logo,
#devtools-indicator,
[data-nextjs-toast],
[data-nextjs-dev-tools-button] {
  display: none !important;
}
```

3. **Перезапустить сервер** - изменения в `next.config.ts` требуют перезапуска

---

## 4. z-index и наложение элементов

### Проблема
Декоративные цветочки (`.intro__background`) появлялись поверх карусели (`.main__media`) при скролле.

### Понимание структуры
```
<section class="main home">
  <div class="main__intro">
    <div class="intro__background"> <!-- цветочки --> </div>
    <div class="headline">
      <div class="hero-photo-container"> <!-- фото --> </div>
    </div>
  </div>
  <div class="main__media"> <!-- карусель --> </div>
</section>
```

### Правильная иерархия z-index
```
hero-photo (z-index: 1) < цветочки (z-index: 5) < карусель (z-index: 20)
```

### Решение
1. **Фото**: `.hero-photo-container { z-index: 1; }`
2. **Цветочки**: `.intro__background { z-index: 5; }`
3. **Карусель**: `.main__media { z-index: 20; position: relative; }`

### Важно
- z-index работает только на **позиционированных элементах** (`position: relative/absolute/fixed`)
- **Нужно добавить z-index к родительскому контейнеру** `.main__media`, а не только к `.portfolio-stack`
- z-index применяется в **контексте стека** - элементы сравниваются только внутри одного родителя

---

## 5. Верхний отступ на десктопе (‼️ КРИТИЧНО)

### Проблема
Нужно добавить верхний отступ к фото на десктопе, но обычные методы не работают.

### Почему `margin-top` НЕ РАБОТАЕТ

#### Структура позиционирования на десктопе (min-width: 1200px):
```css
.main__intro.intro-95-desktop {
  height: 95vh; /* фиксированная высота */
}

.headline.headline-95-desktop {
  position: absolute;
  bottom: 0;
  left: 0;
  margin-top: 0; /* принудительно 0 */
}
```

**Проблема**: `.headline` абсолютно позиционирован с `bottom: 0`, поэтому:
- `margin-top` игнорируется
- `padding-top` на `.main__intro` не работает из-за фиксированной высоты `95vh`
- Изменение `height: auto` ломает всю вёрстку

### ❌ Неработающие подходы
1. `margin-top` на `.headline` - игнорируется из-за `position: absolute; bottom: 0`
2. `margin-top` на `.hero-photo-container` - не работает внутри flex-контейнера с absolute родителем
3. `padding-top` на `.main__intro` - упирается в `height: 95vh`
4. `height: auto` на `.main__intro` - ломает всю страницу, фото пропадает

### ✅ Правильное решение

**Использовать `padding-top` на самом `.hero-photo-container`** в медиа-запросе для десктопа:

```css
@media only screen and (min-width: 768px) {
  .hero-photo-container {
    display: flex;
    justify-content: center;
    align-items: flex-start; /* важно: flex-start, не center */
    height: 70vh;
    max-height: 800px;
    padding-top: 16rem; /* отступ сверху */
  }

  .hero-photo {
    width: auto;
    height: 100%; /* НЕ calc(100% - 16rem) */
    max-width: 100%;
    object-fit: contain;
  }
}
```

### Ключевые моменты
1. **`align-items: flex-start`** - выравнивает фото по верху контейнера
2. **`padding-top`** создаёт отступ внутри flex-контейнера
3. **`height: 100%`** на фото - НЕ вычитать padding, иначе фото уменьшится
4. **Не трогать** `height: 95vh` на `.main__intro` - это сломает вёрстку

### Также работает (дополнительно):
```css
@media only screen and (min-width: 1200px) {
  .main__intro.intro-95-desktop {
    padding-top: 10rem !important; /* добавляет общий отступ сверху */
  }
}
```
Это добавляет дополнительное пространство сверху всего intro-блока.

---

## Общие правила работы с CSS в этом проекте

### 1. Абсолютное позиционирование
- На десктопе (1200px+) `.headline` позиционирован абсолютно с `bottom: 0`
- **Нельзя использовать `margin-top`** для абсолютно позиционированных элементов с `bottom`
- Используйте `padding`, `transform` или меняйте `bottom` значение

### 2. Flexbox внутри absolute
- Если flex-контейнер внутри `position: absolute`, margin-collapse не работает
- Используйте `padding` на flex-контейнере, не `margin` на flex-элементах
- `align-items: flex-start` + `padding-top` = контролируемый отступ

### 3. Фиксированная высота контейнеров
- `.main__intro.intro-95-desktop` имеет `height: 95vh`
- Увеличение `padding-top` может привести к обрезке контента
- Лучше работать с отступами внутри вложенных элементов

### 4. z-index контекст
- Всегда добавляйте `position: relative` к элементам с z-index
- z-index сравнивается только внутри одного stacking context
- Для корректной иерархии устанавливайте z-index на **родительских контейнерах**

### 5. Next.js специфика
- Используйте `<Image>` только для стандартных путей (`/img/`, `/public/`)
- Для динамических путей (`/video/`) используйте обычный `<img>`
- Изменения в `next.config.ts` требуют перезапуска сервера

### 6. !important
- Используйте `!important` когда нужно переопределить стили из библиотек
- В данном проекте требуется для переопределения базовых стилей на десктопе

---

## Чеклист перед добавлением отступов

- [ ] Проверить, не является ли элемент абсолютно позиционированным
- [ ] Проверить, нет ли у родителя фиксированной высоты (`height: XXvh`)
- [ ] Проверить flex-контекст (`align-items`, `justify-content`)
- [ ] Использовать DevTools для просмотра computed styles
- [ ] Проверить, не переопределяется ли стиль в других медиа-запросах
- [ ] Помнить про `!important` для критичных переопределений

---

## Полезные инструменты отладки

1. **Chrome DevTools** → Elements → Computed
   - Показывает какие стили реально применились
   - Показывает перечёркнутые стили (переопределённые)

2. **Chrome DevTools** → Elements → Layout
   - Показывает box model (margin, padding, border)
   - Помогает визуализировать отступы

3. **Поиск конфликтов**:
```bash
# Найти все упоминания класса
grep -n "\.hero-photo-container" public/css/main.css
```

---

Дата создания: 2026-01-29
Автор: AI-сессия с Claude Code
