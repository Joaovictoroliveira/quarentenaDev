let quantidadeLikes = 0;

function adicionarLike() {
    quantidadeLikes = 1 + quantidadeLikes;
    
    if(quantidadeLikes == 1) {
        botao.innerHTML = quantidadeLikes + " Like";
    }else {
        botao.innerHTML = quantidadeLikes + " Likes";
    }
}
