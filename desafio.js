import { questionInt } from 'readline-sync'

let score = 0

while (true) {
    const level = questionInt('Escolha o nivel (1, 2 ou 3): ')

    if (level === 0) {
        break
    }

    let number
    let random
    let scorePoints

    switch (level) {
        case 1:
            number = questionInt('Digite um numero de 0 a 1: ')
            random = Math.floor(Math.random())
            scorePoints = 5
            break
        case 2:
            number = questionInt('Digite um numero de 0 a 5: ')
            random = Math.floor(5 * Math.random())
            scorePoints = 10
            break
        case 3:
            number = questionInt('Digite um numero de 0 a 10: ')
            random = Math.floor(10 * Math.random())
            scorePoints = 15
            break
    }

    if (random != undefined) {
        if (number === random) { 
            console.log("Ganhou!")
            score += scorePoints 
        } else {
            console.log("Perdeu!")
        }
    
        console.log(`Número gerado: ${random}`)
        console.log(`Sua pontuação: ${score}`)
    }
}