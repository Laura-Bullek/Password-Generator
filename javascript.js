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
const resultEl = document.getElementById("result")
const generatorButtonEl = document.getElementById("generatorButton")

// Generate event listener when generatorButton is clicked
// Changed passwordLength variable from a string to a number
generatorButtonEl.addEventListener("click", function() {
  const passwordLength = parseInt(passwordLengthEl.value);

  // Adding variables to see when the checkboxes/radio buttons are clicked
  const lowerCaseChecked = lowerCaseButtonEl.checked;
  const upperCaseChecked = upperCaseButtonEl.checked; 
  const numbersChecked = numbersButtonEl.checked; 
  const noSpecCharChecked = noSpecCharRadioEl.checked; 
  const yesSpecCharChecked = yesSpecCharRadioEl.checked; 
 
  // Changing the inner text of the textarea box with the generated password result,
  // and created the generatePassword function
  resultEl.innerText = generatePassword (passwordLength, lowerCaseChecked, upperCaseChecked, numbersChecked, noSpecCharChecked, yesSpecCharChecked)
});

// Function that will actually be generating the function
// pulling keys from the randomFunction object
function generatePassword (lower, upper, number, specCharacters, passwordLength) {

}
