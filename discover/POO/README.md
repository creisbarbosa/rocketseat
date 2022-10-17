# Programação Orientada a Objetos

## Definição

- Oriented Objected Programing
- Um poaradigma de desenvolvimento
- Uma maneira de resolever um problema, um mode de pensar
- Não está ligado somente à linguagem de programação, mas a um entendimento amplo e atemporal para a programação`   

## Utilização no mercado

- Na maioria dos sistemas atuais
- Várias linguagens (JS, TS, Java, Python)
- Utilizado por Analistas de Sistemas e não somente por programadores
    - Na dase de levantamento de requisitos de sistema
    - Via gráficos, desenhos e textos

## Onde e quando utilizar?

- Linguagens
- Quando quiser aplicação Padrões de Projetos
- Quando quiser organizar seu código
- Para melhor entendimento do códio, pensando nele como OBjetos
- Quando precisar fazer reuso de código
- Para separar a complexidade do código, abstrair código e expor de maneira mais simples
- Para classificar as rotinas e trechos de código

## Conceitos

- Precisamos entender os conceitos e paradigmas e não somente códigos
- Uma boa fundamentação

### Objetos

Todo objetos possui...
- Propriedades e Funcionalidades (...ar, ...ir, ...er (inifinitvo))
- Estado e Comportamento (...ado, ...edo)
- Atributos e Métodos

#### Objetos abstratos vs Mundo Real

- Trazemos a representação de algo do mundo real para Objetos
    - Pessoa
    - Aluno
    - Produto
    - Carrinho de compras

- Porém, alguns objetos na programação não são fáceis de identificar, pois são abstratos como, por exemplo:
    - Autenticação
    - Autorização

> Nem todo objeto do mundo real fará parte do seu sistema.

#### Classes

> As classes funcionam como um molde para os objetos. Os objetos são criados a partir de uma classe e muitos deles podem ser feitos da mesma classe.

- Ex.: Máquina de Biscoito
    - Instâncias (Biscoito)

#### Classes em JavaScript

- Sintatical sugar
- Prototype (Os objetos são prortótipos)
     - Os objetos possuem um herança prototipal, herdando muitas outras opções do que as 3 que foram inseridas.

```jsx
// Definir classe
class Pessoa {
    contructor(nome) {
        this.id = ~~(Math.random() * 100000)
        this.nome = nome
    }

    dizerNome() { // Funcionalidade dizer nome
        console.log(this.nome)
    }
}

// Criar objeto
const pessoa = new Pesspa(`Cássio`)

```

#### Encapsulmento

> Dirigir carro X Conhecer o motor do carro

- Colocar numa capsula
- Agrupamento de funções e variáveis
- Esconder detalhes de implementação
- Camada de segurança para os atributos e métodos (para nossas variáveis e funções)

> Todas asminhas funções e variáveis espalhadas no meu código está encapsulada dentro de uma classe

#### Encapsulamento do código JavaScript './encap.js'

#### Programação Estruturada vc Orientada a Objetos

##### Confusão e Solução './estutural.js'
-  Programação Estruturada X Orientação a Objetos

###### Programação Estruturada
- Processa a entrada e manipulação dos dados, até a saída
- Uso de sequeências, estruturas de repetições e condições
- Uso de uma rotina maior, ou sob-rotinas
- Não existe restrição de variáveis
> Eu posso sobrescrever as varáveis detro do código, já que ele s encontra no mesmo arquivo. Pode causar confusão.

###### Programação Orientada a Objetos
- Surge para trazer umcuidado ao uso  estruturado
    - Não elimina por completo o uso estruturado
- Conceitos como Objetos e Classes
- Cuidados com variáveis e rotinas (Encapsulamento)
- Melhor reuso de código (Herança)

#### Herança

- Pais e filhos
- Objetos podem herdar, ou estender, características bases
- Uma cópia de atributos e métodos de outras classes

```jsx
class Veiculo {
    rodas = 4;

    mover(direcao) {}
    virar(direcao) {}
}

class Moto extends Veiculo {
    constructor() {
        super() // puxar atributos e métodos do pai
        this.rodas = 2
    }
}
```

#### Poliformismo

> Quando um objeto estende de outro (herança) talvez haja a necessidade de reescrever um ou mais características (atributos e métodos) nesse novo objeto.

Recriaremos então um método (ou mais) de cada calasse herdada.

- Polimorfismo significa "muitas formas"
 
#### Poliformismo com JavaScript './polimorfismo'

#### Abstração

Template ou identidade de uma classe que será contru;ida no futuro

- Atributos e métodos podem ser criados na classe de Abstração (Superclasse) MAS
- A implementação dos métodos e atributos só poderá ser feita na classe que irá herdar essa AAbstração

#### Abstração com código JavaScript './abstract.js'

#### Conclusão