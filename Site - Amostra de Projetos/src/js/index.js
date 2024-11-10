const listaSelecaoProjetos = document.querySelectorAll(".foto");

listaSelecaoProjetos.forEach(foto => {
    foto.addEventListener("click", () => {
        esconderCartaoProjetos();

        const idProjetoSelecionado = mostrarCartaoProjetoSelecionado(foto);

        desativarProjetoNaListagem();
        ativarProjetoSelecionadoNaListagem(idProjetoSelecionado);
    });
});

function ativarProjetoSelecionadoNaListagem(idProjetoSelecionado) {
    const projetoSelecionadoNaListagem = document.getElementById(idProjetoSelecionado);
    projetoSelecionadoNaListagem.classList.add("ativo");
}

function desativarProjetoNaListagem() {
    const projetoAtivoNaListagem = document.querySelector(".ativo");
    if (projetoAtivoNaListagem) {
        projetoAtivoNaListagem.classList.remove("ativo");
    }
}

function mostrarCartaoProjetoSelecionado(foto) {
    const idProjetoSelecionado = foto.id; // Simplified access to id
    const idDoCartaoProjetoParaAbrir = `cartao-${idProjetoSelecionado}`; // Template literals
    const cartaoProjetoParaAbrir = document.getElementById(idDoCartaoProjetoParaAbrir);
    if (cartaoProjetoParaAbrir) { // Check if the card exists
        cartaoProjetoParaAbrir.classList.add("aberto");
    }
    return idProjetoSelecionado;
}

function esconderCartaoProjetos() {
    const cartaoProjetoAberto = document.querySelector(".aberto");
    if (cartaoProjetoAberto) { // Check if a card is open
        cartaoProjetoAberto.classList.remove("aberto");
    }
}