// exercicio 1

function loopdePares(num){
    for (let i = 0 ; i<=num ; i++) {
        let numAnt =+ i
        if(numAnt % 2 == 0){
            console.log( "O numero "+ i + " É par!")
        }
        
    }
}
loopdePares(10);

// exercicio 2:

function loopdeImpares(num, str){
    for (let i = 0; i < num; i++) {
        let numAnt =+ i;
        if(numAnt % 2 != 0){
            console.log("O "+ str + " "+ numAnt + " É impar!");
        }
        
    }
}
loopdeImpares(10, "caqui");

// exercicio 3:


function soma(num) {
    let soma = 0;
    for (let i = 0; i <= num; i++) {
        soma += i;
    }
    console.log(soma)
}

soma(8)

// exercicio 4:

function newArray(num){
let array = []
for (let i = 0; i <= num; i++) {
    array.push(i)

}
console.log(array)

}
newArray(10);

// exercicio 5:

function split(str){
    novarray = []
    for (let i = 0; i < str.length; i++) {
        novarray.push(str[i])
        
    }
    console.log(novarray)
}
split("Casa")

// Exercicio 6: 

function moverZeros(array){
    let array1 = [];
    let array2 = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] === 0){
            array2.push(array[i])
        }else {
            array1.push(array[i])
        }
        }
        console.log(array1 + "," + array2)
    }
    


moverZeros([1, 3, 5, 0, 2, 0, 2, 7, 8])


// Exercicio 7:

function arrayHandler(array1, array2){
    for (let i = 0; i < array1.length; i++) {
        console.log("Eu sou "+ array1[i] + " e eu sou " + array2[i])
        
    }
}
arrayHandler([1,4,6], "Olá");

// Exercicio 8:

function arrayObjects(num){
    let arrayNova = []
    for (let i = 0; i <= num; i++) {
        arrayNova.push({
            valor : i
        })
        
    }
    console.log(arrayNova)
}
arrayObjects(12)

// Exercicio 9:ls


function arrayObjectsTwo(num, str){
    let arraynew = []
    for (let i = 0; i <=num; i++) {
        arraynew.push({
        [str]: i
            
        })
        
    }
    console.log(arraynew)
}
arrayObjectsTwo(8, "Olá")