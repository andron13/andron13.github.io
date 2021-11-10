// let adminName = "Андрей";
// // Вносим переменную в строковый литерал
// let greetingMsg = `Привет, ${adminName}!`; // Привет, Андрей!
//
// console.log(greetingMsg);
//
// /*
// alert(greetingMsg);
// */
//
// var Variable1 = "Hier erfolgt ein\"Anführungszeichen";
// var Variable2 = "Hier erfolgt ein\\Backslash";
// var Variable3 = "Hier erfolgt ein\nZeilenvorschub (Linefeed, LF)";
// var Variable4 = "Hier erfolgt ein\rWagenrücklauf (Carriage Return, CR)";
// var Variable5 = "Hier erfolgt ein\tTabulator";
// var Variable6 = "Hier erfolgt ein\bBackspace";
// var Variable7 = "Hier erfolgt ein\fSeitenvorschub (Formfeed, FF)";
//
// console.log(Variable1)
//
// let a= 10;
// let b = 3;
//
// let c = a/b;
// console.log(c);
// console.log(50/10)
//
// alert("Hello");
// // result = prompt(title, [default]);
// result = confirm(question);
//
// let myString = "⚓ ✈ ⚽ 🥓";
//
// /*
//
// 🔥
//
// "😃 Smileys & People\n" +
// "🐻 Animals & Nature\n" +
// "🍔 Food & Drink\n" +
// "⚽ Activity\n" +
// "🌇 Travel & Places\n" +
// "💡 Objects\n" +
// "🔣 Symbols\n" +
// "🎌 Flags" +
// ":fire:" +
// ""
// */
//
// function countSeeds(cellAmount) {
//     return Math.pow(2, cellAmount) - 1;
// }
//
// console.log(countSeeds(64));

// function sayHi() {
//     alert( "Привет" );
// }
//
// alert( sayHi ); // выведет код функции

// function sayHi() {
//     console.log("Привет")
// }
// console.log( sayHi ); // выведет код функции

// const calcAge = birthYeah => 2021 - birthYeah;
//
// console.log(calcAge(1975))
// calcAge()
//
// кофе размолоть, воду вскипятить, молоко подогреть
// хлеб порезать, котлеты испечь

// function makeHotDrink(
//     water = 50,
//     coffee = 0,
//     milk ,
//     sugar = 0
// ) {
//     return (`Подогреваем ${water} милилитров воды,
// добавляем ${coffee} милиграмм свежемолотого кофе,
// для этого напитка использовано ${milk} милилитров молока,
// и ${sugar} милиграмм сахара.`);
// }
//
// makeHotDrink(50, 10, 10, 0);
//
// let water = makeHotDrink(100, 0, 0, 0);
// console.log(water)
// console.log(makeHotDrink())

// создание пустого массива;
// let arr1 = [];
// // второй способ создания пустого массива.
// let arr2 = new Array();
// // Создание массива с элементами, числами
// let arr3 = [0, 1, 1, 2, 3, 5, 8, 13];
// // Создание массива с элементами, булевые элементы
// let arr4 = [true, false, true, false];
// //создание смешанного массива
// let arr5 = [true, 1, "Школа", 42, false, "JavaScript"];
// //создание массива со строками
// let arr6 = ["дом", "улица", "фонарь", "аптека"];
// let germanCities = [
//     "Берлин",
//     "Дрезден",
//     "Кёльн",
//     "Франкфурт",
//     "Мюнхен",
// ];
//
// console.log(germanCities[0]);
// console.log(germanCities[germanCities.length - 1]);
// let arraySize = germanCities.length;
// console.log(germanCities[arraySize-1]);
// germanCities[4] = "NewCity";
// console.log(germanCities[arraySize-1]);
// germanCities[5] = "BigCity";
// germanCities[7] = "TestCity";
// console.log(germanCities)
// let newArr = new Array(5);
// console.log(newArr)
// let belarusCities = ["Минск", "Могилёв","Мозырь"]
// belarusCities.shift()
// console.log(belarusCities); //
// console.log(belarusCities.length)
//
// let magicArr2 = new Array(10);
// console.log(magicArr2.length)
// console.log(magicArr2)
// console.log(magicArr2[0])

// function summer(permission) {
//     if (permission) {
//         console.log("я поеду в летний лагерь")
//     } else {
//         console.log("я останусь на всё лето дома");
//     }
// }

// let firstName = "Erik";
// let secondName = "Musterman";
// console.log(firstName, secondName)
// let username = firstName + " " + secondName;
// let greeting = "Hello \n" + username;
// console.log(greeting)
// greeting = greeting.upperCase();
// greeting = greeting.lowerCase();
// let subVariable = greeting.substr(3);
// let subVariable1 = greeting.substr(3, 6);
// let subVariable2 = greeting.substr(6, 3);

// let word ="";
// console.log(word.length)
//
// let magicSentence = `Многострочная строка - это не просто достижение!
// А прорыв в компьютерной разработке третьего тысячелетия!`

let oldGoodAge = '\u00A9';
let cop2 = "©"


console.log(oldGoodAge);
console.log(cop2);

// console.log(magicSentence)

let test = String.fromCodePoint(1200);
console.log(test)


// function leapYearChecker(year) {
//     if ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)) {
//         return `${year} год високосный`
//     } else {
//         return `${year} год не високосный`
//     }
// }
//
// console.log(leapYearChecker(1800))
// console.log(leapYearChecker(1900))
// console.log(leapYearChecker(2000))
// console.log(leapYearChecker(1980))
// console.log(leapYearChecker(1982))