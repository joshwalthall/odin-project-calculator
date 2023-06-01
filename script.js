const memory = {
    displayValue: '',
    operandOne: null,
    operandTwo: null,
    operator: null,
    currentOperand: '0',
};

const display = document.querySelector('#display');
const buttonContainer = document.getElementById('button-container');
const operandMaxLength = 16;
const operators = ['+', '-', '*', '/'];

buttonContainer.addEventListener('click', pressButton);

function add(operandOne, operandTwo) {
    return operandOne + operandTwo;
};

function subtract(operandOne, operandTwo) {
    return operandOne - operandTwo;
};

function multiply(operandOne, operandTwo) {
    return operandOne * operandTwo;
};

function divide(operandOne, operandTwo) {
    return operandOne / operandTwo;
};

function operate(operandOne, operator, operandTwo) {
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

function getButtonType(eventTarget) {
    if (eventTarget.classList.contains('number-button')) {
        return 'number';
    } else if (eventTarget.classList.contains('operator-button')) {
        return 'operator';
    } else if (eventTarget.id === 'button-clear') {
        return 'clear';
    } else if (eventTarget.id === 'button-equals') {
        return 'equals';
    };
};

function handleNumberInput(numberInput) {
    if (memory.currentOperand === '0') {
        memory.currentOperand = numberInput;
    } else if (numberInput === '.' && memory.currentOperand.includes('.')) {
        return;
    } else if (memory.currentOperand != '0' && !(memory.currentOperand.length >= operandMaxLength)) {
        memory.currentOperand += numberInput;
    };
};

function handleClearInput() {
    memory.operandOne = null;
    memory.operator = null;
    memory.operandTwo = null;
    memory.currentOperand = '0';
};

function pressButton(event) {
    console.log(event.target.id);
    buttonType = getButtonType(event.target);
    switch (buttonType) {
        case 'number':
            numberInput = event.target.textContent;
            handleNumberInput(numberInput);
            updateDisplay(memory.currentOperand);
            break;
        case 'clear':
            handleClearInput();
            updateDisplay(memory.currentOperand);
            break;
    };
};

function updateDisplay(displayText) {
    memory.displayValue = displayText;
    display.textContent = memory.displayValue;
};