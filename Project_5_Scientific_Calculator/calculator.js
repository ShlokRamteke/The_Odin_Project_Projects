// calculator.js

// Function to append the clicked button's value to the display
function appendToDisplay(value) {
    const display = document.getElementById("cal-display");
    display.value += value;
}

// Function to clear the display
function clearDisplay() {
    const display = document.getElementById("cal-display");
    display.value = "";
}

// Function to evaluate and calculate the result
function calculateResult() {
    const display = document.getElementById("cal-display");
    const expression = display.value;

    try {
        const result = evaluateExpression(expression);
        display.value = result;
    } catch (error) {
        display.value = "Error";
    }
}

// Function to evaluate the expression using a safe approach
function evaluateExpression(expression) {
    const tokens = expression.split(/([+\-*/()])/).filter(token => token.trim() !== '');
    const stack = [];
    const operators = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b,
        '/': (a, b) => a / b
    };

    for (let i = 0; i < tokens.length; i++) {
        const token = tokens[i];

        if (!isNaN(parseFloat(token))) {
            stack.push(parseFloat(token));
        } else if (token === '(') {
            stack.push(token);
        } else if (token === ')') {
            let operator = stack.pop();
            let operand2 = stack.pop();

            while (operator !== '(') {
                let operand1 = stack.pop();
                operand2 = operators[operator](operand1, operand2);
                operator = stack.pop();
            }

            stack.push(operand2);
        } else if (operators.hasOwnProperty(token)) {
            stack.push(token);
        }
    }

    let result = stack[0];

    for (let i = 1; i < stack.length; i += 2) {
        const operator = stack[i];
        const operand = stack[i + 1];
        result = operators[operator](result, operand);
    }

    return result;
}
