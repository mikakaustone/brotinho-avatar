// Funções para trocar visualmente e atualizar os textos que vão no e-mail
function mudarPele(nomeArquivo, nomeLegivel) {
    document.getElementById('camada-pele').src = "assets/pele/" + nomeArquivo;
    document.getElementById('input-pele').value = nomeLegivel;
}

function mudarOlhos(nomeArquivo, nomeLegivel) {
    document.getElementById('camada-olhos').src = "assets/olhos/" + nomeArquivo;
    document.getElementById('input-olhos').value = nomeLegivel;
}

function mudarCabelo(nomeArquivo, nomeLegivel) {
    document.getElementById('camada-cabelo').src = "assets/cabelos/" + nomeArquivo;
    document.getElementById('input-cabelo').value = nomeLegivel;
}
