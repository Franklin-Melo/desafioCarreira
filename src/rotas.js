const express = require("express");
const { listarJogos, apostar, verificarJogo } = require("./controladores/jogos");

const rotas = express();

rotas.get("/jogos", listarJogos)
rotas.post("/jogos", apostar)
rotas.get("/jogos/:id/ganhou", verificarJogo)



module.exports = rotas;
