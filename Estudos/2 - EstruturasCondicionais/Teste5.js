let frutas = ["banana", "maçã", "abacaxi", "laranja"];

if (frutas.indexOf("abacaxi") !== -1) { // Se encontrar "abacaxi" no array
    frutas.splice(2, 1); // Remove o item no índice 2 (abacaxi)
    console.log("Abacaxi removido");
} else {
    console.log("Abacaxi não está no array");
}

console.log(frutas); // Aqui vai mostrar o array após a modificação
