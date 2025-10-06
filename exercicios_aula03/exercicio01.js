/* Leia 20 valores reais e calcule seu somatório utilizando a instrução while. */

const prompt = require("prompt-sync")();

let i = 0;
let soma = 0;

while (i < 20) {
    let valor = parseFloat(prompt(`Digite o ${i + 1}º valor: `));
    soma += valor;
    i++;
}

console.log(`A soma dos 20 valores é: ${soma}`);