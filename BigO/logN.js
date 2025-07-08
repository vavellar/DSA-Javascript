function binarySearch(arr, target) {
  let left = 0, right = arr.length - 1

  while (left <= right) {
    let mid = Math.floor((left + right) / 2)

    if (arr[mid] === target) return mid
    else if (arr[mid] < target) left = mid + 1
    else right = mid - 1
  }

  return -1
}

// Para acharmos qualquer elemento dentro de um array ordenado, podemos dividir o array ao meio e eliminarmos a metade onde o número buscado não está, para isso, temos uma complexidade de O(log n)

const arr = [1, 2, 3, 4, 5, 6, 7]
binarySearch(arr, 1)
// Nesse caso, vamos efetuar a operacao no maximo 3 vezes, pois log 8 (quantidade de itens no array) = 3