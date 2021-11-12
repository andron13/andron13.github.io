---
bookCollapseSection: true  
weight: 1  
title: MediaQueries для различных экранов  
description: Раньше, во времена царя Гороха все сайты в 99% случаях смотрелись на мониторах с разрешением 640 на 480. Потом появились 800 на 600. Техника не стояла на месте и крутые, дорогие мониторы смогли отображать сайты с разрешением 1024×768.
---

## Фиксированный, резиновый, адаптивный дизайны, Meta-Viewport

Прежде чем продолжить тему с медиазапросами давайте обсудим типы диазайнов и их развитие.

### Фиксированный дизайн

Раньше, во времена царя Гороха все сайты в 99% слуачаях смотрелись на мониторах с разрешением 640 на 480. Потом появились 800 на 600. Техника не стояла на месте и крутые, дорогие мониторы смогли отображать сайты с разрешением 1024×768.

Первая величина ширина экрана, вторая высота. На этих мониторах практически все сайты имели фиксированную ширину.

Такой дизайн ещё может называться статическим.

### Резиновый дизайн, fluid design

Примерно с появлением мониторов с разрешением 1600×1200 люди стали добавлять резину. То есть указывали максимальную и минимальную ширину для блока. На широких мониторах было не всегда удобно читать статьи. Часто минимальная ширина была около 1000px и максимальная около 1400px. Сайт был отцентрирован и его было более-менее приятно читать на всех мониторах.

## Адаптивный дизайн, adaptive

Сегодня есть телевизоры и мониторы с разрешением 5120×2160, смартфоны с 480×800 и утюги с двумя строчками на экране. И сегодня ни фиксированный, ни резиновый сайт не могут решить задачи поставленные бизнесом перед веб-дизайном.

Современный вебдизайн делит все приборы пользователей на условные сегменты:

- очень маленькие мобильники
- обычные мобильники
- смартфоны в landscape модусе
- планшеты
- планшеты в landscape
- десктопные версии
- версии для гигантских мониторов

Понятно, что сегментировать можно и попиксельно, но как бы то ни было, под каждый выбранный сегмент рисуется прототип.

По полученным макетам вебмастер верстает каждый вариант отдельно. В этом случае мы говорим про адаптивный дизайн и про медиа запросы.

## Адаптивная резина, отзывчивый дизайн, responsive design

У бизнеса часто денег всего на три варианта: мобильники, планшеты, мониторы. И на помощь приходит резина. В рамках одного диапазона мы можем включить привычную резину. И я бы сказал, что это достаточно популярный способ современной вёрстки.

Такой дизайн называют ещё отзывчивым дизайном, по-английски responsive design

## Media Queries - медиазапросы в каскадных стилях

Медиазапросы помогают нам прописать дополнительные или собственные правила для различных приборов.

Мы познакомились с медиазапросами в [статье про печать](https://andron13.de/school/frontend/css/11-css-media-queries-print-version/). Давайте продолжим. 

### Брекпойнты - grid-breakpoints

Все приборы можно условно поделить по ширине. Популярный фреймворк бутстрап использует следующие размеры:

```css
/*xs: 0,*/
/*sm: 576px,*/
/*md: 768px,*/
/*lg: 992px,*/
/*xl: 1200px,*/
/*xxl: 1400px*/

/* X-Small devices (portrait phones, less than 576px)*/
/*No media query for `xs` since this is the default in Bootstrap*/

 /*Small devices (landscape phones, 576px and up)*/
@media (min-width: 576px) { }

/*Medium devices (tablets, 768px and up)*/
@media (min-width: 768px) { }

/*Large devices (desktops, 992px and up)*/
@media (min-width: 992px) { }

 /*X-Large devices (large desktops, 1200px and up)*/
@media (min-width: 1200px) { }

 /*XX-Large devices (larger desktops, 1400px and up)*/
@media (min-width: 1400px) { }
```

В CSS мы можем добавить их в наши медиазапросы.

```CSS
@media screen and (min-width: 576px) {
    .box {
        background: beige;
    }
}

@media screen and (min-width: 768px) {
    .box {
        background: green;
    }
}

@media screen and (min-width: 992px) {
    .box {
        background: blue;
    }
}

@media screen and (min-width: 1200px) {
    .box {
        background: red;
    }
}

@media screen and (min-width: 1400px) {
    .box {
        background: gold;
    }
}
```

Вот так поочерёдно мы можем обратиться к различным приборам с экранами с различной шириной. Надеюсь понятно, что если у вас между дизайном для смартфона и планшета разницы особой нет, то некоторые брекпойнты можно и пропустить.

## Минимальные параметры 

На мой взгляд мы должны minimum рассмотреть все мобильники с шириной до 768px. И для них медиазапросов писать не надо. Это должны быть стили по умолчанию. Но если вы будете дробить сильнее, то вот вам запрос для мобильников от 414px в портретном модусе:

```CSS
@media only screen
and (min-device-width : 414px)
and (max-device-width : 736px)
and (orientation : portrait) { /* Ваш CSS код */ }
```

Отдельно мы должны позаботиться о планшетах. Пример ipad в формате - landscape:

```CSS
@media only screen
and (min-device-width : 768px)
and (max-device-width : 1024px)
and (orientation : landscape) {/* Ваш CSS код */}
```

И добавить настольные и переносные компьютеры:

```CSS
@media (min-width: 1200px) {/* Ваш CSS код */}
```

Это не единственное мнение. Пример альтернативной точки зрения:

```CSS
@media (min-width:320px)  { /* smartphones, iPhone, portrait 480x320 phones */ }
@media (min-width:481px)  { /* portrait e-readers (Nook/Kindle), smaller tablets @ 600 or @ 640 wide. */ }
@media (min-width:641px)  { /* portrait tablets, portrait iPad, landscape e-readers, landscape 800x480 or 854x480 phones */ }
@media (min-width:961px)  { /* tablet, landscape iPad, lo-res laptops ands desktops */ }
@media (min-width:1025px) { /* big landscape tablets, laptops, and desktops */ }
@media (min-width:1281px) { /* hi-res laptops and desktops */ }
```

## mobile first and mobile friendly

Что многим не всегда понятно, так это то, что основной CSS мы должны описывать для самых маленьких экранов. Для мобильников. Именно это и называется **mobile first**. Очень часто правило **mobile first** путают с правилом **mobile-friendly**. Моё мнение — это не одно и тоже.

Важно помнить, что Google с 2019 года ранжирует выше сайты, у которых есть мобильная вёрстка - **mobile-friendly**. Говорят, что Google ранжирует ещё выше сайты, у которых реализован принцип **mobile first**.

Сам Google даёт рекомендации для вебмастеров здесь:

- [Рекомендации по индексированию с приоритетом мобильного контента](https://developers.google.com/search/mobile-sites/mobile-first-indexing?hl=ru)
- a здесь можно проверить [ресурс на **
  mobile-friendly**](https://search.google.com/test/mobile-friendly)

### Экранное считывающее устройство - Screen reader

Существуют не только принтеры или экраны, наши сайты могут быть и проговорены. Специальные устройства помогают слабовидящим услышать наши сайты.

Эта тема много сложнее, чем я без особого опыта смог бы её осветить. Потому я даю ссылку на общие дополнительные медиа правила.

- [Формальный синтаксис и правила в медиа запросах](https://developer.mozilla.org/ru/docs/Web/CSS/@media)

## Meta-Viewport

Не забывайте про метатег Viewport, который указывает приборам как именно читать CSS. Что бы браузер понял, что вы сделали версии для мобильников, ему надо об этом сказать. Иначе он исходит из того, что у вас старый не оптимизированный сайт, который он тогда сам пытается на свой вкус показать пользователю.

```html

<meta name="viewport"
      content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
```

Эти строчки предлагает добавить Emmet к нашим HTML-страницам. Подробнее о метатеге можно прочитать [здесь](https://developer.mozilla.org/ru/docs/Glossary/Viewport).

## Дополнительные ссылки

1. [Создание комплексных медиавыражений](https://developer.mozilla.org/ru/docs/Web/CSS/Media_Queries/Using_media_queries)
2. [9 отличий адаптивного дизайна от «резинового» в GIF-картинках](https://ain.ua/2014/11/14/9-otlichij-adaptivnogo-dizajna-ot-rezinovogo-v-gif-kartinkax/)
3. [Адаптивно-отзывчивый: разбираемся в терминологии](https://frontender.info/adaptive-vs-responsive-terminology/)
4. https://kulturbanause.de/blog/responsive-webdesign-und-mobile-first/
5. https://www.mightyminnow.com/2013/11/what-is-mobile-first-css-and-why-does-it-rock/
6. https://www.smashingmagazine.com/2018/12/generic-css-mobile-first/
7. https://habr.com/ru/post/243247/
8. https://itchief.ru/lessons/html-and-css/meta-viewport-how-it-works
9. [Viewport, Рекомендованный набор метатегов](https://developer.mozilla.org/ru/docs/Glossary/Viewport)
10. https://css-tricks.com/how-to-develop-and-test-a-mobile-first-design-in-2021/
11. https://html5book.ru/css3-mediazaprosy/