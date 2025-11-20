//Sirve para dar un valor por defecto, cuando algo es null o undefined
//Estructura: valor1 ?? valor2;

//1- Si valor 1 no es nulo ni undefined, se usa valor uno.
//2- Si valor 1 es nulo o undefined, se usa valor dos.

//EJEMPLO 1

let userName = "Jhonier"
let user = userName ?? "Invited";
console.log(user);
