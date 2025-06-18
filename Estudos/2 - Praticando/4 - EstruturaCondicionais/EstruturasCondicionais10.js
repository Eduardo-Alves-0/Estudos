function validarSenha (senha) {
    return (
        senha.length >= 8 &&
        /[A-Z]/.test(senha) &&
        /[a-z]/.test(senha) &&
        /[0-9]/.test(senha) &&
        /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(senha)
    )
}

let senha = prompt("Crie uma senha: ")

while (!validarSenha (senha)) {
    alert ("A senha deve conter no minimo 8 caracteres, uma letra maiuscula, uma minuscula, um numero e um caractere especial")
    senha = prompt("Crie uma senha: ")
}

alert ("Senha valida")

while (confirmaSenha !== senha) {
    alert ("As senhas não são as mesmas! Tente novamente.")
    confirmaSenha = prompt ("Confirme a senha: ")
}

alert ("Senha cadastrada com sucesso!")