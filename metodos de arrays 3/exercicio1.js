const usuarios = [
    {nome: 'João', idade: 23},
    {nome: 'Maria', idade: 18},
    {nome: 'Ana', idade: 30},
    {nome: 'Rodrigo', idade: 17},
    {nome: 'Rodrigo', idade: 18 }
]


usuarios.sort ((item1, item2)=> {
    if ( item1.idade < item2.idade ) { return -1}
    if (item1.idade > item2.idade) {return 1}
    return 0
})

console.log (usuarios)

usuarios.sort ((elemento1, elemento2) => {
    return elemento2.idade - elemento1.idade
})

console.log (usuarios)