// SELECIONA O PRIMEIRO ELEMENTO COM A CLASSE 'lista-transacoes'
const listaTransacoes = document.getElementsByClassName('lista-transacoes')[0];
const historicoTransacoes = document.getElementsByClassName('historico-transacoes')[0];

// FUNÇÃO PARA RENDERIZAR UMA TRANSAÇÃO
function renderizarTransacao(transacao) {

    // CRIA UM NOVO ELEMENTO 'li'
    const li = document.createElement('li');

    li.dataset.id = transacao.id;
    li.dataset.data = transacao.data

    // ADICIONA CLASSES AO ELEMENTO 'li' BASEADO NO TIPO DE TRANSAÇÃO
    li.classList.add('transacao', transacao.tipo === 'entrada' ? 'verde' : 'vermelho');

    // DEFINE O CONTEÚDO INTERNO DO ELEMENTO 'li'
    li.innerHTML = `
        <div>
            <strong>${transacao.desc}</strong>
            <small>(${transacao.categoria})</small>
        </div>
        <span data-moeda="brl">R$ ${transacao.valor.toFixed(2)}</span>
    `;

    // ADICIONA O ELEMENTO 'li' NO INÍCIO DA LISTA DE TRANSAÇÕES RECENTES E HISTÓRICO DE TRANSAÇÕES
    listaTransacoes.prepend(li);
}

function renderizarTransacaoHistorico(transacao) {
    // CRIA UM NOVO ELEMENTO 'li'
    const li = document.createElement('li');

    li.dataset.id = transacao.id;
    li.dataset.data = transacao.data

    // ADICIONA CLASSES AO ELEMENTO 'li' BASEADO NO TIPO DE TRANSAÇÃO
    li.classList.add('transacao', transacao.tipo === 'entrada' ? 'verde' : 'vermelho');

    // DEFINE O CONTEÚDO INTERNO DO ELEMENTO 'li'
    li.innerHTML = `
        <div>
            <button type="button" class="botao-excluir">X</button>
            <strong>${transacao.desc}</strong>
            <small>(${transacao.categoria})</small>
        </div>
        <span data-moeda="brl">R$ ${transacao.valor.toFixed(2)}</span>
    `;
    // ADICIONA O ELEMENTO 'li' NO INÍCIO DA LISTA DE TRANSAÇÕES RECENTES E HISTÓRICO DE TRANSAÇÕES
    historicoTransacoes.prepend(li);

}

