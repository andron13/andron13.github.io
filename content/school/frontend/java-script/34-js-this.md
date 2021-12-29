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

````js
// https://youtu.be/1RWOi3G91ds
// 1. 
const objOne = {
    a: 10,
    baseFunct: function () {
        console.log(this);
    },
    arrowFunct: () => {
        console.log(this);
    }
}

// objOne.baseFunct();
// objOne.arrowFunct();

//  2. 

const objectTwo = new function () {
    this.a = 10;
    this.baseFunct = function () {
        console.log("base", this);
    }
    this.arrowFunct = () => {
        console.log("arrow", this);
    }

    console.log("object", this);

    setTimeout(function () {
        console.log("timeout", this);
    }, 300)

    setTimeout(() => {
        console.log("timeout", this);
    }, 300)
}

objectTwo.baseFunct();
objectTwo.arrowFunct();

````



https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648275#overview
https://metanit.com/web/javascript/4.10.php

## Дополнительные ссылки

1. [this MDN](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/this)
2. [What to do when “this” loses context](https://www.freecodecamp.org/news/what-to-do-when-this-loses-context-f09664af076f/)
3. [Ключевое слово this в JavaScript для начинающих](https://habr.com/ru/company/ruvds/blog/419371/)
4. [Ключевое слово this в JavaScript](https://habr.com/ru/post/464163/)
5. [The JavaScript this Keyword](https://www.w3schools.com/js/js_this.asp)
6. [this и ScopeChain в EcmaScript](https://habr.com/ru/post/468943/)
7. [JavaScript Function Call](https://www.w3schools.com/js/js_function_call.asp)
8. [JavaScript Function Apply](https://www.w3schools.com/js/js_function_apply.asp)
9. [this. Контекст исполнения. Жигалов Сергей](https://urfu-2016.github.io/javascript-slides/05-this/)
10. [Что делать, когда “this” теряет ссылку на контекст](https://habr.com/ru/post/421959/)
11. [Подробнее о классах](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Classes)
12. [Understanding Scope and Context in JavaScript](http://ryanmorr.com/understanding-scope-and-context-in-javascript/)
13. [Прокси](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Proxy)

### Видеообъяснения

1. https://www.youtube.com/watch?v=gvicrj31JOM
2. https://youtu.be/qg3EO56r76c?t=9193
3. [как работает this в JavaScript простым языком](https://www.youtube.com/watch?v=1RWOi3G91ds)





Контекст выполнения

Контекст выполнения (execution context) — это, если говорить упрощённо, концепция, описывающая окружение, в котором производится выполнение кода на JavaScript. Код всегда выполняется внутри некоего контекста.

https://habr.com/ru/company/ruvds/blog/422089/

▍Типы контекстов выполнения

В JavaScript существует три типа контекстов выполнения:

Глобальный контекст выполнения. Это базовый, используемый по умолчанию контекст выполнения. Если некий код находится не внутри какой-нибудь функции, значит этот код принадлежит глобальному контексту. Глобальный контекст характеризуется наличием глобального объекта, которым, в случае с браузером, является объект window, и тем, что ключевое слово this указывает на этот глобальный объект. В программе может быть лишь один глобальный контекст.
Контекст выполнения функции. Каждый раз, когда вызывается функция, для неё создаётся новый контекст. Каждая функция имеет собственный контекст выполнения. В программе может одновременно присутствовать множество контекстов выполнения функций. При создании нового контекста выполнения функции он проходит через определённую последовательность шагов, о которой мы поговорим ниже.



