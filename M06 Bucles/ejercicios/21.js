function esPotenciaDeDos(numero) {
  // La función recibe un "numero" por argumento.
  // Determina si es una potencia de 2.
  // Devuelve true si lo es, sino devuelve false.
  // PISTA: Utiliza un bucle while.
  // Tu código:
  var resultado = 0;
  var exp = 0;
  while(resultado<=numero){
    resultado = 2**exp;
    if(resultado===numero) return true;
    exp += 1;
  }
  return false;
}

module.exports = esPotenciaDeDos;
