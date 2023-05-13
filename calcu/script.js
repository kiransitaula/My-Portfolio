// Calculator variables
let displayValue = "0";
let firstOperand = null;
let operator = null;
let shouldResetDisplay = false;

// Function to update the calculator's display
function updateDisplay() {
  const display = document.querySelector("#screen");
  display.value = displayValue;
}

// Function to handle button clicks
function handleButtonClick(value) {
  if (value === "C") {
    // Clear the calculator
    displayValue = "0";
    firstOperand = null;
    operator = null;
  } else if (value === "=") {
    // Evaluate the expression
    if (operator && displayValue !== "") {
      const secondOperand = parseFloat(displayValue);
      displayValue = calculateResult(firstOperand, secondOperand, operator);
      operator = null;
      shouldResetDisplay = true;
    }
  } else if (value === "+" || value === "-" || value === "*" || value === "/") {
    // Set the operator
    if (displayValue !== "") {
      firstOperand = parseFloat(displayValue);
      operator = value;
      shouldResetDisplay = true;
    }
  } else {
    // Append the digit to the display
    if (displayValue === "0" || shouldResetDisplay) {
      displayValue = value;
      shouldResetDisplay = false;
    } else {
      displayValue += value;
    }
  }

  updateDisplay();
}

// Function to calculate the result
function calculateResult(firstOperand, secondOperand, operator) {
  let result = 0;

  switch (operator) {
    case "+":
      result = firstOperand + secondOperand;
      break;
    case "-":
      result = firstOperand - secondOperand;
      break;
    case "*":
      result = firstOperand * secondOperand;
      break;
    case "/":
      result = firstOperand / secondOperand;
      break;
    default:
      break;
  }

  return result.toString();
}

// Event listener for button clicks
const buttons = document.querySelectorAll(".calculator .row input[type='button']");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.value;
    handleButtonClick(value);
  });
});