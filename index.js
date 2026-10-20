let input = document.getElementById("inputBox");
let output = document.getElementById("outputBox");

let history = [];
let historyIndex = -1;

function addChar(char) {
    input.value = input.value + char;
    input.focus();
}

function calculate() {
    if (input.value === "") return;

    try {
        let text = input.value;
        text = text.replace(/÷/g, "/");
        text = text.replace(/\^/g, "**");

        let result = eval(text);
        output.textContent = result;

        history.push(input.value);
        historyIndex = history.length;
    } catch (e) {
        output.textContent = "Error";
    }
}

function upArrow() {
    if (history.length === 0) return;
    if (historyIndex > 0) {
        historyIndex = historyIndex - 1;
    } else {
        historyIndex = 0;
    }
    input.value = history[historyIndex];
}

function downArrow() {
    if (history.length === 0) return;
    if (historyIndex < history.length - 1) {
        historyIndex = historyIndex + 1;
        input.value = history[historyIndex];
    } else {
        historyIndex = history.length;
        input.value = "";
    }
}

function leftArrow() {
    input.selectionStart = input.selectionStart - 1;
    input.selectionEnd = input.selectionStart;
    input.focus();
}

function rightArrow() {
    input.selectionStart = input.selectionStart + 1;
    input.selectionEnd = input.selectionStart;
    input.focus();
}

document.addEventListener("keydown", function(event) {

}

);
