
// Lista de argumetos
// O process.argv vai listar o local de cada processo que está rodando no programa
// console.log(process.argv)

const firstName = process.argv[2]
const lastName = process.argv[3]
console.log(`Seu nome é ${firstName} ${lastName}`)

// A idéia é pegar os argumentos e poder colocar dentro do programa
// O process é um objeto que vai dizer o que está sendo rodado dentro do node