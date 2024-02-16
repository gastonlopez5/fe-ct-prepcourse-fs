function promedioResultadosTest(resultadosTest) {
  // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
  // Tu código:
  var total = resultadosTest.length;
  var suma = resultadosTest.reduce((accumulator, current) => accumulator + current, 0);
  return suma / total;
}

module.exports = promedioResultadosTest;
