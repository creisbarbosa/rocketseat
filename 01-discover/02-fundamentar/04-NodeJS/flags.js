console.log(process.argv)

// Eu posso colocar flags com prfixo "--""
// No terminal > node flags --name "Cássio Reis" --greetings "Tudo bem com você?"
/*
    'usr/local/bin/node' ,
    '/Users/cassio/Dev/rocketseat/NodeJS/flags' ,
    '--name' ,
    'Cássio Reis' ,
    '--greetings' ,
    'Tudo bem com você?'
*/

// O primeiro arquivo irá exportar uma função
function getFlagValue(flag) {
    const index = process.argv.indexOf(flag) + 1
    return process.argv[index]
 }

 module.exports = getFlagValue;