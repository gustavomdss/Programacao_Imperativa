// 2 objetos e 3 arquivos..

let construcao = require('./modules/construtor')

 
let aluno = {
    alunos : [
        {nome: "Gustavo", faltas: 4, notas: [3,5,7,4,1,2]},
        {nome: "Renato", faltas: 1, notas: [7,2,9,3,5,8]},
        {nome: "Joao", faltas: 2, notas: [10,9,8,9,4,6]},
        {nome: "Amanda", faltas: 0, notas: [2,8,8,6,4,7]},
        {nome: "Vinicius", faltas: 3, notas: [10,10,9,8,9,10]}],
    
    calcularMedia : function(array){
        let somarMedia = 0
        for (let i = 0; i < array.notas.length; i++) {
            somarMedia += array.notas[i]
            
        }
        let media = somarMedia / array.notas.length
        return " A média do(a) Aluno(a) " + array.nome +  " é: " + media ;
    },

    faltas : function(array){
        return " O(A) Aluno(a) " + array.nome + " Tem Agora: " + (array.faltas += 1) + " Falta(s)"
        
    }

}
module.exports = aluno.alunos

console.log(aluno.alunos[0].nome)
console.log(aluno.calcularMedia(aluno.alunos[2]))
console.log(aluno.faltas(aluno.alunos[3]))