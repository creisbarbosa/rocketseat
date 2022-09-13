// Discover > Trilha Fundamentar > Guia Estelar JavaScript > 6. Funções > Function scope
// Function scope

let subject
    subject = 'Create a video'
function createThink(){
    subject = 'Study'
    return subject // toda função que não possui um return é undefined
}
console.log(subject)
console.log(createThink())
console.log(subject)