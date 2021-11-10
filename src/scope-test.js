"use strict";
let name = "andrej";

function first() {
    let secondName = "petrow";

    function second() {
        let test = name + secondName;
        console.log(test)
    }

    second();
}

first();

function test() {
    if (10 !== 10) {
    }
}
