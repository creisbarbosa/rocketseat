// Discover > Trilha Fundamentar > Guia Estelar JavaScript > 6. Funções > Callback function
//--------------Callback function--------------\\
// Uma função que está passando como parâmetro para outra função

function sayMyName(name){
    console.log('Antes de executar a função callback')
    name()
    console.log('Depois de executar a função callback')
}

// Além de passar dados para dentro de uma função, também posso passar outras funções

sayMyName(
    () => {
        console.log(`Estou em uma callback`)
    }
)

//--------------Explanation--------------\\

// Eu defino uma função depois executo ela;
// A execução da última arrow function aconteceu dentro da primeira function, seria a mesma coisa que escrever:

function sayMyName(){
    console.log('Antes de executar a função callback')
    function name(){
        console.log(`Estou em uma callback`)
    }
    name()
    console.log('Depois de executar a função callback')
}

sayMyName()

// Anteriormente a função foi criada no lado de fora e chamada do lado de dentro: Callback