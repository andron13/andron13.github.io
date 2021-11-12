## Введение в каррирование в JavaScript

Если вдруг название шаблона покажется вам несколько странным, то каррирование названо в честь Хаскелла Карри, который работал над математическими основами функционального программирования.

код - [1000-currying-test.js](./1000-currying-test.js)

````js
var greet = function(greeting, name) {
  console.log(greeting + ", " + name);
};
greet("Hello", "Heidi"); //"Hello, Heidi"
````

Наше первое карри

````js
var greetCurried = function(greeting) {
  return function(name) {
    console.log(greeting + ", " + name);
  };
};

var greetHello = greetCurried("Hello");
greetHello("Heidi"); //"Hello, Heidi"
greetHello("Eddie"); //"Hello, Eddie"

greetCurried("Hi there")("Howard"); //"Hi there, Howard"

// demo http://jsbin.com/basoyi/embed?js,console
````


````js

````


````js

````


````js

````




## Дополнительные материалы

- https://en.wikipedia.org/wiki/Currying
- http://prgssr.ru/development/vvedenie-v-karrirovanie-v-javascript.html
- [medium.com/nuances-of-programming](https://medium.com/nuances-of-programming/%D0%B1%D0%B5%D1%81%D0%BA%D0%BE%D0%BD%D0%B5%D1%87%D0%BD%D0%BE%D0%B5-%D0%BA%D0%B0%D1%80%D1%80%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D0%B2-javascript-9e46cf4abff9)
- https://habr.com/ru/company/ruvds/blog/427295/
- https://learn.javascript.ru/currying-partials
- https://www.codewars.com/kata/55f91566e0d2317066000057
- https://www.youtube.com/watch?v=iZLP4qOwY8I
- https://www.codewars.com/kata/currying-functions-multiply-all-elements-in-an-array
- https://www.codewars.com/kata/uncurrying
- https://ramdajs.com/
- [Как работает reduce() в JavaScript, когда его нужно применять и какие крутые вещи можно с ним делать
  ](https://medium.com/@stasonmars/%D0%BA%D0%B0%D0%BA-%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%B0%D0%B5%D1%82-reduce-%D0%B2-javascript-%D0%BA%D0%BE%D0%B3%D0%B4%D0%B0-%D0%B5%D0%B3%D0%BE-%D0%BD%D1%83%D0%B6%D0%BD%D0%BE-%D0%BF%D1%80%D0%B8%D0%BC%D0%B5%D0%BD%D1%8F%D1%82%D1%8C-%D0%B8-%D0%BA%D0%B0%D0%BA%D0%B8%D0%B5-%D0%BA%D1%80%D1%83%D1%82%D1%8B%D0%B5-%D0%B2%D0%B5%D1%89%D0%B8-%D0%BC%D0%BE%D0%B6%D0%BD%D0%BE-%D1%81-%D0%BD%D0%B8%D0%BC-b650c397bee6)

