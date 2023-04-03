const num1 = document.querySelector("#numberOne");
const num2 = document.querySelector("#numberTwo");
const sum = document.querySelector("#sum");

num1.addEventListener("input", run);
num2.addEventListener("input", run);

function run() {
    let one = parseInt(num1.value) || 0;
    let two = parseInt(num2.value) || 0;

    sum.innerHTML = "Sum result = " + (one + two);
}