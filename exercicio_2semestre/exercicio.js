class Aluno {
    constructor(nome, nota, statusMatricula = "A") {
        this.nome = nome;
        this.nota = nota;
        this.statusMatricula = statusMatricula;
    }

    toString() {
        return `${this.nome} ${this.nota} ${this.statusMatricula}`;
    }
}

class ListaAlunos {
    constructor() {
        this.lista = [];
        this.limite = 40;
    }


    inserir(aluno, posicao) {
        if (this.lista.length >= this.limite) {
            console.log("A Lista está cheia! Não é possível adicionar mais alunos.");
            return;
        }

        if (posicao < 1 || posicao > this.lista.length + 1) {
            console.log("Posição inválida!");
            return;
        }

        this.lista.splice(posicao - 1, 0, aluno);
        console.log(`${aluno.nome} adicionada na posicao ${posicao}.`);
    }


    remover(posicao) {
        if (posicao < 1 || posicao > this.lista.length) {
            console.log("Posição inválida!");
            return;
        }

        const removido = this.lista.splice(posicao - 1, 1)[0];
        console.log(`${removido.nome} removido da posicao ${posicao}.`);
    }


    ordenarPorNota() {
        this.lista.sort((a, b) => b.nota - a.nota);
    }


    listarTodos() {
        console.log("Pos  Aluno nota Status");
        console.log("---- ----- ---- ------");

        this.lista.forEach((al, i) => {
            console.log(`${i + 1} ${al.toString()}`);
        });

        console.log();
    }


    listarAtivos() {
        console.log("Alunos com matrícula ativa:");

        this.lista
            .filter(a => a.statusMatricula === "A")
            .forEach(a => console.log(a.toString()));

        console.log();
    }
}


const lista = new ListaAlunos();


lista.inserir(new Aluno("Pedro", 9.7, "A"), 1);
lista.inserir(new Aluno("Ana", 8.7, "A"), 2);
lista.inserir(new Aluno("Maria", 9.3, "I"), 3);

lista.listarTodos();

lista.remover(1);

lista.listarTodos();

lista.inserir(new Aluno("Paula", 9.1, "A"), 1);

lista.listarTodos();

lista.ordenarPorNota();

lista.listarTodos();

lista.inserir(new Aluno("Pedro", 9.4, "A"), 2);
lista.inserir(new Aluno("Joao", 8.5, "I"), 5);

lista.listarTodos();
