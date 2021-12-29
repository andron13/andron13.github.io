<<<<<<< HEAD
---
draft: true,
---

## This

Это самая сложная тема. И сложна она тем, что поведение this в JavaScript отличается от поведения this в других языках.

{{< figure src="/img/res/js/34-this/this.png" title="this и react" alt="this и react" >}}

Даже знаменитая библиотека React придумала хуки, что бы программисты не терялись в this. Проблема ни капельки не преувеличена.

## this в классе

````JavaScript
class Article {
    title;
    announce;
    text;
    imagePath;
    imageWidth;
    imageHeight;
    constructor(title, text, imagePath) {
        this.title = title;
        this.text = text;
        this.imagePath = imagePath;
    }
    setImageSize(x, y) {
        this.imageWidth = x;
        this.imageHeight = y;
    }
    info = () => {
        console.log(this)
    }
}

let bestArticle = new Article("Афиша Кино на октябрь", "Огромная афиша на 20 фильмов", "/photos/city/345.jpg");

bestArticle.setImageSize(200, 200);

console.log(bestArticle.imageHeight);
myTimer.info();
````

В конструкторе класса мы ссылаемся на поля создаваемого объекта с помощью this и говорим, что передаваемые параметры инициализируют поля.

При создании экземпляра объекта мы передали название статьи, её текст и ссылку на фотографию.

Вызвав метод объекта мы передали размеры фотографии для статьи.

Ключевое слово this ведёт себя в данном случае так, как это ожидают программисты родственных си-подобных языков. То есть, если мы в шаблоне класса хотим сослаться на свойства или методы будущего уникального объекта, то нам надо this.

Запуск метода myTimer.info() выведет нам информацию об объекте.

Метод объекта отличается от функции тем, что он может быть вызван без создания экземпляра объекта.

## 
=======
# This

Очень сбивает поведение зис. Очень непонятно почему оно такое и совсем непонятно почему это нельзя исправить. 

Это спорное утверждение, но пожалуй это определённо та тема по которой проходит линия разделения студентов от программистов. На собеседовании мидлов и даже сеньёров незазорно спросить про THIS и порой ответ можно и не получить. 

>>>>>>> 586e532b (init: test)


https://www.youtube.com/watch?v=gvicrj31JOM
https://youtu.be/qg3EO56r76c?t=9193
https://habr.com/ru/company/ruvds/blog/419371/
https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648275#overview
https://metanit.com/web/javascript/4.10.php
https://habr.com/ru/post/464163/

https://urfu-2016.github.io/javascript-slides/05-this/#/8
https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/this

## Дополнительные ссылки

1. Подробнее о классах => https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Classes
2. [Understanding Scope and Context in JavaScript](http://ryanmorr.com/understanding-scope-and-context-in-javascript/)
