
1/*function sumAll(num1, num2) {
    // Determine the range of numbers to sum
    const min = Math.min(num1, num2);
    const max = Math.max(num1, num2);
    
    // Sum the numbers in the range
    let sum = 0;
    for (let i = min; i <= max; i++) {
      sum += i;
    }
    
    return sum;
  }
  */
  console.log(sumAll(1, 10));
/*
  function sumAll(num1, num2) {
    let sum = 0;
    let i = Math.min(num1, num2);
  
    while (i <= Math.max(num1, num2)) {
      sum += i;
      i++;
    }
  
    return sum;
  }
  
*/
  function sumAll(num1, num2) {
    if (num1 === num2) {
      return num1;
    } else {
      return num1 + sumAll(num1 + 1, num2);
    }
  }
  

// Do not edit below this line
module.exports = sumAll;
