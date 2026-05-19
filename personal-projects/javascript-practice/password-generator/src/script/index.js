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
const strengthStatus = document.getElementById("strengthStatus");

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
  const maxLength = 15; 
  let lengthApprove = false;
  let lowerCaseApprove = false;
  let upperCaseApprove = false;
  let numberApprove = false;
  let specialCharApprove = false;

  for (let i = 0; i < password.length; i++) {
    if (password < minLength || password > maxLength) {
      console.log('No!');
    } else {
      lengthApprove = true;
    }
  }

  for (let i = 0; i < lowerCase.length; i++) {
    if (password.includes(lowerCase[i])) {
      console.log('Yes');
      lowerCaseApprove = true;
    } else {
      console.log('NO');
    }
  }

  for (let i = 0; i < upperCase.length; i++) {
    if (password.includes(upperCase[i])) {
      console.log('Yes');
      upperCaseApprove = true;
    } else {
      console.log('NO');
    }
  }

  for (let i = 0; i < numbers.length; i++) {
    if (password.includes(numbers[i])) {
      console.log('Yes');
      numberApprove = true;
    } else {
     console.log('NO');
    }
  }

  for (let i = 0; i < specialChars.length; i++) {
    if (password.includes(specialChars[i])) {
      console.log('Yes');
      specialCharApprove = true;
    } else {
      console.log('NO');
    }
  }

  if (lengthApprove == false) {
    strengthStatus.textContent = 'Please keep your password within 5 - 15 characters';
  } else if (lowerCase == false || upperCase == false) {
    strengthStatus.textContent = 'Please include a lowercase and a uppercase character in your password';
  } else if (numberApprove == false || specialCharApprove == false) {
    strengthStatus.textContent = 'Please include a number and special character in your password';
  } else {
    strengthStatus.textContent = 'Your Password is Strong!';
  }
}