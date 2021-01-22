// Putting all of the randomization of letters, numbers and
// special characters into an object

const randomFuncions = {
    lower : randomLowerCase,
    upper: randomUpperCase,
    number: randomNumbers,
    specCharacters: randomSpecialCharacters
};




const genLowerCase = "abcdefghijklmnopqrstuvwxyz"; // String of lowercase characters
const genUpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; //String of uppercase letters
const genNumbers = "0123456789"; //String of numbers
const getSpecCharacters = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~"; //String of special characters

// Randomizing each string of letters, numbers, and special characters
const randomLowerCase = lowerCase [Math.floor(Math.random() * lowerCase.length)];
const randomUpperCase = upperCase [Math.floor(Math.random() * upperCase.length)];
const randomNumbers = numbers [Math.floor(Math.random() * numbers.length)];
const randomSpecialCharacters = specCharacters[Math.floor(Math.random() * specCharacters.length)];

// Adding all of the variables together to make a random string, one of each variable
console.log(randomSpecialCharacters);


// Slider code

