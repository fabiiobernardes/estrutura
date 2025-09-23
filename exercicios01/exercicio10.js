/* 10. Usando matriz (array de array), crie o jogo da velha. Inicialmente, as posições são variáveis vazias.
O usuário fornece a linha e a coluna e clica num botão, então é marcado no tabuleiro X ou O (se for
o jogador 1 ou jogador 2) que */

console.log("Exercicio10")

const readline = require('readline');

const line = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let tabuleiro = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
];

let jogadorAtual = 'X';
let nomes = {};

function mostrarTabuleiro() {
    console.log('\nTabuleiro:');
    for (let i = 0; i < 3; i++) {
        console.log(tabuleiro[i].map(c => c === '' ? ' ' : c).join(' | '));
        if (i < 2) console.log('---------');
    }
    console.log('');
}

function verificarVencedor() {
    for (let i = 0; i < 3; i++) {
        if (tabuleiro[i][0] === jogadorAtual && tabuleiro[i][1] === jogadorAtual && tabuleiro[i][2] === jogadorAtual) return true;
        if (tabuleiro[0][i] === jogadorAtual && tabuleiro[1][i] === jogadorAtual && tabuleiro[2][i] === jogadorAtual) return true;
    }
    if (tabuleiro[0][0] === jogadorAtual && tabuleiro[1][1] === jogadorAtual && tabuleiro[2][2] === jogadorAtual) return true;
    if (tabuleiro[0][2] === jogadorAtual && tabuleiro[1][1] === jogadorAtual && tabuleiro[2][0] === jogadorAtual) return true;

    return false;
}

function verificarEmpate() {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (tabuleiro[i][j] === '') return false;
        }
    }
    return true;
}

function jogar() {
    mostrarTabuleiro();
    line.question(`${nomes[jogadorAtual]} (${jogadorAtual}), escolha linha (0-2): `, (linha) => {
        line.question(`${nomes[jogadorAtual]} (${jogadorAtual}), escolha coluna (0-2): `, (coluna) => {
            linha = Number(linha);
            coluna = Number(coluna);

            if (linha < 0 || linha > 2 || coluna < 0 || coluna > 2) {
                console.log('Posição inválida, tente novamente.');
                jogar();
            } else if (tabuleiro[linha][coluna] !== '') {
                console.log('Posição já ocupada, tente novamente.');
                jogar();
            } else {
                tabuleiro[linha][coluna] = jogadorAtual;

                if (verificarVencedor()) {
                    mostrarTabuleiro();
                    console.log(`Parabéns! ${nomes[jogadorAtual]} venceu!`);
                    line.close();
                    return;
                }

                if (verificarEmpate()) {
                    mostrarTabuleiro();
                    console.log('Empate!');
                    line.close();
                    return;
                }

                jogadorAtual = jogadorAtual === 'X' ? 'O' : 'X';
                jogar();
            }
        });
    });
}

line.question('Nome do jogador 1 (X): ', (nomeX) => {
    nomes['X'] = nomeX || 'Jogador 1';
    line.question('Nome do jogador 2 (O): ', (nomeO) => {
        nomes['O'] = nomeO || 'Jogador 2';
        console.log(`\nComeçando o jogo! ${nomes['X']} (X) vs ${nomes['O']} (O)\n`);
        jogar();
    });
});