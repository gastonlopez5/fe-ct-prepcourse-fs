function encontrarElementoRepetido(numeros) {
  // La función recibe un argumento "numeros" que es un array de números.
  // Retorna el primer elemento repetido que se encuentre en el array.
  // Tu código:
  for (let i = 0; i < numeros.length; i++) {
    const element = numeros[i];
    const filter = numeros.filter((x)=> x === element);
    if(filter.length>1) return element;
  }
  return undefined;
}

module.exports = encontrarElementoRepetido;