const repeatString = function(string, num) {
    if (num < 0) return "ERROR";
    let newString = "";
    for (let i = 0; i < num; i ++) {
        newString += string;
    }
    return newString;
};

console.log(repeatString("hello", 3)); // Output: "hellohellohello"
console.log(repeatString("abc", 5)); // Output: ""
console.log(repeatString("xyz", -1)); // Output: "ERROR"


// Do not edit below this line
module.exports = repeatString;
