## callback
- Função passada como argumetno de outra funçãso
- A função da função pode ser chamada de volta

```js

fucntion printData(data) {
    console.log('Outher works')
    console.log(data)
    console.log(data())
}

printData(function () {
    return 'Hello Wrold'
})

```

## setTimeout(function, delay)

```js

setTimeout(function() {
    console.log('Depoisd de 1s')
}, 1000) //A função de argumetno é uma callback que será executada depois de um certo tempo

```
## Conectando API com HTTPS e Callback

```js

const https = require('https') //ele vai pedir o https
const API = 'https://jsonplaceholder.typicode.com/users?_limit=2' //um fecth para buscar o resultado disso

https.get(API, res => { //o objeto https vai receber a funcionalidade .get com dois argumentos, o primeiro é uma API e o segundo é uma arrow function que recebe como resposta um console.log
    console.loog(res.statusCode) //Essa funcionalidade é um callback, por conta disso essa função é conectadad depois.
})

console.log('Conectando API')

```

## Promisses
- A promessa de que algo vai acontecer
- Equanto a promessa não é aceita esla está [pending]
- Se ela é aceita ela se torna [fulfilled]
- Se não é ela se torna [rejected]

- É um objeto JavaScript com a promessa de que algo será realizado
- É usadp para operações assíncronas
    - Carregar um arquivo
    - Leitura de dados de uma API

- Quatro estágio da promessa:
    - Pending: Estado inicial, assim que o objeto da promessa é iniciado
    - Fulfilled: A promessa foi concluída com sucesso
    - Rejected: A promessa foi rejeitada, houve um erro
    - Settled: Seja com sucesso ou com erro, ela foi finalmente concluída

### Promisses no código

```js

let accept = false

console.log("1. Pediu o Uber")

const promise = new Promise((resolve, reject) => {

    if (accept) {
        return resolve('2.1. Carro do uber chegou')
    } 
    
    return reject('2.2. Carro do Uber não chegou')

})

promise 
    .then(result => console.log(result))
    .catch(erro => console.log(erro))
    .finally(() => console.log('4. Finalizado'))
    
console.log("3. Aguardando o carro")

```