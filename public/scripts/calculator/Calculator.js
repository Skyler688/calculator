export class Calculator {
  constructor() {
    this.current_value = null;
  }

  #checkForNull() {
    return this.current_value === null ? true : false;
  }

  setCurrentValue(value) {
    this.current_value = value;
    return this.current_value;
  }

  clear() {
    this.current_value = null;
    return 0;
  }

  divide(value) {
    if (this.#checkForNull) return null;

    const new_value = this.current_value / value;

    // Add checks for handling infinate and undifined results.

    this.current_value = new_value;
    return this.current_value;
  }

  multiply(value) {
    if (this.#checkForNull) return null;

    return this.current_value * value;
  }

  sub(value) {
    if (this.#checkForNull) return null;

    return this.current_value - value;
  }

  add(value) {
    if (this.#checkForNull) return null;

    return this.current_value + value;
  }
}
