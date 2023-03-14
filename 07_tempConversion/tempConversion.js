/*
const convertToCelsius = function(far) {
  var cel = (far -32) * (9/5);
  return cel;
};

const convertToFahrenheit = function(cel) {
var far = cel *(9/5) + 32;
return far;
};


 console.log(convertToCelsius(59));

*/
/*
function cToF(celsius) 
{
  var cTemp = celsius;
  var cToFahr = cTemp * 9 / 5 + 32;
  var message = cTemp+'\xB0C is ' + cToFahr + ' \xB0F.';
    console.log(message);
}

function fToC(fahrenheit) 
{
  var fTemp = fahrenheit;
  var fToCel = (fTemp - 32) * 5 / 9;
  var message = fTemp+'\xB0F is ' + fToCel + '\xB0C.';
    console.log(message);
} 

cToF(60);
fToC(45);
*/

const convertToCelsius = function (fahrenheit) {
  return Math.round((fahrenheit - 32) * (5 / 9) * 10) / 10;
};

const convertToFahrenheit = function (celsius) {
  return Math.round(((celsius * 9) / 5 + 32) * 10) / 10;
};

module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};

console.log(convertToCelsius(68)); // Output: 20
console.log(convertToFahrenheit(20)); // Output: 68
