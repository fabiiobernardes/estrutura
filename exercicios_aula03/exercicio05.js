/* Faça um algoritmo que apresente o quadrado de cada um dos números pares entre 1 a 100.*/

for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log(`Número: ${i}, Quadrado: ${i * i}`);
    }
}
