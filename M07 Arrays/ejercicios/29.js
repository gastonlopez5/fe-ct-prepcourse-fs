function encontrarNumeroFaltante(numeros) {
  // La función recibe un argumento "numeros" correspondiente a un array de números.
  // Encuentra el número faltante en una secuencia de números enteros consecutivos
  // y retórnalo.
  // Devuelve null si el aray es vacío o si no hay números faltantes.
  // Tu código:
  if(numeros.length === 0) return null;

  const last = numeros[numeros.length-1];
  for (let i = 0; i < numeros.length; i++) {
    const element = numeros[i] + 1;
    if(element<last && !numeros.includes(element)) return element;
  }
  return null;
}

module.exports = encontrarNumeroFaltante;