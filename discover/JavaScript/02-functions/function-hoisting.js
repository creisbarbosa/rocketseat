// Discover > Trilha Fundamentar > Guia Estelar JavaScript > 6. Funções > Function hoisting
// Function hoisting

sayMyName ();

function sayMyName(){
    console.log('When no one is around you, say baby i love you!')
}

// Desta maneira, é como se a função estivesse acontecendo antes da definição
// Abaixo é um exemplo em que não acontecerá o hoisting, elevação

beyonCe ();

const beyonCe = function() {
    console.log('Destiny Child')
}