export class Calculator {
  constructor() {
    this.current_value = null;
  }

  #checkForNull() {
    if (this.current_value === null) {
      throw new Error("Current value must be set before using an operator.");
    }
  }

  #validateValue(value) {
    const num = +value; // if the value is a string attempt to convert to number.

    if (Number.isNaN(num)) {
      throw new TypeError("Passed value must be of type number.");
    }

    return num;
  }

  setCurrentValue(value) {
    const num = this.#validateValue(value);
    this.current_value = num;
  }

  clear() {
    this.current_value = null;
  }

  divide(value) {
    const num = this.#validateValue(value);
    this.#checkForNull();

    const new_value = this.current_value / num;

    // Add checks for handling infinate and undifined results.

    this.current_value = new_value;
  }

  multiply(value) {
    const num = this.#validateValue(value);
    this.#checkForNull();

    this.current_value = this.current_value * num;
  }

  sub(value) {
    const num = this.#validateValue(value);
    this.#checkForNull();

    this.current_value = this.current_value - num;
  }

  add(value) {
    const num = this.#validateValue(value);
    this.#checkForNull();

    this.current_value = this.current_value + num;
  }

  getValue() {
    this.#checkForNull();

    return this.current_value;
  }
}
