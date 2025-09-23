/* 07. Crie uma função que recebe um vetor com vários números e um número específico como
argumento. Ela deve mostrar todos os índices onde esse número aparece no vetor, e não só apenas
o primeiro e/ou último índice em que o número aparece (como nos métodos indexOf e
lastIndexOf). */

console.log("Exericio07")

function encontrarIndice(par, number) {
    let indice = [];

    for (let i = 0; i < par.length; i++) {
        if (par[i] === number) {
            indice.push(i);
        }
    }

    if (indice.length > 0) {
        console.log(`O valor ${number} aparece nos indices: ${indice.join(', ')}`);
    } 
    else {
        console.log(`O valor ${number} não foi encontrado no array.`);
    }
}

let numero = [4, 8, 2, 5, 9, 7, 1];

encontrarIndice(numero, 9);

encontrarIndice(numero, 3);
