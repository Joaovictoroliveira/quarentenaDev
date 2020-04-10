function calculoImc() {
    let peso = document.getElementById("peso").value;
    let altura = document.getElementById("altura").value;
    let imc = (peso / Math.pow(altura,2)).toFixed(2);
    alert(`Seu IMC é ${imc}`); 

    if(imc < 17) {
        alert('Você está muito abaixo do peso');
    }else if(imc >= 17 && imc < 18.50) {
        alert('Você está abaixo do peso');
    }else if(imc >= 18.50 && imc < 25 ) {
        alert('Você está com peso normal');
    }else if(imc >= 25 && imc < 30) {
        alert('Você está acima do peso');
    }else if(imc >= 30 && imc < 35) {
        alert('Você está com Obesidade I');
    }else {
        alert('Você está com Obesidade II');
    }
}
