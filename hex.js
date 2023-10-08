const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 'A', 'B' , 'C' , 'D' , 'E' , 'F'];

// Variables
const btn = document.getElementById("btn");
const color = document.querySelector(".color");
const body = document.querySelector('body');
const span = document.querySelector('span');


// Functions
function getRandomNumber() {
  const randomNumber = Math.floor(Math.random() * hex.length);
  return randomNumber;
}

function changeColor() {
  let hexNumber = '#';
  for (let i = 0; i < 6; i++) {
    hexNumber += hex[getRandomNumber()];
  }

  span.textContent = hexNumber;
  body.style.backgroundColor = hexNumber;
}


// Event Listeners
btn.addEventListener("click", changeColor);
