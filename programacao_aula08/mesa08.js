// EXERCICIO 1
function podeSubir1(altura, acompanhado){
    let podeSubir1 = false;
    if ((altura>=1.40) && (altura<2)){
        podeSubir1 = true;
        
    }
    else if (((altura<1.40) && (altura>=1.20)) && acompanhado){
        podeSubir1 =  true;
          
         }
         
    else if (altura<1.20){
      podeSubir1 = false
      
    }
    
    else{
        podeSubir1 = false}
     
    return podeSubir1;
}
console.log(podeSubir1(1.20, true))

// EXERCICIO 2

function podeSubir2(altura, acompanhado){
    let podeSubir2 = false;
    if ((altura>=1.40) && (altura<2)){
        podeSubir2 = true;
        return "acesso autorizado"
    }
    else if (((altura<1.40) && (altura>=1.20)) && acompanhado){
        podeSubir2 =  true;
        return "acesso autorizado somente com acompanhante"   
         }
         
    else if (altura<1.20){
      podeSubir2 = false
      return "acesso não autorizado"
    }
    
    else{
        return "acesso não autorizado";}
     
    
}
console.log(podeSubir2(1.15, true));