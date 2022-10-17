// Object

const person = {
    name: "Jonatas",
    age: 29,
    weight: 88.6,
    isAdmin: true
}

console.log(`O ${person.name} já está na casa dos ${person.age} anos. E como está gordo, pesando por volta de ${person.weight} quilos`)


// Arrays

// don`t mix differrent types of values on same array like the exemple below

const animals = [
    'Lion',
    'Cat',
    {
        name: "Monkey",
        age: 15
    },
    'Girafe',
    'Hipopotamus'
]

// access arrays values

console.log(animals[2].name)
console.log(animals.length)