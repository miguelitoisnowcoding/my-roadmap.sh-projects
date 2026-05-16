const passwordResult = document.getElementById("passwordResult");
const passwordLength = document.getElementById("passwordLengthRange");
const rangeValue = document.getElementById("passwordLengthRange__value");
const generateBtn = document.getElementById("generateBtn");

// Range Input Display
rangeValue.textContent = passwordLength.value;

passwordLength.oninput = function() {
rangeValue.textContent = this.value;
}

generateBtn.addEventListener("click", () => {
  console.log("Hello");
});

function generatePassword(length, lowerCase, upperCase, numbers, specialChars) {  
  const includeLowerCase = document.getElementById("includeLowerCase");
  const includeUpperCase = document.getElementById("includeUpperCase");
  const includeNumbers = document.getElementById("includeNumbers");
  const includeSpecialChars = document.getElementById("includeSpecialChars");

  let length = passwordLength.value;
  const lowerCase = "abcdefghijklmnopqrstuvwxyz";
  const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "1234567890";
  const specialChars = "!@#$%^&*()_+=-";

  let allowedChars = "";
  let password = ""

  if (includeLowerCase.checked) {
    allowedChars += lowerCase;
  } else if (includeUpperCase.checked) {
    allowedChars += upperCase;
  } else if (includeNumbers.checked) {
    allowedChars += numbers;
  } else if (includeSpecialChars.checked) {
    allowedChars += specialChars;
  } else {
    passwordResult.textContent = `Check At Least One Choice`;
  }
  console.log(allowedChars);
}




