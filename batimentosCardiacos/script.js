function batimentos() {
    let idade = document.getElementById("idade").value;
    if(idade <= 2) {
        bpm = 130;
    }else if(idade <= 17) {
        bpm = 90;
    }else {
        bpm = 65;
    }
    let batimenosNaVida = (bpm * 60) * 24 * 365 * idade;
    alert(`Seu coração já beteu ${batimenosNaVida} vezes durante sua vida`);
}
