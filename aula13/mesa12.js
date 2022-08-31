const conta = {
    titular : 'fulano',
    numeroConta : 125566,
    tipo : 'corrente',
    saldo : 1500.00,

}

let banco = {
    clientes : [
    {titular: "Abigael Natte", numeroConta: 5486273622, tipo : "corrente", saldo : 27771},
    {titular: "Ramon Connell", numeroConta : 1183971869, tipo : "poupanca", saldo : 8675},
    {titular: "Jarret Lafuente",numeroConta : 9582019689, tipo : "poupanca", saldo :27363},
    {titular: "Ansel Ardley", numeroConta : 1761924656, tipo : "poupanca", saldo :32415},
    {titular: "Jacki Shurmer", numeroConta : 7401971607, tipo : "poupanca", saldo :18789},
    {titular: "Jobi Mawtus", numeroConta : 630841470, tipo : "corrente", saldo :28776},
    {titular: "Thomasin Latour", numeroConta : 4223508636, tipo : "corrente", saldo :2177},
    {titular: "Lonnie Verheijden", numeroConta : 185979521, tipo : "poupanca", saldo :25994},
    {titular: "Alonso Wannan", numeroConta : 3151956165, tipo : "corrente", saldo :7601},
    {titular: "Bendite Huggett", numeroConta : 2138105881, tipo : "poupanca", saldo :33196},
    ],

    consultarCliente : function(nome){
    let resultado = 0;
    for (let index = 0; index < banco.clientes.length; index++) {
        
        if ((nome == banco.clientes[index].titular)){
            return resultado = banco.clientes[index]
        }
       
    }
    return resultado;
   },
   
   deposito : function(nome, valor){
    let resultado = 0
    for (let index = 0; index < banco.clientes.length; index++) {
        if (nome == banco.clientes[index].titular){
            return resultado = "Deposito realizado. Seu novo saldo é: " + (banco.clientes[index].saldo + valor);
        }
        
        
    }
    return resultado;
   },
   saque : function(nome, valor){
    let resultado = 0
    for (let index = 0; index < banco.clientes.length; index++) {
         if ((banco.clientes[index].saldo - valor) < 0 ){
            return resultado = "Fundos Insuficientes!!"
        }
        else if(nome == banco.clientes[index].titular){
            return resultado = "Extração feita com sucesso. Seu novo saldo é: " + (banco.clientes[index].saldo - valor)
        }
        
    }
    return resultado;
   }
}
console.log(banco.consultarCliente("Thomasin Latour"))
console.log(banco.deposito("Thomasin Latour", 18000))
console.log(banco.saque("Thomasin Latour", 500))
