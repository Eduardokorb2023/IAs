function verificarSenha() {
    const senha = document.getElementById('campo-senha').value.trim();
    const mensagem = document.getElementById('mensagem-secreta');


    if (!/^[123]{6}$/.test(senha)) {
        mensagem.textContent = " A senha errada";
        return;
    }

    // Conta os números
    let cont1 = 0, cont2 = 0, cont3 = 0;
    for (let i = 0; i < senha.length; i++) {
        if (senha[i] === "1") cont1++;
        else if (senha[i] === "2") cont2++;
        else if (senha[i] === "3") cont3++;
    }

    if (cont1 === 6) {
        mensagem.textContent = "você sabe muito sobre as IAs";
    } else if (cont2 === 6) {
        mensagem.textContent = "você sabe subestima as IAs e não gosta delas ";
    } else if (cont3 === 6) {
        mensagem.textContent = "IA Desperta!";
    } else if (cont1 === 5) {
        mensagem.textContent = "você sabe bastante sobre as IAs";
    } else if (cont2 === 5) {
        mensagem.textContent = "você sabe subestima as IAs";
    } else if (cont3 >= 3) {
        mensagem.textContent = "você não sabe o que é IA?";
    } 
}
