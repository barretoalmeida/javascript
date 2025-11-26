/**
 * Estudo das funções
 * @author Gabriely Barreto Almeida
 */


// função simples
function hello() {
    console.log(("Hello World"))
}

console.log(typeof (hello))
hello()

// função anonima
// Podemos usar let ou const para criaar uma função anônima, a vantagem de criar funções dessa forma é amazenar o resultado da execução 
const hello2 = function () { // const e uma contante não varia ja let pode variar 
    console.log("Hello função anônima")
}
console.log(typeof (hello2))
hello2()



// Simplicação da função anônima (arrow function) -------------
//  O () => e igual a function so que inves de escrever a palavras ecreve assim ( () =>)
// funtcion simplifiicado para () =>
const hello3 = () => {
    console.log("Hello função anônima simplificada ")
}
console.log(typeof (hello3))
hello3()

// simplificação da função anônima
// Neste caso só uma linha de código é processada
// Simplificação: _ no lugar de () e omissão de chaves 
const hello4 = _ => console.log("Hello função anônima simplificada 2")

console.log(typeof (hello4))
hello4()



// Função com parâmetros e retono >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
function somar(num1, num2) {
    return console.log(num1 + num2)
}

console.log(typeof (somar))
somar(2, 2)

//  Função anônima com parâmetros e retorno simplificada >>>>>>>>>>>>>>>>>>>>>>>>>
//  => e o function
const somarA = (num1, num2) => {
    return console.log(num1 + num2)
}
console.log(typeof (somarA))
somarA(5, 5)

//  Função anônima com parâmetros e retorno simplificada 2 >>>>>>>>>>>>>>>>>>>>>
// Neste caso o amitimos chaves e  retorno simpliificado  
// CUIDADO!! Não e uma função simples a dica são os parâmetros
const somarAS = (num1, num2) => console.log(num1 + num2)

console.log(typeof(somarAS))
somarAS(5, 13)