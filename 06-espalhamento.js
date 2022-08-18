// let minimo = Math.min(2,-7,8,4,0)
// let maximo = Math.max(2,-7,8,4,0)

let nums = [2, -7, 8, 4, 0]

// let minimo = Math.min(nums) ---> NÃO FUNCIONA
// let maximo = Math.max(nums)  ---> NÃO FUNCIONA


// A sintaxe de espalhamento (spreading) é capaz de "desempacotar" um vetor em uma lista de valores avulsos

let minimo = Math.min(...nums) 
let maximo = Math.max(...nums)

// console.log({minimo, maximo})

// console.log('Vetor "empacotado": ', nums)
// console.log('Vetor "espalhado": ', ...nums)

/////////////////////////////////////////////////////////////////////////////////////////////////////
let carro1 = {modelo: 'Fiorino', marca: 'Fiat', ano: 1984, cor: 'bege'}

//copiando carro1 para carro2

let carro2 = carro1

carro2.marca = 'Chevrolet'
carro2.modelo = 'Opala'
carro2.cor = 'preto'
carro2.ano = 1979

console.log({carro1, carro2})

let frutas = ['maçã', 'banana', 'laranja']
let verduras = ['alface', 'couve', 'rucula']
// Vetor que contém tanto verduras quanto frutas
// let hortifruti = frutas + verduras ---> NÃO FUNCIONA
// let hortifruti = frutas.concat(verduras) ---> JS clássico, FUNCIONA

// Usando espalhamento e JS moderno
let hortifruti = [...frutas,...verduras]

console.log({hortifruti})

//////////////////////////////////////////////////////////////////////////////

// Problema: como declarar uma função que aceita um número arbitrário de parâmetros?
console.log('Soma 7 números: ', soma(1,2,3,4,5,6,7)) // 7 parâmetros
console.log('Soma 15 números: ', soma(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15)) // 15 parâmetros

// O espalhamento também resolve esse tipo de problema. Pode ser usado em parâmetros de função, quando então passa a ser 
// conhecido como PARÂMETRO DE RESTO
function soma(...nums){
    let res = 0
    // Dentro da função 



    // O parâmetro de resto também pode ser usado junto com parâmetros regulares. 
    // Neste caso, o parâmetro de resto deve vir por último na declaração da função.

    function calcular(oper,...nums){
        let res
        if(oper === '+'){
            res = 0
            for(let num of nums) res += num
        }
        else if(oper === '*'){
            res = 1
        }
    }

}