// DEFINIÇÃO DAS CORES POR CATEGORIA
const coresPorCategoria = {
    Alimentação: '#ffc400',
    Transporte: '#704606',
    Lazer: '#9775fa',
    Moradia: '#43dfb8',
    Saúde: '#d82b57',
    Renda: '#0f5f27'
};

// SELECIONA O ELEMENTO DO CANVAS PARA O GRÁFICO
const ctx = document.querySelector('.myChart');

// CRIA O GRÁFICO DO TIPO 'PIE' (PIZZA) COM AS CONFIGURAÇÕES INICIAIS
const graficoGastos = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: [], // RÓTULOS INICIAIS VAZIOS
        datasets: [{
            label: 'Gastos por categoria', // RÓTULO DO DATASET
            data: [], // DADOS INICIAIS VAZIOS
            borderWidth: 1 // LARGURA DA BORDAS
        }]
    },
    options: {
        plugins: {
            datalabels: { // CONFIGURAÇÕES PARA OS RÓTULOS DOS DADOS
                formatter: (value, context) => {
                    const dados = context.chart.data.datasets[0].data; // DADOS DO GRÁFICO
                    const total = dados.reduce((acc, atual) => acc + atual, 0); // CALCULA O TOTAL
                    const porcentagem = (value / total) * 100; // CALCULA A PORCENTAGEM
                    return `${porcentagem.toFixed(1)}%`; // RETORNA A PORCENTAGEM FORMATADA
                },
                color: '#fff',
                font: {
                    weight: 'bold',
                    size: 14
                }
            }
        }
    },
    plugins: [ChartDataLabels] // PLUGIN PARA RÓTULOS DOS DADOS
});


// FUNÇÃO PARA ATUALIZAR O GRÁFICO COM DADOS NOVOS
function atualizarGraficoGastos(dadosPorCategoria) {
    const categorias = Object.keys(dadosPorCategoria); // OBTÉM AS CATEGORIAS
    const valores = Object.values(dadosPorCategoria); // OBTÉM OS VALORES

    // MAPEIA AS CATEGORIAS PARA SUAS RESPECTIVAS CORES
    const cores = categorias.map(categoria => 
        coresPorCategoria[categoria] || '#868e96'
    );

    // ATUALIZA OS RÓTULOS E DADOS DO GRÁFICO
    graficoGastos.data.labels = categorias;
    graficoGastos.data.datasets[0].data = valores;
    graficoGastos.data.datasets[0].backgroundColor = cores;

    // ATUALIZA O GRÁFICO PARA REFLETIR AS MUDANÇAS
    graficoGastos.update();
}
