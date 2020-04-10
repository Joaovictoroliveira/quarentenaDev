function executarSorteio() {
    let numeroSorteado = (Math.random() * 5).toFixed(0);
    console.log(numeroSorteado);
    let numeroSorte = prompt("Seu número da sorte");
    console.log(typeof numeroSorte === 'number');

    while(numeroSorte < 0 || numeroSorte > 10) {
        alert("O número precisar estar entre 0 e 10");
        numeroSorte = prompt("Seu número da sorte");
    }

    if(numeroSorte == numeroSorteado) {
        paragrafoResultado.innerHTML = "Você ganhou o sorteio!!!";
        paragrafoResultado.style.color = "white";
        paragrafoResultado.style.backgroundColor = "red";
        paragrafoResultado.style.fontSize = "20px";
        paragrafoResultado.style.fontWeight = "bold";
    }else {
        paragrafoResultado.innerHTML = "Tente outra vez";
        paragrafoResultado.style.backgroundColor = "purple";
        paragrafoResultado.style.color = "white";
        paragrafoResultado.style.fontSize = "20px";
        paragrafoResultado.style.fontWeight = "bold";
    }
}
