/* 02. Crie uma função que recebe um array de 2 números e coloque eles em ordem crescente. Não use o
método sort. */

console.log("Exercicio 02")

function ordemCrescente (array) {

    if (array.length !== 2) {
        return "array com 2 números";
    }

    let a = array[0];
    let b = array[1];

    if (a > b) {
        let temp = a;
        a = b;
        b = temp;
    }

    return [a, b];
}


console.log(ordemCrescente([55, 7]));

console.log(ordemCrescente([80, 20]));

console.log(ordemCrescente([77, 46]));

