let num = [2, 5, 6, 9, 1, 10, 11]
num.push(4)
num.sort()
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é: ${num[0]}`)
let pos = num.indexOf(5)
if(pos == -1){
    console.log(`O valor não foi encontrado!`)
}else{
    console.log(`O valor 11 esta na posição ${pos}`)
}

