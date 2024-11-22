function registrar() {
    event.preventDefault();

    const registroUsuario = document.getElementById('registro-usuario').value;
    const registroEmail = document.getElementById('registro-email').value;
    const registroSenha = document.getElementById('registro-senha').value;
    const registroConfirmarSenha = document.getElementById('registro-confirmar-senha').value;

    if (!registroUsuario || !registroEmail || !registroSenha || !registroConfirmarSenha) {
        return alert('Por favor preencha todos os campos!');

    } else if (registroSenha !== registroConfirmarSenha) {
        return alert('As senhas não coincidem.');

    } else if (localStorage.getItem(registroUsuario)) {
        return alert('Usuário já registrado. Por favor, escolha outro nome de usuário.');
    }

    const dadosUsuario = {
        email: registroEmail,
        senha: registroSenha,
    };
    localStorage.setItem(registroUsuario, JSON.stringify(dadosUsuario));

    alert('Usuário registrado com sucesso!');
    location.href = '../pages/login.html';
}

function logar() {
    event.preventDefault();

    const loginUsuario = document.getElementById('login-usuario').value;
    const loginSenha = document.getElementById('login-senha').value;

    if (!loginUsuario || !loginSenha) {
        return alert('Por favor, preencha todos os campos!');
    }

    const dadosUsuario = localStorage.getItem(loginUsuario);

    if (!dadosUsuario) {
        return alert('Usuário não encontrado. Por favor, registre-se!')
    }

    const dados = JSON.parse(dadosUsuario);

    if (dados.senha !== loginSenha) {
        return alert('Senha incorreta. Tente novamente!');
    }

    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('isLoggedUser', loginUsuario);
    
    alert('Login bem-sucedido!');
    location.href = '../index.html';
}