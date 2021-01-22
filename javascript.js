// Generating strings for the password contens
const genLowerCase = "abcdefghijklmnopqrstuvwxyz";
const genUpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const genNumbers = "0123456789"; 
const genSpecCharacters = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~"; 

// Randomizing each string of letters, numbers, and special characters
const randomLowerCase = genLowerCase [Math.floor(Math.random() * genLowerCase.length)];
const randomUpperCase = genUpperCase [Math.floor(Math.random() * genUpperCase.length)];
const randomNumbers = genNumbers [Math.floor(Math.random() * genNumbers.length)];
const randomSpecialCharacters = genSpecCharacters [Math.floor(Math.random() * genSpecCharacters.length)];

// Testing each randomizing variable
console.log(randomSpecialCharacters);

// Putting all of the randomization of letters, numbers and special characters into an object
const randomFuncions = {
    lower : randomLowerCase,
    upper: randomUpperCase,
    number: randomNumbers,
    specCharacters: randomSpecialCharacters
};

/* Linking ID elements to the DOM 
(passwordLength, lowerCaseButton, upperCaseButton, numbersButton, noSpecCharRadio, yesSpecCharRadio, generatorButton)*/
const passwordLengthEl = document.getElementById("passwordLength")
const lowerCaseButtonEl = document.getElementById("lowerCaseButton")
const upperCaseButtonEl = document.getElementById("upperCaseButton")
const numbersButtonEl = document.getElementById("numbersButton")
const noSpecCharRadioEl = document.getElementById("noSpecCharRadio")
const yesSpecCharRadioEl = document.getElementById("yesSpecCharRadio")
const generatorButtonEl = document.getElementById("generatorButton")




// Slider code

