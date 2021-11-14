# Стрелочная функция

Стрелочная функция это синтаксический сахар. То есть укороченная запись обычной функции.

Мы экономим на целом ключевом слове return, на ключевом слове function и фигурных, а порой и круглых скобках. С
анонимными функциями надо подружиться. Она очень часто используется в коде.

### Давайте посмотрим на примере:

Это нормальная запись функции нахождения квадрата числа. Или Function Declaration

```js
function secondPower(x) {
  let result = x ** 2;
  return result;
}
console.log(secondPower(3)); //9
```

Здесь мы используем Function Expression.

```js
let secondPowerTwo = function(x) {
  let result = x ** 2;
  return result;
}
```

Стрелочная функция "сокращает" ключевое слово function:

```js
let secondPowerThree = (x) =>{
  return x ** 2;
};
```

Мы можем и результат написать в одну строчку, сразу в **return**, без создания промежуточной переменной **result**. И
тогда мы имеем право сократить и слово **return**, если у нас всего одна строчка:

```js
let secondPowerFor = (x) => x ** 2;
```

Если и передаваемый параметр всего один, то и его не надо брать в скобки:

```js
let secondPowerFive = x => x ** 2;
```

## Пример стрелочной функции с двумя параметрами

Давайте поиграем с двумя параметрами:

```js
function plusOrMinus(a, b) {
  if (a > b) {
    return a - b;
  } else {
    return a + b;
  }
}
```

Мы можем сразу упросить до тернарного оператора. И я специально взял этот пример, потому что и тернарный оператор и стрелочная функция необычайна любимы на фронтенде.

```js
function plusOrMinus(a, b) {
    return a > b ? a - b : a + b;
}
```

Теперь пробуем сделать из этого стрелочную функцию:

```js
let plusOrMinusExample = (a, b) => (a > b ? a - b : a + b);
```

## Дополнительные ссылки

1. [Функция](https://developer.mozilla.org/ru/docs/Glossary/Function)
2. [Стрелочные функции](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
3. [5 отличий между обычными и стрелочными функциями](https://vc.ru/dev/133379-5-otlichiy-mezhdu-obychnymi-i-strelochnymi-funkciyami)
4. [Три примера, когда не стоит использовать стрелочные функции JavaScript](https://nuancesprog.ru/p/9592/)
5. [Стрелочные функции в JavaScript: зачем они нужны, как с ними обращаться, когда ими стоит пользоваться, а когда — нет](https://habr.com/ru/company/ruvds/blog/428566/)
6. [Функции-стрелки, основы](https://learn.javascript.ru/arrow-functions-basics)
7. [Повторяем стрелочные функции](https://learn.javascript.ru/arrow-functions)
8. [Функциональное выражение и стрелочные функции в JavaScript](https://itchief.ru/javascript/function-expression-and-arrow)

## Вопросы из собеседований

1. Какие отличия у стрелочных функций от других?
2. Зачем нужны стрелочные функции?
3. Где используют стрелочные функции?
4. Напишите пример стрелочной функции