"use strict";
exports.__esModule = true;
var readline_sync_1 = require("readline-sync");
var score = 0;
while (true) {
    var level = (0, readline_sync_1.questionInt)('Escolha o nivel (1, 2 ou 3): ');
    if (level === 0) {
        break;
    }
    var number = void 0;
    var random = void 0;
    var scorePoints = void 0;
    switch (level) {
        case 1:
            number = (0, readline_sync_1.questionInt)('Digite um numero de 0 a 1: ');
            random = Math.floor(Math.random());
            scorePoints = 5;
            break;
        case 2:
            number = (0, readline_sync_1.questionInt)('Digite um numero de 0 a 5: ');
            random = Math.floor(5 * Math.random());
            scorePoints = 10;
            break;
        case 3:
            number = (0, readline_sync_1.questionInt)('Digite um numero de 0 a 10: ');
            random = Math.floor(10 * Math.random());
            scorePoints = 15;
            break;
    }
    if (random != undefined) {
        if (number === random) {
            console.log("Ganhou!");
            score += scorePoints;
        }
        else {
            console.log("Perdeu!");
        }
        console.log("N\u00FAmero gerado: ".concat(random));
        console.log("Sua pontua\u00E7\u00E3o: ".concat(score));
    }
}
