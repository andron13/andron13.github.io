"use strict";

function example(strNumber) {
    console.log("--------------------------------------------------------");
    console.log(strNumber, "вариант");
    console.log("↓↓↓--------------------------------------------------↓↓↓");
}

example("первый");


let greet = function (greeting, name) {
    console.log(greeting + ", " + name);
};
greet("Hello", "Heidi"); //"Hello, Heidi"


/*---------------------------------*/
example("второй")

let greetCurried = function (greeting) {
    return function (name) {
        console.log(greeting + ", " + name);
    };
};

let greetHello = greetCurried("Hello");
greetHello("Heidi"); //"Hello, Heidi"
greetHello("Eddie"); //"Hello, Eddie"

greetCurried("Hi there")("Howard"); //"Hi there, Howard"

// demo http://jsbin.com/basoyi/embed?js,console

/*---------------------------------*/
example("третий");
let greetDeeplyCurried = function (greeting) {
    return function (separator) {
        return function (emphasis) {
            return function (name) {
                console.log(greeting + separator + name + emphasis);
            };
        };
    };
};

let greetAwkwardly = greetDeeplyCurried("Hello")("...")("?");
greetAwkwardly("Heidi"); //"Hello...Heidi?"
greetAwkwardly("Eddie"); //"Hello...Eddie?"

let sayHello = greetDeeplyCurried("Hello")(", ");
sayHello(".")("Heidi"); //"Hello, Heidi."
sayHello(".")("Eddie"); //"Hello, Eddie."

let askHello = sayHello("?");
askHello("Heidi"); //"Hello, Heidi?"
askHello("Eddie"); //"Hello, Eddie?"

//http://jsbin.com/tetugu/embed?js,console&height=450px

/*---------------------------------*/
example("четвёртый");
let curryIt = function (uncurried) {
    let parameters = Array.prototype.slice.call(arguments, 1);
    return function () {
        return uncurried.apply(this, parameters.concat(
            Array.prototype.slice.call(arguments, 0)
        ));
    };
};

let greeter = function (greeting, separator, emphasis, name) {
    console.log(greeting + separator + name + emphasis);
};
let myGreetHello = curryIt(greeter, "Hello", ", ", ".");
myGreetHello("Heidi"); //"Hello, Heidi."
myGreetHello("Eddie"); //"Hello, Eddie."

let greetGoodbye = curryIt(greeter, "Goodbye", ", ");
greetGoodbye(".", "Joe"); //"Goodbye, Joe."
// http://jsbin.com/hayaka/embed?js,console&height=475px

/*---------------------------------*/

example("пятый, с нуля")

// https://medium.com/nuances-of-programming/%D0%B1%D0%B5%D1%81%D0%BA%D0%BE%D0%BD%D0%B5%D1%87%D0%BD%D0%BE%D0%B5-%D0%BA%D0%B0%D1%80%D1%80%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D0%B2-javascript-9e46cf4abff9

const multiply = (a, b) => a * b;
const mul = (x) => {
    return (y) => {
        return (z) => {
            return x * y * z;
        };
    };
};

const mulTwo = (a, b, c) => a * b * c;
console.log(mulTwo.length, "Количество аргументов функции (арность)");
