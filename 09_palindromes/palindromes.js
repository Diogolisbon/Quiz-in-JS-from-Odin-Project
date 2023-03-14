// to give true or flse(===)

const reverseString = function(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
};

const palindromes = function(str) {
    return str === reverseString(str);
};


console.log(palindromes("racecar")); // true
console.log(palindromes("hello")); // false
console.log(palindromes("A man a plan a canal Panama")); // true*/

//same logic but giving the reversed word
/*
const reverseString = function(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
      newString += str[i];
    }
    return newString;
  };
  
  const reverseWords = function(str) {
    // Split the input string into an array of words
    const words = str.split(" ");
    
    // Reverse the order of words in the array
    const reversedWords = words.reverse();
    
    // Reverse the characters in each word
    const reversedCharacters = reversedWords.map(function(word) {
      return reverseString(word);
    });
    
    // Join the reversed words into a string
    const reversedString = reversedCharacters.join(" ");
    
    // Return the reversed string
    return reversedString;
  };
  
  // Test the reverseWords function with an example input
  console.log(reverseWords("Hello world")); // "dlrow olleH"
  */


