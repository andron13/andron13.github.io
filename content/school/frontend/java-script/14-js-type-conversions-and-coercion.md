---
title: Типы данных в JavaScript
draft: true
---

Давайте запишем всё, что мы можем в переменные:
````js
"use strict";
let num = 10;
let veryBigInt = 3049584305984n;
let str = "сообщение!";
let isTrue = true;
let fourSeasons = ["Vivaldi", "Стивен Кинг", "Гостиница", "Музыкальная группа"];
let admin = {firstname: "John Doe"};
let func1 = function () {
    return 1;
}
let nothing = null;
let undef = undefined;
let notANumber = NaN;
let inf = Infinity;

let myTestObj = {
    "num": num,
    "veryBigInt": veryBigInt,
    "str": str,
    "isTrue": isTrue,
    "fourSeasons array": fourSeasons,
    "obj admin": admin,
    "func func1": func1,
    "null nothing": nothing,
    "undef": undef,
    "notANumber": notANumber,
    "inf": inf
}
let i = 0;

for (const key of Object.keys(myTestObj)) {
    console.log(key + " - " + myTestObj[key] + " является " + typeof myTestObj[key]);
}
````

## Преобразование типов

### Number

````
Number(true);          // returns 1
Number(false);         // returns 0
Number("10");          // returns 10
Number("  10");        // returns 10
Number("10  ");        // returns 10
Number(" 10  ");       // returns 10
Number("10.33");       // returns 10.33
Number("10,33");       // returns NaN
Number("10 33");       // returns NaN
Number("John");        // returns NaN
````

#### String to Number

````
Number("3.14")    // returns 3.14
Number(" ")       // returns 0
Number("")        // returns 0
Number("99 88")   // returns NaN
````

#### parseInt

````
parseInt("-10");        // returns -10
parseInt("-10.33");     // returns -10
parseInt("10");         // returns 10
parseInt("10.33");      // returns 10
parseInt("10 20 30");   // returns 10
parseInt("10 years");   // returns 10
parseInt("years 10");   // returns NaN
````

#### parseFloat

````
parseFloat("10");        // returns 10
parseFloat("10.33");     // returns 10.33
parseFloat("10 20 30");  // returns 10
parseFloat("10 years");  // returns 10
parseFloat("years 10");  // returns NaN
````

### Ещё пара методов

**toExponential()**	Returns a string, with a number rounded and written using exponential notation.

**toFixed()**	Returns a string, with a number rounded and written with a specified number of decimals.

**toPrecision()**	Returns a string, with a number written with a specified length

### Boolean

````
Boolean('')           // false
Boolean(0)            // false     
Boolean(-0)           // false
Boolean(NaN)          // false
Boolean(null)         // false
Boolean(undefined)    // false
Boolean(false)        // false
````

Всё остальное true.

````
String(false)      // returns "false"
String(true)       // returns "true"
false.toString()   // returns "false"
true.toString()    // returns "true"
Number(false)     // returns 0
Number(true)      // returns 1
````

````
5 + null    // returns 5         because null is converted to 0
"5" + null  // returns "5null"   because null is converted to "null"
"5" + 2     // returns "52"      because 2 is converted to "2"
"5" - 2     // returns 3         because "5" is converted to 5
"5" * "2"   // returns 10        because "5" and "2" are converted to 5 and 2
````

## Таблица преобразования типа JavaScript


|Исходное значение| to Number|  to String|  to Boolean
|:----:|:----:|:----:|:----:|
|false|	0|	"false"|	false|
|true|	1|	"true"|	true|
|0|	0|	"0"|	false|
|1|	1|	"1"	|true|
|"0"|	0|	"0"|	true|
|"000"|	0|	"000"|	true|
|"1"|	1|	"1"|	true|
|NaN|	NaN|	"NaN"|	false|
|Infinity|	Infinity|	"Infinity"|	true|
|-Infinity|	-Infinity|	"-Infinity"|	true|
|""|	0|	""|	false|
|"20"|	20|	"20"	|true|
|"twenty"|	NaN|	"twenty"|	true|
|[ ]	|0|	""	|true|
|[20]	|20|	"20"|	true|
|[10,20]|	NaN|	"10,20"|	true|
|["twenty"]|	NaN|	"twenty"|	true|
|["ten","twenty"]|	NaN|	"ten,twenty"|	true|
|function(){}|	NaN|	"function(){}"|	true|
|{ }|	NaN	|"[object Object]"|	true|
|null|	0|	"null"|	false|
|undefined|	NaN|	"undefined"|	false|

### Немного Null

````js
console.log( null > 0 );  // (1) false
console.log( null == 0 ); // (2) false
console.log( null >= 0 ); // (3) true
````

### Немного undefined

Значение undefined несравнимо с другими значениями:
````js
console.log( undefined > 0 ); // false (1)
console.log( undefined < 0 ); // false (2)
console.log( undefined == 0 ); // false (3)
````

### Примеры:

- Какое будет выведено значение:  
    ````
    let x = 5; console.log( x++ ); 
    ````  
- Чему равно такое выражение:
    ````
    [ ] + false - null + true
    ````  
- Что выведет этот код:   
    ````
    let y = 1;
    let x = y = 2;
    console.log(x); 
    // Ответ "2" 
    ```` 
- Чему равна сумма
    ````
    [ ] + 1 + 2;
    ````
- Что выведет этот код:
    ````
    console.log( "1"[0] )
    ````
- Чему равно 
    ````
    2 && 1 && null && 0 && undefined
    ````
- Есть ли разница между выражениями? 
  ````
  !!( a && b ) и (a && b)
  ````
- Что выведет этот код: 
  ````
  console.log( null || 2 && 3 || 4 );
  ````
- Правда ли что a == b 
    ````
    a = [1, 2, 3]; b = [1, 2, 3]; 
    ````
- Что выведет этот код: 
    ````
    console.log(+"Infinity"); 
    ````
- Верно ли сравнение: 
    ````
    "Ёжик" > "яблоко" 
    ````
- Чему равно
    ````
    || "" || 2 || undefined || true || falsе
    ````

## coercion

Приведение типов (type coercion) - это автоматическое или неявное преобразование значений из одного типа данных в другой (например, строки в число)

### Пример

````js
if(5){}// автоматическое приведение в булевое значение
if ("Да"){}  
while("Строка"){}
while (""){}
while (" "){}
if (5 == "5"){}
````

### Равенства

|Оператор|	Описание|	Пример|	Результат|
|:----:|:----:|:----:|:----:|
|==| Равно|	10 == 20| false|
|===| Строго равно (идентичность)| "20" === 20| false|
|!=| Не равно| 10 != 20| true|
|!==| Строго не равно	|20! == 20 |false|
|\>| Больше чем	|20 > 10	| true|
|>=| Больше или равно|	20 >= 10 | true|
|<|	Меньше чем	|20 < 10	| false|
|<=| Меньше или равно|	20 <= 10 | false|

## Строка ли у нас?

````js
(typeof value === 'string' || value instanceof String)
````

## Дополнительные ссылки

1. [Why does typeof NaN return 'number'?](https://stackoverflow.com/questions/2801601/why-does-typeof-nan-return-number)
2. [TypeOf](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/typeof)
3. [Сколько будет !+[]+[]+![]?](https://habr.com/ru/company/ruvds/blog/347866/)

