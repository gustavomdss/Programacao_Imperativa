let opiniao = {

    mediaIdade : function(array){
        let selecao = array.filter(media => (media.opiniao == 3));
    let somaIdade = 0
    for (let i = 0; i < selecao.length; i++) {
        somaIdade += selecao[i].idade
    }
    let media = somaIdade / selecao.length
    console.log("A média das idades que responderam ótimo foi de:", Math.round(media));
    return "";
   },
   qtdPessoas : function(array){
    let selecao = array.filter(regular => (regular.opiniao == 1));
    console.log("A quantidade de pessoas que responderam regular foi de:", selecao.length)
    return "";
   },
   porcentagem : function(array){
    let selecao = array.filter(regular => (regular.opiniao == 2));
    porcento_total = (selecao.length*100) / array.length;
    console.log("A porcentagem de espectadores que acharam o filme 'bom' foi de:", Math.round(porcento_total),"%")
    return "";
   }
    }

    module.exports = opiniao
 