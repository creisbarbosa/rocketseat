const timeOut = 3500
const finished = () => console.log('I push my fingers into my...')

let timer = setTimeout(finished, timeOut)
clearTimeout(timer)