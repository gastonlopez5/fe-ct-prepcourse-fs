function agregarItemAlComienzoDelArray(array, elemento) {
  // Agrega el "elemento" al comienzo del arreglo recibido.
  // Retorna el arreglo.
  // Tu código:
  array.reverse().push(elemento);
  return array.reverse();
}

module.exports = agregarItemAlComienzoDelArray;
