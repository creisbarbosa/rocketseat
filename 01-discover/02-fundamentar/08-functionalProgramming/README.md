# Functional Programming

## JavaScript

- Linguagem da WEB
- Multiprograma
- Foco no entendimento do Paradigma

## Programação Funcional

- Organizar uma linha de racioncínio
- Entender uma nova maneira de abordar problemas
- Algumas tecnologias tem como requisito

### O que é?

- Um paradigma de programação
- Uma maneira de resolver problemas

### Funções

- Pequenas tarefas dentros de uma função
- Abstrai um problema grande e isola ele dentro da função
- Não modificam dados fora dela, apenas dentro do escopo
- São pequenas e bem específicas

### Características

- Um dado (ou mais) entra em uma função e um novo dado sai dessa função
- Não altera dados
- Não guarda estado ```jsx stateless```

### Linguagens funcionais

- JavaScript (multiparadigma)
- PHP (multiparadigma)
- Elixir
- Haskell

### Pontos positivos

- Fácil manutenção
- Fácil para os testes
    - Funções isoladas e consistentes
- Códigos confiáveis

## Princípios

### PARADIGMAS

#### Programação Imperativa

- O código é pensado e gerado em sequência
- O código é pensafo como um pass-passo, como uma receita de bolo
- Uma coisa depende da outra
- O estado de um dado é alterado constantemente causando mutações nas variáveis
- Orientação a Objetos é um tipo de paradigma imperativo

#### Programação Declarativa

- O código é gerado para fazer algo, não importa como
- O que fazer e não como fazer
- Não há necessidade de um passo a passo no código
- Programação funcional é um tipo de paradigma declarativo

### DADOS

#### Imutabilidade ./imutabilidade.js

- Uma variável não pode variar
- Se voce precisar mudar uma variável, você não muda, vpcê cria uma nova

#### Stateless

- Não guarda estado
- A função só conhece dados entregues a ela
- A resposta não pode varira

### FUNÇÕES

#### Independentes

- Deverá ter ao menos 1 argumento
- Nada que acontecer lá dentro afeta o mundo externo
    - Dados imutáveis
    - Não guarda estado
- Não faremos uso de loops ( for, while ), mas se houver necessidade de tal, usaremos recursão (callback? A função chama ela mesma)

```jsx
const random = (number, Match) =>
    Math.floor(Math.random() * number);

// Recursive
// Find the factiorial of a number
const factorial = x => {

    // if a number is 0
    if (x===0) {
        return 1;
    }

    return x * factorial(x - 1);
}

```
#### Puras

- Não deverá depender de nenhum dado externo a não ser o que foi passado como argumento
- Não deverá sofrer nenhuma interferência do mundo externo a ela
- Se o argumento é o mesmo, o retorno não poderá ser diferente qundo a função for chamada novamente
- Não terá nenhum efeito colateral no seu c ódigo
    - Não irá moodificar nenhum dado
    - Não irá guardar nenhum estado

```jsx

// Função impura

// Exemplo 1: está dependendo de dado externo que não foi passado como parâmetro
function calculateCircumference(radius) {
    return Math.PI * (radius + radius) // Math não foi colocado como parâmetro da função
}

// Exemplo 2 está alterando umdado externo
let person = {
    name: 'Rafael Camarada'
    age: 'Jovem'
}

function changeName(name) {
    person.name = name // person está alterando o nome fora
}

// Função pura

// Exemplo 1
const calculateCircumference = functin (pi, radius) {
    return pi * (radius + radius)
}

// Com arrow function
const calculateCircumference = (pi, radius) =>
    pi * (radius + radius)

// Exemplo 2
const changePersonName = (person, name) =>
({...person, name})

```

#### Higher-order

- Funções que recebem funções como argumentos
- Funções que poderão retornar outras funções

```jsx
// Exemplo com .map() JS
const number = [2, 4, 8, 16]
const square = n => n * n
const squaredNumber = numbers.map(square)

// Exemplo de um retorno de função
// Currying ou aplicação parcial de função
const pause = wait => fn => setTimeout(fn, wait)
pause(600) ( () => console.log('Waiting 600ms') )
const wait200 = pause(200)
const wait1000 = pause(1000)

wait200(() => console.log('Waiting 200ms'))
wait1000(() => console.log('Waiting 1s'))

```

#### First-class

- Podem estar em qaulquer lugar, inclusive, como parâmetro de outras funções
- A função poderá ser entendida como uma variável

```jsx

const sayMyName = () => console.log('Cássio')
const runFunction = fn => fn()

runFunction(sayMyName)
runFunction(() => console.log('discover'))

console.log(runFunction(Math.random))

```

#### Composição

- Um encadeamento de funções
- Uma função que retorna um dado que vai pra outra função, quer retorna um dado e vai pra outra função quer retorna...

```jsx

const people = ['Biana', 'Ana Tereza', 'Cássio', 'Helena', 'Aldo']
const upperCasePeopleThatStartsWithA =  people
.filter(person => person.startsWith('A'))
.map(aperson => aperson.toUpperCase())

```