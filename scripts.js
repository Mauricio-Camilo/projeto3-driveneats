/* Teste de ativar o botão, mudando suas configurações */

function clicarBotao() {

    const elemento = document.querySelector(".ativado");
    elemento.classList.add("clicar");

}

function ativarBotao () {

 const desativar = document.querySelector(".desativado");
desativar.classList.add("escondido"); 
 
 const ativar = document.querySelector(".ativado");
ativar.classList.remove("escondido"); 

}

// Comando para tirar o R$ da string //
/*
let aux = document.querySelector(".preco");
let flat = aux.innerHTML.substr(3)
*/

// Comando para substituir , por . //

function somar() {

    let res = flat.replace(",", ".");

    let soma = parseFloat(res) + 20.30;

    alert(soma);

}

