let a1 = 7; // do lado esquerdo: 7x
let b1 = 2;

let a2 = 3; // do lado direito: 3x
let b2 = 18;

// Passando tudo para o lado esquerdo: (7x - 3x) + (2 - 18)
let a = a1 - a2;  // 7 - 3 = 4
let b = b1 - b2;  // 2 - 18 = -16

let x = -b / a;

console.log(`O resultado de 7x + 2 = 3x + 18 é x = ${x}`);
