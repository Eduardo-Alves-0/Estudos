let numero1 = parseInt(prompt("Informe um número: "))
let numero2 = parseInt(prompt("Informe outro número: "))

if (numero1 > numero2) {
    console.log ("Os numeros estão organizado de forma decrescente");

} else if (numero1 === numero2) {
    console.log ("Os numeros são iguais")
} else if (numero1 < numero2) {
    console.log ("Os numeros estão organizados de forma crescente")
} else {
    console.log ("Os numeros não estão em nenhuma ordem")
}
