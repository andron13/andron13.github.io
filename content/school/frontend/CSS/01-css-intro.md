---
bookCollapseSection: true
weight: 1
title: Введение в CSS
description: 
---

## CSS  - Cascading Style Sheets

````html
<h1 style="color:blue;">A Blue Heading</h1>
                                        <style>
                                        body {background-color: powderblue;}
h1   {color: blue;}
p {
  color: red;
  font-family: courier;
  font-size: 160%;
  border: 2px solid powderblue;
}
</style>
<link rel="stylesheet" href="styles.css">

````


CSS - каскадные таблицы стилей. 

Задача CSS привести HTML страницу в подобающий вид. Украсить, если хотите. При этом задача HTML, самое позднее с появления CSS структурировать контент. 

То есть, мы говорим о трёх составляющих у веб-страницы - HTML, CSS, контент.

Когда мы говорим о HTML - мы говорим о тегах и атрибутах.  
Когда мы говорим о контенте — мы говорим о фото-, видео-, ауди-информации и текстах. Всё, что мы хотим отобразить на вебстранице является контентом — графики роста-падения курсов акций, профиль пользователя в социальной сети, книге скачанной не совсем легально, фильме или фотоальбоме племянницы. На одном сайте может быть множество различных страниц. И для креативного расположения контента придумали CSS.

Давайте просто рассмотрим пример и пошагово посмотрим, что мы можем сделать. 

### Создаём простой html-файл, например "introduction-in-css.html"

В файл introduction-in-css.html, в body добавляем заголовок. Фотографию например [вот эту](https://andron13.de/img/res/fe-exe/html/04-media/02-berlin-01.jpg)
```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h2>Заголовок</h2>
<img src="https://andron13.de/img/res/fe-exe/html/04-media/02-berlin-01.jpg" alt="клёвое фото">

<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam assumenda culpa molestiae praesentium, suscipit unde voluptate. Assumenda aut corporis dicta, doloremque in iusto, libero nihil possimus, quaerat recusandae totam voluptates!</p>

    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam assumenda culpa molestiae praesentium, suscipit unde voluptate. Assumenda aut corporis dicta, doloremque in iusto, libero nihil possimus, quaerat recusandae totam voluptates!</p>

</body>
</html>
```

### Создаём ещё один файл "style.css"

```CSS
body{
width: 1200px;
margin:0 auto;
}

img{
width: 100%;
}

p{
border: 10px solid blue;
}
```

На одном

## Дополнительные ссылки

https://developer.mozilla.org/ru/docs/Learn/Getting_started_with_the_web/CSS_basics#%D1%80%D0%B0%D0%B7%D0%BD%D1%8B%D0%B5_%D1%82%D0%B8%D0%BF%D1%8B_%D1%81%D0%B5%D0%BB%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BE%D0%B2


<div class="box">
  CSS IS AWESOME
</div>


.box {
font-size:64px;
border:4px solid black;
padding:0px 3px;
width:223px;
}

https://css-tricks.com/css-is-awesome/
https://www.mockplus.com/blog/post/css-animation-examples
https://1stwebdesigner.com/css-effects/
