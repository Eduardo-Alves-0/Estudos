let a = 1;
let b = 2;
let c = 5;

let delta = Math.pow (b, 2) - 4 * a * c;

if (delta > 0) {
    let x1 = (-b + Math.sqrt(delta)) / (2 * a);
    let x2 = (-b - Math.sqrt(delta)) / (2 * a);

    console.log(`A equação possui duas raízes reais:`);
    console.log(`x1 = ${x1.toFixed(2)}\nx2 = ${x2.toFixed(2)}`);
} else if (delta === 0) {
    let x = -b / (2 * a);

    console.log(`A equação possui uma raiz real:`);
    console.log(`x = ${x.toFixed(2)}`); 
} else {
    console.log(`A equação não possui raízes reais.`);
}