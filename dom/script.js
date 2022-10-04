// AULA 1 - SELECIONANDO ELEMENTOS

// 01
//------------------------> getElementById(element)

// const element = document.getElementById('blog-title')
// console.log(element)

// 02
//------------------------> getElementsByClassName(HTML colection)

// const element = document.getElementsByClassName('one')
// console.log(element)

// 03
//------------------------> getElementsByTagName(HTML colection)
 
// const tag = document.getElementsByTagName('h1')
// console.log(tag)

// 04
//------------------------> querySelector(element)

// const query = documetn.querySelector('') escolhe o seletor css tipo .class ou [src]

// console.log(query) // aqui ele só pega o primeriro que ele achar (existe uma maneira de pegar mais do que uma query)

// 05
/* ------------------------> querySelectorAll(Nodelist) - consigo fazer um forEach

const newQuery = document.querySelectorAll('#none')
console.log(newQuery)

newQuery.forEach(el => console.log(el)) (aqui é exemplificado que quando eu utilizo um querry selector, eu tenho como outpout uma node list que me permite utilizar a função forEach*/

/* AULA 2 - MANIPULANDO CONTÚDO 

01
--------------------> textContent
*/

const element = document.querySelector('h1')

// element.textContent = 'Olá Cássio Reis' // Alterei o conteúdo de texto do meu elemento

element.textContent += ' Olá Cássio Reis' // Cocatenei a frase com a já existente no h1

console.log(element.textContent) // Aqui eu peguei o elemento de texto para utilizar em outra localidae

//02
//--------------------> innerText

element.innerText = "Mudando o texto interno com .innerText"

//03
//--------------------> innerHTML

element.innerHTML += "<small> , aqui adicono mais coisa</small>"

//04
//--------------------> value

const input = document.querySelector('input')
input.value = 'Populate input'

//05
//--------------------> atributos (set / get / removeAttributes)

const header = document.querySelector('header')
header.setAttribute('id','header')
const headerId = document.querySelector('#header')
console.log(headerId.getAttribute('id'))

 // Aula 03 - ALTERANDO ESTILOS

const htmlBody = document.querySelector('body')
htmlBody.style.backgroundColor = '#f9f3d2'
console.log(htmlBody.style.backgroundColor)

// Como alterar estilos usanfo classList (add / remove / toggle )

htmlBody.classList.add('active')
console.log(htmlBody.classList)
htmlBody.classList.remove('active')
console.log(htmlBody.parentNode)
console.log(htmlBody.childNodes)
console.log(htmlBody.children)
console.log(htmlBody.firstChild)
console.log(htmlBody.firstElementChild)
console.log(htmlBody.lastChild)
console.log(htmlBody.lastElementChild)

// nextSibiling e nextElementSibiling
// previousSibiling previousElementSibiling

// AUlA 04  - Criando e adicionando elementos no html

// createElement

const div = document.createElement('div')
div.innerText = 'Fala meus Cupixa'
const body = document.querySelector('Body')
// body.append(div)
// body.prepend(div)
const script = body.querySelector('script')
body.insertBefore(div, script)