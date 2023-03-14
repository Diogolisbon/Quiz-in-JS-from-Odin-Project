/*const reverseString = function(str) {
        return str.split("").reverse().join("");
    }*/

/*const reverseString = function(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}*/

function reverseString(str) {
    if (str === "")
      return "";
    else
      return reverseString(str.substr(1)) + str.charAt(0);
  }
  reverseString("hello");

console.log(reverseString("hello"));// Do not edit below this line
module.exports = reverseString;
