import { Calculator } from "../calculator/Calculator.js";

export function calculate(instructions) {
  const calculator = new Calculator();

  const initial_num = +instructions[0];
  if (Number.isNaN(initial_num)) {
    throw new Error("Invalid instruction, initial number is NaN");
  }

  calculator.setCurrentValue(instructions[0]);

  let operation = "";
  for (let i = 1; i < instructions.length; i++) {
    if (operation.length === 0) {
      operation = instructions[i];
    } else {
      switch (operation) {
        case "/":
          calculator.divide(instructions[i]);
          break;
        case "*":
          calculator.multiply(instructions[i]);
          break;
        case "-":
          calculator.sub(instructions[i]);
          break;
        case "+":
          calculator.add(instructions[i]);
          break;
        default:
          throw new Error("Invalid operator found in instructions");
      }

      operation = "";
    }
  }
  let result = calculator.getValue();

  return result;
}
