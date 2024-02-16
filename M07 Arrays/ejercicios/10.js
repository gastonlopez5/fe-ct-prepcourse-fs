function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:
  if(array.length === 0) return 0;
  var numMax = array.reduce(
    (maximo, elemento) => elemento > maximo ? elemento : maximo, 
    Number.MIN_SAFE_INTEGER);
  return array.indexOf(numMax);
}

module.exports = encontrarIndiceMayor;
