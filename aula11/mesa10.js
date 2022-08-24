let filmes = ['star wars', 'matrix', 'mr. robot', 'o preço do amanhã', 'a vida é bela'];
let filmes1 = ["Toy Story", "Procurando Nemo", "Kung-fu Panda", "Wally", "Fortnite"];

function maiuscula ([]){
    for (let modo = 0; modo<filmes.length; modo++){
        console.log(filmes[modo].toUpperCase())
    }
}
maiuscula([]);

//-------------------------------------------------------

function passagemDeElemento([]){
    filmes1.pop()
for (let passagem = 0; passagem<filmes.length; passagem++){
   let soma = [filmes[passagem] + " , " + filmes1[passagem]]
   
   console.log(soma);

}
}
passagemDeElemento([])

//-------------------------------------------------------

const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];


function comparar_media(){
for (let media1 = 0; media1<=asiaScores.length; media1++){
     if (asiaScores[media1] === euroScores[media1]){
        console.log('As médias são iguais!')
     }else{
        console.log(" As médias são diferentes!")
     }
     
}
}
comparar_media()
