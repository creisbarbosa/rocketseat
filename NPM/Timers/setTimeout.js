// setTimeout vai rodar uma função depois de X milissegundos
const timeOut = 3500
const finished = () => console.log("Go!")

setTimeout(finished, timeOut) // A função finished vai funcionar como uma callback, vai ser chamada de volta depois de 3 segundos
console.log('Ready...?')