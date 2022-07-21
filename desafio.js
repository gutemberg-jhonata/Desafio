const readline = require('readline-sync')

let score = 0

// Fazer o menu de opções
// 0 - paro o jogo
// 1 - fácil - 0, 1 (5 pontos)
// 2 - médio - 0, 5 (10 pontos)
// 3 - numeros entre 0 e 10 (50 pontos)
while (true) {
    const number = readline.question('Digite um numero entre 0 e 5: ')
    const random = Math.floor(Math.random() * 5)

    console.log("Numero aleatório " + random)

    if (number == random) {
        console.log("Parabens você ganhou!")
        // score = score + 5
        score += 5
    } else {
        console.log("Você perdeu :(")
        break
    }
}

console.log("Sua pontuação é: " + score)