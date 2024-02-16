function obtenerElementoAleatorio(array) {
  // Devuelve un elemento aleatorio del arreglo array.
  // PISTA: Usa el método Math.random().
  // Tu código:
  var index = Math.floor(Math.random() * array.length);
  return array[index];
}

module.exports = obtenerElementoAleatorio;
