function verificar() {
    var inicio = window.document.getElementById('inicio')
    var fim = window.document.getElementById('fim')
    var passo = window.document.getElementById('passo')
    var res = window.document.getElementById('res')

        if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
            window.alert("Voce deve preencher todos locais!")
        } else {
                if(Number(inicio.value) < Number(fim.value)){
                res.innerHTML = "Contando:"
                for(var cont = Number(inicio.value); cont <= Number(fim.value); cont += Number(passo.value)){
                    res.innerHTML += `${cont} \u{1F449}`
                    }
                } else{
                  for(var cont = Number(inicio.value); cont >= Number(fim.value); cont -= Number(passo.value)){
                        res.innerHTML += `${cont} \u{1F449}`
                    }
                }
            res.innerHTML += `\u{1F3C1}`
        }
}

