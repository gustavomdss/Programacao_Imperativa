const conta = {
    titular : 'fulano',
    numeroConta : 125566,
    tipo : 'corrente',
    saldo : 1500.00,

}

let clientes = require('./modulos/clientes');
//let funcs = require('./modulos/funcoes')

function Criar(titular, numeroConta, tipo, saldo){
    this.titular = titular,
    this.numero = numeroConta,
    this.tipo = tipo,
    this.saldo = saldo
    
};
let resultado = new Criar("Gustavo", 45889, "corrente", 456662)
let resultado1 = new Criar(clientes[2].titular, clientes[2].numeroConta, clientes[2].tipo, clientes[2].saldo)


console.log(clientes[0])
console.log(resultado);
console.log(resultado1);



