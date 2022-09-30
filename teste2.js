function Agricultor(nome, preco, qtd){
    this.nome = nome;
    this.preco = preco;
    this.qtd = qtd;
    this.lucro = calcLucro(this.preco, this.qtd)
}
function calcLucro (vlr, qtd){
    return vlr * qtd
}

let prod01 = new Agricultor("vaca", 1900, 1200);
let prod02 = new Agricultor("cavalo", 3500, 230);
let prod03 = new Agricultor("milho", 95.00, 1600);
let prod04 = new Agricultor("soja", 191.00, 1500);
let prod05 = new Agricultor("trigo", 220, 3500);

let arrayProdutos = [prod01, prod02, prod03, prod04, prod05];

console.log(arrayProdutos)


// exercicio 01 

function lucroTotal(array){
    let total = 0
    for (let i = 0; i < array.length; i++) {
        total += array[i].lucro
        
    }
    return total;
}
console.log(lucroTotal(arrayProdutos))

// exercicio 02:

function produtoLucro(nome){
    let selecao = arrayProdutos.filter(array => array.nome === nome)
    return selecao[0].lucro
}
console.log(produtoLucro("cavalo"));

// exercicio 03:

function vendeuMais(valor){
    let selecao = arrayProdutos.filter(array => array.lucro >= valor)
    return selecao;
}

console.log(vendeuMais(100000));

// Exercicio 04:

function classificar(){
 let classificado = arrayProdutos.sort(function(a,b){
    if (a.lucro > b.lucro) {
        return 1;
      }
      if (a.lucro < b.lucro) {
        return -1;
      }
      return 0;
    });
    return classificado
}
console.log(classificar())

// exercicio 05:

function encontrarNovoValor(nome, preco){
    selecao = arrayProdutos.filter(array => array.nome === nome)
    selecao[0].preco = preco
    return selecao;
}
console.log(encontrarNovoValor("vaca", 1700))

// exercicio 06:

function lucroVerdadeiro(){
    let soma = 0
    for (let i = 0; i < arrayProdutos.length; i++) {
       soma += arrayProdutos[i].lucro;
        
        
    }
    return soma - (soma * 0.45);
}
console.log(lucroVerdadeiro())