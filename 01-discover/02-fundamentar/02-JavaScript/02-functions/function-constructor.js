// Discover > Trilha Fundamentar > Guia Estelar JavaScript > 6. Funções > Funções contrutoras
//--------------Function Contructor--------------\\
/*
    Function() contructor

    * expressão new
    * cria um novo objeto
    * this keyword
*/

function Person(name){
    this.name = name
    this.walk = function(){
        return this.name + " is walking home."
    }
}

const mayk = new Person("Maykin")
const joao = new Person("Joãozin")

console.log(mayk.walk())
console.log(joao.walk())