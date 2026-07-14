// Funções para trocar visualmente e gerenciar o botão ativo
function mudarPele(nomeArquivo, nomeLegivel) {
    // 1. Troca a imagem
    document.getElementById('camada-pele').src = "assets/pele/" + nomeArquivo;
    document.getElementById('input-pele').value = nomeLegivel;

    // 2. Atualiza o botão ativo visualmente
    atualizarBotaoAtivo('escolha-pele', nomeLegivel);
}

function mudarOlhos(nomeArquivo, nomeLegivel) {
    // 1. Troca a imagem
    document.getElementById('camada-olhos').src = "assets/olhos/" + nomeArquivo;
    document.getElementById('input-olhos').value = nomeLegivel;

    // 2. Atualiza o botão ativo visualmente
    atualizarBotaoAtivo('escolha-olhos', nomeLegivel);
}

function mudarCabelo(nomeArquivo, nomeLegivel) {
    // 1. Troca a imagem
    document.getElementById('camada-cabelo').src = "assets/cabelos/" + nomeArquivo;
    document.getElementById('input-cabelo').value = nomeLegivel;

    // 2. Atualiza o botão ativo visualmente
    atualizarBotaoAtivo('escolha-cabelo', nomeLegivel);
}

// Função inteligente para destacar o botão clicado dentro da sua categoria
function atualizarBotaoAtivo(categoriaId, textoBotao) {
    const container = document.getElementById(categoriaId);
    if (!container) return;

    // Acha todos os botões daquela categoria e remove a classe 'active'
    const botoes = container.querySelectorAll('button');
    botoes.forEach(btn => {
        if (btn.innerText === textoBotao) {
            btn.classList.add('active'); // Destaca o clicado
        } else {
            btn.classList.remove('active'); // Apaga os outros
        }
    });
}
