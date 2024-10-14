const usuario = {
    nome: 'joão',
    idade: 26,
    profissao:'estudante' ,
    altura: 1.62}

    function apresentacao (dadosUsuario) {
console.log (`Olá! meu nome é ${dadosUsuario.nome}, sou um jovem de ${dadosUsuario.idade}
    anos, ${dadosUsuario.altura}m de altura e sou ${dadosUsuario.profissao} `) }

    // para executar a função precisa chamar a função = função()

    apresentacao(usuario)