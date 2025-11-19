/**
 * Calculadora Flex
 * @author Gabriely Barreto Almeida 
 * @version 1.0
 */

function calcular() {
    // a linha a baixo captura o valor de entrada
    let etanol = formFlex.inputEtanol.value
    console.log(etanol) // teste

    let gasolina = formFlex.inputGasolina.value
    console.log(gasolina) // teste

    // Logica principal: se o valor do litro do Etanol custar até 70% do valor do litro da gasolina vale mais apena abastecer com etanol

    if (etanol < 0.7 * gasolina ) {
        console.log("Abasteça com Etanol")
        //  A linha a biaxo idendifica a teg e muda a propriedade src
        document.getElementById('status').src = "./img/etanol.png"
    } else {
        console.log("Abasteça com Gasolina")
        document.getElementById('status').src = "./img/gasolina.png"
    }

}

function limpar() {
    document.getElementById('status').src = "./img/neutro.png"
}