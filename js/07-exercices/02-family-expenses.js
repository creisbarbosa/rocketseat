/* ### Sitema de gastos familiares

Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
    * receitas: []
    * despesas: []

Agora, crie um função que irá calcular o total de receitas e despesas e irá mostrar uma mensagem se a família está com saldo positivo ou negativo, seguido do valor do saldo
*/

let family = {
    income: [4094.50, 1850.50, 1300.05],
    expenses: [1548.50, 1956.40, 3854.10]
}
 /* My idea

var incomeTotal = 0
for(var i = 0; i < budjet.income.length; i++) {
    incomeTotal += budjet.income[i];
}

var expensesTotal = 0
for(var i = 0; i < budjet.expenses.length; i++) {
    expensesTotal += budjet.expenses[i];
}

let balance = incomeTotal - expensesTotal


if(balance > 0) {
    console.log('Saldo positivo com o total de R$' + balance)
} else {
    console.log('Saldo negativo com o total de dívidas em R$' + balance)
}

*/

//---- resolution ----\\

function sum(array){
    let total = 0; // Esse é o começo, aparentemente eu tenho sempre que indicar o montante inicial de algo para retornar o valor ajustado no final da função.
    for(let value of array){
        total += value
    }
    return total
}

function calculateBalance() {
    const calculateIncomes = sum(family.income)
    const calculateExpenses = sum(family .expenses)

    const total = calculateIncomes - calculateExpenses

    const positiveTotal = total > 0

    let balanceText = 'negativo'

    if(positiveTotal) {
        balanceText = 'positivo'
    }
    console.log(`Seu saldo está ${balanceText} em R$ ${total.toFixed(2)}`)
}

calculateBalance()