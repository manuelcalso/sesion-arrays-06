// ./js/index.js
// https://codesandbox.io/s/brave-almeida-lxs3m6

const evaluationArea = document.querySelector("#evaluationArea");
console.log("evaluationArea", evaluationArea)

// VARIABLES
const mike = "Mike";

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

// REDUCE
// MÉTODOS DE ARREGLO




// REDUCE

const numeros = [2,3,5,9]




const sumarNumeros = numeros.reduce((acumulador, valorActual) => {




    console.log("acumulador", acumulador)

    console.log("valor actual", valorActual)

    console.log("resultado acumulador + valor actual", acumulador + valorActual)

    console.log("-------")




    return acumulador + valorActual

}, 10)




console.log(sumarNumeros)


const ventas = [100, 300, 500, 8000, 1560]
const totalVentas = ventas.reduce((acumulador, valorActual)=>{
  return acumulador + valorActual
}, 0)
console.log(totalVentas)


const empleados = [
    {
      nombre: "mike", salario: 3000
    },
    
    {
      nombre: "ramiro", salario: 5000
    },
    
    {
      nombre: "andy", salario: 8000
    }
  ]
  
  
  
  const evaluacion = empleados.map(({nombre, salario}) => {
    let resultado = `El salario de ${nombre} es normal`
    
    if(salario > 7000){
      return `El salario de ${salario} es considerado alto `
    }
    return resultado
    
  })
  console.log("evaluacion", evaluacion)


  evaluationArea.innerHTML = `<P>La evaluacion de andy es: <b>${evaluacion[2]}</b></P>`
