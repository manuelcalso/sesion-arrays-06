const mediaCalificacion = document.querySelector("#calificacion-media");
/*

Problema 3 (Turismo - Lugares visitados):




Estás en un equipo donde desarrollarás una aplicación de viajes.




Tienes un array de objetos que representan lugares turísticos, cada uno con su nombre, número de visitas y calificación.




- Primero, debes filtrar la lista para quedarte solo con los lugares que tengan más de 250 visitas.

- Después, para estos lugares populares, debes aumentar su calificación en 1, como un pequeño 'bonus' por su popularidad.

- Finalmente, debes calcular la calificación media de los lugares populares después del 'bonus' y mostrarla.




*/










// 1. FILTROS DE LOGARES - USAR FILTER





// 2. AUMENTAR LA CALIFICACIÓN EN +1 - USAR MAP





// 3. CALCULAR LA CALIFICACIÓN MEDIA DE LOS LUGARES MEJORADOS - USAR REDUCE

// 4. BONUS - MOSTRAR EL RESULTADO DEL PUNTO 3 A TRAVÉS DEL DOM EN HTML


////////////ejercicio
////find
const lugares = [

    { nombre: "Playa del Sol", visitas: 300, calificacion: 4 },

    { nombre: "Montaña del Águia", visitas: 1200, calificacion: 7 },

    { nombre: "Bosque Verde", visitas: 100, calificacion: 2 }

]


const filtrosLugares = lugares.filter(lugar => {
    return lugar.visitas > 250
})

console.log(filtrosLugares)

////
const aumentaLugares = filtrosLugares.map(elemento => {
 return elemento.calificacion + 1
})
console.log(aumentaLugares)

///

const sumaCalificaciones = lugares.reduce((acumulado, valorActual)=> {
  return acumulado + valorActual.calificacion;
  
}, 0);

console.log(sumaCalificaciones);

const calificacionMedia = sumaCalificaciones / filtrosLugares.length
console.log("calificacionMedia", calificacionMedia)


mediaCalificacion.innerHTML = `${calificacionMedia}`