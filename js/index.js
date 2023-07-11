// ./js/index.js
// https://codesandbox.io/s/brave-almeida-lxs3m6

// VARIABLES
const evaluationArea = document.querySelector("#evaluation-area");
console.log("evaluationArea", evaluationArea);

const saludar = () => {
  return "Hola!";
};

const resultado = saludar();

console.log(resultado);

if (1 === 1) {
  console.log("Son iguales");
}

switch ("México") {
  case "México":
    console.log("Es México");
    break;
  default:
    console.log("No es México");
}

const sumar = (numero1, numero2) => numero1 + numero2;

sumar(1, 5);

const word = "corta";
// CONCATENACIÓN
const str1 = "Esta es" + " " + "una oración" + " " + word + ".";
console.log(str1);

// INTERPOLACIÓN
const str2 = `Esta es una oración ${word}.`;
console.log(str2);

// MÉTODOS DE ARREGLO

// 1. REDUCE
// REALIZA UNA OPERACIÓN DE EVALUACIÓN DE TODOS LOS ELEMENTOS, ENTREGANDO UNO
const numeros = [2, 3, 5, 9, 150];

const sumarNumeros = numeros.reduce((acumulador, valorActual) => {
  console.log("acumulador", acumulador);
  console.log("valor actual", valorActual);
  console.log("resultado acumulador + valor actual", acumulador + valorActual);
  console.log("-------");

  return acumulador + valorActual;
}, 10);

console.log(sumarNumeros);

// EJERCICIO
// REDUCE MULTIPLICACIÓN
const ventas = [100, 300, 500, 8000, 1560];
const totalVentas = ventas.reduce((acumulador, valorActual) => {
  return acumulador + valorActual;
}, 0);
console.log("totalVentas", totalVentas);

// 2. MAP
// RECORRE TODOS LOS ELEMENTOS DEL ARREGLO Y LOS CAMBIA, GENERAN UN NUEVO ARREGLO
// PARADIGMA DE PROGRAMACIÓN FUNCIONAL
// SIEMPRE DEBES GENERAR UNA NUEVA VARIABLE SI ESTÁS MUTANDO ALGO

const paises = [
  "México",
  "Colombia",
  "Perú",
  "Argentina",
  "Brasil",
  "Chile",
  "Estados Unidos"
];

const formatoPaises = paises.map((pais) => {
  return `El país es: ${pais}`;
});

console.log("formatoPaises", formatoPaises);

// EJERCICIO MAP
// GENEREN UN NUEVO ARREGLO DE NÚMEROS
// MULTIPLIQUEN POR 3 CADA ELEMENTO DEL ARREGLO
// INPUT: [1,2,3]
// OUTPUT: [3,6,9]

// EJERCICIO DE PRACTICIDAD EMPRESARIAL
// DETERMINAR SI LOS SALARIOS SE ENCUENTRAN EN UN RANGO DE SALARIO ALTO

const empleados = [
  {
    nombre: "Mike",
    salario: 3000
  },
  {
    nombre: "Ramiro",
    salario: 5000
  },
  {
    nombre: "Andrea",
    salario: 8000
  }
];

const evaluacion = empleados.map((empleado) => {
  let resultado = `El salario de ${empleado.nombre} es un salario promedio, dentro del rango interno de la empresa`;

  if (empleado.salario > 7000) {
    resultado = `El salario de ${empleado.nombre} es considerado un salario alto, dentro del rango interno de la empresa.`;
  }

  return resultado;
});

console.log("evaluación", evaluacion);

evaluationArea.innerHTML = `<p><b>${evaluacion[2]}</b></p>`;

// 3. FIND
// ACCEDER A CADA ELEMENTO DEL ARREGLO, Y, AL COINCIDIR EL VALOR DE BÚSQUEDA CON UNO DE LOS ELEMENTOS, RETORNA EL VALOR.
// DEVUELVE LA PRIMERA COINCIDENCIA

const edades = [13, 20, 15, 18, 22, 13];

const encuentraAlPrimerMenorDeEdad = edades.find((edad) => {
  return 18 >= edad;
});

console.log("evaluarMayoriaDeEdad", encuentraAlPrimerMenorDeEdad);

// 4. FILTER
// ITERA SOBRE CADA ELEMENTO DEL ARREGLO Y FILTRA DE ACUERDO A LA CONDICIÓN LOS ELEMENTOS, CREANDO UN NUEVO ARREGLO

const edadesConNombre = [
  { nombre: "Persona 1", edad: 13 },
  { nombre: "Persona 2", edad: 25 },
  { nombre: "Persona 3", edad: 18 }
];

const encuentraTodosLosMenoresDeEdad = edadesConNombre.filter((persona) => {
  return 18 >= persona.edad;
});

console.log("encuentraTodosLosMenoresDeEdad", encuentraTodosLosMenoresDeEdad);

// NOT RECOMMENDED
// 5. FOR

// 6. FOREACH

// YEAH, THIS ONE IS RECOMMENDED
// BONUS
// 7. INCLUDES
