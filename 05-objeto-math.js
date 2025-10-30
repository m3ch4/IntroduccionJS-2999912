//Objeto Math

let result;

result = Math.PI;
//Redondea hacia el entero mas cercano
result = Math.round(2.2);
//Redondea hacia arriba
result = Math.ceil(2.1);
//Redondea hacia abajo
result = Math.floor(2.9);
// Raiz cuadrada
result = Math.sqrt(144);
result = Math.abs(-115);
//Número minimo
result = Math.min(12,14,78,1,-8,0);
//Número maximo
result = Math.max(12,14,78,1,-8,0);
//Número aleatorio
result = Math.random();
//Numero aleatorio entre 0 y n
result = Math.floor(Math.random()* 10);
console.log(result);

let num1 = Math.floor(Math.random() * 100);
let num2 = Math.floor(Math.random() * 100);
let resultAdd = num1 + num2;
let resultSubtract = num1 - num2;
let resultMultiplication = num1 * num2;
let resultDivide = num1 / num2;


console.log(resultAdd);
console.log(resultSubtract);
console.log(resultMultiplication);
console.log(resultDivide);
