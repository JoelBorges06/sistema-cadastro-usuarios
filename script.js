const formulario = document.getElementById("formulario")  
const nome = document.getElementById("nome");
const email = document.getElementById("email");
const senha = document.getElementById("senha");
const mensagemEmail = document.getElementById("mensagemEmail");
const mensagemSenha = document.getElementById("mensagemSenha");
const mensagemNome = document.getElementById("mensagemNome");
const mensagemSucesso = document.getElementById("mensagemSucesso"); 
const mostrarSenha = document.getElementById("mostrarSenha");
const iconeOlho = document.getElementById("iconeOlho");

mostrarSenha.addEventListener("click", function () {
  if (senha.type === "password") {
    senha.type = "text";

    // Olho aberto
    iconeOlho.innerHTML = `
      <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z"/>
      <circle cx="12" cy="12" r="3"/>
    `;

    mostrarSenha.setAttribute("aria-label", "Ocultar senha");

  } else {
    senha.type = "password";

    // Olho fechado
    iconeOlho.innerHTML = `
      <path d="M3 3118 18"/>
      <path d="M10.6 10.6a2 2 0 0 0 2.8 2.8"/>
      <path d="M9.9 5.1A10.8 10.8 0 0 1 12 5c6.5 0 10 7 10 7a18.5 18.5 0 0 1-3.1 3.8"/>
      <path d="M6.1 6.1C3.5 8 2 12 2 12s3.5 7 10 7a10.8 10.8 0 0 0 3.5-.6"/>
    `;

    mostrarSenha.setAttribute("aria-label", "Mostrar senha");
  }
});

formulario.addEventListener("submit", function (event) {
    event.preventDefault();
if (nome.value.trim() === "") {
    mensagemNome.textContent = "Nome é obrigatório!"
} else {
    mensagemNome.textContent = "Nome preenchido!"
}

if (email.value === "") {
    mensagemEmail.textContent = "E-mail é obrigatório!";
} else if (!email.value.trim().includes("@")) {
    mensagemEmail.textContent = "E-mail inválido! Deve conter '@'.";
} else {
    mensagemEmail.textContent = "E-mail válido!";
}

if (senha.value === "") {
    mensagemSenha.textContent = "Senha é obrigatória!";
} else if (senha.value.length < 6) {
    mensagemSenha.textContent = "Senha muito curta! Deve ter no mínimo 6 caracteres.";
} else {
    mensagemSenha.textContent = "Senha preenchida!";
}

if (
    nome.value.trim() !== "" &&
    email.value.trim() !== "" &&
    senha.value !== "" &&
    email.value.includes("@") &&
    senha.value.length >= 6
) {
    mensagemSucesso.textContent = "Cadastro realizado com sucesso!";

    fetch("http://localhost:3000/enviar", {
        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            nome: nome.value,
            email: email.value,
            senha: senha.value
        })
    })
    .then(response => response.text())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error("Error:", error);
    });

    nome.value = "";
    email.value = "";
    senha.value = "";

    mensagemNome.textContent = "";
    mensagemEmail.textContent = "";
    mensagemSenha.textContent = "";

} else {
    mensagemSucesso.textContent = "";
}

});
