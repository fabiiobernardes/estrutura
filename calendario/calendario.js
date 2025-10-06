// calendario2025

const ano = 2025;

const nomesMeses = [
  "Janeiro", "Fevereiro", "Março", "Abril",
  "Maio", "Junho", "Julho", "Agosto",
  "Setembro", "Outubro", "Novembro", "Dezembro"
];

const nomesDias = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];

function diasNoMes(ano, mesZeroIndex) {
  return new Date(ano, mesZeroIndex + 1, 0).getDate();
}
function imprimirMes(ano, mesZeroIndex) {
  const nomeMes = nomesMeses[mesZeroIndex];
  const diasMes = diasNoMes(ano, mesZeroIndex);
  const primeiroDiaSemana = new Date(ano, mesZeroIndex, 1).getDay(); 

  const cabecalho = `${nomeMes} ${ano}`;
  const larguraLinha = 20; 
  const espacos = Math.max(0, Math.floor((larguraLinha - cabecalho.length) / 2));
  console.log("\n" + " ".repeat(espacos) + cabecalho);

  console.log(nomesDias.join("  "));

  const linhas = [];
  let semana = Array(7).fill("   "); 

  let dia = 1;
  for (let i = 0; i < primeiroDiaSemana; i++) {
    semana[i] = "   ";
  }

  for (let i = primeiroDiaSemana; i < 7 && dia <= diasMes; i++) {
    semana[i] = String(dia).padStart(2, " ") + " ";
    dia++;
  }
  linhas.push(semana.slice());

  while (dia <= diasMes) {
    semana = Array(7).fill("   ");
    for (let i = 0; i < 7 && dia <= diasMes; i++) {
      semana[i] = String(dia).padStart(2, " ") + " ";
      dia++;
    }
    linhas.push(semana.slice());
  }

  for (const l of linhas) {
    console.log(l.join(" "));
  }
}

function imprimirAno(ano) {
  console.log(`Calendário - Ano ${ano}`);
  for (let m = 0; m < 12; m++) {
    imprimirMes(ano, m);
  }
}

imprimirAno(ano);
