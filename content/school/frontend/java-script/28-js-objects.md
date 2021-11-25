---
title: Введение в объекты 
description: Введение в объекты 
author: andron13 
date: 2020-09-06 
linktitle: Введение в объекты 
bookCollapseSection: true 
weight: 1 
type: book 
draft: true
---

# Введение в объекты

````js
let arr1 = [
    "Andrej",
    "Podlubnyj",
    "andron13",
    "andron13@gmail.com",
    "Berlin",
    "Teacher",
    45,
    ["Дима, Сергей, Семён"]
]
````

````js
let obj1 = {
    firstname: "Andrej",
    lastname: "Podlubnyj",
    nick: "andron13",
    email: "andron13@gmail.com",
    city: "Berlin",
    job: "Teacher",
    age: 45,
    hasDriverLicense: true,
    frends: ["Дима, Сергей, Семён"]
}
````

ключ: значение. Свойства key:value, k:v

````js
console.log(obj1.firsname);
console.log(obj1['firsname']);
console.log(obj1['firsname' + i]);
````

## Пример с BMI

````js
const andrej = {
    firstname: "Andrej",
    mass: 100kg,
    height: 1.75,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi
    }
}

const sergej = {
    firstname: "Sergej",
    mass: 90kg,
    height: 1.65,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi
    }
}
````

TODO 
Object.keys(user);
Object.values(user);
Object.entries (user);

2:19:00

https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648271#overview

https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648263#overview
https://learn.javascript.ru/object
https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/new
https://developer.mozilla.org/ru/docs/Learn/JavaScript/Objects/Basics
https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Details_of_the_Object_Model
https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Object_initializer
https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Working_with_Objects

https://medium.com/nuances-of-programming/%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D0%B5%D1%81%D0%BD%D1%8B%D0%B5-%D0%BF%D0%BE%D0%B4%D1%80%D0%BE%D0%B1%D0%BD%D0%BE%D1%81%D1%82%D0%B8-%D0%BE%D0%B1-%D0%BE%D0%B1%D1%8A%D0%B5%D0%BA%D1%82%D0%B0%D1%85-javascript-82d852642464

https://metanit.com/web/javascript/4.1.php
https://www.udemy.com/course/pro-react-redux/learn/lecture/11390444#overview

https://youtu.be/H1NmJIv1A2Y

## Домашнее задание

1. Создайте двуязычный словарь. Используйте для одной пары слов object. Объекты слов поместите в массив словаря. Напишите программу для проверки знания переводов пользователем. При угадывании писать отлично, при не угадывании - говорить не отлично и перевод.
2. Добавьте в словарь ещё три языка