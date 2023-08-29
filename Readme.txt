# upload-desafio-carreira-modulo-02
# Simulação Jogo Mega Sena

# Descrição:
Trata-se de uma simulação da Meag Sena.
Onde os jogadores fazem apostas e o sistema verifica se eles ganharam, com base nos números sorteados que são gerados automaticamente.

# Ferramestas Utilizadas:
. VScode
. Node.js
. Insomnia

# Bibliotecas Utilizadas:
. Express
. Nodemon

# Uso:
Para fazer uso dessa simulação vai precisar ter o vscode, node.js e o insomia instalado.
Com o vscode aberto, ter iniciado o servidor, será necessário informar as rotas no Insomnia. No insomia tem a opção de listar jogos, Apostar e ver o resultado.
No listar jogos vai mostra um Array vazio pois não tem nunhum jgogo criado. Depois que o primeiro jogo for criado e mandar listar novamentes poderá ver a lista com os jogos criado e cada jogo terá uma identificação única através de um ID.

Para listar o jogo será necessário informar a rota Get no Insomnia. 

Segue a rota de exemplo: http://localhost:8000/jogos

Para realizar uma aposta será necessário informar a rota Post no Insomnia.

Segue a rota de exemplo: http://localhost:8000/jogos

Para verificar o resultado será necessário informar a rota Get no Insomnia e o numero de Id que identifica o jogo para saber se foi sorteado.

Segue a rota de exemplo: http://localhost:8000/jogos/0/ganhou