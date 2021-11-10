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
