function calcular(){
    let num = window.document.getElementById('num')
    let resp = window.document.getElementById('resp')

        if(num.value.length == 0){
            alert("Digite um numero")
        }else{
            num = Number(num.value)
            for(let cont = 1; cont <= 10; cont++){
            let item = document.createElement('option')
            item.innerHTML += `${cont}x${num} = ${cont*num} </br>`
            resp.appendChild(item)
            }
    
        }
        
    
}