const InCelcius = document.getElementById("myCelcius");
const InFahren = document.getElementById("myFahren");
const InKelvin = document.getElementById("myKelvin");
const OutCelcius = document.getElementById("myConCelcius");
const OutFahren = document.getElementById("myConFahren");
const OutKelvin = document.getElementById("myConKelvin");
const submitBtn = document.getElementById("myBtn");
const resultText = document.getElementById("myP");

function createTempConverter() {
  const kConstant = 273.15;
  const fConstantW = 32;
  const fConstantF = 5/9;
  let convertedValue;

  submitBtn.onclick = function() {
    let userTemp = document.getElementById("myTemp").value;
    userTemp = Number(userTemp);

    // Celcius to Other Temp

    if (InCelcius.checked && OutFahren.checked) {
      convertedValue = userTemp * fConstantF + fConstantW;
      resultText.textContent = `Fahrenheit: ${convertedValue.toFixed(2)} °F`;
    } else if (InCelcius.checked && OutKelvin.checked) {
      convertedValue = userTemp + kConstant;
      resultText.textContent = `Kelvin: ${convertedValue.toFixed(2)} K`;;
    } else if (InCelcius.checked && OutCelcius.checked) {
      resultText.textContent = `You checked the same type.`;
    }

    // Fahrenheit to Other Temp

    if (InFahren.checked && OutCelcius.checked) {
      convertedValue = (userTemp - fConstantW) *  fConstantF;
      resultText.textContent = `Celcius: ${convertedValue.toFixed(2)} °C`;
    } else if (InFahren.checked && OutKelvin.checked) {
      convertedValue = (userTemp - fConstantW) * fConstantF + kConstant;
      resultText.textContent = `Kelvin: ${convertedValue.toFixed(2)} K`;
    } else if (InFahren.checked && InFahren.checked) {
      resultText.textContent = `You checked the same type.`;
    }

    // Kelvin to Other Temp

    if (InKelvin.checked && OutCelcius.checked) {
      convertedValue = userTemp - kConstant;
      resultText.textContent = `Celcius: ${convertedValue.toFixed(2)} °C`;
    } else if (InKelvin.checked && OutFahren.checked) {
      convertedValue = (userTemp - kConstant) * fConstantF + fConstantW;
      resultText.textContent = `Fahrenheit: ${convertedValue.toFixed(2)} °F`;
    } else if (InKelvin.checked && OutKelvin.checked) {
      resultText.textContent = `You checked the same type.`;
    }
  }
}

createTempConverter();