//take string text input and turn it into an array of individual strings for each letter


//sort and compare array forwards and backwards



const isLetter = function (char) {
    return /^[a-zA-Z0-9]$/.test(char); // Returns true if the character is a letter
};


const palindromes = function (str) { 
    const letterOnly = str.split('').filter(isLetter).join('').toLowerCase('');
    const reversed = letterOnly.split('').reverse().join('');

    if (letterOnly === reversed) {
        return true;
    } else {
        return false
    };
};


// Do not edit below this line
module.exports = palindromes;
