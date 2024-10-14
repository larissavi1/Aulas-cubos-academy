//Crie uma lista de países com 5 elementos
const paises = ['japao', 'russia', 'eua', 'brasil', 'bolivia']
console.log (paises)

//Adicione um país ao final da lista
paises.push('argentina')
console.log(paises)

//Remova um país do final da lista
paises.pop()
console.log (paises)

//Adicione um país no início da lista
paises.unshift('argentina')
console.log(paises)

//Remova um país do início da lista
paises.shift()
console.log (paises)

//imprima o ultimo pais da lista na tela
const ultimopais = paises.pop() // ou console.log (paises[paises.length -1])
console.log (ultimopais)

//imprima o segundo pais da lista na tela
console.log (paises[1])

//imprima o pais de indice 2 na tela
console.log(paises[2])