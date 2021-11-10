//var popup = window.open('https://microsoft.com', 'Microsoft', 'width=400, height=400, resizable=yes');

/*popup();*/
// https://metanit.com/web/javascript/7.2.php


/*function updateTime() {
    document.getElementById("time").innerHTML = new Date().toTimeString();
}
setInterval(updateTime, 1000);*/

var square = document.getElementById("rect");
var angle = 0;
function rotate() {
    angle = (angle + 2)%360;
    square.style.transform = "rotate(" + angle + "deg)";
    window.requestAnimationFrame(rotate);
}
var id = window.requestAnimationFrame(rotate);
