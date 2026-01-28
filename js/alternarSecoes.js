const botoesAbas = document.querySelectorAll('.menu-item');
const paginas = document.querySelectorAll('.pagina');

// 1. FUNÇÃO PARA ATIVAR ABA E SALVAR NO STORAGE
function ativarAba(abaId) {
    // Remove classe ativa de todos
    botoesAbas.forEach(btn => btn.classList.remove('selecionada'));
    paginas.forEach(secao => secao.classList.remove('pagina-ativo'));

    // Adiciona classe ativa ao selecionado
    const botaoSelecionado = document.querySelector(`[data-pagina="${abaId}"]`);
    const secaoAlvo = document.getElementById(abaId);

    if (botaoSelecionado) botaoSelecionado.classList.add('selecionada');
    if (secaoAlvo) secaoAlvo.classList.add('pagina-ativo');

    // Salva no localStorage
    localStorage.setItem('abaAtiva', abaId);
}

// 2. ADICIONA EVENTO DE CLIQUE
botoesAbas.forEach(botao => {
    botao.addEventListener('click', () => {
        const abaAlvo = botao.getAttribute('data-pagina');
        ativarAba(abaAlvo);
    });
});

// 3. RECUPERA AO CARREGAR A PÁGINA
window.addEventListener('DOMContentLoaded', () => {
    const abaSalva = localStorage.getItem('abaAtiva');
    if (abaSalva) {
        ativarAba(abaSalva);
    } else if (botoesAbas.length > 0) {
        // Opcional: Ativa a primeira aba por padrão se não houver salvo
        ativarAba(botoesAbas[0].getAttribute('data-pagina'));
    }
});
