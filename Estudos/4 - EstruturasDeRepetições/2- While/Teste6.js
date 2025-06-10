let soma = 0;
let contador = 1;

while (contador <= 100) {
   if (contador % 2 === 1){
     soma += contador;
    }
   contador++; 
}

console.log("A soma dos números ímpares de 1 a 100 é: " + soma);