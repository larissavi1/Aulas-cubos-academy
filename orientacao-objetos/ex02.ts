type Tcarro = {
    cor:string ,
    marca:string ,
    modelo: string ,
    ano: number ,
    potencia?:number 
}
//abstração (classes: public, private)
class Carro {
 public   cor:string = ''
 private   marca:string = ''
 public   modelo: string = ''
 public   ano: number = 0
 public   potencia:number = 0

 public   ligado:boolean
 public   aceleracao:number


    constructor(carro:Tcarro){
        this.cor = carro.cor
        this.marca = carro.marca
        this.modelo = carro.modelo
        this.ano = carro.ano
        this.potencia = carro.potencia ?? 0
        this.ligado = false
        this.aceleracao= 0
    }
    LigarouDesligar():void{this.ligado = this.ligado ? false : true}
    acelerar(rpm:number):void {this.aceleracao += rpm}
    estadoDoCarro(){ return this.ligado ? 'o carro está ligado' : 'O carro está desligado' }

}

const palio = new Carro({
    cor: 'prata',
    modelo: 'palio',
    marca: 'fiat',
    ano: 2015})

