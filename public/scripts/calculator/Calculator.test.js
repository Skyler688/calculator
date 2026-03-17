import { it, expect, beforeEach, describe } from "vitest";

import { Calculator } from "./Calculator";

let calc;

describe("Calculator", () => {
  beforeEach(() => {
    calc = new Calculator();
  });
});
