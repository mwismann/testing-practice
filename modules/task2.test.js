test('string "hello there" should be returned as "ereht olleh"', () => {
  // Arrange
  const reverseString = require('./task2.js');

  // Act
  let result = 'ereht olleh';
  
  // Assert
  expect(reverseString('hello there')).toBe(result);
});