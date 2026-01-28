// FUNÇÃO PARA SALVAR AS TRANSAÇÕES NO LOCAL STORAGE
function salvarTransacoesLocalStorage() {
    localStorage.setItem('transacoes', JSON.stringify(transacoesFeitas));
}

const transacoesSalvas = localStorage.getItem('transacoes');

// FUNÇÃO PARA CARREGAR AS TRANSAÇÕES DO LOCAL STORAGE
function carregarTransacoesLocalStorage() {

    // PARSEAR AS TRANSAÇÕES SALVAS OU INICIALIZAR COMO ARRAY VAZIO
    const transacoesGuardadas = transacoesSalvas ? JSON.parse(transacoesSalvas) : [];

    // LIMPAR OS DADOS ATUAIS
    zerarDados();

    // RESTAURAR O ARRAY DE TRANSAÇÕES
    transacoesFeitas = [...transacoesGuardadas];

    // RENDERIZAR CADA TRANSAÇÃO NA LISTA
    transacoesGuardadas.forEach(transacao => {
        renderizarTransacao(transacao);
        renderizarTransacaoHistorico(transacao);
    });

    // RECALCULAR O ORÇAMENTO COM TODAS AS TRANSAÇÕES
    let gastosPorCategoria = {};
    transacoesGuardadas.forEach(transacao => {
        const resultado = calcularOrcamento(transacao);
        gastosPorCategoria = resultado.gastosPorCategoria;
    });

    // ATUALIZAR O RESUMO E GRÁFICO
    const resultado = calcularOrcamentoCompleto();
    renderizarResumo(
        resultado.saldoAtual,
        resultado.totalEntradas,
        resultado.totalSaidas,
        resultado.maiorTransacaoSaida
    );
    atualizarGraficoGastos(resultado.gastosPorCategoria);
}

// FUNÇÃO PARA ZERAR OS DADOS DO ORÇAMENTO
function zerarDados() {
    saldoAtual = 0;
    totalEntradas = 0;
    totalSaidas = 0;
    transacoesFeitas = [];

    listaTransacoes.innerHTML = '';
    historicoTransacoes.innerHTML = '';
}

// CHAMADA AO CARREGAR A PÁGINA
window.addEventListener('DOMContentLoaded', carregarTransacoesLocalStorage);
