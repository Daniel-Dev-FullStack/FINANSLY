historicoTransacoes.addEventListener('click', function (e) {

    // VERIFICA SE O BOTÃO CLICADO FOI O BOTÃO-EXCLUIR
    if (e.target.classList.contains('botao-excluir')) {
        // PEGA O LI MAIS PRÓXIMO DO BOTÃO CLICADO
        const itemParaRemover = e.target.closest('li');

        // REMOVE ITEM DO DOM
        itemParaRemover.remove();
        console.log("Item removido");

        let transacoesSalvas = JSON.parse(localStorage.getItem('transacoes')) || [];

        // FILTRA O ARRAY 
        transacoesSalvas = transacoesSalvas.filter(item => item.id !== itemParaRemover.dataset.id);

        // ATUALIZA O LOCAL STORAGE
        localStorage.setItem('transacoes', JSON.stringify(transacoesSalvas));

        // RECARREGA A PÁGINA (F5)
        window.location.reload();

    }

});