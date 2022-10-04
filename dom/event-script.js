// EVENTOS da DOM
 function print() {
    console.log('print')
 }

//there are onkeyup, onkeypress and ontype 
 const input = document.querySelector('input')
 
//  input.onkeyup = function() { 
//     console.log('imprima')
//  }

 const h1 = document.querySelector('h1')
 h1.addEventListener('mouseover', print)

  // argument event

input.onkeydown = function(event) {
    console.log(event.currentTarget.value)
  }