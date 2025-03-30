const display = document.getElementById("display");

function appendValue(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function deleteChar() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        // Using Function constructor for safer evaluation
        const result = new Function('return ' + display.value)();
        display.value = result;
    } catch (error) {
        alert("Invalid Expression");
        clearDisplay();
    }
}
