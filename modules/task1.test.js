test('length of string "hello" should be between 1 and 10', () => {
  // Arrange
  const stringLength = require('./task1.js');

  // Act
  let min = 1;
  let max = 10;

  // Assert
  expect(stringLength('hello')).toBeGreaterThanOrEqual(min);
  expect(stringLength('hello')).toBeLessThanOrEqual(max);
});