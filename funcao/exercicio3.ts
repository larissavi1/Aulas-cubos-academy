type TFucaoCalc = (numero1: number, numero2: number) => number

type TCalculadora = {
	soma: TFucaoCalc
	subtracao: TFucaoCalc
	multiplicacao: TFucaoCalc
	divisao: TFucaoCalc
}

const calculadora: TCalculadora = {
	soma: function (numero1: number, numero2: number): number {
		return numero1 + numero2
	},
	subtracao: function (numero1: number, numero2: number): number {
		return numero1 - numero2
	},
	multiplicacao: function (numero1: number, numero2: number): number {
		return numero1 * numero2
	},
	divisao: function (numero1: number, numero2: number): number {
		return numero1 / numero2
	}
}

console.log(calculadora.soma(6, 8))
console.log(calculadora.subtracao(6, 8))
console.log(calculadora.multiplicacao(6, 8))
console.log(calculadora.divisao(6, 8))