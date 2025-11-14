//Es una estructura usada para manejra errores en tiempo de ejecucion permitiendo que el programa continue ejecutandosesin fallar completamente
//try: dentro de este bloque se coloca el codigo que puede generar erro.
//catch: Captura el error si ocurre dentro del bloque try y permite manejarlo.
//Finalle: Ejecuta el codigo siempre, ocurra o no un error.

// const n1 = 20;
// const n3 = 30;

// console.log(n1);
// console.log(n2);
// console.log(n3);

// try {
//     console.log(n2);

// } catch (error) {
//     console.log('Variable no ha sido definida');

// }

//***************************************************************//
try {
    console.log(x);

} catch (error) {
    console.log('Ocurrio un error', error.message);

}

/****************************************************************/

//Error personalizado con throw
try {
    const age = 25
    if (isNaN(age)) throw "La edad debe ser un numero";
    console.log('Edad válida');

} catch (error) {
    console.log("Este es un error personalizado", error);
}

/****************************************************************/

function divide(a, b) {
    try {
        if (b === 0) throw "No se puede dividir sobre cero"
        return a / b;
    } catch (error) {
        return "Error ", error
    }
}

console.log(divide(10, 1));
/****************************************************************/