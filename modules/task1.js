function stringLength(string) {
  return ([...string].reduce(char => char + 1, 0) > 0 
  && [...string].reduce(char => char + 1, 0) <= 10) ? 
  [...string].reduce(char => char + 1, 0) : 
  'Error: your string length should be at least 1 and no more than 10';
}

module.exports = stringLength;