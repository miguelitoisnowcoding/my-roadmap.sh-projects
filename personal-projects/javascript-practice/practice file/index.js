const output = document.getElementById("output");
const submitBtn = document.getElementById("submitBtn");

submitBtn.onclick = function() {
  const fullName = document.getElementById("fullName").value;

  let firstName = fullName.slice(0, fullName.indexOf(" "));
  let lastName = fullName.slice(fullName.indexOf(" "));

  output.textContent = `Your first name is ${firstName} and your last name is ${lastName}`;
}