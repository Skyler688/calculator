export function instructionsToDisplayString(instructions) {
  if (!Array.isArray(instructions)) {
    throw new Error("Invalid type passed to function, must be of type Array");
  }

  const raw_string = instructions.toString();

  let filtered_string = "";
  for (let i = 0; i < raw_string.length; i++) {
    if (raw_string[i] === ",") {
      filtered_string = filtered_string + " ";
    } else {
      filtered_string = filtered_string + raw_string[i];
    }
  }

  return filtered_string + " ";
}
