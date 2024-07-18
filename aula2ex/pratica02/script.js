function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var formAno = document.getElementById('ano')
    var res = document.getElementById('res')
    if(formAno.value.length == 0 || Number(formAno.value) > ano){
        window.alert("[ERRO] Verifique os dados e tente novamente")
    } else{
        var formSex = document.getElementsByName('radsex')
        var idade = ano - Number(formAno.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (formSex[0].checked) {
            genero = "Homem"
            if(idade >= 0 && idade < 10){
                img.setAttribute('src', 'imagem/bebeh.png')
            } else if(idade >= 10 && idade < 21){
                img.setAttribute('src', 'imagem/jovemh.png')
            } else if (idade >= 21 && idade < 50){
                img.setAttribute('src', 'imagem/adultoh.png')
            } else {
                img.setAttribute('src', 'imagem/velhoh.png')
            }
        } else if (formSex[1].checked) {
            genero = 'Mulher'
            if(idade >= 0 && idade < 10){
                img.setAttribute('src', 'imagem/bebem.png')
            } else if(idade >= 10 && idade < 21){
                img.setAttribute('src', 'imagem/jovemm.png')
            } else if (idade >= 21 && idade < 50){
                img.setAttribute('src', 'imagem/adultom.png')
            } else {
                img.setAttribute('src', 'imagem/velhom.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}