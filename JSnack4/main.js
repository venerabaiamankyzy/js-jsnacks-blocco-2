// JSnack4 (Bonus)
// Crea due array che hanno un numero di elementi diversi.  Aggiungi elementi all'array che ha meno elementi fino a quando ne avrà tanti quanti l'altro.

const firstArray = [34, 59, 67, 34, 23, 12, 44, 22, 19, 45];

const secondArray = [74, 89, 57, 34];

// i == 0; i < 10; i++;

for (let i = secondArray.length; secondArray.length < firstArray.length; i++) {
  secondArray.push(Math.floor(Math.random() * 10));
}

console.log(secondArray);
console.log(firstArray);
