---
bookCollapseSection: true
weight: 1
title: MediaQueries
description:
---

## MediaQueries

Давайте поговорим о рецептах. Я поддерживаю один сайт с кулинарными рецептами. И на нём я в первый раз решал интересную и полезную задачу. И так. Представим, что ты пользователь, который ищет условный рецепт на ужин. Например "рецепт драников по-могилёвски". 

### Пошаговый usercase для сайта рецептов

1. Вбить в гугл поисковый запрос.
2. Найти или выбрать в выдаче сайт с подходящим, привлекательным рецептом.
3. Распечатать его на принтере

В процессе обсуждения, усложнения или упрощения поведения пользователя мы можем прийти к тому, что страница с рецептом в браузере может очень существенно отличаться от желаемой странице распечатанной на листе А4.   
1. Различия могут быть в фоне страницы, розовенький на сайте и белый на листе. Хотя бы из-за экономии чернил принтера. 
2. Различия могут быть в яркости, толщине, высоте и типе шрифта. Знамениты шрифты с засечками и без.
3. Различия могут быть в величине или вообще наличия красивых фотографий в распечатке. Привлекать внимание рецепт должен, но нужны ли пользователю фотографии сырой картошки или даже готовых драников на бумаге?
4. Отступы, дата, автор, название сайта, категории рецептов - практический каждый блок и элемент сайта нуждается в проверке. 

## media print

Надеюсь теперь убеждать в том, что принт-версия страницы важна, нужна и уникальна никого не надо.

Для добавления особенных стилей на сайт мы можем воспользоваться специальным правилом добавления:

```CSS
@media print {
    p { 
        font-family: Georgia, serif;
        font-size: 1.6rem;
    }
    
    .title { 
        font-family: Georgia, serif; 
         font-size: 2.8rem; 
    }
    img[class="hidden"]{
        display: none;
    }
}
```

Или сделать полностью отдельный файл, правда это скорее The Old Ways:

```HTML
<!--The Old Ways-->
<link rel="stylesheet" href="print.css" type="text/css" media="print" />
```


1. https://www.mediaevent.de/css/pagedmedia.html
2. https://medium.com/%D0%BE-email-%D0%BC%D0%B0%D1%80%D0%BA%D0%B5%D1%82%D0%B8%D0%BD%D0%B3%D0%B5-%D0%B8%D0%B7-%D0%BF%D0%B5%D1%80%D0%B2%D1%8B%D1%85-%D1%83%D1%81%D1%82/%D0%B8%D1%81%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-media-queries-%D0%B2-%D0%B2%D1%91%D1%80%D1%81%D1%82%D0%BA%D0%B5-email-%D0%BF%D0%B8%D1%81%D0%B5%D0%BC-%D0%B7%D0%B0-%D0%B8-%D0%BF%D1%80%D0%BE%D1%82%D0%B8%D0%B2-4eed57a6d715
3. https://www.smashingmagazine.com/2018/12/generic-css-mobile-first/
4. https://benfrain.com/create-print-styles-using-css3-media-queries/
5. https://sympli.io/blog/a-quick-guide-to-css-for-printable-webpages/
6. https://blog.kulturbanause.de/2014/08/responsive-webdesign-und-mobile-first/
7. https://www.mightyminnow.com/2013/11/what-is-mobile-first-css-and-why-does-it-rock/
8. https://w3schoolsrus.github.io/csstryit/tryresponsive_breakpoints.html


