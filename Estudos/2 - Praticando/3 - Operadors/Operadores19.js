let a1 = 5; // do lado esquerdo: 5x
let b1 = -4;

let a2 = 2; // do lado direito: 2x
let b2 = 11;

// Passando tudo para o lado esquerdo: (5x - 2x) + (4 - 11)
let a = a1 - a2;  // 5 - 2 = 3
let b = b1 - b2;  // 4 - 11 = -7

let x = -b / a;
console.log(`O resultado de 5x + 4 = 2x + 11 é x = ${x}`);