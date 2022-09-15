let pessoas = [
    {
        altura : 1.80,
        sexo : "M"
    },
    {
        altura : 1.55,
        sexo : "F"
    },
    {
        altura : 1.65,
        sexo : "F"
    },
    {
        altura : 1.87,
        sexo : "M"
    },
    {
        altura : 1.68,
        sexo : "M"
    },
    {
        altura : 1.50,
        sexo : "F"
    },
    {
        altura : 1.64,
        sexo : "F"
    },
    {
        altura : 1.79,
        sexo : "M"
    },
    {
        altura : 1.59,
        sexo : "F"
    },
    {
        altura : 1.61,
        sexo : "M"
    },
    {
        altura : 1.72,
        sexo : "M"
    },
    {
        altura : 1.84,
        sexo : "M"
    },
    {
        altura : 1.69,
        sexo : "F"
    },
    {
        altura : 1.63,
        sexo : "M"
    },
    {
        altura : 1.54,
        sexo : "F"
    }
]





const altura = (array) =>{
    
    const maior = array.reduce(function(prev, current) { 
        return prev.altura > current.altura ? prev : current; 
    });
    const menor = array.reduce(function(prev, current) { 
        return prev.altura < current.altura ? prev : current; 
    });
    
console.log("A maior altura é do:", maior, "e a menor altura é do: ", menor)
}


altura(pessoas)

//--------------------------------------------------------


const media = (array)=>{

    let selecao = array.filter(array => (array.sexo === "F"))
    
    let somaAltura = 0
    for (let i = 0; i < selecao.length; i++) {
        somaAltura += selecao[i].altura
    }
    let media = somaAltura / selecao.length
    
    console.log("A média de altura das mulheres é de: " + media)
}
media(pessoas)



//----------------------------------------------------------------



const numHomens = (array)=>{

    let selecao = array.filter(array =>(array.sexo === "M"))
    // filter para separar homens
    //lenght
    console.log("O número total de homens é de:",selecao.length)
}
numHomens(pessoas)


// APLICAÇÃO 2:

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


