const espectadores = [
{idade : 16, opiniao: 3},
{idade : 36, opiniao: 3},
{idade : 54, opiniao: 2},
{idade : 78, opiniao: 3},
{idade : 31, opiniao: 2},
{idade : 12, opiniao: 1},
{idade : 18, opiniao: 1},
{idade : 27, opiniao: 3},
{idade : 44, opiniao: 1},
{idade : 35, opiniao: 2},
{idade : 49, opiniao: 1},
{idade : 23, opiniao: 3},
{idade : 28, opiniao: 3},
{idade : 62, opiniao: 3},
{idade : 59, opiniao: 2}
]

const mediaIdade = (array)=>{
    let selecao = array.filter(media => (media.opiniao == 3));
    let somaIdade = 0
    for (let i = 0; i < selecao.length; i++) {
        somaIdade += selecao[i].idade
    }
    let media = somaIdade / selecao.length
    console.log("A média das idades que responderam ótimo foi de:", Math.round(media));
}
mediaIdade(espectadores);


//--------------------------------------------------



const qtdPessoas = (array)=>{
    let selecao = array.filter(regular => (regular.opiniao == 1));
    console.log("A quantidade de pessoas que responderam regular foi de:", selecao.length)
}

qtdPessoas(espectadores)



//--------------------------------------------------

const porcentagem = (array) =>{
    let selecao = array.filter(regular => (regular.opiniao == 2));
    porcento_total = (selecao.length*100) / array.length;
    console.log("A porcentagem de espectadores que acharam o filme 'bom' foi de:", Math.round(porcento_total),"%")
}
porcentagem(espectadores)