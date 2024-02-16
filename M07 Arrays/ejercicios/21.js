function encontrarPrimerMultiploDeN(n, secuencia) {
  // La función recibe un numero "n" y un array de números "secuencia" como argumentos.
  // Devuelve el primer múltiplo de n que encuentres en la secuencia de números.
  // Usa un break para detener el bucle una vez halles el múltiplo.
  // Tu código:
  var res;
  for (let i = 0; i < secuencia.length; i++) {
    if(secuencia[i]/n===1 || secuencia[i]%n===0){
      res = secuencia[i];
      break;
    } 
  }
  return res;
}

module.exports = encontrarPrimerMultiploDeN;