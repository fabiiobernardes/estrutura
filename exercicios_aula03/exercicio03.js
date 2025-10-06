/* 03) Implemente também em JavaScript, mas desta vez utilizando as estruturas de repetição, onde o programa
deverá finalizar quando o usuário digitar 0, caso contrário ficará cadastrando os pedidos, agora vai poder
acumular mais de um produto e ao final deverá ser dada a soma dos pedidos em uma lanchonete. */

const prompt = require("prompt-sync")();

let total = 0;

do {
    let codigo = parseInt(prompt("Digite o código do produto ou 0 para sair "));
    if (codigo === 0) break; 

    let quantidade = parseInt(prompt("Digite a quantidade: "));

    let preco = 0;
    switch (codigo) {
        case 100: preco = 1.70; break;
        case 101: preco = 2.30; break;
        case 102: preco = 2.60; break;
        case 103: preco = 2.40; break;
        case 104: preco = 2.50; break;
        case 105: preco = 1.00; break;
        default:
            console.log("Código inválido!");
            preco = 0;
    }

    total += preco * quantidade;
} while (true);

console.log(`Valor total a pagar: R$ ${total.toFixed(2)}`);