// Função para trocar a imagem da pele
function mudarPele(nomeArquivo) {
    const camadaPele = document.getElementById('camada-pele');
    // Força o caminho correto até a pasta pele
    camadaPele.src = "assets/pele/" + nomeArquivo;
    console.log("Tentando carregar pele:", camadaPele.src); // Ajuda a testar no console do navegador
}

// Função para trocar a imagem dos olhos
function mudarOlhos(nomeArquivo) {
    const camadaOlhos = document.getElementById('camada-olhos');
    // Força o caminho correto até a pasta olhos
    camadaOlhos.src = "assets/olhos/" + nomeArquivo;
    console.log("Tentando carregar olhos:", camadaOlhos.src);
}

// Função para trocar a imagem do cabelo
function mudarCabelo(nomeArquivo) {
    const camadaCabelo = document.getElementById('camada-cabelo');
    // Força o caminho correto até a pasta cabelos
    camadaCabelo.src = "assets/cabelos/" + nomeArquivo;
    console.log("Tentando carregar cabelo:", camadaCabelo.src);
}
