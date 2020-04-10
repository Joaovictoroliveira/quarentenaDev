function formatarMoeda(valor) {
    return valor.toFixed(2).replace(".", ",");
}

console.log(formatarMoeda(15.487458748745));

function calcular() {
    distanciakm = document.getElementById("inputDistancia").value;
    tempomin = document.getElementById("inputTempo").value;
    valorCorrida = 2 + (distanciakm * 1.4) + (tempomin * 0.26);
    botaoCalcular.innerHTML = 'Total: R$' + valorCorrida.toFixed(2).replace('.',',');
}
