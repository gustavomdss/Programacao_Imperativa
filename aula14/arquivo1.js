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