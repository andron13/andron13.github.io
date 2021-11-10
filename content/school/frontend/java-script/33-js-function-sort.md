Сорт

Лексикографическая сортировка

[Как работает reduce() в JavaScript, когда его нужно применять и какие крутые вещи можно с ним делать
](https://medium.com/@stasonmars/%D0%BA%D0%B0%D0%BA-%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%B0%D0%B5%D1%82-reduce-%D0%B2-javascript-%D0%BA%D0%BE%D0%B3%D0%B4%D0%B0-%D0%B5%D0%B3%D0%BE-%D0%BD%D1%83%D0%B6%D0%BD%D0%BE-%D0%BF%D1%80%D0%B8%D0%BC%D0%B5%D0%BD%D1%8F%D1%82%D1%8C-%D0%B8-%D0%BA%D0%B0%D0%BA%D0%B8%D0%B5-%D0%BA%D1%80%D1%83%D1%82%D1%8B%D0%B5-%D0%B2%D0%B5%D1%89%D0%B8-%D0%BC%D0%BE%D0%B6%D0%BD%D0%BE-%D1%81-%D0%BD%D0%B8%D0%BC-b650c397bee6)

````js
const euros = [29.76, 41.85, 46.5];
const sum = euros.reduce((total, amount) => total + amount); 
sum // 118.11
````

````js
var euros = [29.76, 41.85, 46.5]; 
var sum = euros.reduce( function(total, amount){
  return total + amount
});
sum // 118.11
````

````js
const euros = [29.76, 41.85, 46.5];
const average = euros.reduce((total, amount, index, array) => {
  total += amount;
  if( index === array.length-1) { 
    return total/array.length;
  }else { 
    return total;
  }
});
average // 39.37
````

````js
const average = euros.reduce((total, amount, index, array) => {
  total += amount
  return total/array.length
}, 0);
````

````js
const euros = [29.76, 41.85, 46.5];
const doubled = euros.reduce((total, amount) => {
  total.push(amount * 2);
  return total;
}, []);
doubled // [59.52, 83.7, 93]
````


````js
const euro = [29.76, 41.85, 46.5];
const above30 = euro.reduce((total, amount) => {
  if (amount > 30) {
    total.push(amount);
  }
  return total;
}, []);
above30 // [ 41.85, 46.5 ]
````

````js
const euro = [29.76, 41.85, 46.5];
const above30 = euro.reduce((total, amount) => {
  if (amount > 30) {
    total.push(amount);
  }
  return total;
}, []);
above30 // [ 41.85, 46.5 ]
````

````js
const fruitBasket = ['banana', 'cherry', 'orange', 'apple', 'cherry', 'orange', 'apple', 'banana', 'cherry', 'orange', 'fig' ];
const count = fruitBasket.reduce( (tally, fruit) => {
  tally[fruit] = (tally[fruit] || 0) + 1 ;
  return tally;
} , {})
count // { banana: 2, cherry: 3, orange: 3, apple: 2, fig: 1 }
````

````js
fruitBasket.reduce( (tally, fruit) => {
  tally[fruit] = 1;
  return tally;
}, {})
````


````js
const data = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const flat = data.reduce((total, amount) => {
  return total.concat(amount);
}, []);
flat // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
````


````js
const data = [
  {a: 'happy', b: 'robin', c: ['blue','green']}, 
  {a: 'tired', b: 'panther', c: ['green','black','orange','blue']}, 
  {a: 'sad', b: 'goldfish', c: ['green','red']}
];

const colors = data.reduce((total, amount) => {
    amount.c.forEach( color => {
        total.push(color);
    })
    return total;
}, [])
Цвета
//['blue','green','green','black','orange','blue','green','red']
````


````js
function increment(input) { return input + 1;}
function decrement(input) { return input — 1; }
function double(input) { return input * 2; }
function halve(input) { return input / 2; }

let pipeline = [increment, double, decrement];

const result = pipeline.reduce(function(total, func) {
    return func(total);
}, 1);
result // 3
````


````js

````


````js

````


````js

````


````js

````


