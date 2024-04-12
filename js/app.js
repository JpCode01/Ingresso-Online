
let ingressoSuperior = document.getElementById('qtd-superior').innerText;
let ingressoInferior = document.getElementById('qtd-inferior').innerText;
let ingressos;
function comprar() {
    ingressos = document.getElementById('tipo-ingresso').value;
    let qtde = parseInt(document.getElementById('qtd').value);


    if (ingressos == 'pista') {
        comprarPista(qtde)
    } else if (ingressos == 'superior') {
        comprarSuperior(qtde)
    } else {
        comprarInferior(qtde)
    }
    
}

function comprarPista(qtd) {
    let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);
    if (qtd > qtdPista) {
        alert(`Quantidade indisponível para ${ingressos}!`);
    } else {
        qtdPista = qtdPista - qtd;
        document.getElementById('qtd-pista').textContent = qtdPista;
    }
} 

function comprarSuperior(qtd) {
    let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent);
    if (qtd > qtdSuperior) {
        alert(`Quantidade indisponível para ${ingressos}!`);
    } else {
        qtdSuperior = qtdSuperior - qtd;
        document.getElementById('qtd-superior').textContent = qtdSuperior;
    }
} 

function comprarInferior(qtd) {
    ingressos = document.getElementById('tipo-ingresso').value;
    let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent);
    if (qtd > qtdInferior) {
        alert(`Quantidade indisponível para ${ingressos}!`);
    } else {
        qtdInferior = qtdInferior - qtd;
        document.getElementById('qtd-inferior').textContent = qtdInferior;
    }
} 