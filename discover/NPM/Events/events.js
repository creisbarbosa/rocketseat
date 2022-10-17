const { EventEmitter } = require('events')
const ev = new EventEmitter()

// console.log(ev)

// Ovir sempre
// ev.on('saySomething', (message) => {
//     console.log('Eu ouvi você!', message)
// })

// Ouvir apenas uma vez
ev.once('saySomething', (message) => {
    console.log('Eu ouvi você!', message)
})

ev.emit('saySomething', 'Cássio')
ev.emit('saySomething', 'Reis')
ev.emit('saySomething', 'Barbosa')

// Herdando as funções do EventEmmiter

const { inherits } = require('util')

function Character(name) {
    this.name = name
}

inherits(Character, EventEmitter)

const chapolin = new Character('Chapolin');
chapolin.on('help', () => console.log(`Eu! o ${chapolin.name} Colorado!`))

console.log('Oh! E agora, quem poderá me defender?')
chapolin.emit('help')