test('capitalize() should take the string "katana" and return "Katana"', () => {
    // Arrange
    const capitalize = require('./task4.js');

    // Act
    const result = 'Katana';

    // Assert
    expect(capitalize('katana')).toBe(result);
});