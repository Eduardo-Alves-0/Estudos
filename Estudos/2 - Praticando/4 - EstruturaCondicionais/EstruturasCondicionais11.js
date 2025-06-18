function validarNome (nome) {
    return (
        nome.length >= 3 &&
        !/\s/.test(nome) &&
        /^[A-Za-zÀ-ú ]+$/.test(nome)
    )
}

function validarEmail (email) {
    return (
        email.length > 6 &&
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    )
}

function validarSenha (senha) {
    return (
        senha.length >= 8 &&
        /[A-Z]/.test(senha) &&
        /[a-z]/.test(senha) &&
        /[0-9]/.test(senha) &&
        /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(senha)
    )
}

function validarConfirmacaoSenha (senha, confirmaSenha) {
    return senha === confirmaSenha
}


let nome = prompt ("Qual é o seu nome? ")
let email = prompt ("Insira um email: ")
let senha = prompt ("Insira uma senha: ")

while (! validarNome (nome)) {
    alert ("O nome deve conter no minimo 3 caracteres, sem numeros e sem caracteres especiais")
    nome = prompt ("Qual é o seu nome? ")
}

while (! validarEmail (email)) {
    alert ("O email deve conter no minimo 6 caracteres, com @ e .")
    email = prompt ("Insira um email: ")
}

while (! validarSenha (senha)) {
    alert ("A senha deve conter no minimo 8 caracteres, uma letra maiuscula, uma minuscula, um numero e um caractere especial")
    senha = prompt ("Insira uma senha: ")
}

let confirmaSenha = prompt ("Confirme a senha: ")

while (! validarConfirmacaoSenha (senha, confirmaSenha)) {
    alert ("As senhas não são as mesmas! Tente novamente.")
    confirmaSenha = prompt ("Confirme a senha: ")
}

alert ("Cadastro concluido com sucesso!")
