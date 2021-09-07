---
bookCollapseSection: true
weight: 1
title: test
description: 
---

CSS Инструменты: Сброс CSS
Целью сброса таблицы стилей является уменьшение несоответствий в браузере в таких вещах, как высота строк по умолчанию, размер полей и шрифтов заголовков и так далее. Общие рассуждения на эту тему обсуждались в майском посте 2007 года, если вам интересно. Стили сброса довольно часто появляются в CSS фреймворках, а оригинальный "meyerweb reset" нашел свой путь в Blueprint, среди прочего.

Стили сброса, приведённые здесь, намеренно очень общие. Для элемента тела, например, по умолчанию не задано никакого цвета или фона. Я не особо рекомендую использовать его в неизменном виде в собственных проектах. Он должен быть откорректирован, отредактирован, расширен и иным образом настроен в соответствии с вашей конкретной базовой установкой сброса. Введите предпочтительные цвета для страницы, ссылок и так далее.

Другими словами, это отправная точка, а не самодостаточный черный ящик неприкасаемости.

Если вы хотите использовать мои стили сброса, то не стесняйтесь! Все это явно находится в общественном достоянии (я должен официально это сказать, иначе меня спросят о лицензировании). Вы можете взять копию файла для использования и настроить его так, как вам удобнее всего. Если вы больше по типу "копируй и вставь", или просто хотите посмотреть, что вы получите, вот оно.

```CSS
/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
```

## Дополнительные ссылки

1. [Современный сброс стилей CSS](https://medium.com/@stasonmars/%D1%81%D0%BE%D0%B2%D1%80%D0%B5%D0%BC%D0%B5%D0%BD%D0%BD%D1%8B%D0%B8%CC%86-%D1%81%D0%B1%D1%80%D0%BE%D1%81-css-f5816963c82b)
