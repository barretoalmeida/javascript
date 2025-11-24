/**
 * Tutorial de javascritp
 * Estudo da tipagem dinâmica 
 * @author Gabriely Barreto Almeida
 */

console.log("Strings >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")
let nome = "Gabriely"
console.log(typeof (nome))
console.log(nome)
console.log(nome.replace("Gabriely", "Gaby"))

// concatenação (união)

console.log("Aluna:" + nome) // não utilizar dessa forma 
console.log(`Professora: ${nome}`) //Forma mais segura


console.log("Número >>>>>>>>>>>>>>>>>>>>>>>>>>>")
let peso = 63
let altura = 1.65
console.log(typeof (peso))
console.log(typeof (altura))
console.log(Number.isInteger(peso))
console.log(Number.isInteger(altura))

// Calculo do imc exemplo
let imc
imc = peso / (altura * altura)
console.log(`IMC: ${imc.toFixed(2)}`)
// ATENÇÃO 
console.log(10 / 0)
console.log("3" + 2)
console.log("3" - 2)
console.log("3x" - 2)
console.log("3" * 2)
console.log("10" / 2)
console.log(0.5 + 0.5)
console.log(0.1 + 0.2)
console.log(0.1 + 0.7)

console.log("Booleanos >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")
let led = false
typeof (led)
console.log("Comparadores espaciais")
console.log("2" == 2)
let x = 2
let y = "2"
console.log(typeof (x))
console.log(typeof (y))
console.log(x == y)
console.log(x === y)

console.log("Problemas no uso do var >>>>>>>>>>>>>>>>>>>>>>>>>>>>")
var media = 9
console.log(typeof (media))
console.log(media)
var media = 8
console.log(typeof (media))
console.log(media)
console.log("var permite redeclarar uma variável !!")

// uso de chaves na linguagem javasript
let mediaFinal = 2
console.log(`Media: ${mediaFinal}`)
if (mediaFinal < 5)
    console.log("Reprovado")
else
    console.log("Aprovado!!")
console.log("Emitir certificado") //não orocessado pela a chave 
// entãa sempre utilizar a chave 

for (let i = 1; i < 10; i++)
    console.log(i)
console.log("não processado pela estrutura for")
