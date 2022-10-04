// Repetition structures
// for

// While i < 10 we have a loop and the condition of increment or decrement ( ++ / -- ) will be executed.
// break - stops loop execution
// continue - skips loop execution

console.log("For function")

for(let i = 10; i > 0; i--) { 
    if(i === 5) {
        continue;
    }
    console.log(i)
}


// While (Same think iof "for", but used whaen it's not clear when stop)
console.log("While function")

let e = 100;
while(e > 5) {
    console.log(e);
    e /= 2;
}

let o = 0
while(o < 10){
    console.log(o)
    o++
}

// for....of
// takes each element of a string or an array
console.log('For....of')

let name = 'Cássio'
let names = ['Ana Tereza', 'Helena', 'Izabel', 'Biana', 'Ana Luiza', 'Aldo']

for(let name /* not the same name above (line 37), but a name created herethat only works into this function */ of names /*line 38*/) {
    console.log(name)
}

for(let character of name /* this name here it's the one on the line 37 */) {
    console.log(character)
}

// for....in
// takes each property of an object
console.log("For....in")

let person = {
    name: 'Cássio',
    age: 29,
    height: 1.74,
    weight: 88
}

for(let property in person) {
    console.log(property)
    console.log(person[property])
}