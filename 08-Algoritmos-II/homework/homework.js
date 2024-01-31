'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  if (array.length <= 1) {
    return array
  }
  var pivot = array[0]
  var mayores = []
  var menores = []
  for (let i = 1; i < array.length; i++) {
    if (array[i] < pivot) {
      menores.push(array[i])
    } else {
      mayores.push(array[i])
    }
  }
  var resultado = quickSort(menores)
  resultado.push(pivot)

  for (let j = 0; j < quickSort(mayores).length; j++) {
    resultado.push(quickSort(mayores)[j])
  }
  return resultado
}



function merge(left, right) {
  let a = 0
  let b = 0
  let resultado = []
  while (a < left.length && b < right.length) {
    if (left[a] < right[b]) {
      resultado.push(left[a])
      a++
    } else {
      resultado.push(right[b])
      b++
    }
  }
  return resultado.concat(left.slice(a)).concat(right.slice(b))
}
function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  if (array.length === 1) {
    return array
  }

  let mid = Math.floor(array.length / 2)
  let left = array.slice(0, mid)
  let right = array.slice(mid)
  return merge(mergeSort(left), mergeSort(right))
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
