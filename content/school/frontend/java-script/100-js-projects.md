#  

https://habr.com/ru/post/502300/
https://techrocks.ru/2020/02/20/9-projects-created-with-vanilla-javascript/


Какое будет выведено значение: let x = 5; alert( x++ ); ? 5
Чему равно такое выражение: [ ] + false - null + true ? NaN
Что выведет этот код: let y = 1; let x = y = 2; alert(x); ? 2
Чему равна сумма [ ] + 1 + 2? 12
Что выведет этот код: alert( "1"[0] )? 1
Чему равно 2 && 1 && null && 0 && undefined ? null
Есть ли разница между выражениями? !!( a && b ) и (a && b)?
Что выведет этот код: alert( null || 2 && 3 || 4 ); ? 3
a = [1, 2, 3]; b = [1, 2, 3]; Правда ли что a == b ? false
Что выведет этот код: alert( +"Infinity" ); ?  Infinity
Верно ли сравнение: "Ёжик" > “яблоко"?  false
Чему равно 0 || "" || 2 || undefined || true || falsе ? 2



Главное для урока:

1. Прямая речь.
2. js, nodejs, webapi
3. ECMASCRIPT
4. Number 52 bit, дробные и целые, нижние подчёркивания.
5. Конвенция о наименованиях и нейминге. Лет, Вар, конст
6. константы
7. сложение, вычитание
8. Вывод в консоль
9. Решение задачи с BMI
10. Alert, promt, confirm
 ```Js
 alert("Hello");
result = prompt(title, [default]);
result = confirm(question);
// https://learn.javascript.ru/alert-prompt-confirm
```
11. Функции
 ```Js
function myLovelyFunction() {
      return 10;
}
```
12. Запуск функций, возврат значений.

```Js
var Variable1 = "Hier erfolgt ein\"Anführungszeichen";
var Variable2 = "Hier erfolgt ein\\Backslash";
var Variable3 = "Hier erfolgt ein\nZeilenvorschub (Linefeed, LF)";
var Variable4 = "Hier erfolgt ein\rWagenrücklauf (Carriage Return, CR)";
var Variable5 = "Hier erfolgt ein\tTabulator";
var Variable6 = "Hier erfolgt ein\bBackspace";
var Variable7 = "Hier erfolgt ein\fSeitenvorschub (Formfeed, FF)";

var a = 1E1;
var b = 1.2345E4;
var c = 2e-3
```

nodejs

1. Сценарий исполнения.
2. Строгая типизация, динамическая, слабая типизация
3. Контейнер с информацией
4. Императивное программирование
5. Функциональное
7. ООП
8. Декларативное
9. процедурное
10. https://logiclike.com/2.0/de/start



```
<!DOCTYPE HTML>
<html>

<body>

  <p>Перед скриптом...</p>

  <script>
    alert( 'Привет, мир!' );
  </script>

  <p>...После скрипта.</p>

</body>

</html>
```


```
<script src="/path/to/script.js"></script>
```
```
"() {} [] ^^ || && %% __ -- ++ ** // \\ '' ~~ ;; :: ,, .. <> == !=  ``"
```
```
`строка текста`

`строка текста 1
 строка текста 2`

`строка текста ${выражение} строка текста`

tag `строка текста ${выражение} строка текста`
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
```

```
let a = 10;
let b = 20;

console.log(a+b);
alert("hello wrold")
```

```js
const t = document.querySelector("p");
console.log(t);
t.style.color="red";
```

## Комментарии

```js
// Этот комментарий занимает всю строку
alert('Привет');

alert('Мир'); // Этот комментарий следует за инструкцией

/* Пример с двумя сообщениями.
Это - многострочный комментарий.
*/
alert('Привет');
alert('Мир');
```

"use strict";

очерёдность исполнения
показать андифайнд
let message:
console.log(message)
let message = 10;


promt
```js
let age = prompt('Сколько тебе лет?', 100);

alert(`Тебе ${age} лет!`); // Тебе 100 лет!
```

let a = 10;
let b = 20;

console.log(a+b);
alert("hello world")

    <script>
        document.write("Добро пожаловать!")
        let d = new Date();
        document.querySelector(".welcome")
        const t = document.querySelector("p");
        console.log(t);
        t.style.color="red";
        t.innerHTML="Today's date is" + d;
    </script>


console.log("head"); // This is console
// alert("Hello world!");
console.log(
1
+ 2
  );

  /*
  Hello
  lkdfljasdhfljhsadhsadfjh
  */


// // // // // // // // // console.log(123);

// Variables

let message;
console.log(message);
message = 'Message!';
console.log(message);
message = 'Hello World!';
console.log(message);
message = 5;
console.log(message);

const PI = 3.14159;
console.log(PI);
// PI = 'число Pi'; //- ОШИБКА!!!
// console.log(PI);

const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";
const COLOR_BLUE = "#00F";
const COLOR_ORANGE = "#FF7F00";


let firstName = 'Ivan', lastName = 'Ivonov', age = 25;
let firstname;
let first_1_name;
let i, j, k;
let _;
let _firstName;
let $;

// BAD
let имя;
let imya;

// let 314kdjf;

// name != Name - разные переменные

// let, const, class, function, return, .... - зарезервированные слова

console.log(firstName);

let importData;

// Type of Data

// Number, BigInt

let n = 100;
let m = 100.1;

console.log( 1 / 0 );
console.log( Infinity );

console.log( 'hello' / 2 );
console.log( NaN );

// String

let str1 = 'Hello';
let str2 = "World";
let str3 = `Hello`;

let result1 = str1 + ' ' + str2;
console.log( result1 );

let _res = 'Выведем ' + str1 + ' ' + str2 + '. Ура!!!' + str3;

let result2 = `Выведем ${str1} ${str2}. Ура!!! ${str3}`;
console.log( result2 );

console.log( "${str1} ${str2}" );
console.log( `${str1} ${str2}` );

console.log('Hello');
console.log(`Hello ${str2}`);

console.log( `${'hello'} world` );
console.log( `result = ${2 + 2}` );

// Boolean - логический
let isTrue = true;
let isFalse = false;

let isLess = 2 < 5;

console.log( isLess );

// Null, undefined

_res = null;
console.log( _res );

let newRes;
console.log( newRes );

// Object, Symbol

// Type of

console.log( typeof n );
console.log( typeof str1 );
console.log( typeof _res );
console.log( typeof newRes );
console.log( typeof isTrue );






https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648189#overview

https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648191#overview

задачи https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648193#overview
