const conta = {
    titular : 'fulano',
    numeroConta : 125566,
    tipo : 'corrente',
    saldo : 1500.00,

}

let clientes = require('./modulos/clientes');
let funcs = require('./modulos/funcoes')


console.log(funcs(clientes.titular[0]))



