// Função para trocar a imagem da pele
function mudarPele(nomeArquivo) {
    const camadaPele = document.getElementById('camada-pele');
    // Atualiza o src da imagem apontando para a pasta correta de pele
    camadaPele.src = `assets/pele/${nomeArquivo}`;
}

// Função para trocar a imagem dos olhos
function mudarOlhos(nomeArquivo) {
    const camadaOlhos = document.getElementById('camada-olhos');
    // Atualiza o src da imagem apontando para a pasta de olhos
    camadaOlhos.src = `assets/olhos/${nomeArquivo}`;
}

// Função para trocar a imagem do cabelo
function mudarCabelo(nomeArquivo) {
    const camadaCabelo = document.getElementById('camada-cabelo');
    // Atualiza o src da imagem apontando para a pasta de cabelos
    camadaCabelo.src = `assets/cabelos/${nomeArquivo}`;
}
