const calculator = {
  add: function(a, b) {
    return a + b;
  },
  subtract: function(a, b) {
    return a - b;
  },
  sum: function(arr) {
    return arr.reduce((total, current) => total + current, 0);
  },
  multiply: function(arr) {
    return arr.reduce((total, current) => total * current, 1);
  },/*
  power: function(a, b) {
    return Math.pow(a, b);
  },
*/
   power: function(base, exponent){
    let result = 1;
    for (let i = 0; i < exponent; i++) {
      result *= base;
    }
    return result;
  },
  
  factorial: function(num) {
    if (num === 0 || num === 1) {
      return 1;
    } else {
      return num * this.factorial(num - 1);
    }
  }
};





console.log(calculator.add(2, 3)); // Expected output: 5
console.log(calculator.subtract(6, 2)); // Expected output: 4
console.log(calculator.sum([1, 2, 3, 4, 5])); // Expected output: 15
console.log(calculator.multiply([2, 3, 4])); // Expected output: 24
console.log(calculator.power(2, 4)); // Expected output: 16
console.log(calculator.factorial(5)); // Expected output: 120
