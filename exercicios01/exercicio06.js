/* 06. Faça uma função que recebe um array de qualquer tamanho e ordene seus elementos na ordem
crescente. Faça sua função na mão, não invoque nenhum método de sorting. Dica: pesquise
sobre bubble sort. */

console.log("Exercicio06")

function ordemCrescente(par) {
    let n = par.length;
  
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - 1 - i; j++) {

            if (par[j] > par[j + 1]) {
                let temp = par[j];
                par[j] = par[j + 1];
                par[j + 1] = temp;
            }
        }
    }
    return par;
}

let number = [6, 2, 8, 1, 4];

console.log("Array Inicial:", number);

let ordenado = ordemCrescente(number);

console.log("Array em Ordem:", ordenado);