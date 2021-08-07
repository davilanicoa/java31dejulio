//CALCULAR COSTO TOTAL DE PRODUCTOS Y/O SERVICIOS SELECCIONADOS POR EL USUARIO
//
//
//
//

// PRIMER EJEMPLO //

let servicios = 4200

function sumar (primerNumero, segundoNumero, tercerNumero) {

    servicios = primerNumero + segundoNumero + tercerNumero;

}
function mostrar(servicios) {
console.log(servicios);

}

sumar(3100, 500, 600);
mostrar(servicios);

//CALCULAR PAGOS EN CUOTAS SOBRE UN MONTO DE TERMINADO
//
//
//
//

// SEGUNDO EJEMPLO //

let television = 1200

let cuotas = Number(prompt("¿Cuantas cuotas queres?"))

function datos(cuotas){

    console.log(television/cuotas);
}

datos(cuotas);

//CALCULAR VALOR FINAL DE UN PRODUCTO SELECCIONADO EN FUNCION DE IMPUESTOS Y DESCUENTOS
//
//
//
//
//EN ESTE CASO ME PARECIO UN BUEN EJEMPLO UNA LIQUIDACIÓN DE SUELDOS

// TERCER EJEMPLO //

/*let sueldo = 50000


function descuentoobrasocial(primerNumero, segundoNumero) {

    sueldo =(primerNumero * segundoNumero)/100)

}

descuentoobrasocial(50000, 3)
console.log(sueldo)*/

//NO ME DABA MAS EL BOCHO PERO INTENTE HACERLO GONZA, TE LO DEJO COMENTADO A VER SI ME PODES GUIAR A TERMINARLO//