
const passwordResult = document.getElementById("passwordResult");
const passwordValue = document.getElementById("passwordValue");
const generateBtn = document.getElementById("generateBtn");

generateBtn.addEventListener("click", () => {
  let passwordLength = passwordValue.value;
  const includeLowerCase = document.getElementById("includeLowerCase").checked;
  const includeUpperCase = document.getElementById("includeUpperCase").checked;
  const includeNumbers = document.getElementById("includeNumbers").checked;
  const includeSpecialChars = document.getElementById("includeSpecialChars").checked;

  generatePassword(passwordLength, includeLowerCase, includeUpperCase, includeNumbers, includeSpecialChars);
});

function generatePassword(length, includeLowerCase, includeUpperCase, includeNumbers, includeSpecialChars) {  

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

  for (let i = 0; i < length; i++) {
    let randomChar = Math.floor(Math.random() * allowedChars.length);
    password += allowedChars[randomChar]; 
  }
  
  return passwordResult.textContent = password;
}



