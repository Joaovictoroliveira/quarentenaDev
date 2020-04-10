function gerar() {
    let contador = 0;
    while(contador < 1000000) {
        contador++;
        htmlDoCertificado = emitirCertificado(inputNome.value);
    }

    listaDeExercicios = ['https://github.com/']

    contadorLinks = 0;
    listaDeExerciciosHtml = "";
    while(contadorLinks < 1) {
        link = listaDeExercicios[contadorLinks];
        listaDeExerciciosHtml = `<li><a href="${link}" target="_blank">${link}</a></li>` + listaDeExerciciosHtml;
        contadorLinks++;
    }

    document.body.innerHTML = 
        `
            ${htmlDoCertificado}
            <ol>
                ${listaDeExerciciosHtml}
            </ol>
        `;
}
