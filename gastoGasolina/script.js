function calculoCombustivel() {
    let kml = document.getElementById("kml").value;
    let tempo = document.getElementById("tempo").value;
    let velocidade = document.getElementById("velocidade").value;
    let distancia = tempo * velocidade;
    let combustivel = (distancia / kml).toFixed(2);
    alert(`Foram gastos ${combustivel} litros de combustível nessa viagem`);
}
