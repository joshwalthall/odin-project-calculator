const display = document.querySelector('#display');
const buttonContainer = document.getElementById('button-container');
const button = document.querySelector('button')

buttonContainer.addEventListener('click', pressButton);

const memory = {
    displayValue: '',
    operandOne: null,
    operandTwo: null,
    operator: null,
}

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
        let buttonText = event.target.textContent;
        updateOperand(buttonText);
        updateDisplay(memory.operandOne);
    };
};

function updateOperand (inputText) {
    if (memory.operandOne === null) {
        memory.operandOne = inputText;
    } else if (memory.operandOne.length == 16) {
        return;
    } else {
        memory.operandOne += inputText;
    };
};

function updateDisplay (displayText) {
    memory.displayValue = displayText;
    display.textContent = memory.displayValue;
};