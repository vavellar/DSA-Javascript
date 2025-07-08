function logItems(n) {
    for (let i = 0; i < n; i++) {
        for(let j = 0; j < n; j++) {
            console.log(i, j)
        }
    }  
    
    for (let k = 0; k < n; k++) {
        console.log(k)
    }
}

logItems(10)

// Loops aninhados tem complexidade O(n2) pois o número de operações será o número de entrada elevado ao quadrado
// Poderíamos dizer que a complexidade do algoritmo acima é O(n2) + O(n) = O(n2 + n), porém em BigO, simplemente removemos o termo não dominante, no caso "n", pois esse valor será insignificante no número de operações total em temros de bigO.