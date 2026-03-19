import { it, expect, beforeEach, describe, test } from "vitest";

import { Calculator } from "./Calculator";

let calc;

describe("Calculator", () => {
  beforeEach(() => {
    calc = new Calculator();
  });

  describe("setCurrentValue()", () => {
    it("should throw an error if a number is not passed to setCurrentValue()", () => {
      const invalid_value = NaN;

      const resultSet = () => {
        calc.setCurrentValue(invalid_value);
      };

      expect(resultSet).toThrow(/Passed value must be of type number./);
    });

    it("should NOT throw an error if number is passed as a string", () => {
      const num_string = "100.0";

      const resultSet = () => {
        calc.setCurrentValue(num_string);
      };

      expect(resultSet).not.toThrow();
    });
  });

  describe("divide()", () => {
    it("should throw an error if a number is not passed.", () => {
      calc.setCurrentValue(100);

      const invalid_value = NaN;

      const resultFn = () => {
        calc.divide(invalid_value);
      };

      expect(resultFn).toThrow(/Passed value must be of type number./);
    });

    it("should NOT throw an error if number is passed as a string.", () => {
      calc.setCurrentValue(100);

      const num_string = "2.2";

      const resultFn = () => {
        calc.divide(num_string);
      };

      expect(resultFn).not.toThrow();
    });
  });
});
