function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:
  var resultado = 1;
  for(i=a ; i<=b ; i++){
    resultado *= i;
  }
  return Math.abs(resultado);
}

module.exports = productoEntreNúmeros;