let espectador = require('./modulos/espectadores')
let objeto_opiniao = require('./modulos/objeto')
let adicionar = require('./modulos/constru_espec')

console.log(objeto_opiniao.mediaIdade(espectador));
console.log(objeto_opiniao.qtdPessoas(espectador));
console.log(objeto_opiniao.porcentagem(espectador));

espectador.push(new adicionar(90, 3) );

console.log(espectador)

console.log(objeto_opiniao.mediaIdade(espectador));
console.log(objeto_opiniao.qtdPessoas(espectador));
console.log(objeto_opiniao.porcentagem(espectador));