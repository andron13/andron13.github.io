#  Function Declaration и Function Expression

Повторяемые участки кода или код, который нам очень часто нужен есть смысл поместить в функции. 

Функции бывают разные.

Выполняющие инструкции
````js
function myLovelyLogger() {
    console.log("Эту строчку кода написал Андрей");
}
myLovelyLogger();
````

Возвращающие значение

````js
function makeMeSandwich(хлеб, котлета, майонез) {
    // bread, cutlet, mayonnaise
    console.log(хлеб, котлета, майонез);
    let бутерброт = `${хлеб}хлеб и ${котлета}котлета сами по себе вкусны, но только ${майонез}майонез делает из них настоящий бутик!`
    return бутерброт;
}

makeMeSandwich(2, 1, "немножко")
````

Отличают функции и по способу описания

````js

// Function Declaration Объявление Функции
function helloWorld() {
    console.log("Hello")
}

let variable1 = helloWorld();

// Function Expression Функциональное Выражение

let variable2 = function () {
    console.log("Hello")
};
````

Есть несколько существенных отличий;
1. Точка с запятой. Выражение
2. Анонимная функция
3. Нельзя запустить перед описыванием функции. 

Существуют так называемые call-back функции

## Пример колбэков

````js
function ask(question, yes, no) {
  if (confirm(question)) {
      yes()
  }  else {
      no();
  }
}

function showOk() {
  alert( "Вы согласны." );
}

function showCancel() {
  alert( "Вы отменили выполнение." );
}

// использование: функции showOk, showCancel передаются в качестве аргументов ask
ask("Вы согласны?", showOk, showCancel);
````


````html
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Callbacks</h2>

<p>Do a calculation and then display the result.</p>

<p id="demo"></p>

<script>
function myDisplayer(some) {
  document.getElementById("demo").innerHTML = some;
}

function myCalculator(num1, num2, myCallback) {
  let sum = num1 + num2;
  myCallback(sum);
}

myCalculator(5, 5, myDisplayer);
</script>

</body>
</html>
````

## Анонимные функции - anonymous function

>An anonymous function is a function without a function name. Only function expressions can be anonymous, function declarations must have a name:

>Анонимная функция это функция без имени:

Примеры:
````js
// When used as a function expression
(function () {});
// or using the ECMAScript 2015 arrow notation
() => {};
````

### Когда следует использовать обратный вызов?

Приведённые выше примеры на самом деле просто примеры. И приведены для понимания процесса и обучению синтаксису. 

По-настоящему обратные вызовы проявляют себя в асинхронных функциях, когда одна функция должна ждать другую (например, ждать загрузки файлов).


https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648181#overview

function declaration, input, посчитать возраст call, invoke, execute, запустить, выполнить, вызвать,

параметры и аргументы.

Анонимные функции https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648225#overview

https://i.imgur.com/LSiZ16Z.png

function declaration, function expression объявление функции, выражение функции Функциональное выражение

https://learn.javascript.ru/function-expressions

https://i.imgur.com/JEfzlxs.png
arrow

https://i.imgur.com/hPj6snl.png

https://i.imgur.com/uyvTre7.png

https://metanit.com/web/javascript/3.3.php

## Дополнительные ссылки

1. [Функциональные выражения](https://learn.javascript.ru/function-declaration-expression)
2. [Сильно забегаем вперёд](https://medium.com/devschacht/anonymous-functions-in-javascript-ff6b9ba85de0)
3. https://www.freecodecamp.org/news/javascript-callback-functions-what-are-callbacks-in-js-and-how-to-use-them/
