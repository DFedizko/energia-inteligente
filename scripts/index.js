const email = document.getElementById('input-email');
const nome = document.getElementById('input-nome');
const mensagem = document.getElementById('mensagem');
const botaoEnviar = document.getElementById('btn-enviar');

botaoEnviar.addEventListener('click', function(evento) {
    evento.preventDefault();

    if (email.value == '' || nome.value == '' || mensagem.value == '') {
        return alert('Você precisa preencher todos os campos!');
    }

    email.value = '';
    nome.value = '';
    mensagem.value = '';
});
