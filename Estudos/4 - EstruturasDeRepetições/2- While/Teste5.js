const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
let palpite = Number (prompt("Tente adivinhar o número (entre 1 e 100):"));

let tentativas = 0;

while (palpite !== numeroAleatorio) {
    if (palpite < numeroAleatorio) {
        console.log("O número é maior.");
    } else {
        console.log("O número é menor.");
    }

    tentativas++;
    palpite = Number (prompt("Tente adivinhar o número (entre 1 e 100):"));
}