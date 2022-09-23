let list_estu = require('./modules/listaEstudantes')
let constru = require('./modules/construtor')


const curso = {
    nomeCurso : "Introducao Informatica", 
    notaAprovacao : 7,
    faltas_maximas : 3, 
    listaEstudantes : list_estu,

    adicionar_aluno: function(aluno, faltas, notas){
        list_estu.push(new constru(aluno, faltas, notas))
    },

    aprovacao : function(array){
        let somaNota = 0
        for (let i = 0; i < array.notas.length; i++) {
           somaNota += array.notas[i]            
        }
           let media = somaNota / array.notas.length
           if ((media >= curso.notaAprovacao) && ((array.faltas < this.faltas_maximas))){
            return "Aluno Aprovado"
           }else if( (media >= curso.notaAprovacao) && ((array.faltas == this.faltas_maximas) && (media > (curso.notaAprovacao + (curso.notaAprovacao * 0,1))))) {
            return "Aluno Aprovado"
           }else{
            return "Aluno Reprovado"
           }
        },
        aprovacaoGeral : function(array){
            let aprovados = [];
            for (let index = 0; index < array.length; index++) {
                aprovados.push(this.aprovacao(array[index]))     
            }
            return aprovados;
        }
}


// -------Mostrando conteudo do objeto curso:
console.log(curso);

// -------Mostrando lista de estudantes do curso:
console.log(curso.listaEstudantes)

//-------Adicionando um estudante a lista do curso:
curso.adicionar_aluno("Roberto", 1, [3,5,8,1,2,8])

//------- Mostrando lista de estudantes atualizada:
console.log(curso.listaEstudantes)

//--------Mostra se o estudante foi aprovado no curso:
console.log(curso.aprovacao(curso.listaEstudantes[2]))

//--------Mostra um array da aprovação/reprovacao dos estudantes:
console.log(curso.aprovacaoGeral(curso.listaEstudantes))
