const dados = [
  {
      "titular": "Abigael Natte",
      "numero": 5486273622,
      "tipo": "Conta Corrente",
      "saldo": 27771
  },
  {
      "titular": "Ramon Connell",
      "numero": 1183971869,
      "tipo": "Conta Corrente",
      "saldo": 8675
  },
  {
      "titular": "Fulano",
      "numero": 1183971869,
      "tipo": "Conta Corrente",
      "saldo": 8675
  }

]

function Conta(titular, numero, tipo, saldo) {
  this.titular = titular;
  this.numero = numero;
  this.tipo = tipo;
  this.saldo = saldo;
}

// let conta1 = new Conta(dados[0].titular, dados[0].numero, dados[0].tipo, dados[0].saldo);
// let conta2 = new Conta(dados[1].titular, dados[1].numero, dados[1].tipo, dados[1].saldo);
let listaContas = [];
for (let contador = 0; contador < dados.length; contador++) {
  listaContas.push(new Conta(dados[contador].titular, dados[contador].numero, dados[contador].tipo, dados[contador].saldo) );
}
console.log(listaContas);