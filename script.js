// 'addEventListener()' adiciona um ouvidor de eventos, ou seja, uma ação será executada quando determinado evento ocorrer.
document.getElementById("botaoEnviar").addEventListener("click", validaFormulario)

function validaFormulario(){

    // 'document.getElementById("").value' procura um elemento pelo seu identificador em um determinado documento, além de mostrar o seu valor
    if(document.getElementById("nome").value != "" && 
        document.getElementById("email").value != "" &&
        document.getElementById("telefone").value != ""){

        alert("Prontinho! Você receberá as novidades por email.")
    }else{
        alert("Por favor, preencha os campos nome e email!")
    }
}
