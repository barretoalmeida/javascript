/**
 * Sorteio de uma carta
 * Exemplo de uso de array para otimizar código
 * @author Gabriely Barreto Almeida
 */

function sortear() {
    let nipes = ["♥", "♦", "♣", "♠"]
    let faces = ["A", "2", "3", "4", "5", "6", "7", "8", "9","10", "J", "Q", "K"]

    // apoio a lógica
    // console.log(faces[10])
    // console.log(nipes[3])

    // Sorteio de uam carta
    let nipe = nipes[Math.floor(Math.random() * 4)]
    let face = faces[Math.floor(Math.random() * 13)]

    // apoio a lógica
    // console.clear() // limpar a tela
    // console.log(nipe)
    // console.log(face)

    // Renderização do canto esqurdo da carta 
    // .innerHTML insere uma tag no documento html
    // essa linha inseire o conteudo das variavels no documento  
    document.getElementById('supEsq').innerHTML = `<div>${face}</div> <div>${nipe}</div>`


    // rederização no centro da carta 
    document.getElementById('centrocarta').innerHTML = ` <div>${nipe}</div>`

    // rederização do canto inferior da carta
    document.getElementById('infDir').innerHTML = `<div>${face}</div> <div>${nipe}</div>`
}