// Generate Password

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

// Check Password 
const checkBtn = document.getElementById("checkBtn");
const output = document.getElementById("output");
const lengthStrength = document.getElementById("lengthStrength");
const upperCaseStrength = document.getElementById("upperCaseStrength");
const lowerCaseStrength = document.getElementById("lowerCaseStrength");
const numberStrength = document.getElementById("numberStrength");
const specialCharStrength = document.getElementById("specialCharStrength");

checkBtn.onclick = function() {
  const passwordInput = document.getElementById("passwordInput").value;

  output.textContent = passwordInput;

  checkPassword(passwordInput);
}

function checkPassword(password) {
  const lowerCase = "abcdefghijklmnopqrstuvwxyz";
  const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "1234567890";
  const specialChars = "!@#$%^&*()_+=-";
  const minLength = 5;
  let lengthApprove = false;
  let lowerCaseApprove = false;
  let upperCaseApprove = false;
  let numberApprove = false;
  let specialCharApprove = false;

  for (let i = 0; i < password.length; i++) {
    if (password.length >= minLength) {
      lengthApprove = true;
      break;
    } else {
      console.log('No!');
    }
  }
  lengthStrength.textContent = lengthApprove ? '/' : 'X'

  // for (let i = 0; i < lowerCase.length; i++) {
  //   if (password.includes(lowerCase[i])) {
  //     console.log('Yes');
  //     lowerCaseApprove = true;
  //     break;
  //   } else {
  //     console.log('NO');
  //   }
  // }

  lowerCaseApprove = /[a-z]/.test(password);
  lowerCaseStrength.textContent = lowerCaseApprove ? '/' : 'X'

  // for (let i = 0; i < upperCase.length; i++) {
  //   if (password.includes(upperCase[i])) {
  //     console.log('Yes');
  //     upperCaseApprove = true;
  //     break;
  //   } else {
  //     console.log('NO');
  //   }
  // }

  upperCaseApprove = /[A-Z]/.test(password);
  upperCaseStrength.textContent = upperCaseApprove ? '/' : 'X';

  // for (let i = 0; i < numbers.length; i++) {
  //   if (password.includes(numbers[i])) {
  //     console.log('Yes');
  //     numberApprove = true;
  //     break;
  //   } else {
  //    console.log('NO');
  //   }
  // }

  numberApprove = /[0-9]/.test(password);
  numberStrength.textContent = numberApprove ? '/' : 'X';

  // for (let i = 0; i < specialChars.length; i++) {
  //   if (password.includes(specialChars[i])) {
  //     console.log('Yes');
  //     specialCharApprove = true;
  //     break;
  //   } else {
  //     console.log('NO');
  //   }
  // }

  specialCharApprove = /[!@#$%^&*()_+=-]/.test(password); 
  specialCharStrength.textContent = specialCharApprove ? '/' : 'X';
}