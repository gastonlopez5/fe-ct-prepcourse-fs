function todosIguales(array) {
  // Si todos los elementos del arreglo son iguales, retornar true.
  // Caso contrario, retornar false.
  // Tu código:
  var element = array[0];
  return array.every((x) => x === element);
}

module.exports = todosIguales;
