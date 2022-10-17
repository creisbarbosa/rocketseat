// setTimeout(function() {
//     console.log('Depoisd de 1s')
// }, 1000)



// const https = require('https')
// const API = 'https://jsonplaceholder.typicode.com/users?_limit=2'

// https.get(API, res => {
//     console.log(res.statusCode)
// })

// console.log('Conectando API')


//Promisses direto no código

let accept = false

console.log("1. Pediu o Uber")

const promise = new Promise((resolve, reject) => {

    if (accept) {
        return resolve('2.1. Carro do uber chegou')
    } 
    
    return reject('2.2. Carro do Uber não chegou')

})

console.log("3. Aguardando o carro")

promise 
    .then(result => console.log(result))
    .catch(erro => console.log(erro))
    .finally(() => console.log('4. Finalizado'))