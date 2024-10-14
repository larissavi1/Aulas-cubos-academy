type Tproduto =  {
    nome: string
    preco: number
    quantidade: number
}

type Tcliente = {
    nome: string
    idade: number
    produtos:Tproduto[]
}
    
const cartaolari: Tcliente = {
    nome: 'Lari',
    idade: 26,
    produtos:[ {nome: 'pizza de calabresa',
            preco:9500,
            quantidade: 1 }, 

        { nome: 'refrigerante',
            preco: 500,
            quantidade: 2 }, 

        { nome: 'pudim',
            preco: 2000,
            quantidade: 2 }
    ]
}

console.log (cartaolari)