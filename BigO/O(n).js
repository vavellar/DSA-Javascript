function printElements(n) {
    for (let i = 0; i <= n; i++) {
        console.log(i)
    }
}

printElements(10)

// Complexidade Linear O(n) pois o array vai ser percorrido n vezes, baseado na variável N que será passada como argumento da função

// Drop Constants
// Independente da quantidade de loops que tivermos dentro de uma função, BigO é simplifcado e podemos remover as constantes da notação, no exemplo abaixo poderíamos dizer que temos O(n) + O(n) = O(2n), porém podemos remover a constante,
// nao faz diferenca e sempre vai ser reduzido a O(n)
function logItems(n) {
    for (let i = 0; i <= n; i++) {
        console.log(i)
    }

    for (let j = 0; j <= n; j++) {
        console.log(j)
    }
}

logItems(10)

