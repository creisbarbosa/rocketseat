// Passo 1: Modelagem
class Queue {
    constructor() {
        this.data = []
    }

    enqueue(item) {
        this.data.push(item)
        console.log(`${item} chegou na fila`)
    }

    dequeue() {
        const item = this.data.shift()
        console.log(`${item} saiu da fila!`)
    }
}

// Passo 2: Ultização
const fila = new Queue()

fila.enqueue('Mariana')
fila.enqueue('Juliana')
fila.enqueue('Ana')
fila.dequeue()
fila.dequeue()
fila.dequeue()