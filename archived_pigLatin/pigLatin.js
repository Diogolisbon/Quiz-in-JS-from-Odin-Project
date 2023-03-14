

function pigLatin(string) {
const vowels = ['a', 'e', 'i', 'o', 'u'];
const firstLetter = string[0].toLowerCase();
const restOfWord = string.slice(1);
const isVowel = vowels.includes(firstLetter);
const pigLatinEnding = isVowel ? 'ay' : `${firstLetter}ay`;
return isVowel ? string + pigLatinEnding : restOfWord + firstLetter + pigLatinEnding;
};


console.log(pigLatin("latin"));
