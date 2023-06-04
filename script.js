const memory = {
    displayValue: '0',
    operandOne: 0,
    operator: null,
    operandTwo: null,
};

const display = document.querySelector('#display');
const buttonContainer = document.getElementById('button-container');
const operandMaxLength = 16;

buttonContainer.addEventListener('click', pressButton);

// Core mathematic operations
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

function getCurrentOperand() {
    let currentOperand = '';
    if (memory.operator === null) {
        currentOperand = 'operandOne';
    } else if (memory.operator !== null) {
        currentOperand = 'operandTwo';
    };
    return currentOperand;
};

// Run operations and update memory
function operate() {
    let operandOne = memory.operandOne;
    let operator = memory.operator;
    let operandTwo = memory.operandTwo;
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
    memory.operandOne = result;
    memory.operator = null;
    memory.operandTwo = null;
    memory.displayValue = String(memory.operandOne);
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

function getNumberAction(numberInput) {
    let numberAction = '';
    if ((memory.displayValue.length >= operandMaxLength && memory.operator === null) ||
        (memory.displayValue.length >= operandMaxLength && memory.operator !== null && memory.operandTwo !== null) ||
        (numberInput === '.' && memory.displayValue.includes('.')) ||
        (numberInput === '0' && memory.displayValue === '0')) {
            numberAction = 'no-action';
    } else if ((memory.displayValue === '0' && numberInput !== '.') ||
                (memory.operator !== null && memory.operandTwo === null)) {
        numberAction = 'replace';
    } else {
        numberAction = 'append';
    };
    return numberAction;
};

function handleNumberInput(numberInput) {
    numberAction = getNumberAction(numberInput);
    console.log(`numberAction = ${numberAction}`);
    switch (numberAction) {
        case 'replace':
            memory.displayValue = numberInput;
            memory[getCurrentOperand()] = Number(numberInput);
            break;
        case 'append':
            memory.displayValue += numberInput;
            memory[getCurrentOperand()] = Number(memory.displayValue);
            break;
    };
};

function handleOperatorInput(operatorInput) {
    if (memory.operator === null) {
        memory.operator = operatorInput;
    };
};

function handleClearInput() {
    memory.operandOne = null;
    memory.operator = null;
    memory.operandTwo = null;
    memory.displayValue = '0';
};

function handleEqualsInput() {
    if (memory.operandOne !== null &&
        memory.operator !== null &&
        memory.operandTwo !== null) {
            operate();
        };
};

function pressButton(event) {
    console.log(event.target.id);
    buttonType = getButtonType(event.target);
    switch (buttonType) {
        case 'number':
            numberInput = event.target.textContent;
            handleNumberInput(numberInput);
            break;
        case 'operator':
            operatorInput = event.target.textContent;
            handleOperatorInput(operatorInput);
            break;
        case 'clear':
            handleClearInput();
            break;
        case 'equals':
            handleEqualsInput();
    };
    updateDisplay()
};

function updateDisplay() {
    display.textContent = memory.displayValue;
};