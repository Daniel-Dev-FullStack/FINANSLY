// VARIÁVEIS GLOBAIS PARA ARMAZENAR OS TOTAIS E SALDO
let saldoAtual = 0;
let totalEntradas = 0;
let totalSaidas = 0;

// FUNÇÃO PARA CALCULAR ORÇAMENTO COM BASE EM UMA TRANSAÇÃO
function calcularOrcamento(transacao) {
    
    // VERIFICA SE A TRANSAÇÃO É UMA ENTRADA E ATUALIZA OS TOTAIS
    if (transacao.tipo === 'entrada') {
        saldoAtual += transacao.valor;
        totalEntradas += transacao.valor;
    }

    // VERIFICA SE A TRANSAÇÃO É UMA SAÍDA E ATUALIZA OS TOTAIS
    if (transacao.tipo === 'saida') {
        saldoAtual -= transacao.valor;
        totalSaidas += transacao.valor;
    }

    // ENCONTRA A MAIOR TRANSAÇÃO DE SAÍDA ENTRE TODAS AS TRANSAÇÕES
    const maiorTransacaoSaida = transacoesFeitas
        .filter(t => t.tipo === 'saida')
        .reduce((anterior, atual) => {
            return (anterior.valor > atual.valor) ? anterior : atual;
        }, { valor: 0, categoria: '', desc: '' });

    // CALCULA OS GASTOS AGRUPADOS POR CATEGORIA
    const gastosPorCategoria = transacoesFeitas
        .filter(t => t.tipo === 'saida')
        .reduce((acc, atual) => {
            acc[atual.categoria] = (acc[atual.categoria] || 0) + atual.valor;
            return acc;
        }, {});

    // RETORNA OBJETO COM TODOS OS CÁLCULOS
    return {
        saldoAtual,
        totalEntradas,
        totalSaidas,
        maiorTransacaoSaida,
        gastosPorCategoria
    };
}

// FUNÇÃO AUXILIAR PARA RECALCULAR TUDO DE UMA VEZ A PARTIR DO ZERO
function calcularOrcamentoCompleto() {

    // ZERA TODOS OS VALORES ANTES DE RECALCULAR
    saldoAtual = 0;
    totalEntradas = 0;
    totalSaidas = 0;

    // PERCORRE TODAS AS TRANSAÇÕES E RECALCULA OS TOTAIS
    transacoesFeitas.forEach(transacao => {
        if (transacao.tipo === 'entrada') {
            saldoAtual += transacao.valor;
            totalEntradas += transacao.valor;
        }
        if (transacao.tipo === 'saida') {
            saldoAtual -= transacao.valor;
            totalSaidas += transacao.valor;
        }
    });

    // ENCONTRA A MAIOR TRANSAÇÃO DE SAÍDA ENTRE TODAS AS TRANSAÇÕES
    const maiorTransacaoSaida = transacoesFeitas
        .filter(t => t.tipo === 'saida')
        .reduce((anterior, atual) => {
            return (anterior.valor > atual.valor) ? anterior : atual;
        }, { valor: 0, categoria: '', desc: '' });

    // CALCULA OS GASTOS AGRUPADOS POR CATEGORIA
    const gastosPorCategoria = transacoesFeitas
        .filter(t => t.tipo === 'saida')
        .reduce((acc, atual) => {
            acc[atual.categoria] = (acc[atual.categoria] || 0) + atual.valor;
            return acc;
        }, {});

    // RETORNA OBJETO COM TODOS OS CÁLCULOS ATUALIZADOS
    return {
        saldoAtual,
        totalEntradas,
        totalSaidas,
        maiorTransacaoSaida,
        gastosPorCategoria
    };
}