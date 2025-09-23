/* 09. Faça o mesmo do exercício anterior, mas com fatorial.
Fatorial de 0: 0! = '
Fatorial de 1: 1 x elemento0 = 
Fatorial de 2: 2 x elemento1 = 2
Fatorial de 3: 3 x elemento2 = 3 x 2 = 6
...
Fatorial de n: n x elemento(n-1) = n x (n-1)! = n! */

console.log("Exercicio09")

const readline = require('readline');

const line = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

line.question('Digite um numero positivo: ', (resposta) => {
    
    const n = Number(resposta);

    if (n < 0 || !Number.isInteger(n)) {
        console.log('Por favor, digite um número positivo.');
        line.close();
        return;
    }

    let fatoriais = [];

    for (let i = 0; i <= n; i++) {
        if (i === 0) {
            fatoriais.push(1);
        }
        else {
            fatoriais.push(i * fatoriais[i - 1]);
        }
    }

    console.log(`Fatoriais de 0 ate ${n}:`);

    console.log(fatoriais);

    line.close();
});
