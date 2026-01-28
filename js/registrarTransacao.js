// ARRAY PARA ARMAZENAR AS TRANSAÇÕES FEITAS
let transacoesFeitas = [];

// FUNÇÃO PARA REGISTRAR UMA NOVA TRANSAÇÃO
function registrarTransacao(tipo, desc, categoria, valor) {

    const transacao = {
        tipo,
        desc,
        categoria,
        valor,
        id: crypto.randomUUID(),
        data: new Date().toISOString()
    };

    transacoesFeitas.push(transacao);
    return transacao;
}
