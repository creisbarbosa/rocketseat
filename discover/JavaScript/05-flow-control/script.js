// Flow control

// if  and else

let temperature = 37.74

if(temperature >= 37.5) {
    console.log("Febre alta")
} else if(temperature < 37.5 && temperature >= 37) {
    console.log("Febre baixa")
} else {
    console.log("Sem febre")
}

// replacing if else
let temperatura = 36.7
let tempertauraAlta = temperatura >= 37.5
let temperaturaMedia = temperatura < 37.5 && temperatura >=37

if(tempertauraAlta) {
    console.log("Febrinha alta")
} else if(temperaturaMedia) {
    console.log("Febrinha baixa")
} else {
    console.log("Sem febre")
}

// switch

let expression = '1'
switch(expression) {
    case 'a':
        //code
        console.log('á')
        break //show that this case is over
    case 'b':
        console.log('b')
        //code for expression b
        break
    default:
        console.log('default')
        break
}

// calculator using switch

function calculate(number1, operator, number2) {
    let result
    switch (operator) {
        case '+':
            result = number1 + number2
            break
        case '-':
            result = number1 - number2
            break
        case '*':
            result = number1 * number2
            break
        case '/':
            result = number1 / number2
            break
        default:
            console.log('Não implementado')
    }

    return result
}

console.log(calculate(8, '*', 24))
console.log(calculate(8, '/', 24))
console.log(calculate(8, '+', 24))
console.log(calculate(8, '-', 24))
console.log(calculate(8, '%', 24))

// Throw + Try/Catch

function sayMyName(name = '') {
    if(name === '') {
        throw "É necessário inserir um nome antes de continuar." // it stops the executionn of the aplication
    }
    console.log(name + ": Nome inserido com sucesso.")
}

try {
    sayMyName('Cássio')
} catch(e) {
    console.log(e)
}

console.log("Após a função de erro")