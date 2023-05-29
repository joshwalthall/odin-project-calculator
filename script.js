const display = document.querySelector('#display');
const buttonContainer = document.getElementById('button-container');
const button = document.querySelector('button')

buttonContainer.addEventListener('click', pressButton);

let currentOperandOne = 0;
let currentOperator = '';
let currentOperandTwo = 0;
let displayValue = 0;

function operate (operandOne, operator, operandTwo) {
    let result = 0;
    switch (operator) {
        case '+':
            result = add(operandOne, operandTwo);
            break;
        case '-':
            result = subtract(operandOne, operandTwo);
            break;
        case '*':
            result = multiply(operandOne, operandTwo);
            break;
        case '/':
            result = divide(operandOne, operandTwo);
            break;
    };
    return result;
};

function add (operandOne, operandTwo) {
    return operandOne + operandTwo;
};

function subtract (operandOne, operandTwo) {
    return operandOne - operandTwo;
};

function multiply (operandOne, operandTwo) {
    return operandOne * operandTwo;
};

function divide (operandOne, operandTwo) {
    return operandOne / operandTwo;
};

function pressButton (event) {
    if (event.target.classList.contains('number-button')) {
        let displayText = event.target.textContent;
        updateDisplay(displayText);
    };
};

function updateDisplay (displayText) {
    display.textContent = displayText;
}