// Funções aceitam qualquer tipo de dado como argumentos
function printData(data) {
    console.log('Outras tearefas')
    console.log(data())
    // console.log(data)
}


// printData(1)
// printData('text')
// printData(true)
// printData({ nome: 'Cássio' })
// printData([1, 2, 3])

printData(function() {
    return "Hello World"
})