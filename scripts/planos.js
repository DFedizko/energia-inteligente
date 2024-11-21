const botaoMensal = document.getElementById('botao-mensal');
const botaoAnual = document.getElementById('botao-anual');
const precoPlus = document.getElementById('preco-plus');
const precoPremium = document.getElementById('preco-premium');

botaoMensal.addEventListener('click', function() {
    botaoMensal.classList.add('botao-ativado');
    botaoAnual.classList.remove('botao-ativado');

    precoPlus.innerHTML = 'R$25<span class="plano__descricao">/mês</span>';
    precoPremium.innerHTML = 'R$50<span class="plano__descricao">/mês</span>';
});

botaoAnual.addEventListener('click', function() {
    botaoAnual.classList.add('botao-ativado');
    botaoMensal.classList.remove('botao-ativado');

    precoPlus.innerHTML = 'R$250<span class="plano__descricao">/ano</span>';
    precoPremium.innerHTML = 'R$500<span class="plano__descricao">/ano</span>';
});

function ativarBotao(botao) {
    botao.disabled = false; // Habilita o botão
}

function desativarBotao(botao) { 
    botao.disabled = true; // Desabilita o botão
}