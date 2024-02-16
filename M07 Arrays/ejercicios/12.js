function agregarNumeros(arrayOfNums) {
  // Suma todos los elementos de arrayOfNums y retorna el resultado.
  // Tu código:
  return arrayOfNums.reduce(
    (accumulator, current) => accumulator + current,
    0);
}

module.exports = agregarNumeros;
