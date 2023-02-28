class Calculator {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  };

  add() {
    return this.a + this.b;
  };

  subtract() {
    return this.a - this.b;
  };

  divide() {
    return +(this.a / this.b).toFixed(2);
  };

  multiply() {
    return +(this.a * this.b).toFixed(2);
  };
}

module.exports = Calculator;


