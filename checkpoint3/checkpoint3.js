// 2 objetos e 3 arquivos..

let construcao = require('./modules/aluno')

let alunos = [
{nome:"", faltas :0, notas :[]}
]
 
let aluno = {
    
    calcularMedia : function(array){
        let somarMedia = 0
        for (let i = 0; i < alunos[i].notas.length; i++) {
            somarMedia += alunos[i].notas
            
        }
        let media = somarMedia / alunos[i].notas.length
        return(" A média do Aluno é: ", media )
    }

}


    
alunos.push( new construcao("Gustavo", 2, [7,8,10,5]))
alunos.push( new construcao("Joao", 4, [8,5,8,5]))

console.log(aluno.calcularMedia(alunos[0]))
