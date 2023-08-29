const bancodedados = require("../bancodedados")

let id = 1;

const listarJogos = (req, res) => {
  return res.json(bancodedados)
}


const apostar = (req, res) => {
  const novoJogo = req.body
  novoJogo.id = id
  bancodedados.push(novoJogo)
  id++;

  res.status(201).json();
}


const verificarJogo = (req, res) => {
  const jogoId = parseInt(req.params.id);
  console.log(req.params.id)

  const jogo = bancodedados[jogoId]

  const numerosSorteados = gerarNumerosSorteados();
  const numerosEscolhidos = jogo.numeros

  const numerosAcertados = numerosEscolhidos.filter(numero => numerosSorteados.includes(numero));

  const ganhou = numerosAcertados.length >= 3;
  res.json({ ganhou });

  function gerarNumerosSorteados() {
    const numerosSorteados = [];
    while (numerosSorteados.length < 6) {
      const numeroAleatorio = Math.floor(Math.random() * 60) + 1;
      if (!numerosSorteados.includes(numeroAleatorio)) {
        numerosSorteados.push(numeroAleatorio);
      }
    }

    return numerosSorteados;

  }
}

module.exports = {
  listarJogos,
  apostar,
  verificarJogo
}