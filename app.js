//Desafio let titulo = document.querySelector('h1');
//titulo.innerHTML = 'Jogo do Número Secreto';

//let paragrafo = document.querySelector('p')
//paragrafo.innerHTML = 'Insira um número de 1 a 10'
let listaDeNumeros = [];
let numeroAleatorio = gerarNumeroAleatorio();
let tentativas = 1;

function alterarTextoTag(tag, texto){
    let varTag = document.querySelector(tag);
    varTag.innerHTML = texto;
}
function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * 10 + 1);
    let quantidadeElementosLista = listaDeNumeros.length;
    
    if (quantidadeElementosLista == 10){
        listaDeNumeros = [];
    }

    if(listaDeNumeros.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    }
    else{
        listaDeNumeros.push(numeroEscolhido);
        return  numeroEscolhido;
    }

}

function exibirMensagemInicial(){
    alterarTextoTag('h1', 'Jogo do número secreto');
    alterarTextoTag('p', 'Escolha um número entre 1 e 10');
}

function verificarChute(){
    console.log(numeroAleatorio);
    let chute = document.querySelector('input').value;
    if (chute == numeroAleatorio){
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativa = 'Parabéns! Você acertou com um total de ' + tentativas + ' ' + palavraTentativa+'!';

        alterarTextoTag('h1', 'Acertou!');
        alterarTextoTag('p', mensagemTentativa);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if (numeroAleatorio > chute){
            alterarTextoTag('h1', 'Errou');
            alterarTextoTag('p', 'Tente Novamente! \n(Dica: O número secreto é maior!)');
        }
        else{
            alterarTextoTag('h1', 'Errou');
            alterarTextoTag('p', 'Tente Novamente! \n(Dica: O número secreto é menor!)');
        }
        tentativas++;
        limparCampo();
    }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    exibirMensagemInicial();
    tentativas = 1;
    numeroAleatorio = gerarNumeroAleatorio();
    limparCampo();
    document.getElementById('reiniciar').setAttribute('disabled', true);

}

exibirMensagemInicial();



/*Desafio function olaMundo(){
    console.log('Olá mundo');
}
console.log(olaMundo())

function olaNome(nome){
    console.log('Olá '+nome+'!');
}
console.log(olaNome('Gabriel'));

function dobro(numero){
    return parseInt(numero*2);
}
console.log(dobro(5));

function media(numero, numero2, numero3){
    return media =  parseInt((numero + numero2 + numero3)/3);
}
console.log(media(3, 7, 20));

function maior(numero, numero2){
    if (numero > numero2){
        return numero;
    }else{
        return numero2;
    }
}

console.log(maior(5, 9));

function quadrado(numero){
    return parseInt(numero*numero);
}

console.log(quadrado(3));*/