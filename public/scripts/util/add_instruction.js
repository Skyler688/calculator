export function addInstruction(instruction_list, number, operation) {
  number = number.trim();

  const number_check = instructionType(number);
  const operation_check = instructionType(operation);

  if (number_check === "empty") {
    return false;
  } else if (number_check !== "number") {
    throw new Error("Invalid type passed in argument number");
  }

  if (operation_check !== "operator") {
    throw new Error("Invalid type passed in argument operation");
  }

  instruction_list.push(number);
  instruction_list.push(operation);

  return true;
}

function instructionType(instruction) {
  if (instruction.length === 0) return "empty";

  const num = +instruction;

  const valid_operations = ["/", "*", "-", "+"];

  if (Number.isNaN(num)) {
    if (!valid_operations.includes(instruction)) {
      throw new Error("Invalid operation passed in instruction");
    }

    return "operator";
  }

  return "number";
}
