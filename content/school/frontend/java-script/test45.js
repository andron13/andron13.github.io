let user = {
    get name() {
        return this._name;
    },

    set name(value) {
        if (value.length < 4) {
            console.log("Имя слишком короткое, должно быть более 4 символов");
            return;
        }
        this._name = value;
    }
};

user.name = "Pete";
console.log("ожидаю пит", user.name); // Pete

user.name = ""; // Имя слишком короткое...
console.log("ожидаю пробел", user.name)
user.name = "ole";
console.log("ожидаю оле", user.name)

