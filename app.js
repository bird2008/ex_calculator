const multiplyButton = document.getElementById("multiply");
const divideButton = document.getElementById("divide");

function multiplyBy() {
    num1 = document.getElementById("1Number").value;
    num2 = document.getElementById("2Number").value;
    document.getElementById("result").innerHTML = num1 * num2;
}

function divideBy() {
    num1 = document.getElementById("1Number").value;
    num2 = document.getElementById("2Number").value;
    document.getElementById("result").innerHTML = num1 / num2;
}

multiplyButton.addEventListener("click", () => {
    multiplyBy();
});

divideButton.addEventListener("click", () => {
    divideBy();
});
