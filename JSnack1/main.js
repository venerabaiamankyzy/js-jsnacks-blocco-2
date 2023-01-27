// JSnack1
// Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo.

const userNumber = Math.floor(Math.random() * 100 + 1);

console.log(userNumber);
if (userNumber % 2 == 0) {
  console.log(`Il tuo numero è pari`);
} else {
  console.log(`Il tuo numero è dispari`);
}