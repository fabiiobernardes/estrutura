/* 04. Crie um script que pergunte 3 números ao usuário, coloque em um array, depois exiba tal array.
Modifique os elementos do array de modo a a sequência de números ficar do contrário.
Ou seja, se digitou: 1,2,3
Vai aparecer: 3,2,1 */

console.log("Exercicio04")

let numeros = [];

for (let i = 0; i < 3; i++) {
    let num = Number(prompt(`Digite o ${i + 1}º número:`));
    numeros.push(num);
}

console.log("Array inicial:", numeros);

let numerosInvertidos = [];
for (let i = numeros.length - 1; i >= 0; i--) {
    numerosInvertidos.push(numeros[i]);
}

console.log("Array invertido:", numerosInvertidos);