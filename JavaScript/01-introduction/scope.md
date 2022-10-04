# Scope

* Determina a visibilidade de alguma variável no JS

# Block statement

```js
// vamos iniciar um bloco
{
    // aqui dentro é um bloco e posso colocar qualquer código
} // aqui fechamos o bloco

// tyoeof e tipod dinâmicos do js
let cassio = "Preto"
console.log(typeof cassio)
console.log(cassio)
```

* o bloco também criará um novo escopo. Chamamos de `blockscoped`

## var
```js
// var é a global que poderá funcionar fora de um escopo de bloco
console.log('> existe x antes do bloco? ', x)
{
    var x = 0
}
console.log('> existe x antes do bloco? ', x)
```

## let e const
```js
// const e let são locais e só funcionam no escopo onde foi criada
console.log('> existe y antes do bloco? ', y)
{
    var y = 0
}
console.log('> existe y antes do bloco? ', y)
```
