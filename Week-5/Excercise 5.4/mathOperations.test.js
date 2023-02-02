const mathOperations = require("./mathOperations");
describe("mathOperations tests", () => {
  test("adding 1 and 2 gives 3", () => {
    expect(mathOperations.sum(1, 2)).toBe(3);
  });

  test("subtracting 10 and 2 gives 8", () => {
    expect(mathOperations.diff(10, 2)).toBe(8);
  });

  test("multiplying 5 and 2 gives 10", () => {
    expect(mathOperations.product(5, 2)).toBe(10);
  });
});
