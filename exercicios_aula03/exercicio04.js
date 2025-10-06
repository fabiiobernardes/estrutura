/* Faça um algoritmo em JavaScript que leia um conjunto de 15 valores, um de cada vez, utilizando
estrutura de repetição, acompanhados de um código 1 ou 2. O valor representa o número de cobaias
utilizadas em uma das 15 experiências feitas e os códigos 1 e 2 representam respectivamente coelhos e
ratos. Mostre no final:
a. o total de cobaias utilizadas;
b. o total de coelhos;
c. total de ratos; e
d. o percentual de coelhos e ratos. */

const prompt = require("prompt-sync")();

let totalCobaias = 0;
let totalCoelhos = 0;
let totalRatos = 0;

for (let i = 1; i <= 15; i++) {
    let quantidade = parseInt(prompt(`Digite o número de cobaias da ${i}ª experiência: `));
    let codigo = parseInt(prompt("Digite o código (1 para coelhos, 2 para ratos): "));

    totalCobaias += quantidade;

    if (codigo === 1) {
        totalCoelhos += quantidade;
    } else if (codigo === 2) {
        totalRatos += quantidade;
    } else {
        console.log("Código inválido! (Use 1 ou 2)");
    }
}

console.log(`Total de cobaias: ${totalCobaias}`);
console.log(`Total de coelhos: ${totalCoelhos}`);
console.log(`Total de ratos: ${totalRatos}`);

let percCoelhos = (totalCoelhos / totalCobaias) * 100;
let percRatos = (totalRatos / totalCobaias) * 100;

console.log(`Percentual de coelhos: ${percCoelhos.toFixed(2)}%`);
console.log(`Percentual de ratos: ${percRatos.toFixed(2)}%`);
