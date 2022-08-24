const a = [5, 8, 4, 9, 5];
const b = [8, 7, 8, 6, 8];
const c = [7, 5, 10, 8, 3];




function pontuacaoMedia([a,b,c,d,e]){
    let somarDividir = [a+b+c+d+e]/5
    console.log(somarDividir)
}
//pontuacaoMedia(c);

function pontuacaoMaior(user){
    let maior = Math.max.apply(null, user)
    console.log(maior)
}
//pontuacaoMaior(a);

function competicao(user1, user2, user3){
    
    if (pontuacaoMedia(user1) > pontuacaoMedia(user2), pontuacaoMedia(user3)){
       console.log(" O aluno 'a' venceu");
    }
    else if(pontuacaoMedia(user2) > pontuacaoMedia(user1), pontuacaoMedia(user3) ){
       console.log("O aluno 'b' venceu");
    }else {
       console.log("O aluno 'c' venceu com a notas " + user3);
    }   
}

competicao(a,b,c);
pontuacaoMedia(b)
