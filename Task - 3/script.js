let display = document.getElementById('display');
let currentNumber = '';
let previousNumber = '';
let operator = '';

function appendNumber(number) {
    currentNumber += number;
    display.value = currentNumber;
}

function performOperation(op) {
    if (currentNumber === '') {
        return;
    }

    previousNumber = currentNumber;
    operator = op;
    currentNumber = '';
    display.value = '';
}

function clearDisplay(){
    display.value = '';
    currentNumber = '';
    operator = '';
    previousNumber = '';
}

function calculate() {
    if (currentNumber === '') {
        return;
    }

    let result = eval(previousNumber + operator + currentNumber);
    display.value = result;
    previousNumber = result;
}