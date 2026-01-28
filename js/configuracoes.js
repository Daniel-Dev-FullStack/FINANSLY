const moedaSite = document.querySelector('.moedas');
const tamanhoFonte = document.querySelector('.tamanhoDaFonte');
const body = document.body;

/* TAMANHO DA FONTE */
tamanhoFonte.addEventListener('change', (e) => {
    const tamanho = e.target.value;
    body.style.fontSize = tamanho + 'px';
    localStorage.setItem('fontSize', tamanho);
});

/* MOEDA */
function aplicarMoeda(moeda) {
    document.querySelectorAll('[data-moeda]').forEach(el => {
        el.textContent = el.textContent.replace(/R\$|\$/g, moeda === 'BRL' ? 'R$' : '$');
    });
}

moedaSite.addEventListener('change', (e) => {
    const moeda = e.target.value;
    aplicarMoeda(moeda);
    localStorage.setItem('moeda', moeda);
});

/* CARREGAR PREFERÊNCIAS SALVAS */
window.addEventListener('DOMContentLoaded', () => {

    const fontSizeSalvo = localStorage.getItem('fontSize');
    if (fontSizeSalvo) {
        body.style.fontSize = fontSizeSalvo + 'px';
        tamanhoFonte.value = fontSizeSalvo;
    }

    const moedaSalva = localStorage.getItem('moeda');
    if (moedaSalva) {
        moedaSite.value = moedaSalva;
        aplicarMoeda(moedaSalva);
    }

});
