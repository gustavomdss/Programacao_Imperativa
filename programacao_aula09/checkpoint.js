let pipoca = 10
let macarrao=8
let carne=15
let feijao=12
let brigadeiro=8;
let padrao = null;

function menu(tipo){
    switch (tipo){
        case pipoca:
            padrao = pipoca;
        
            break
        case macarrao:
            padrao=macarrao;
            break
        case carne:
            padrao=carne;
            break
        case feijao:
            padrao=feijao;
            break
        case brigadeiro:
            padrao=brigadeiro;
        default:
            padrao = false;
    }   
    }
 function alteracaoTempo (tempo){
    alteracaoTempo === 0? alteracaoTempo=padrao : "";
    if (padrao == false){
        return "Prato Inexistente"
    }
     else if (tempo >= (2*padrao) && tempo <(3*padrao)){
         return("a comida queimou")
     }
     else if (tempo<padrao){
        return ("tempo insuficiente!")
     }
     else if(tempo >= (3*padrao)){
         return(" Kabumm");
     }
     else{
        return('O prato está pronto. Bom Apetite!')
     }
}
menu(carne)
console.log (alteracaoTempo());