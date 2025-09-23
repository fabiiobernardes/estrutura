/* 08. Crie um script que pede um inteiro positivo para o usuário. Em seguida, popule uma array com os
números de Fibonacci, na hora de somar com os termos anteriores, some com elementos anteriores
do array. */

console.log("Exercicio08")

const readline = require('readline');

const line = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

line.question('Digite um numero positivo: ', (resposta) => {
    const n = Number(resposta);

    if (n <= 0 || !Number.isInteger(n)) {
        console.log('Por favor, digite um número inteiro positivo.');
        line.close();
        return;
    }

    let fibonacci = [];

    for (let i = 0; i < n; i++) {
        if (i === 0) {
            fibonacci.push(0);
        }
        else if (i === 1) {
            fibonacci.push(1);
        }
        else {
        
            fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
        }
    }

    console.log(`Os primeiros ${n} numeros da sequência são:`);

    console.log(fibonacci);

    line.close();

});