// 1. Declare uma variável de nome weight

    let weight;

// 2. Que tipo de dado é a variável acima? R: undefined

    console.log(typeof weight)

/*
    3. Declare uma variável e atribua valores a cada um dos dados:
        * name: String
        * age: Number (integer)
        * stars: Number (float)
        * isSubscribed: Boolean
*/

//    let name = "Cássio";
//    let age = 29
//    let stars = 4.6;
//    let isSubscribed = true

/*
    4. A variável student abaixo é de que tipo de dado? R: object

    4.1 Atribua a ela as mesmas propriedades e valores do exercício 3.

    4.2 Mostre no console a seguinte mensagem:

        <name>, de idade <age> pesa <weight> kg.
*/

    let student = {
        name: "Cássio",
        age: 29,
        stars: 4.6,
        weight: 88,
        isSubscribed: true
    }

    console.log(typeof student);

    console.log(`${student.name} de idade ${student.age}, pesa ${student.weight} kg.`)

/* 
    5. Declare uma variável tipo Array, de nome student e atribua a ela um valor, ou seja, somente o Array vazio
*/

    let students = []

/* 
    6. Reatribua o valor para a variável acima, colocando dentro dela o objeto student da questão 4.
*/

    students = [
        student
    ] 

    console.log(students)

    console.log(students[0])

    const anaLuiza = {
        name: "Ana Luiza",
        age: 23,
        stars: 5.0,
        weight: 70,
        isSubscribed: true
    }

    students [1] = anaLuiza

    console.log(students)