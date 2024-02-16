function multiplicarElementosPorIndice(array) {
  // Multiplica cada elemento del array por su índice.
  // Devuelve el nuevo arreglo con los resultados.
  // Tu código:
  var result =[];
  for (let i = 0; i < array.length; i++) {
    result.push(i*array[i]);    
  }
  return result;
}

module.exports = multiplicarElementosPorIndice;
