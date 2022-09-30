const funcSoma = require('./modulos/soma');
const listPessoas = require('./modulos/pessoas')


console.log(listPessoas);

function mediaIdade(lista){
    let result = 0
    for (let index = 0; index < lista.length; index++) {
        result += lista[index].idade;
          
    }
    
    return result / lista.length;
}
console.log(mediaIdade(listPessoas));
console.log(funcSoma(2,4))

let teste = {
    somar : funcSoma(10,5),
    
}
console.log(teste.somar)