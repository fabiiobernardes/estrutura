/* 05. Refaça o script anterior, mas agora pergunte ao usuário quantos números ele deseja inserir no array.
Depois, o usuário vai preenchendo elemento por elemento do vetor. Ao final, exiba o array e o array ao
contrário (generalização do script anterior). */

console.log("Exercicio05")

const readline = require('readline');

const line = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let numeros = [];
let totalNumeros = 0;
let i = 0;

line.question('Quantos numeros deseja inserir? ', (resposta) => {
    totalNumeros = Number(resposta);

    function pedirNumero() {
        if (i < totalNumeros) {
            line.question(`Digite o ${i + 1}º número: `, (num) => {
                numeros.push(Number(num));
                i++;
                pedirNumero();
            });
        } else {
            console.log("Array Inicial:", numeros);

            let numerosInvertidos = [];
            for (let j = numeros.length - 1; j >= 0; j--) {
                numerosInvertidos.push(numeros[j]);
            }

            console.log("Array Invertido:", numerosInvertidos);
            line.close();
        }
    }

    pedirNumero();
});