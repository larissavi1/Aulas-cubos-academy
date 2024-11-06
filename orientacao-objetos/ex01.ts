type Tcarro = {
    cor:string ,
    marca:string ,
    modelo: string ,
    ano: number ,
    potencia?:number 
}

class Carro {
    cor:string = ''
    marca:string = ''
    modelo: string = ''
    ano: number = 0
    potencia:number = 0

   // modelo 1
    // constructor(cor:string, marca:string, modelo:string, ano:number, potencia?:number){
    //     this.cor = cor
    //     this.marca = marca
    //     this.modelo = modelo
    //     this.ano = ano
    //     this.potencia = potencia ?? 0
    // }

    //modelo 2
    constructor(carro:Tcarro){
        this.cor = carro.cor
        this.marca = carro.marca
        this.modelo = carro.modelo
        this.ano = carro.ano
        this.potencia = carro.potencia ?? 0
    }
}

//modelo 1
//const fusca = new Carro('preto', 'volkswagem', 'fusca', 1970)
// fusca.ano = 1970
// fusca.cor = 'preto'
// fusca.marca = 'volkswagem'
// fusca.modelo = 'fusca'
// fusca.potencia = 90

//modelo2                                         
// const fusca = new Carro({                    
//     cor:'preto',                               
//     ano: 1970,
//     marca: 'volkswagem',
//     modelo: 'fusca',
//     potencia: 120})    
//ou
  const novoCarro = {
    cor:'preto',
    ano: 1970,
    marca: 'volkswagem',
    modelo: 'fusca',
    potencia: 120}

    const fusca = new Carro(novoCarro)
    console.log(fusca);

   //como atualizar algum atributo de uma classe
    fusca.cor = 'branco'
    console.log(fusca);
    
