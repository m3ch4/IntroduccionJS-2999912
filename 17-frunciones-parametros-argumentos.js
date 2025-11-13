//Los parametros se pasan en los parentesis de la función
function add(num1, num2) { //Parametros
    console.log(num1 + num2);
}
add(7, 10)//Argumentos, que solo actuan em tiempo de ejecución.

const add2 = function (n3, n4) {
    console.log(n3 + n4);
}
add2(5, 1);

//Funciones con valores por defecto

function add3(n5 = 10, n6 = 55) {
    console.log(n5 + n6);
};
