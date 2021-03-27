// Generating strings for the password contents
const genLowerCase = "abcdefghijklmnopqrstuvwxyz";
const genUpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const genNumbers = "0123456789"; 
const genSpecCharacters = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~"; 

// Randomized each string of letters, numbers, and special characters
function randomLowerCase () {
  return genLowerCase[Math.floor(Math.random() * genLowerCase.length)]
};
function randomUpperCase () {
  return genUpperCase[Math.floor(Math.random() * genUpperCase.length)]
};
function randomNumbers () {
  return genNumbers[Math.floor(Math.random() * genNumbers.length)]
};
function randomSpecialCharacters () {
  return genSpecCharacters[Math.floor(Math.random() * genSpecCharacters.length)]
};

// Putting all of the randomization of letters, numbers and special characters into an object
const randomFunctions = {
    lower : randomLowerCase,
    upper: randomUpperCase,
    number: randomNumbers,
    yesSpecCharacters: randomSpecialCharacters
};
/* Linking ID elements to the DOM 
(passwordLength, lowerCaseButton, upperCaseButton, numbersButton, noSpecCharRadio, yesSpecCharRadio, generatorButton)*/
const passwordLengthEl = document.getElementById("passwordLength")
const lowerCaseButtonEl = document.getElementById("lowerCaseButton")
const upperCaseButtonEl = document.getElementById("upperCaseButton")
const numbersButtonEl = document.getElementById("numbersButton")
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
  const yesSpecCharChecked = yesSpecCharRadioEl.checked; 
 
  // Changing the inner text of the textArea box with the generated password result,
  // and created the generatePassword function
  resultEl.innerText = generatePassword (
    lowerCaseChecked, 
    upperCaseChecked, 
    numbersChecked, 
    yesSpecCharChecked, 
    passwordLength
  );
});

// Will actually be generating the function
// pulling keys from the randomFunction object
function generatePassword (lower, upper, number, yesSpecCharacters, passwordLength) {
  
    let generatedPassword = "";

    const typesCount = lower + upper + number + yesSpecCharacters;

    // Creating objects so each can have a key/value pairs with a boolean value
     const typesArr = [{lower}, {upper}, {number}, {yesSpecCharacters}].filter

    // Filtering out any value that comes back false (unclicked) and won't be included in the password.
    (item => Object.values(item)[0]);

    // Returning a response when no boxes are checked
    if (typesCount === 0) {
      alert("Please check one or more boxes to continue.");
     }
    // Looping over passwordLength and call the generatePassword function for each type
    for(let i = 0; i < passwordLength; i ++ ) {

      // typesArr.forEach(type => {

      const funcType = typesArr[Math.floor(Math.random()* typesArr.length)]
      const funcName = Object.keys(funcType)[0];

        generatedPassword = generatedPassword + randomFunctions[funcName]();

        
      }      
      const finalPassword = document.getElementById("result");
        finalPassword.value = generatedPassword;
  }
