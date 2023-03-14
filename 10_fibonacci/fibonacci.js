// simple loop to calculate the position of the number 
/*
const fibonacci = function(num) {
var a= 1; b = 0, temp = 0;

while (num >= 0) {
    temp = a;
    a = a + b;
    b = temp;
    num--;
}

return b;
};

console.log(fibonacci(2));*/

//funcion using recurssion 
/*
const fibonacci = function(num) {
    if (num <= 0) {
   return 0;
    }else if (num === 1 || num === 2) {
        return 1;
    } else {
    return fibonacci(num - 1) + fibonacci(num - 2);
}
};*/

//Another method using a forloop and arrays without checking the position, but showing the first 10 fdigits

const fibonacci = function() {
    var i;
    var fib = [0, 1];

    for (i = 2; i <= 10-2; i++) {
        fib[i] = fib[i-2] + fib[i-1];
    }
    return fib;
};

//console.log(fibonacci(3));

// Do not edit below this line
module.exports = fibonacci;
