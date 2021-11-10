// "use strict";
// let obj1 = {
//     firstname: "Andrej",
//     lastname: "Podlubnyj",
//     nick: "andron13",
//     email: "andron13@gmail.com",
//     city: "Berlin",
//     job: "Teacher",
//     age: 45,
//     frends: ["Дима, Сергей, Семён"],
//     "test 5": 5
// }
//
// console.log(obj1.firstname);
// console.log(obj1['firstname']);
// console.log(obj1['first' + "name"]);
// console.log(obj1['test 5']);
// // alert(obj1["test 5"]);
//
// let obj2 = {
//     birthYear: 1985,
//
//     calcAge: function (birthYear) {
//         return 2021 - birthYear;
//     }
// }

let user = {
    _age: 15,
    get name() {
        return this._name;
    },

    set name(value) {
        if (value.length < 4 || !(typeof value === 'string' || value instanceof String)) {
            console.log("Имя слишком короткое, должно быть более 4 символов");
            return;
        }
        this._name = value;
    }
};

user.name = "Pete";
console.log(user.name); // Pete

user.name = ""; // Имя слишком короткое...
user.name = 100;
console.log("norm")
console.log("tst", user.name)
console.log(user._age);
