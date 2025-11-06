// //Metodos de objetos

const product = {
    productName: 'Multimetro',
    price: 150,
    available: true,
}
Object.freeze(product)//Con el metodo freeze bloqueamos el objeto para evitar modificaciones.
// //Eliminar propiedad
// delete product.price;
// //Agregar propiedad
// product.color = "Blue";
// product.stock = 10;
// //Modificar propiedad
// product. price = 500;

// console.log(product);
//Seal, no permite eliminar ni agregar propiedades pero si modificar propiedades.
// Object.seal(product);
// //Eliminar propiedad
// delete product.price;
// console.log(product);
// product.color = "Blue";
// product. price = 500;

console.log(Object.isFrozen(product));
console.log(Object.isSealed(product));

