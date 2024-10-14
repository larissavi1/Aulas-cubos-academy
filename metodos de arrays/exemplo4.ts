function stringInvertida (palavra: string) {
    const arrayPalavra = palavra.split('')
    const resultado = arrayPalavra.reverse().join('')


        console.log (resultado)
}

stringInvertida('cubos Academy')