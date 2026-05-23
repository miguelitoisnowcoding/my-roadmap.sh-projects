// <- How to get userinput ->
// let username;

// document.getElementById("myBtn").onclick = function() {
//   username = document.getElementById("myText").value;
//   document.getElementById("myH1").textContent = `Hello ${username}`;
// }

const countLabel = document.getElementById("myCounter");

function createCounter() {
  let count = 0;

  document.getElementById("increaseBtn").onclick = () => {
    count += 1;
    countLabel.textContent = count;
  }

  const decreaseBtn = document.getElementById("decreaseBtn").onclick = () => {
    count -= 1;
    countLabel.textContent = count;
  }

  document.getElementById("resetBtn").onclick = () => {
    count = 0;
    countLabel.textContent = count;
  }
}

createCounter();