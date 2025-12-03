/**
 * Jogo do uno
 * @author Gabriely Barreto Almeida
 */

function sortear() {
    let = jogar = Math.floor(Math.random() * 6)
    console.log(jogar)

    switch(jogar) {
        case 0:
            document.getElementById('uno').src = "./img/azulquatro.png"
            break
        case 1: 
            document.getElementById('uno').src = "./img/uno2.png"
            break
        case 2:
            document.getElementById('uno').src = "./img/veruno.png"
            break
        case 3:
            document.getElementById('uno').src = "./img/unorever.png"
            break
        case 4:
            document.getElementById('uno').src = "./img/umuno.png"
            break
        case 5:
            document.getElementById('uno').src = "./img/quatro.png"
            break
    }
}
function voltar() {
        document.getElementById('uno').src = "./img/frente.jpg"
}