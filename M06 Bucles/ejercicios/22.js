function diasEnMes(mes) {
  // La función recibe un mes(número) por argumento.
  // Determine cúantos días tiene el mes correspondiente a ese número.
  // PISTA: Usa un bucle do-while para validar que el mes ingresado sea válido.
  // Tu código:
  let anioActual = new Date().getFullYear();
    let mesValido = true;

    do {
        if (mes < 1 || mes > 12) {
            mesValido = false;
        } else {
            // Crear una nueva instancia de Date con el primer día del mes
            const primeraFechaDelMes = new Date(anioActual, mes-1, 1);

            // Configurar la fecha al último día del mes
            const ultimaFechaDelMes = new Date(anioActual, mes, 0);

            // Calcular la diferencia en días
            var diferenciaEnDias = 0;
            if(mes!==2){
                diferenciaEnDias = Math.floor((ultimaFechaDelMes - primeraFechaDelMes) / (1000 * 60 * 60 * 24)) + 1;
            }
            else{
                diferenciaEnDias = Math.floor((ultimaFechaDelMes - primeraFechaDelMes) / (1000 * 60 * 60 * 24));
            }
        
            return diferenciaEnDias;
        }
    } while (mesValido);

    return 0;
    
}

module.exports = diasEnMes;
