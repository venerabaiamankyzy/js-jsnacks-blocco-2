// JSnack2
// Crea due tag div con due id diversi. Un div avrà il testo colorato di rosso mentre l’altro di verde. Partendo da un array di numeri, stampiamo nell’id rosso i numeri dispari e in verde i numeri pari.


const redText = document.getElementById("red-box");
const greenText = document.getElementById("green-box");

const userNumbers = [
  "2",
  "34",
  "78",
  "67",
  "36",
  "90",
  "345",
  "12",
  "52",
  "33",
  "77",
  "92",
  "135",
]

for (let i = 0; i < userNumbers.length; i++) {
  const currentNumber = userNumbers[i];

  if (currentNumber % 2 == 0) {
    redText.innerHTML += `${currentNumber} is Even`;
  } else {
    greenText.innerHTML += `${currentNumber} is Odd`;
  }
}