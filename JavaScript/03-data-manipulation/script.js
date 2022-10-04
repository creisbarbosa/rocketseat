/*
    Prototype

    * JS is a prototype-base language
    * based on a prortotype chain
    * __proto__
*/

/*
    Type conversion (typecasting) vs Type coersion

    * Altera um tipo de dado para outro tipo de dado
    * Typer conversion converts explicitly one type of data to another (programer capacity)
    * Typecoersion: js converts implicitly one type of data to another (js capacity)
*/

console.log('9'+5);
console.log(Number('9')+5); // com a conversão de tipos eu transformei a String '9'em um Number

let string = '678'
console.log(Number(string))

let numero = 876.9795
console.log(String(numero))
console.log(typeof String(numero))
console.log(numero.toFixed(2).replace(".",",")) // toFixed() restringe as casas decimais de um número e o replace() substitui um termo por outro termo
console.log(typeof numero)
console.log(typeof numero.toFixed(2).replace(".",",")) // quando eu substituo o "." de um termo numérico por uma vírgula, ele se transformará em uma string

let word = "Otorrinolaringologista"
console.log(word.length) // this extension coutns the word length
console.log(word.toUpperCase()) // this one makes all words cases up
console.log(word.toLowerCase()) // this one makes all words cases down

// Manipulating strings and arrays
// Separating strings

let oscarWild = 'Be yourself, everyone else is already taken.'
let myArray = oscarWild.split(" ")
console.log(myArray)
let quotationWithUnderscore = myArray.join(" ")
console.log(quotationWithUnderscore.toLowerCase())

// Verificar se o texto possui uma palavra especíifica

let phrase = "Eu quero viver um amor"
console.log(phrase.includes("amor"))
console.log(phrase.includes("Amor")) // The function ".includes" is case sensitive, it diferenciates low and upper cases

// Manipulando Arrays

let secondArray = new Array("a", "b", "c") // Array with 3 elements
console.log(secondArray)

let thirdArray = new Array(10) // Creates new array with tree empty spaces
console.log(thirdArray)

// Count the number of an Array elements
// Similar to counting elements of a string

console.log(["a","b","c"].length)

console.log([
    "a",
    {type: "array"},
    function() {return "alo"}, //It`s possible to put any kind of element into an array, it includes functions, numbers, strigns...
].length)

console.log([
    "a",
    {type: "array"},
    function() {return "alo"},
][2]) // Here in want to access the second element of the array, wich is a function

console.log([
    "a",
    {type: "array"},
    function() {return "alo"},
][2]()) // We can alse execute this function adding "()" afeter the access

console.log([
    "a",
    {type: "array"},
    function() {return "alo"},
][1].type) //Here i'm accessing the first element of the array and askign wich type of element it is

//----------Strings for arays-----------//
// Transform a chain of caracters into elements of an array

let words = "manipulation and love"
console.log(Array.from(words)) //"Array it's an object ready to use in JS, the extension .from expects a string to work

//------Manipulating-------//
let tech = ['html', 'css', 'javaScript', 'react', 'emberJs']
//1. add a item in the end of an array
tech.push('nodeJs')
//2. add in the beggining
tech.unshift('sql')
//3. remove from the end
tech.pop()
//4. remove from the beggining
tech.shift()
//5. pick specifics elements
console.log(tech.slice(1, 4))
//6. remove 1 or more itens in any position
tech.splice(1, 2)
//7. find the position of an element
let index = tech.indexOf('react') // search for position
console.log(index) // print position
tech.splice(index, 1) // remove element indicating it's position trhough object index

console.log(tech) // print final result without 'react' string