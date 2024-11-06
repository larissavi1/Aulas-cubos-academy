class calculadora {
    private numero1:number
    private numero2:number

    constructor(numero1:number, numero2:number){
        this.numero1 = numero1
        this.numero2 = numero2
    }

    soma():number{
         return this.numero1 + this.numero2}

    subtracao():number{
        return this.numero1 - this.numero2}

    multiplicacao():number{
        return this.numero1 * this.numero2}

    divisao():number{
        return this.numero1 / this.numero2}

}

const Calculadora = new calculadora (3, 6)
console.log(Calculadora.soma())
console.log(Calculadora.subtracao())
console.log(Calculadora.multiplicacao())
console.log(Calculadora.divisao())