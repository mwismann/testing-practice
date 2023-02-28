function stringLength(string) {
  if (string.length < 1 || string.length > 10) {
    throw new Error('String length should be between 1 and 10')
  } else {
    return string.length;
  }
}

module.exports = stringLength;