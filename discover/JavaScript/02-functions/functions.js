
// create a motivational quotes app
// function statement
function createQuotes(){
    console.log("Just one small positive thought in the morning can change your whole day.")
    console.log("Opportunities don't happen, you create them.")
    console.log("Love your family, work super hard, live your passion.")
}

// execute, run, call, invoke
createQuotes()
createQuotes()
createQuotes()

console.log(`The End`)


// function scope

let subject = 'Create a video'
function createThink(subject){
    subject = 'Study'
    return subject
}
console.log(subject)
console.log(createThink(subject))