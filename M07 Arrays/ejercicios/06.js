function duplicarElementos(array) {
  // Duplica (multiplica x2) cada elemento del array de números.
  // Devuelve un array con los duplicados.
  // Tu código:
  if(array.length === 0) return [];
  return array.map((x) => x * 2);
}

module.exports = duplicarElementos;
