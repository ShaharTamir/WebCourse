var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.querySelector("body");
var rand_button = document.querySelector(".rand");

window.onload = SetGradient();

color1.addEventListener("input", SetGradient);
color2.addEventListener("input", SetGradient);

rand_button.addEventListener("click", function (){
    color1.value = RandomColor();
    color2.value = RandomColor();
    SetGradient();
})

function SetGradient() {
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
    css.textContent = body.style.background + ";";
}

function RandomColor() {
    return "#" + Math.floor(Math.random() * 0xffffff).toString(16);
}



