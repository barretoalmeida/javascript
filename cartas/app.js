/**
 * Sorteio de uma carta
 * Exemplo de uso de array para otimizar código
 * @author Gabriely Barreto Almeida
 */

function sortear() {
    let nipes = ["♥", "♦", "♣", "♠"]
    let faces = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]

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


    // Determinar a cor com base no nipe
    let cor
    if (nipe === "♥" || nipe === "♦") {
        cor = "#ff0000"
    } else {
        cor = "#000"
    }


    // Renderização do canto esqurdo da carta 
    // .innerHTML insere uma tag no documento html
    // essa linha inseire o conteudo das variavels no documento  
    document.getElementById('supEsq').innerHTML = `<div>${face}</div> <div>${nipe}</div>`
    // Mudar a cor (O JS consegue também manipular o CSS usando sytle)
    document.getElementById('supEsq').style.color = cor

    // rederização no centro da carta 
    let cc = document.getElementById('centrocarta')
    if (face === 'J') {
        cc.innerHTML = `<img src="./img/valete.png">`
    }
     else if (face === 'Q') {
        cc.innerHTML = `<img src="./img/dama.png">`
    } else if (face === 'K') {
        cc.innerHTML = `<img src="./img/rei.png">`
    }
    else {
        cc.innerHTML = nipe
        cc.style.color = cor
    }



    // rederização do canto inferior da carta
    document.getElementById('infDir').innerHTML = `<div>${face}</div> <div>${nipe}</div>`
    // Mudar a cor
    document.getElementById('infDir').style.color = cor
}