const objOne = new function () {
    this.a = 10,

        this.baseFunct = function () {
            console.log(this);
        }
    this.arrowFunct = () => {
        console.log(this);
    }
    console.log("obj", this);
    setTimeout(function () {
        console.log("timeout", this);
    }, 300)
}

objOne.baseFunct();
objOne.arrowFunct(); 40