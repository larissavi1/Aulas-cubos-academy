class lampada {
    private potencia:number
    private estado:boolean

    constructor(watts:number){
        this.potencia = watts
        this.estado = false
    }

ligar():void{this.estado = true}
desligar():void{this.estado = false}
medirpotencia():number{return this.potencia}
}


const lampaaLed = new lampada(50)
console.log(lampaaLed)
console.log(lampaaLed.medirpotencia())
lampaaLed.ligar()
console.log(lampaaLed)
lampaaLed.desligar;
console.log(lampaaLed);
