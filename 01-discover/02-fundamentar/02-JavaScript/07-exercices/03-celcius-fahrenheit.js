/* ### Celsuis para fahrenheit

Crie uma função que receba uma string em celcius ou fahrenheit e faça a transformação de uma unidade para a outra.

C = (F - 32) * 5/9
F = C * 9/5 + 32

*/

function convertTemperature(temperature, scale) {
    let conversion
    switch (scale) {
        case 'C':
            conversion = temperature * 9/5 + 32
            break
        case 'F':
            conversion = (temperature - 32) * 5/9
            break 
    }
    return conversion
}

console.log(convertTemperature(32, 'C'))
console.log(convertTemperature(89.6, 'F'))

//-------------------------------- resolution --------------------------------\\

// function transformDegree('50F')
function transformDegree(degree){
    const celciusExists = degree.toUpperCase().includes('C')
    const fahrenheitExists = degree.toUpperCase().includes('F')

    // fluxo de erro
    if(!celciusExists && !fahrenheitExists) {
        throw new Error('Grau não identificado')
    }

    // fluxo ideal, F => C
    let updatedDegree = Number(degree.toUpperCase().replace("F",""));
    // transformei os graus para apenas um númer, toUpperCase transforma qualquer minúscula para maiúscula e depois substitui a letra pra nada, transformando a temperatura em um número puro.
    let formula = fahrenheit => (fahrenheit - 32) * 5/9
    let degreeSign = 'C'

    // fluxo alternativo
    if(celciusExists) {
        updatedDegree = Number(degree.toUpperCase().replace("C",""));
        formula = celsius => celsius * 9/5  + 32
        degreeSign = 'F'
    }

    return formula(updatedDegree) + degreeSign
}


try {
console.log(transformDegree('50C'))
console.log(transformDegree('122F'))
} catch (error) {
    console.log(error.message)
}