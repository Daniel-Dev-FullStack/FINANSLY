// ARRAY COM OS NOMES DOS MESES EM PORTUGUÊS
const nomesMeses = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril',
    'Maio', 'Junho', 'Julho', 'Agosto',
    'Setembro', 'Outubro', 'Novembro', 'Dezembro'
];

// FUNÇÃO PARA CRIAR E POPULAR O SELECT COM OS MESES DISPONÍVEIS
function criarSelectMeses() {
    // OBTÉM O ELEMENTO SELECT DO DOM
    const select = document.querySelector('.datas');
    // RECUPERA AS TRANSAÇÕES DO LOCALSTORAGE
    const transacoes = JSON.parse(localStorage.getItem('transacoes')) || [];

    // LIMPA O CONTEÚDO ANTERIOR DO SELECT
    select.innerHTML = '';

    // ADICIONA A OPÇÃO "TODOS" COMO PADRÃO
    select.innerHTML = `<option value="todos">Todos</option>`;

    // SET PARA ARMAZENAR MESES ÚNICOS (EVITA DUPLICATAS)
    const mesesUnicos = new Set();

    // PERCORRE CADA TRANSAÇÃO PARA EXTRAIR O MÊS
    transacoes.forEach(t => {
        const data = new Date(t.data);
        const mes = data.getMonth(); // 0–11
        mesesUnicos.add(mes);
    });

    // ORDENA OS MESES E CRIA AS OPTIONS NO SELECT
    Array.from(mesesUnicos)
        .sort((a, b) => a - b) // ORDENA NUMERICAMENTE
        .forEach(mes => {      // ITERA SOBRE CADA MÊS
            const option = document.createElement('option');
            option.value = mes;
            option.textContent = nomesMeses[mes];
            select.appendChild(option);
        });
}

// INICIALIZA O SELECT AO CARREGAR
criarSelectMeses();

// EVENT LISTENER PARA FILTRAR TRANSAÇÕES QUANDO O MÊS MUDA
document.querySelector('.datas').addEventListener('change', e => {

    const mesSelecionado = e.target.value;
    const transacoes = JSON.parse(localStorage.getItem('transacoes')) || [];

    // SE SELECIONOU "TODOS", EXIBE TODAS AS TRANSAÇÕES
    if (mesSelecionado === 'todos') {
        recarregarHistorico(transacoes);
        return;
    }

    // FILTRA AS TRANSAÇÕES PELO MÊS SELECIONADO
    const filtradas = transacoes.filter(t => {
        return new Date(t.data).getMonth() === Number(mesSelecionado);
    });

    // RENDERIZA APENAS AS TRANSAÇÕES FILTRADAS
    recarregarHistorico(filtradas);

});

// FUNÇÃO PARA RECARREGAR O HISTÓRICO DE TRANSAÇÕES NA TELA
function recarregarHistorico(transacoes) {

    // LIMPA O HISTÓRICO ANTERIOR
    historicoTransacoes.innerHTML = '';

    // RENDERIZA CADA TRANSAÇÃO INDIVIDUALMENTE
    transacoes.forEach(transacao => {
        renderizarTransacaoHistorico(transacao);
    });

}
