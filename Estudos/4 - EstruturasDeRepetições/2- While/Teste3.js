let numero = Number(prompt("Digite um número"));
let contador = 0;

while (numero >= 0) {
    if (numero > 10) {
        contador++;
    }

    numero = Number(prompt("Digite outro número (negativo para sair):"));
}

console.log("Foram digitados " + contador + " números maiores que 10.");


/*
    O que ele faz ?
    1- Ler um número
    2- Verificar se o número é maior que 10
    3- Se for, incrementar o contador
    4- Ler outro número
    5- Repetir o processo até que o número seja negativo
    6- Imprimir o contador
*/