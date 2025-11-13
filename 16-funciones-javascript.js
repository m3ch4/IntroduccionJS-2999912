//Hoisting: Es el comportamineto por defecto en el que el intérprete mueve las declaraciones(variables y funciones) a la parte superior de su ambito(scope) antes de ejecutar el codigo


//Declaracion de una función.
function add() {
    console.log(10 + 20);
}
add();

//Expresion de una función
const add2 = function () {
    console.log(30 + 40);
}
add2();

//FUNCION IIFFE
//Es un patrón de diseño en JavaScript que crea una función y la ejecuta en el mismo instante en que se declara.
//So utiles para proteger variables, para que no se mezclen con las variables de otros archivos.

(function () {
    console.log('Esta es una funcion IIFE');
})();

// console.log(client);

//Diferencia entre funcion y metodo

const num1 = 20;
const num2 = '10';
//Funcion que convierte strings a numbers
console.log(parseInt(num2));
console.log(num1);

//Un metodo siempre colocamos una variable segido de punto
//Metodo que convierte número a string
console.log(num1.toString());




