

const conta = {
    titular : 'fulano',
    numeroConta : 125566,
    tipo : 'corrente',
    saldo : 1500.00,

}

const dados = []

function Conta(titular, numeroConta, tipo, saldo){
    this.titular = titular;
    this.numero = numeroConta;
    this.tipo = tipo;
    this.saldo = saldo;
}
let conta1 = new Conta(dados[0].titular, 455514, 'corrente', 1500.00)
console.log(conta1)