let num1 = 5
let num2 = num1

num1 = 10

console.log(num1)
console.log(num2)

// Variaveis são passadas por valor e não por referência em javascript. Nesse caso não são utlizados ponteiros

let obj1 = {
    value: 11
}

let obj2 = obj1

// Estruturas de dados como objetos são passados por referência, então no momento que definimos que obj2 = obj1, não estamos atribuindo o valor da varíavel obj1 ao ob2 em si, estamos apontando o obj2 ao mesmo espaço na memória em que obj1 também está.
// Por isso, que qualquer alteração feita em obj1, irá refletir em obj2.

let obj3 = {
    value: 22
}

obj1 = obj3
obj2 = obj3

// Ao fazer isso, não temos mais nenhuma referência apontando para o objeto { value: 11 } e não temos mais como acessá-lo. E o javascript irá limpar esse espaço na memória por meio de um processo chamado garbage collection