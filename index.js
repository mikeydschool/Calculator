let input = document.getElementById("inputBox");
let output = document.getElementById("outputBox");

let history = [];
let currentPosition = 0;

if (sessionStorage.getItem("calcHistory")) {
    history = JSON.parse(sessionStorage.getItem("calcHistory"));
    currentPosition = history.length;
}

function addChar(char) {
    input.value = input.value + char;
}

function calculate() {
    if (input.value === "") return;

    try {
        let text = input.value;
        text = text.replaceAll("/", "/");
        text = text.replaceAll("^", "**");

        let result = eval(text);
        output.textContent = result;

        history.push(input.value);
        currentPosition = history.length;

        let stringVersion = JSON.stringify(history);
        sessionStorage.setItem("calcHistory", stringVersion);
    } catch (e) {
        output.textContent = "Error";
    }
}

function upArrow() {
    if (history.length === 0) return;
    if (currentPosition > 0) {
        currentPosition = currentPosition - 1;
    }
    input.value = history[currentPosition];
}

function downArrow() {
    if (history.length === 0) return;
    if (currentPosition < history.length - 1) {
        currentPosition = currentPosition + 1;
        input.value = history[currentPosition];
    } else {
        currentPosition = history.length;
        input.value = "";
    }
}

function leftArrow() {
    input.value = input.value.slice(0, -1);
}

function rightArrow() {
    input.value = input.value + " ";
}

document.onkeydown = function(event) {
    if (event.key === "Enter") {
        calculate();
    }
    if (event.key === "ArrowUp") {
        upArrow();
    }
    if (event.key === "ArrowDown") {
        downArrow();
    }
};