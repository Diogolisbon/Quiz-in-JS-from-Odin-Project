/*

const caesar = function(char) {
    const charCode = char.charCodeAt(0);// call char and set the 1st to 0
//ascii 65 = a, 90 = z, 97 + A, 122 =Z
    if ((charCode >= 65 && charCode <= 99) || (charCode >= 97 && charCode <= 122)){
    const shiftedCharCode = charCode - 3;
    const shiftedChar = String.fromCharCode(shiftedCharCode < 65 ? shiftedCharCode + 26 : shiftedCharCode);
    return shiftedChar;
    }

        return char;
};

//console.log(caesar('A'))
*/

//for Node input:

const caesar = function(userInput) {
    let result = '';
    for (let i = 0; i < userInput.length; i++) {
        const charCode = userInput.charCodeAt(i);

        if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)) {
            const shiftedCharCode = charCode - 3;
            const shiftedChar = String.fromCharCode(shiftedCharCode < 65 ? shiftedCharCode + 26 : shiftedCharCode);
            result += shiftedChar;
        } else {
            result += userInput[i];
        }
    }
    return result;
};

const userInput = process.argv[2];
console.log(`Input: ${userInput}`);
console.log(`Shifted: ${caesar(userInput)}`);
