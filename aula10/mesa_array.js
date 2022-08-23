// exercicio a:
let comidas = ['frango', 'macarrao', 'lasanha', 'kibe'];
console.log(comidas[1]);
console.log(comidas[3]);

//exercicio b:

console.log(comidas[0]+ ' '+ "assado")
console.log(comidas[1]+" "+ "a bolonhesa")
console.log(comidas[2]+" "+ "com molho branco")
console.log(comidas[3]+" "+ "assado e recheado")

// exercicio c:

comidas.push("arroz");
console.log(comidas);

// exercicio d:

comidas.pop();
console.log(comidas);

// exercicio e:

let comidas1 = ['feijao', 'macarrao', 'ossobuco', 'lentilhas']

console.log(comidas == comidas1);
console.log(comidas[1] == comidas1[1]);

// o que os codigos retornam?

// exercicio 1:

// retorna o numero de informações na array

//-----------------------------------------------

// exercicio 2:

// retorna somente "spyderman"

//-----------------------------------------------

// exercicio 3:

// Retorna "uma string qualquer"

//----------------------------------------------

// ARRAY INVERTIDO:
//exercicio 1:

function imprimirInverso() {
    console.log(comidas[3])
    console.log(comidas[2])
    console.log(comidas[1])
    console.log(comidas[0])
}
imprimirInverso();

//exercicio 2:

function inverter(){
    console.log(comidas = ["kibe", "lasanha", "macarrao", 'frango'])
}
 inverter()

// SOMAR ARRAY



function somarArray([a, b, c, d]){
    let soma = [a+b+c+d]
    console.log(soma);
}
somarArray([1,2, 3, 4]);

// SIMULAÇÃO ARRAY/JOIN

function join([a, b, c]){
    let join_prin = [''+ a + b + c + '']
    console.log(join_prin)
}
join(["o", "l", "á"])
join(["pre", "pa", "rar"])

// COLEÇÃO DE FILMES(E MAIS...)

// exercicio 1:

let filmes = ['star wars', 'matrix', 'mr. robot', 'o preço do amanhã', 'a vida é bela'];

console.log(filmes[1]);

// exercicio 2:

function maiuscula([a]){
    console.log(filmes[a].toUpperCase())
}
maiuscula([1]);
maiuscula([3]);

// exercicio 3:

let filmes1 = ["Toy Story", "Procurando Nemo", "Kung-fu Panda", "Wally", "Fortnite"];

function doisarrays(){
    let somaArrays = [filmes + ' ,' + filmes1];
    console.log(somaArrays)
}
doisarrays()

// exercicio 4:
filmes1.pop()
let somaArrays = [filmes + filmes1];
let apagado = "Fortnite";

console.log(somaArrays);

// exercicio 5:

const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];

function comparacao_media(){
    let media1 = [asiaScores[0]+asiaScores[1]+asiaScores[2]+asiaScores[3]+asiaScores[4]+asiaScores[5]+asiaScores[6]+asiaScores[7]+asiaScores[8]]/9;
    let media2 = [euroScores[0]+euroScores[1]+euroScores[2]+euroScores[3]+euroScores[4]+euroScores[5]+euroScores[6]+euroScores[7]+euroScores[8]]/9;
    if (media1 == media2){
        console.log(" As médias são Iguais!")
    }else{
        console.log("As médias são diferentes!")
    }
}
comparacao_media()
