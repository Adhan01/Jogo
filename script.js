const celulas = document.querySelectorAll(".celula");
const mensagem = document.getElementById("mensagem");

let jogadorAtual = "X";
let jogoAtivo = true;
let tabuleiro = ["", "", "", "", "", "", "", "", ""];

const combinacoesVitoria = [ 
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function verificarVitoria() { 
  for (const combinacao of combinacoesVitoria) { 
    const [a, b, c] = combinacao;
    if (tabuleiro[a] && tabuleiro[a] === tabuleiro[b] && tabuleiro[a] === tabuleiro[c]) { 
      jogoAtivo = false;
      mensagem.textContent = `🎉 Jogador ${tabuleiro[a]} venceu!`;
      return;
    }
  }

  if (!tabuleiro.includes("")) { 
    jogoAtivo = false;
    mensagem.textContent = "Empate!";
  }
}

function cliqueNaCelula(e) { 
  const index = e.target.dataset.index;
  if (!jogoAtivo || tabuleiro[index] !== "") return;

  tabuleiro[index] = jogadorAtual;
  e.target.textContent = jogadorAtual;

  verificarVitoria();

  if (jogoAtivo) { 
    jogadorAtual = jogadorAtual === "X" ? "O" : "X";
    mensagem.textContent = `Vez do jogador ${jogadorAtual}`;
  }
} 

function reiniciarJogo() {
  jogadorAtual = "X";
  jogoAtivo = true;
  tabuleiro = ["", "", "", "", "", "", "", "", ""];
  mensagem.textContent = "";

  celulas.forEach((celula) => {
    celula.textContent = "";
  });
}

// senakfunsionar eu memato
celulas.forEach((celula) => {
  celula.addEventListener("click", cliqueNaCelula);
});
