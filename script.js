// Guarda quais partes estão selecionadas no momento
let peleAtual = 'Sem título-1_pele 01.svg';
let olhoAtual = 'Sem título-1_olho 01.svg';
let cabeloAtual = 'Sem título-1_cabelo 01.svg';

function mudarPele(nomeArquivo) {
    peleAtual = nomeArquivo;
    document.getElementById('camada-pele').src = "assets/pele/" + nomeArquivo;
}

function mudarOlhos(nomeArquivo) {
    olhoAtual = nomeArquivo;
    document.getElementById('camada-olhos').src = "assets/olhos/" + nomeArquivo;
}

function mudarCabelo(nomeArquivo) {
    cabeloAtual = nomeArquivo;
    document.getElementById('camada-cabelo').src = "assets/cabelos/" + nomeArquivo;
}

// Quando a pessoa clicar em "Enviar"
document.getElementById('meu-formulario').addEventListener('submit', function(event) {
    event.preventDefault(); // Segura o envio rápido para criarmos a imagem antes
    
    const botao = document.getElementById('btn-enviar');
    botao.innerText = "Preparando avatar... ⏳";
    botao.disabled = true;

    // Cria uma tela de pintura virtual de 500x500 pixels
    const canvas = document.createElement('canvas');
    canvas.width = 500;
    canvas.height = 500;
    const ctx = canvas.getContext('2d');

    // Ordem das camadas para desenhar (pele atrás, olho no meio, cabelo na frente)
    const caminhosImagens = [
        "assets/pele/" + peleAtual,
        "assets/olhos/" + olhoAtual,
        "assets/cabelos/" + cabeloAtual
    ];

    function carregarEDesenhar(index) {
        if (index >= caminhosImagens.length) {
            // Se terminou de desenhar as 3 partes, transforma tudo em uma imagem única PNG
            const imagemGerada = canvas.toDataURL('image/png');
            
            // Coloca a imagem gerada dentro do campo invisível do formulário
            document.getElementById('input-imagem-avatar').value = imagemGerada;
            
            // Agora sim envia de verdade para o Formspree!
            botao.innerText = "Enviando... 🚀";
            document.getElementById('meu-formulario').submit();
            return;
        }

        const img = new Image();
        img.crossOrigin = "anonymous"; // Evita erros de segurança do navegador
        img.src = caminhosImagens[index];

        img.onload = function() {
            ctx.drawImage(img, 0, 0, 500, 500); // Desenha a imagem na tela de pintura virtual
            carregarEDesenhar(index + 1); // Chama a próxima camada
        };

        img.onerror = function() {
            console.error("Erro ao carregar: " + caminhosImagens[index]);
            carregarEDesenhar(index + 1); // Se falhar alguma, pula para não travar o envio
        };
    }

    carregarEDesenhar(0); // Começa a desenhar
});
