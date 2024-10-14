const { classicNameResolver } = require("typescript")

const pessoa = {
    nome: 'Guido',
    idade: 33,
    altura: 187,
    temCHN: true,
    habilidades: ['javascript', 'php', 'python','java']}

    const CNH = pessoa.temCHN ? 'possui cnh' : 'não possui cnh'

   
//para transformar os itens de um objeto em variáveis
console.log (`${pessoa.nome} tem ${pessoa.idade}, ${pessoa.altura}cm, ${CNH} e as seguintes habilidades: ${pessoa.habilidades}`)