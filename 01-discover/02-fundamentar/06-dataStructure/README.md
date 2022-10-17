# Estrutura de dados

- Usamos ED para gerenciar od dados, as informações dsa nossa aplicação
- Organizar, ordenar, buscar são algumas funcionalidades básicas
- Melhorar a escrita de algoritmos
- Melhorar a eficiencia de nossos aplicativos
- Existem muitas estruturas a serem estruturadas

## 1. O que é estrutura de Dados?

```
// Array
[1,2,3] // elementos 1, 2, 3

// Object
{ name: "Fulano", idade: 20 } // elementos name: Fulnano, idade: 20

```

## 2. Gerenciamento de dados
### 3 Etapas

1. Modelar a estrutura
2. Dar vida ã estrutura
3. Cirar funcionalidades dessa estrutura
    Ex.: Inserir, buscar, excluir...

## 3. Arrays './array.js'

```
['a', 10, 'd', true] // total de elementos
// 0 1 2 3 é o index

```
### Características

- Acesso pelo index
- Respeita a ordem de inserção dos daos
- Aceita valores duplicados
- São dinâmicos
- Podem ter dados diferentes e misturados
- Existem muitos métodos já implenetados

## 4. Matriz './matrix.js''
### Matriz ou Vertor multidimensional

- Significa quer é um Array dentro de outro array
- Podemos ter muitos níveis

## 5. Stack './stack.js/
### Pilha

- Como uma pilha de livros
- Linear, um após o outro
- o último a entrar na pilha é o primeiro a sair
    - LIFO: Last IN First OUT

### Métodos fundamentais
 
- ```push()```: adicionar elementos à pilha;
- ```pop()```: remover o elemento do topo da pilha;
- ```peek()```: obter o elemento de topo da pilha.

Outros métodos poderão ser iplementados como ```size()``` para mostrar o tamanho da pilha

## Queue './queue.js/
### Fila

- Como uma fila em uma loja de restaurante
- Linear
- O primeiro a entrar na fila é o primeiros a sair
    - FIFO 
    - First IN, First OUT
    - Front é o primeiro elementos a entrar na fila
    - Back é o último elemento a entrar na fila

### Métodos fundamentais
- ```enqueue()```: adicionar um elemento ao final da fila
- ```dequeue()```: remover o primeiro elem elemento a entrar na fila

- Outros métodos poderão ser implementados como ```size()``` para mostrar o tamanho da fila ou ```front()``` para pegar o primeiro elemento da fila, dentro tantos outros.