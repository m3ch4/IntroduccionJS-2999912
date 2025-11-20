//Operador ternario: En JS es una forma corta, elegante y moderna de escribir una estructura IF-ELSE.
//Se llama ternario porque usa tres operandos
//Estrusctura: Condicion ? ValorSiVerdadero : ValorSiFalso

//EJEMPLO 1
let age = 2;
let message = age >= 18 ? 'Eres mayor de edad' : 'Eres menor de edad';

console.log(message);

//EJEMPLO 2

let userName = "";
let greeting = userName ? `Hola, ${userName}` : `Hola, invitado`;
console.log(greeting);
