// Coeficientes da equação: ax² + bx + c = 0
let a = 1;
let b = -7;
let c = 10;

// Calculando o delta: Δ = b² - 4ac
let delta = Math.pow(b, 2) - 4 * a * c;
console.log(`Delta (Δ) = ${delta}`);

if (delta > 0) {
    let x1 = (-b + Math.sqrt(delta)) / (2 * a);
    let x2 = (-b - Math.sqrt(delta)) / (2 * a);
    // Duas raízes reais diferentes

    console.log(`A equação possui duas raízes reais:`);
    console.log(`x1 = ${x1.toFixed(2)}\nx2 = ${x2.toFixed(2)}`);

} else if (delta === 0) {
    let x = -b / (2 * a);
    // Uma raiz real (única)

    console.log(`A equação possui uma raiz real:`);
    console.log(`x = ${x.toFixed(2)}`);

} else {
    console.log("A equação não possui raízes reais.");
    // Nenhuma raiz real
}
