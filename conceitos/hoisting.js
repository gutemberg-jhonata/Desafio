// Hoisting - var
numero = 50
console.log(numero)
var numero = 20
console.log(numero)

// Hoisting - funções
funcaoHoisting()

function funcaoHoisting() {
    console.log("Minha função!")
}