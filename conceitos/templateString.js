const objeto = {
    nome: "Guilherme",
    sexo: "masculino",
    idade: 20
}

const { nome, sexo, idade } = objeto;
console.log(`Nome: ${nome} | Idade: ${idade} | Sexo: ${sexo}`)

const string1 = 'texto com aspas "duplas"'
const string2 = "texto com aspas 'simples'"
//const string3 = `"template" 'string'` + " " + idade
const string3 = `"template" 'string' ${idade}`