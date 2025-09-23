/* 03. Crie uma função que recebe um array de 3 números e coloque eles em ordem crescente. Crie sua própria
função para isso. */

console.log("Exercicio 03")

function ordemCrescente(array) {
    if (array.length !== 3) {
        return "array com 3 números";
    }

    let a = Number(array[0]);
    let b = Number(array[1]);
    let c = Number(array[2]);

    if (a > b) {
        let temp = a;
        a = b;
        b = temp;
    }

    if (a > c) {
        let temp = a;
        a = c;
        c = temp;
    }

    if (b > c) {
        let temp = b;
        b = c;
        c = temp;
    }

    return [a, b, c];
}

console.log(ordemCrescente([99, 333, 55]));

console.log(ordemCrescente([41, 51, 103]));

console.log(ordemCrescente([3, 1, 0]));