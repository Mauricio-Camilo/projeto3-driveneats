/* Teste de ativar o botão, mudando suas configurações */



/* Funções de seleção de pratos/bebidas/sobremesas */

let array = [];
let soma = "";


function selecionarComida(classeBotao) {

    let nomePrato = "";
    let precoPrato = "";

    /* comandos de seleção da borda */

    const desativaBotao = document.querySelector(".comidas .bordaverde");
    if (desativaBotao !== null) {
        desativaBotao.classList.remove("bordaverde");
    }

    const ativaBotao = document.querySelector("." + classeBotao);
    ativaBotao.classList.add("bordaverde");

    /* comandos de seleção do icone */

    /*    const desativaIcone = document.querySelector(".comidas .icone-check");
        desativaIcone.classList.add("escondido");
    
        const ativaIcone = document.querySelector("." + classeBotao + " .icone-check");
        ativaIcone.classList.remove("escondido"); */


    nomePrato = document.querySelector("." + classeBotao + " .prato")
    nomePrato = nomePrato.innerHTML;

    precoPrato = document.querySelector("." + classeBotao + " .preco")
    precoPrato = precoPrato.innerHTML;

    array[0] = nomePrato;
    array[1] = precoPrato;
    array[6] = "ok";
    ativarBotao();

    return array;
}



function selecionarBebida(classeBotao) {

    let nomeBebida = "";
    let precoBebida = "";

    const desativaBotao = document.querySelector(".bebidas .bordaverde");
    if (desativaBotao !== null) {
        desativaBotao.classList.remove("bordaverde");
    }

    const ativaBotao = document.querySelector("." + classeBotao);
    ativaBotao.classList.add("bordaverde");

    nomeBebida = document.querySelector("." + classeBotao + " .prato")
    nomeBebida = nomeBebida.innerHTML;

    precoBebida = document.querySelector("." + classeBotao + " .preco")
    precoBebida = precoBebida.innerHTML;

    array[2] = nomeBebida;
    array[3] = precoBebida;
    array[7] = "ok";
    ativarBotao()

    return array;
}

function selecionarSobremesa(classeBotao) {

    let nomeSobremesa = "";
    let precoSobremesa = "";

    const desativaBotao = document.querySelector(".sobremesas .bordaverde");
    if (desativaBotao !== null) {
        desativaBotao.classList.remove("bordaverde");
    }

    const ativaBotao = document.querySelector("." + classeBotao);
    ativaBotao.classList.add("bordaverde");

    nomeSobremesa = document.querySelector("." + classeBotao + " .prato")
    nomeSobremesa = nomeSobremesa.innerHTML;

    precoSobremesa = document.querySelector("." + classeBotao + " .preco")
    precoSobremesa = precoSobremesa.innerHTML;

    array[4] = nomeSobremesa;
    array[5] = precoSobremesa;
    array[8] = "ok";

    ativarBotao();

    return array;

}

function ativarBotao() {

    if (array[6] === "ok" && array[7] === "ok" && array[8] === "ok") {

        const desativar = document.querySelector(".desativado");
        desativar.classList.add("escondido");

        const ativar = document.querySelector(".ativado");
        ativar.classList.remove("escondido");

    }
 
}

function calcularPreco() {

    let num1 = array[1];
    num1 = num1.substr(3);
    num1 = num1.replace(",", ".");

    let num2 = array[3];
    num2 = num2.substr(3);
    num2 = num2.replace(",", ".");

    let num3 = array[5];
    num3 = num3.substr(3);
    num3 = num3.replace(",", ".");

    soma = parseFloat(num1) + parseFloat(num2) + parseFloat(num3);

   return soma;
}

function enviarMensagem() {

    calcularPreco();


    textoMensagem = "Olá, gostaria de fazer o pedido: - Prato: " + array[0] + " - Bebida: " + array[2] + " - Sobremesa: " + array[4] + " Total: R$ " + soma;
    window.open(`https://wa.me/5511972665730?text=${encodeURIComponent(textoMensagem)}`);

    /* const fundo = document.querySelector (".ativado");
    fundo.classList.add("fundoazul"); */
}



// Comando para tirar o R$ da string //




    

