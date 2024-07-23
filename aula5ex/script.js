let num = window.document.getElementById('num')
let entrada = window.document.getElementById('entrada')
let res = window.document.querySelector('div#res')
let valores = []

function isNumero(n){
    if (Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
}

function adicionar(){
    if (isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        entrada.appendChild(item)
        res.innerHTML = ''
    } else {
        alert(`Seu numero não corresponde com os termos indicados ou ja esta na lista`)
    }
    num.value = ''
    num.focus()
}

function verificar(){
    if (valores.length == 0){
        alert('Adicione valores antes de verificar')
    } else {
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores){
            soma += valores[pos]
            if (valores[pos] > maior){
                maior = valores[pos]
            } 
            if (valores[pos] < menor){
                menor = valores[pos]
            }
        }
        media = soma / total
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todos, temos ${total} numeros cadastrados</p>`
        res.innerHTML += `<p>O maior valor informado foi o ${maior}</p>`
        res.innerHTML += `<p>O menor valor Informado foi o ${menor}</p>`
        res.innerHTML += `<p>A soma de todos os valores é: ${soma}</p>`
        res.innerHTML += `<p>A media é: ${media}</p>`
    }
}