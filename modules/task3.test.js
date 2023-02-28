describe('Calculator add() method', () => {
  test('add() method takes 5 + 2 and returns 7', () => {
    // Arrange
    const Calculator = require('./task3.js');
    const calc = new Calculator(5, 2);

    // Act
    const result = 7;

    // Assert
    expect(calc.add()).toBe(result);
  });

  test('add() method takes 10 + 22 and returns 32', () => {
    // Arrange
    const Calculator = require('./task3.js');
    const calc = new Calculator(10, 22);

    // Act
    const result = 32;

    // Assert
    expect(calc.add()).toBe(result);
  });

  test('add() method takes 18 + 3 and returns 21', () => {
    // Arrange
    const Calculator = require('./task3.js');
    const calc = new Calculator(18, 3);

    // Act
    const result = 21;

    // Assert
    expect(calc.add()).toBe(result);
  });
});

describe('Calculator subtract() method', () => {
  test('subtract() method takes 5 - 2 and returns 3', () => {
    // Arrange
    const Calculator = require('./task3.js');
    const calc = new Calculator(5, 2);

    // Act
    const result = 3;

    // Assert
    expect(calc.subtract()).toBe(result);
  });

  test('subtract() method takes 35 - 65 and returns -30', () => {
    // Arrange
    const Calculator = require('./task3.js');
    const calc = new Calculator(35, 65);

    // Act
    const result = -30;

    // Assert
    expect(calc.subtract()).toBe(result);
  });

  test('subtract() method takes -5 - 2 and returns -7', () => {
    // Arrange
    const Calculator = require('./task3.js');
    const calc = new Calculator(-5, 2);

    // Act
    const result = -7;

    // Assert
    expect(calc.subtract()).toBe(result);
  });
});

describe('Calculator divide() method', () => {
  test('divide() method takes 5 / 2 and returns 2.5', () => {
    // Arrange
    const Calculator = require('./task3.js');
    const calc = new Calculator(5, 2);

    // Act
    const result = 2.5;

    // Assert
    expect(calc.divide()).toBe(result);
  });

  test('divide() method takes 0 / 2 and returns 0', () => {
    // Arrange
    const Calculator = require('./task3.js');
    const calc = new Calculator(0, 2);

    // Act
    const result = 0;

    // Assert
    expect(calc.divide()).toBe(result);
  });

  test('divide() method takes 2.5 / 3.5 and returns 0.71', () => {
    // Arrange
    const Calculator = require('./task3.js');
    const calc = new Calculator(2.5, 3.5);

    // Act
    const result = 0.71;

    // Assert
    expect(calc.divide()).toBe(result);
  });
});

describe('Calculator multiply() method', () => {
  test('multiply() method takes 13 * 0 and returns 0', () => {
    // Arrange
    const Calculator = require('./task3.js');
    const calc = new Calculator(13, 0);

    // Act
    const result = 0;

    // Assert
    expect(calc.multiply()).toBe(result);
  });

  test('multiply() method takes 2.56 * 2.45 and returns 6.27', () => {
    // Arrange
    const Calculator = require('./task3.js');
    const calc = new Calculator(2.56, 2.45);

    // Act
    const result = 6.27;

    // Assert
    expect(calc.multiply()).toBe(result);
  });

  test('multiply() method takes 54 * 25.6 and returns 1382.4', () => {
    // Arrange
    const Calculator = require('./task3.js');
    const calc = new Calculator(54, 25.6);

    // Act
    const result = 1382.4;

    // Assert
    expect(calc.multiply()).toBe(result);
  });
});