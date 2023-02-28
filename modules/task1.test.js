test('length of string "hello" should be 5', () => {
  // Arrange
  const stringLength = require('./task1.js');

  // Act
  let result = 5

  // Assert
  expect(stringLength('hello')).toBe(result);
});

test('string length should be at least 1', () => {
  // Arrange
  const stringLength = require('./task1.js');

  // Act
  let min = 1;

  // Assert
  expect(stringLength('hello')).toBeGreaterThanOrEqual(min);
});

test('string length should be no more than 10', () => {
  // Arrange
  const stringLength = require('./task1.js');

  // Act
  let max = 10;
  
  // Assert
  expect(stringLength('hello')).toBeLessThanOrEqual(max);
});