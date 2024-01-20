function saludo(idioma) {
  // Retornar un saludo en tres diferentes lenguajes:
  // Si "idioma" es "aleman", devuelve "Guten Tag!".
  // Si "idioma" es "mandarin", devuelve "Ni Hao!".
  // Si "idioma" es "ingles", devuelve "Hello!".
  // Si "idioma" no es ninguno de los anteriores o es `undefined`, devuelve "Hola!".
  // Tu código:
  var saludo = "";
  switch(idioma){
    case "aleman":
      saludo = "Guten Tag!";
      break;
    case "mandarin":
      saludo = "Ni Hao!";
      break;
    case "ingles":
      saludo = "Hello!";
      break;
    default:
      saludo = "Hola!";
      break;
  }
  return saludo;
}

module.exports = saludo;
