function renderizarResumo(saldoAtual, totalEntradas, totalSaidas, maiorGasto) {

    // SELECIONA OS ELEMENTOS DE RESUMO NO DOM
    const saldoResumo = document.querySelector(".balanca h2");
    const entradasResumo = document.querySelectorAll(".entrada");
    const saidasResumo = document.querySelectorAll(".saida");
    const maiorGastoResumo = document.querySelector(".maiorGasto");
    const maiorGastoCategoria = document.querySelector(".maiorGastoCategoria");

    // ATUALIZA A CATEGORIA DO MAIOR GASTO
    maiorGastoCategoria.textContent = `Categoria: ${maiorGasto.categoria}`

    // ATUALIZA O VALOR DO MAIOR GASTO
    maiorGastoResumo.textContent = `R$ ${maiorGasto.valor}`

    // ITERA SOBRE CADA ELEMENTO DE ENTRADA E ATUALIZA COM O TOTAL FORMATADO
    entradasResumo.forEach((el) => {
        el.textContent = `R$ ${totalEntradas.toFixed(2)}`;
    });

    // ITERA SOBRE CADA ELEMENTO DE SAIDA E ATUALIZA COM O TOTAL FORMATADO
    saidasResumo.forEach((el) => {
        el.textContent = `R$ ${totalSaidas.toFixed(2)}`;
    });

    // ATUALIZA O SALDO ATUAL COM FORMATAÇÃO DE DUAS CASAS DECIMAIS
    saldoResumo.textContent = `R$ ${saldoAtual.toFixed(2)}`;

    // DEFINE A COR DO SALDO: VERMELHO SE NEGATIVO, BRANCO SE POSITIVO
    saldoResumo.style.color = saldoAtual < 0 ? "#ff6b6b" : "#ffffff";
}
