## JavaScript

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