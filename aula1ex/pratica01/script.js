function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if(hora >= 0 && hora < 12){
        img.src = 'imagens/manhanovo.png'
        document.body.style.background = '#FCE2BF'
    } else if (hora >= 12 && hora < 18){
        img.src = 'imagens/tardenovo.png'
        document.body.style.background = '#EA6E07'
    } else {
        img.src = 'imagens/noitenovo.png'
        document.body.style.background = '#0B2033'
    }
}
