function logItems(a, b) {
    for (let i = 0; i <= a; i++) {
        console.log(i)
    }

    for (let j = 0; j <= b; j++) {
        console.log(j)
    }
}

// Para o algoritmo acima, nao podemos simplesmente dizer que a = n e b = e a complexidade é (n), pois não podemos definir os dois parametros como N,
// o correto nesse caso seria dizer que O(a + b)