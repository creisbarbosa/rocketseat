// arguments and parameters
// function expression
// funtion anonymous

//parameters

let total = 0

const sum = function(number1, number2){
    let total = number1 + number2
    return total //a secret so that the function doesn`t return an undefined value

}

//sum(2, 3) //arguments

let number1 = 33
let number2 = 11

console.log(`The first number is ${number1}`)
console.log(`And the second number ${number2}`)
console.log(`The sum of these numbers equals to ${sum(number1, number2)}`)

console.log(total)

// Blender function

function makeJuice(fruit1, fruit2) {
    return fruit1 + '/' + fruit2 + ` Juice`
}

const glass = makeJuice("Avocado", "Apple")

console.log(glass)