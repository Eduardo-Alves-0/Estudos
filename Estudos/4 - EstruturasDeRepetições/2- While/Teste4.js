const numberDefined = 10;
let tentativas = 0;

let number = Number(prompt("Tente adivinhar o número: "));

while (number != numberDefined) {
    console.log("Errou!");
    tentativas++;
    number = Number(prompt("Tente adivinhar o número: 1 e 10"));
}

console.log("Acertou!");
console.log("Você tentou " + tentativas + " vezes.");
