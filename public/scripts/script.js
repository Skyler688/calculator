// ################# DOM ##################

const operators = {
  clear: document.getElementById("clear"),
  negative_pos: document.getElementById("negative_pos"),
  divide: document.getElementById("divide"),
  multiply: document.getElementById("multiply"),
  sub: document.getElementById("sub"),
  add: document.getElementById("add"),
  equal: document.getElementById("equal"),
};

const numbers = [];
for (let i = 0; i <= 9; i++) {
  numbers.push(document.getElementById(`num_${i}`));
}

const dot = document.getElementById("dot");

const display = document.getElementById("display_value");

// Import functions
import { addInstruction } from "./util/add_instruction.js";
import { instructionsToDisplayString } from "./util/to_display.js";
import { calculate } from "./util/calculate.js";

// ################## NUM EVENTS ###################
// This is the string used to assemble the calculations to be done.
const instructions = [];

let number_buffer = "";

numbers.forEach((number, index) => {
  number.addEventListener("mouseup", () => {
    if (number_buffer.length >= 19) return;

    number_buffer = number_buffer + String(index);
    display.textContent =
      instructionsToDisplayString(instructions) + number_buffer;
  });
});

dot.addEventListener("mouseup", () => {
  if (number_buffer >= 19) return;

  if (number_buffer.includes(".")) return;
  number_buffer = number_buffer + ".";
  display.textContent =
    instructionsToDisplayString(instructions) + number_buffer;
});

// ############### OPERATOR EVENTS ##################

// Clear
operators.clear.addEventListener("mouseup", () => {
  number_buffer = "";
  display.textContent = "";
  instructions.length = 0; // emptying the array
});

// Negative positive toggle
operators.negative_pos.addEventListener("mouseup", () => {
  if (number_buffer.includes("-")) {
    number_buffer = number_buffer.slice(1, number_buffer.length);
  } else {
    number_buffer = "-" + number_buffer.trim();
  }

  display.textContent =
    instructionsToDisplayString(instructions) + number_buffer;
});

// Divide
operators.divide.addEventListener("mouseup", () => {
  if (number_buffer.length < 0 && number_buffer === ".") return;

  const operation = "/";
  if (!addInstruction(instructions, number_buffer, operation)) return;

  number_buffer = "";
  display.textContent = instructionsToDisplayString(instructions);
});

// Multiply
operators.multiply.addEventListener("mouseup", () => {
  if (number_buffer.length < 0 && number_buffer === ".") return;

  const operation = "*";
  if (!addInstruction(instructions, number_buffer, operation)) return;

  number_buffer = "";
  display.textContent = instructionsToDisplayString(instructions);
});

// Subtract
operators.sub.addEventListener("mouseup", () => {
  if (number_buffer.length < 0 && number_buffer === ".") return;

  const operation = "-";
  if (!addInstruction(instructions, number_buffer, operation)) return;

  number_buffer = "";
  display.textContent = instructionsToDisplayString(instructions);
});

// Add
operators.add.addEventListener("mouseup", () => {
  if (number_buffer.length < 0 && number_buffer === ".") return;

  const operation = "+";
  if (!addInstruction(instructions, number_buffer, operation)) return;

  number_buffer = "";
  display.textContent = instructionsToDisplayString(instructions);
});

// Equal
operators.equal.addEventListener("mouseup", () => {
  // Cleaning up the instruction list before calculation.
  const num_check = +number_buffer;
  if (number_buffer.length == 0 || Number.isNaN(num_check)) {
    instructions.pop();
  } else {
    instructions.push(number_buffer);
  }

  const result = calculate(instructions);
  instructions.length = 0;

  console.log(String(result));
  number_buffer = String(result);
  display.textContent = result;
});
