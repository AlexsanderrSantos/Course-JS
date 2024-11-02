function carregar() {
    var msg = window.document.getElementById("msg");
    var img = window.document.getElementById("imagem");
    var data = new Date();
    var hora = data.getHours();
    hora = 22;
    
    msg.innerHTML = `Agora são ${hora} horas.`;
    if (hora >= 0 && hora < 12){
        //bom dia
        img.src = "foto_manha.png"
        document.body.style.background = "#96b9d7"
    }else if (hora >= 12 && hora < 18){
        //boa tarde
        img.src = "foto_tarde.png"
        document.body.style.background = "#f1b35b"
    }else {
        //boa noite
        img.src = "foto_noite.png"
        document.body.style.background = "#4c555a"
    }
}
