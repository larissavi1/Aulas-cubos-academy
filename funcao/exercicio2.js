let idade = 67

function verificarIdade(idade) {
    if (idade <= 21) {return 'jovem'}
    if (idade >= 66) {return 'Idoso'}
    return 'adulto'
}

console.log(verificarIdade(idade))