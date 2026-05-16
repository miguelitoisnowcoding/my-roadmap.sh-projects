
const passwordResult = document.getElementById("passwordResult");
const passwordLength = document.getElementById("passwordLengthRange");

const includeLowerCase = document.getElementById("includeLowerCase").checked;
const includeUpperCase = document.getElementById("includeUpperCase").checked;
const includeNumbers = document.getElementById("includeNumbers").checked;
const includeSpecialChars = document.getElementById("includeSpecialChars").checked;

const rangeValue = document.getElementById("passwordLengthRange__value");

// Range Input Display
rangeValue.textContent = passwordLength.value;

passwordLength.oninput = function() {
rangeValue.textContent = this.value;
}

let length = passwordLength.value;

console.log(includeLowerCase);
  console.log(includeUpperCase);
  console.log(includeNumbers);
  console.log(includeSpecialChars);

function generatePassword(length, includeLowerCase, includeUpperCase, includeNumbers, includeSpecialChars) {  
  console.log(length);
  
  const lowerCase = "abcdefghijklmnopqrstuvwxyz";
  const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "1234567890";
  const specialChars = "!@#$%^&*()_+=-";
  
  let allowedChars = "";
  let password = ""

  allowedChars += includeLowerCase ? lowerCase : "";
  allowedChars += includeUpperCase ? upperCase : "";
  allowedChars += includeNumbers ? numbers : "";
  allowedChars += includeSpecialChars ? specialChars : "";

  console.log(allowedChars);
  
  return '';
}



