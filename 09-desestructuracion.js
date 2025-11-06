//Desestructuracion de objetos en JS
//¿Qué es la desestructuración de objetos?
//En JS es una forma de extraer los valores de un objeto y asignarlos a variables de manera directa y mas sencilla.

// const person = {
//     userName: "Jhonier",
//     age: 35,
// }
// console.log(person);

// //Desestructuración 1: Donde las variables o claves son por defecto
// const {userName, age} = person;
// console.log(userName);
// console.log(age);

//Desestructuración 2: Con renombramiento de variables

// const {userName : personName, age : personaAge} = person
// console.log(personName);

//La desestructuración no solo simplifica el acceso a propiedades sino que tambien permite renombrar variables segúnb se necesite.

//Desestructuración 3: Con renombramiento de variables

// const people = person.userName;
// console.log(people);

//Ejemplo de extracción de datos de respuesta de una API

const respons =  {
    responseEstatus : 200,
    data : {id : 1, productName : "Tablet", price : 800},
}

const {responseEstatus, data : {productName, price}} = respons
console.log(`El esta de respuesta es: ${responseEstatus} para el producto ${productName} con un precio de ${price}`);




