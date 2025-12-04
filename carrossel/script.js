/**
 * Simples carrossel de imagem
 * @author Gabriely Barreto Almeida
 */

//  indice                          [0]               [1]               [3]
let slidesCarrossel = ["slide1.jpg", "slide2.jpg", "slide3.jpg"]
let intervalo = 3000 // 3000ms = 3s (efeito)
let indice = 0 //apoio a lógica

show() // executa uma vez a função da partida 

function show() {
    // Uso do JS para adicionar a classe fadeout no CSS
    document.getElementById('slides').className+= 'fadeout'

    // Função interna de intervalos 
    setTimeout(() => {
        // console.log("teste") //testar se está funcionado

        // troca a imagem do slides
        document.getElementById('slides').src = (`./img/${slidesCarrossel[indice]}`)
        //  remover a classe .fadeout
        document.getElementById('slides').className = ''

    }, 1000) // executa a cada um segundo ( em tempo real " a imagem fica um segundo parada.")
    indice++ //para por quantas imagens se quiser 
    // validação para retornar ao inicio 
    if (indice === slidesCarrossel.length) {
        indice = 0
    } 
    // mas tem varias formas de foltar a imagem inicial 

    setTimeout(show, intervalo) //executa a função a cada intervalo
}