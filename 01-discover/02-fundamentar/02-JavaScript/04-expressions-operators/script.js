// // Expressions and Operators
// // Expressions
// // Operators
// // - Binary
// let number = 1
// console.log(number + 1)
// // - Unary
// console.log(++number) // add one number
// console.log(--number) // subtract one number
// console.log(typeof number)
// // - Ternary
// console.log(true ? 'this is the truth' : 'this is false')
// console.log(false ? 'this is the truth' : 'this is false')

// //--- using new ---//

// let completeName = new String('Cássio') // "new" will transform the variable into an object
// completeName.surName = ' Reis Barbosa'
// let aniversary = new Date('1993-03-28')
// let age = new Number(29)
// console.log(completeName + completeName.surName, age)
// console.log(aniversary)

// //--- class 2. unary operators ---//
// // typeof
// // delete

// const person = {
//     nome: 'Cássio',
//     age: 29
// }
// console.log(person)

// delete person.age // delets a  propriety of an object

// console.log(person)

// //--- class 3. arithmetic operators ---\\

// // Mulftipiy
// console.log(4*4)
// console.log(3.14*15.6)
// // Divide
// console.log(12.6/4)
// // Sum
// console.log(34+76)
// // Subtraction
// console.log(34-56)

// // Rest of division - Remainder
// let remainder
// remainder = 11 % 2
// console.log(remainder)
// // Increment ++
// let increment = 2
// increment++
// increment++
// console.log(increment)
// // Decrement --
// increment--
// console.log(--increment) // it's possoble to decrement or increment affter and before the variable
// // Exponential
// console.log(8**2)

// // class 6. Comparision operations

// let one = 1
// let two = 2

// // equals to ==
// console.log( two == 1 ) // false
// console.log( one == '1') // true
// console.log( one === '1') // false because the type is different  - strictly equal 
// console.log( one == 2 ) // false

// // different
// console.log( two != 1 )
// console.log( two != 2 )
// console.log( two != '2' )
// console.log( two !== '2' ) // strictly different (type)

// // > bt (bigger than)
// console.log( one > two )
// console.log( two > one )

// // >= bte (bigger or equal to)
// console.log( one >= two )
// console.log( two >= one )

// // < (smaller than)
// console.log( one < two )
// console.log( two < one )

// //<= (smaller or equal to)
// console.log( one <= two )
// console.log( two <= one )

//------Assignment------\\

let x
x = 2
x += 4
x -= 8
x *= 16
x /= -16
x **= 8
x %= 13
console.log(x)

//------ Logical operators ------\\
// 2 boolean values, when verfied, result in true or false

let pao = true
let queijo = true
let tapioca = false

// AND &&
console.log(pao && queijo)
console.log(pao && tapioca)
console.log(pao && queijo && tapioca)

// OR ||
console.log(pao || queijo)
console.log(tapioca || queijo)

// NOT !
console.log(!pao)
console.log(!pao || tapioca)
console.log(pao || tapioca)

// Ternary conditional operator
// Depending of the condition, we receive two different values
// condition then value 1 or not value 2
// condition ? value1 : value2
// exemple
let bread = true
let cheese = true
let coffe = false
const niceBreakfast = bread && cheese ? 'Cafezinho bom da muléstia moss' : 'Cafezinho ruim da peste'
console.log(niceBreakfast)
const goodBreakfast = bread || coffe ? 'Good food' : 'Not so good food'
console.log(goodBreakfast)

//Older than 18
let idade = 16
const jaPodeDirigir = idade >= 18 ? 'Can drive' : "Can't drive"
console.log(jaPodeDirigir)

//string operator
//cocatenate
console.log('Warewolf woman from the '+'S'+'S')
let alpha = 'Alfa'
console.log(alpha += 'beto')

/* 
    FALSY

    0
    -0
    ""
    null
    undefined
    NaN
*/

/*
    TRUTHY

    {}
    []
    1
    3.23
    "0"
    "false"
    -1
    Ifinity
    -Infinity
*/

/* Operator precedence

    * grouping                      ( )
    * negation and increment        ! ++ --
    * multiplication and division   * /
    * sum and subtraction           + -
    * relational                    < <= > >=c
    * equity                        == != === !==
    * AND                           &&
    * OR                            ||
    * conditional                   ?:
    * asssignments                  = += -= *= %=
*/ 