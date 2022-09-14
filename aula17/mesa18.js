// exercicio 1

function loopdePares(num){
    for (let index = 0; index <= num; index++) {
        let numAnterior =+ index
        if(numAnterior % 2 == 0){
            console.log ("O numero " + numAnterior + " é Par")
        }

        }
        
    }

loopdePares(10)

// exercicio 2

function loopdeInpares(num, str){
    for (let index = 0; index < num; index++) {
        let numAnterior =+ index;
        if(numAnterior % 2 != 0){
            console.log( "o " + str + " " + numAnterior + " É Impar")
        }
        
    }

}
console.log(loopdeInpares(10, "caqui"))

// Exercicio 3

function soma(num){
for (let index = 0; index <= num; index++) {
    let somaTotal =+ index;
    let total = (num - somaTotal) + num
    console.log(total)
    
}

}
soma(10)



// exercicio 4
//usar funcao, 1 parametro, usar loop for
// usar metodo push

// exercicio 5
//string é um array em js.

// exercicio 6
//usar for primeiro, if valor = 0, separar em uma variavel tipo array,, senao popular o outro array com os outros numeros diferentes de zero
// fazer 2 arrays e somar no final utilizando o push

// exercicio 7
//  usar for

//exercicio 8
// igual o 4

// exercicio 9
//
