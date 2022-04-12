// Declaração das variáveis globais
let array = [];
let soma = "";

function ativarBorda(categoria, opção, botao) {

     /* comandos de seleção da borda */

     const desativaBotao = document.querySelector(`${categoria} .bordaverde`);
     if (desativaBotao !== null) {
         desativaBotao.classList.remove("bordaverde");
     }
     const ativaBotao = document.querySelector("." + botao);
     ativaBotao.classList.add("bordaverde");
 
     /* comandos de seleção do icone */
 
     for (let i = 1; i < 5; i++) {
         const desativaIcone = document.querySelector(`${categoria} ${opção}${i} .icone-check`);
         desativaIcone.classList.add("escondido");
         const ativaIcone = document.querySelector("." + botao + " .icone-check");
         ativaIcone.classList.remove("escondido");
     }
}

function selecionarComida(classeBotao) {
    let nomePrato = "";
    let precoPrato = "";

    ativarBorda(".comidas",".comida", classeBotao);

    /* Pegar os dados do botão clicado que estão no html */

    nomePrato = document.querySelector("." + classeBotao + " .prato")
    nomePrato = nomePrato.innerHTML;
    precoPrato = document.querySelector("." + classeBotao + " .preco")
    precoPrato = precoPrato.innerHTML;

    /* Colocar os dados obtidos nas variáveis globais */

    array[0] = nomePrato;
    array[1] = precoPrato;
    array[6] = "ok";
    ativarBotao();
    return array;
}

function selecionarBebida(classeBotao) {
    let nomeBebida = "";
    let precoBebida = "";

    ativarBorda(".bebidas",".bebida", classeBotao);

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

    ativarBorda(".sobremesas",".sobremesa", classeBotao);
    
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
        // Esconde o botão cinza que não é clicável
        const desativar = document.querySelector(".desativado");
        desativar.classList.add("escondido");
        // Habilita o botão de fechar pedido
        const ativar = document.querySelector(".ativado");
        ativar.classList.remove("escondido");
    }
}

/* A função deve remover o R$ do preço, trocar , por . para fazer a conta */

function calcularPreco() {
    let num1 = array[1];
    num1 = num1.substr(3).replace(",", ".");
    let num2 = array[3];
    num2 = num2.substr(3).replace(",", ".");
    let num3 = array[5];
    num3 = num3.substr(3).replace(",", ".");
    soma = parseFloat(num1) + parseFloat(num2) + parseFloat(num3);
    soma = soma.toFixed(2).replace(".", ",");
    return soma;
}

function confirmarPedido() {
    calcularPreco();

    /* Comandos para mostrar a barra de confirmação */

    let pedido = document.querySelector(".confirmacao");
    pedido.classList.remove("escondido");

    /* Envia os valores dentro do JS para o HTML */

    document.getElementById("comida").innerHTML = array[0];
    document.getElementById("precocomida").innerHTML = array[1].substr(3);
    document.getElementById("bebida").innerHTML = array[2];
    document.getElementById("precobebida").innerHTML = array[3].substr(3);
    document.getElementById("sobremesa").innerHTML = array[4];
    document.getElementById("precosobremesa").innerHTML = array[5].substr(3);
    document.getElementById("precototal").innerHTML = "R$ " + soma;
}

function recomeçar() {
    let pedido = document.querySelector(".confirmacao");
    pedido.classList.add("escondido");
    resetarBordas();
    resetarIcones();
    zerarBotao();
}

function resetarBordas() {
    let zerar1 = document.querySelector(".comidas .bordaverde");
    zerar1.classList.remove("bordaverde");
    let zerar2 = document.querySelector(".bebidas .bordaverde");
    zerar2.classList.remove("bordaverde");
    let zerar3 = document.querySelector(".sobremesas .bordaverde");
    zerar3.classList.remove("bordaverde");
}

function resetarIcones() {
    for (let i = 1; i < 5; i++) {
        const zerar4 = document.querySelector(".comidas .comida" + i + " .icone-check");
        zerar4.classList.add("escondido");
        const zerar5 = document.querySelector(".bebidas .bebida" + i + " .icone-check");
        zerar5.classList.add("escondido");
        const zerar6 = document.querySelector(".sobremesas .sobremesa" + i + " .icone-check");
        zerar6.classList.add("escondido");
    }
}

function zerarBotao() {
    const desativar = document.querySelector(".desativado");
    desativar.classList.remove("escondido");
    const ativar = document.querySelector(".ativado");
    ativar.classList.add("escondido");
    array[6] = "";
    array[7] = "";
    array[8] = "";
}

function enviarMensagem() {
    const nomeUsurario = prompt("Escreva seu nome")
    const enderecoUsurario = prompt("Escreva seu endereço")
    calcularPreco();
    textoMensagem = `Olá, gostaria de fazer o pedido: - Prato: ${array[0]} - Bebida: ${array[2]} 
    - Sobremesa: ${array[4]} Total: R$ ${soma} Nome: ${nomeUsurario} Endereço: ${enderecoUsurario}`;
    window.open(`https://wa.me/5511972665730?text=${encodeURIComponent(textoMensagem)}`);
}