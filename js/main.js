const modal = document.getElementById('modal');

// FUNÇÃO PARA ABRIR E FECHAR O MODAL
function abrirFecharModal() {
    modal.style.display = modal.style.display === 'flex' ? 'none' : 'flex';
}

// EVENTO DE SUBMISSÃO DO FORMULÁRIO NO MODAL
modal.addEventListener('submit', e => {
    e.preventDefault();

    // VARIÁVEIS DO FORMULÁRIO
    const tipo = modal.tipo.value;
    const desc = document.getElementById('descricao').value;
    const categoria = document.getElementById('categoria').value;
    const valor = parseFloat(document.getElementById('valor').value);

    // REGISTRA A TRANSAÇÃO
    const transacao = registrarTransacao(tipo, desc, categoria, valor);

    // RENDERIZA NA TELA
    renderizarTransacao(transacao);
    renderizarTransacaoHistorico(transacao);

    // CALCULA O ORÇAMENTO
    const resultado = calcularOrcamento(transacao);

    // ATUALIZA O RESUMO
    renderizarResumo(
        resultado.saldoAtual,
        resultado.totalEntradas,
        resultado.totalSaidas,
        resultado.maiorTransacaoSaida
    );

    // ATUALIZA O GRÁFICO
    atualizarGraficoGastos(resultado.gastosPorCategoria);

    // SALVA NO LOCALSTORAGE
    salvarTransacoesLocalStorage();

    // RESETA O FORMULÁRIO
    modal.reset();

    // FECHA O MODAL
    abrirFecharModal();
});