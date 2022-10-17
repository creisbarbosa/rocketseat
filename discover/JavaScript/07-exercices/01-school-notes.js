/* ### Transformar notas escolares

Crie um algoritmo que transforme as notas do sistema numérico para o sistema de notas em caracteres tipo A B C.

* de 90 para cima   -   A
* entre 80 e 89     -   B
* entre 70 - 79     -   C
* entre 60 - 69     -   D
* menor que 60      -   F

*/

// primeiro passo é definir a variável nota

let note = 55

// usando if e else eu defino quando eu vou imprimir as notas em caracteres do alfabeto

if(note >= 90) {
    console.log('A')
} else if(note < 90 && note >= 80) {
    console.log('B')
} else if(note < 80 && note >= 70) {
    console.log('C')
} else if(note < 70 && note >= 60) {
    console.log('D')
} else {
    console.log('F')
}

/* //------ Resolução------\\

let score = 101

let scoreA = score >= 90 && score <= 100
let scoreB = score >= 80 && score <= 89
let scoreC = score >= 70 && score <= 79
let scoreD = score >= 60 && score <= 69
let scoreF = score >= 00 && score <= 59

let scoreFinal

if (scoreA) {
    scoreFinal = 'A'
} else if (scoreB) {
    scoreFinal = 'B'
} else if (scoreC) {
    scoreFinal = 'C'
} else if (scoreD) {
    scoreFinal = 'D'
} else if (scoreF) {
    scoreFinal = 'F'
}  else {
    scoreFinal = 'Nota invávlida'
}

console.log(scoreFinal)
*/

//------ Transformar tudo em uma função ------\\

function getScore(score) {

    let scoreA = score >= 90 && score <= 100
    let scoreB = score >= 80 && score <= 89
    let scoreC = score >= 70 && score <= 79
    let scoreD = score >= 60 && score <= 69
    let scoreF = score >= 00 && score <= 59

    let scoreFinal

    if (scoreA) {
        scoreFinal = 'A'
    } else if (scoreB) {
        scoreFinal = 'B'
    } else if (scoreC) {
        scoreFinal = 'C'
    } else if (scoreD) {
        scoreFinal = 'D'
    } else if (scoreF) {
        scoreFinal = 'F'
    }  else {
        scoreFinal = 'Nota invávlida'
    }

    return scoreFinal // This is the way of the function
}

console.log(getScore(90))
console.log(getScore(80))
console.log(getScore(70))
console.log(getScore(60))
console.log(getScore(50))
console.log(getScore(-1))
