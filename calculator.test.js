const Calculator = require("./calculator")

const calc = new Calculator;

describe('Calculator class tests:', () => {  
  test('Addition', () => {
    expect(calc.add(1, 2))
      .toBe(3);
  });

  test('Subtraction', () => {
    expect(calc.subtract(1, 1))
      .toBe(0);
  });
  
  test('Multiplication', () => {
    expect(calc.multiply(2, 2))
      .toBe(4);
  });

  test('Division', () => {
    expect(calc.divide(20, 2))
      .toBe(10);
  });
});