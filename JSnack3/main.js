// JSnack3
// Crea un array di numeri interi e fai la somma di tutti gli elementi  che sono in posizione dispari

const array = [
    25,
    34,
    78,
    45,
    36,
    90,
    63,
    12,
    59,
    34,
    16,
    97,
  66,
];

let even = 0;
let odd = 0;

for (let i = 0; i < array.length; i++) {

     // Loop to find even, odd sum
    if (i % 2 == 0)
        even += array[i];
    else
        odd += array[i];
}

console.log(`Even index positions sum  ${even}`);
console.log(`"<br>" + "Odd index positions sum ${odd}`);
