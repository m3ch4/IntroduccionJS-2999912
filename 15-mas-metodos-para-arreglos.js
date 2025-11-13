//Crear un arreglo de objetos para un carrito de compras.

const months = ['December', 'November', 'January', 'February'];

const shoppingCar = [
    { productName: 'Tablet', price: 800 },
    { productName: 'Mouse', price: 50 },
    { productName: 'Smart TV', price: 1500 },
    { productName: 'Computer', price: 2000 },
    { productName: 'Play Station', price: 1800 },
    { productName: 'X-Box', price: 1800 },
    { productName: 'Nintendo Wii', price: 900 },
    { productName: 'KeyBoard', price: 400 },
    { productName: 'SoundBar', price: 700 },
]

//Recorre el arreglo y muestra los elementos.
// months.forEach(function(month){
//     console.log(month);

// });

//Recorremos el arreglo y validamos si existe o no existe

// months.forEach(function (month) {
//     if (month === 'January') {
//         console.log('January esxite');
//     } else {
//         console.log('El mes no exite');

//     }
//     console.log(month);

// });

//
// const month = months.includes('December');
// console.log(month);

//El include no funciona correctamente cuando hay objetos dentro del arrego
// const shopping = shoppingCar.includes('Tablet');
// console.log(shopping);

//Para arreglos planos usamos includes y para objetos some
// const result = shoppingCar.some(function (product) {
//     return product.price === 800;
// })

//const result = shoppingCar.some(product => product.productName === 'Tablet')

//Reduce nos sirve para hacer sumatoria de valores
// const result = shoppingCar.reduce(function(total, product){
// return total + product.price},0);

// const result2 = shoppingCar.reduce((total, product) => total + product.price, 0);
// console.log(result2);

//METODO FILTER

// const result = shoppingCar.filter(product => product.price < 1000);
// console.log(result);

const result2 = shoppingCar.filter(product => product.productName === 'SoundBar')
console.log(result2);


const result3 = shoppingCar.filter(product => product.productName !== 'SoundBar')
console.log(result3);
