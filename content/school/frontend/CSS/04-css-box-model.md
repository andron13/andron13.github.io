---
bookCollapseSection: true
weight: 1
title: CSS box model
description: 
---

## CSS box model - блочная или блоковая модель. 

CSS box model описывает свойства влияющие на HTML - элемент и его размеры. 

Согласно этой модели, бокс состоит из:
**content** - содержимое блока.
**padding** - внутренние отступы
**border** - граница, рамка, бордюр элемента
**margin** - внешние отступы

Мы стартуем с index.html

```html
<p class="box-one">One</p>
<p class="box-two">Two</p>
```

И css

```css
* {
    padding: 0;
    margin: 0;
    font-size: 40px;
}

.box-one {
    background-color: #eb5757;
    border: 0 solid #9b51e0;
}

.box-two {
    background-color: #2d9cdb;
    border: 0 solid #27ae60;
}
``` 

Всё в CSS это бокс. Боксы содержат боксы. Бокс боди содержит 2 бокса параграфа. В нашем случае Каждый отдельный элемент
в хтмл это для css бокс.

1. Добавим в box-one
```css  
   padding: 20px;
```
2. Добавим третий хтмл параграф со свойствами
```css
    .box-three {
    background-color: #48c167;
    border: 0 solid #e3e014;
    }
```
3. Откроем консоль разработчика - F12 в хроме
4. Element -> Styles или Computed
5. Изменим бордер на 30px
6. Добавим в box-one:
```html
margin: 60px;
```
7.  Осматривая внутренности бокса мы можем увидеть, что размеры внутреннего бокса, где написано слово **One** у нас обладают длиной и шириной. В зависимости от экрана может быть 200x47. Постараемся повлиять на эти размеры. Добавим вбокс длину и ширину:
```html
height: 100px;
width: 100px;
```
8. Давайте скопируем все строчки из первого бокса во второй. Кроме первой.
```html
   padding: 20px;
   margin: 60px;
   height: 100px;
   width: 100px;
   border: 30px solid #9b51e0;
```
Должно получиться вот так:
```css
.box-two {
    background-color: #2d9cdb;
    border: 0 solid #27ae60;
    padding: 20px;
    height: 100px;
    width: 100px;
    border: 30px solid #9b51e0;
}
```
9. Margin схлопывается(CSS Margin Collapse) между двумя элементами
10. Поигравшись с различными размерами мы можем увидеть, что расстояние между боксами всегда большее одного из элементов, но ни разу не сумма двух маржинов.
11. С помощью записи в css  **box-sizing: border-box;** мы можем сказать рассматривать как бокс всё что находится внутри бордера. И от этих размеров будут отниматься размеры бордюра и паддинга.

