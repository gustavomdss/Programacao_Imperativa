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


