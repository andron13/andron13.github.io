---
bookCollapseSection: true
weight: 1
title: CSS FONTS
description:
---

Красивый почерк ценился во все времена и у всех народов. 

HTML не выбивается из опыта накопленного человечеством. Красивый шрифт на странице пожалуй самая важная часть сайта. Только надо понять что такое красивый шрифт.

- Читаемость
- Масштабируемость
- Возможность "играть" шрифтами
- Доступность в кириллице и латинице
- Наличие на всех системах

## Системные шрифты

Добавить шрифты можно несколькими вариантами. Существуют стандартные шрифты, которые называются Web Safe Fonts. 

### Web Safe Fonts

- Arial (sans-serif)
- Verdana (sans-serif)
- Helvetica (sans-serif)
- Tahoma (sans-serif)
- Trebuchet MS (sans-serif)
- Times New Roman (serif)
- Georgia (serif)
- Garamond (serif)
- Courier New (monospace)
- Brush Script MT (cursive)

Web Safe Fonts с большой долей вероятности уе предустановлены на операционной системе и используются в браузере вашего пользователя.

Добавляется такой шрифт в css вот так:

```css
body {
    font-family: "Times New Roman", Times, serif;
}
```

## Google fonts

Порой хочется немного большего, чем стандартные шрифты. В интернете есть сервисы, которые предлагают шрифты пользователям. Один из них **Google fonts**. Понравившийся шрифт, например [Montserrat](https://fonts.google.com/specimen/Montserrat) можно установить указав в css:

```css
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100&display=swap');

* {
    font-family: 'Montserrat', sans-serif;
}
```

Строку импорта в css можно заменить строкой ссылки в HTML

```HTML
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100&display=swap" rel="stylesheet"></head>
```

## Читаемость шрифтов

На читаемость шрифтов могут влиять межстрочный интервал и расстояние между буквами. Пример параметров в css:

```css
h1 {
    letter-spacing: 3px;
}

p {
    line-height: 200%;
}
```

## Дополнительные ссылки

1. https://mozilla.design/firefox/typography/
2. https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Fonts/OpenType_fonts_guide
3. https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Fonts/Variable_Fonts_Guide
4. https://www.htmldog.com/guides/css/beginner/text/
5. https://medium.com/high-technologies-center/%D0%B7%D0%B0%D0%B3%D1%80%D1%83%D0%B6%D0%B0%D0%B5%D0%BC-%D0%B2%D0%B5%D0%B1-%D1%88%D1%80%D0%B8%D1%84%D1%82%D1%8B-%D0%B0%D1%81%D0%B8%D0%BD%D1%85%D1%80%D0%BE%D0%BD%D0%BD%D0%BE-3e83dd29bb7e
6. https://htmlacademy.ru/blog/boost/tutorial/fonts-loading

## Дополнительные ссылки на шрифты

1. https://fonts.google.com/
2. https://www.fontspace.com/
3. https://www.1001freefonts.com/
4. https://www.fontsquirrel.com/
5. https://fontstruct.com/
6. https://www.dafont.com/de/
7. https://www.urbanfonts.com/
8. http://www.abstractfonts.com/
9. https://www.fontspring.com/free
10. https://www.fontshop.com/free-fonts
11. https://www.fontfreak.com/



