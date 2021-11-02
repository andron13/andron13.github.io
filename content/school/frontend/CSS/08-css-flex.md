---
bookCollapseSection: true
weight: 1
title: Flexible Box 
description:
---

## Флексбокс - flexbox

### Двуосная модель расположения элементов

В CSS модели раскладки Flexible Box используются двуосная модель расположения. Главная ось - **Main Axis** и ось
перпендикулярная ей - **Cross Axis**

## Пример

```HTML

<div class="wrapper">
    <div class="row">
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
    </div>
</div>
```

```CSS
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.wrapper {
    width: 1000px;
    margin: 0 auto;
}

.item {
    height: 100px;
    background-color: #333;
    border: 1px solid red;
    padding: 15px;
    color: #fff;
}
```

Получили 3 прямоугольника. Обращаемся к строке и делаем её дисплей-флекс

```CSS
.row {
    display: flex;
}
```

Добавляем в дивы контент

```HTML

<div class="item"> Item1</div>
<div class="item"> Item2</div>
<div class="item"> Item3</div>
```

В css идёт justify-content. flex-start это по умолчанию

```CSS
.row {
    display: flex;
    /*justify-content: flex-start;*/
    justify-content: flex-end;
}
```

Играемся и показываем разницу с flex-end. Добавляем в row flex-direction

```CSS
.row {
    display: flex;
    justify-content: flex-start;
    flex-direction: row-reverse;
}
```

Показываем различные возможности, которые нам даёт:

- justify-content: flex-start;
- flex-direction: row-reverse;

Потом justify-content: space-around, space-evenly,space-between.

и во wrapper тоже добавляем рамку.

```CSS
.wrapper {
    width: 1000px;
    margin: 0 auto;
    border: 1px solid green;
}
```

## Вертикальное выравнивание

Удаляем высоту элемента из ITEM. И добавляем в хтмл в него несколько элементов.

```CSS
.item {
    background-color: #333;
    border: 1px solid red;
    padding: 15px;
    color: #fff;
}
```

```HTML

<div class="item">
    <p>Item 1</p>
    <p>Item 1</p>
    <p>Item 1</p>
</div>
<div class="item">
    <p>Item 2</p>
    <p>Item 2</p>
    <p>Item 2</p>
    <p>Item 2</p>
    <p>Item 2</p>
</div>
<div class="item">Item 3</div>
<div class="item">Item 3</div>
<div class="item">Item 3</div>
```

### align-items: flex-start

В .row добавляем align-items: flex-start.

```CSS
.row {
    display: flex;
    justify-content: space-between;
    /*   flex-direction: row-reverse; */
    border: 1px solid green;
    align-items: flex-start;
}
```

Меняем align-items: flex-start на flex-end, и center;

Делаем отдельное выравнивание для последнего элемента:

```CSS
.item:last-child {
    align-self: flex-end;
}
```

Показать для строки .row display: inline-flex;

```CSS
.row {
    display: inline-flex;
    /*  justify-content: space-between;
     flex-direction: row-reverse; */
    align-items: center;
}
```

display: flex; Занимает всю ширину родителя. Элементы row inline-flex занимают ровно столько места, сколько им надо.

```CSS
.row {
    display: inline-flex;
    /*  justify-content: space-between;
     flex-direction: row-reverse; */
    align-items: center;
    background-color: beige;
}
```

### Margin-left: auto;

```CSS
.item:last-child {
    align-self: flex-end;
    margin-left: auto;
}
```

Не забудьте вернуть row в display: flex. Поведение блока.

## Ширина эелементов

Если в item добавить width: 300px, то наши элементы займут по 300px. Но мы ж учим flexbox. И вполне вероятно, что он нам может помочь красиво расставить наши блоки с приемлимой шириной.

### flex-basis: 300px;

```CSS
.item {
    background-color: #333;
    border: 1px solid red;
    padding: 15px;
    color: #fff;
    flex-basis: 300px;
}
```

flex-basis указывает базовый размер по оси.

```CSS
.item {
    margin: 0 15px;
    flex-basis: calc(100% / 3 - 30px);
}
```

align-items: stretch или отсутствие алигн итемс в row растянет по высоте фон итемов.

Даже если мы сейчас склонируем третий элемент, допустим ещё 3 раза. То сам флексбокс постарается подобрать ширину элемента автоматически. Мы указали базовую ширину, а не абсолютную. Это шаги к адаптивности вёрстки.

Мы можем склонировать его 10 раз и посмотреть что будет.

### Перенос элементов flex-wrap

Добавим в Item margin: 10px 15px; а в row flex-wrap: wrap;

Делаем блоки адаптивными Меняем ширину контейнера на 70%. А ширину Itema на 300px и меняем ширину браузера. Показываем
перенос.

## Жадность flex-grow

Заканчиваем предыдущие дорожки и делаем новый див

```HTML

<div class="boxes">
    <div class="box box-1" id="box-1"> Item 1</div>
    <div class="box box-2" id="box-2"> Item 2</div>
    <div class="box box-3" id="box-3"> Item 3</div>
</div>
```

```css
.boxes {
    display: flex;
    margin-top: 100px;
    background-color: #ccc;
    flex-wrap: wrap;
}

.box {
    color: #fff;
    border: 1px solid red;
    height: 200px;
    flex-basis: 250px;
    font-size: 30px;
}

.box-1 {
    background-color: blue;
    flex-grow: 0;
}

.box-2 {
    background-color: rgb(255, 0, 0);
    flex-grow: 0;
}

.box-3 {
    background-color: #333;
    flex-grow: 0;
}
```

## Order

https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Ordering_Flex_Items

```CSS
.box {
    display: flex;
    flex-direction: row;
}

.box :nth-child(1) {
    order: 2;
}

.box :nth-child(2) {
    order: 3;
}

.box :nth-child(3) {
    order: 1;
}

.box :nth-child(4) {
    order: 3;
}

.box :nth-child(5) {
    order: 1;
}
```

```HTML

<div class="box">
    <div><a href="#">1</a></div>
    <div><a href="#">2</a></div>
    <div><a href="#">3</a></div>
    <div><a href="#">4</a></div>
    <div><a href="#">5</a></div>
</div>
```   

## Коэффициент сжатия: flex-shrink

```CSS
.box {
    flex-shrink: 1;
}

.box1 {
    flex-shrink: 2;
}
```

## Дополнительные ссылки

1. Основы позиционирования элементов
    - https://webref.ru/course/position - 2h
    - https://webref.ru/course/block-model - 2h
    - https://webref.ru/course/block-inline - 1h
2. Flexbox
    - https://webref.ru/layout/flexbox-tutorial - 2h
    - https://habr.com/ru/post/467049/ - 1h
3. https://caniuse.com/flexbox
4. https://www.w3.org/TR/css-flexbox-1/
5. [Изучение флексбоксов посредством игры](https://flexboxfroggy.com/#ru)
6. [Шпаргалка по Flexbox](https://habr.com/ru/post/313938/)
7. [CSS: Flexbox](https://www.evernote.com/shard/s368/client/snv?noteGuid=4346cdea-9386-4738-bfff-f9faafc05e94&noteKey=fb6ec76312f7111b&sn=https%3A%2F%2Fwww.evernote.com%2Fshard%2Fs368%2Fsh%2F4346cdea-9386-4738-bfff-f9faafc05e94%2Ffb6ec76312f7111b&title=CSS%253A%2BFlexbox%2B%2528htmlacademy.ru%2529)
8. [Видео лекция Position. Floats. Flex. Semantic. CSS3](https://www.youtube.com/watch?v=iSQcOjxttNg&list=PLe--kalBDwji8WXKVjhON39X4v_Uj6T_R&index=3)

    