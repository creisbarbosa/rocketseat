const pilotos = ['Senna', 'Prost', 'Schumacher', 'Hamilton', 'Lafiti']
// a indexação (index) começa pelo número 0
console.log(pilotos[0]) // Senna
console.log(pilotos[3]) // Hamilton

// acessar o tamanho do array
console.log(pilotos.length)

// iterável
for (let piloto of pilotos) {
    console.log(piloto)
}

// adicionar elementos
pilotos.push('Alonso')
console.log(pilotos)
console.log(pilotos[5])

// encontrar um elemento ( se existirem um milhao de elementos da array vai demorar um milhão de tentativas para encontrar Senna)
const senna = pilotos.find(piloto => piloto === 'Senna')
console.log(senna)

// dseletar elementos
pilotos.splice(1, 1)
console.log(pilotos)