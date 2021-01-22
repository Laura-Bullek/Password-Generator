const lowerCase = "abcdefghijklmnopqrstuvwxyz"; // String of lowercase characters
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; //String of uppercase letters
const numbers = "0123456789"; //String of numbers
const specCharacters = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~"; //String of special characters

// Randomizing each string of letters, numbers, and special characters
const randomLowerCase = lowerCase [Math.floor(Math.random() * lowerCase.length)];
const randomUpperCase = upperCase [Math.floor(Math.random() * upperCase.length)];
const randomNumbers = numbers [Math.floor(Math.random() * numbers.length)];
const randomSpecialCharacters = specCharacters[Math.floor(Math.random() * specCharacters.length)];

// Adding all of the variables together to make a random string, one of each variable
console.log(randomLowerCase);

      