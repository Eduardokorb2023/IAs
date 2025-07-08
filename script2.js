function verificarSenha() {
    const senha = document.getElementById('campo-senha').value;
    const mensagem = document.getElementById('mensagem-secreta');

    const senhaCorreta = "2049"; // você pode trocar a senha aqui

    if (senha === senhaCorreta) {
        mensagem.textContent = "IA Desperta!";
    } else {
        mensagem.textContent = "Senha incorreta.";
    }
}
