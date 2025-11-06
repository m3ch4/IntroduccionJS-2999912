//Objetos en JavaScript

const productName = 'Multimetro';
const price = 150;
const available = true;

console.log(productName);
console.log(price);
console.log(available);

const product = {
    productName: 'Multimetro',
    price: 150,
    available: true,
}

console.log(product);


//Acceder a las propiedades del objeto

console.log("The name of product name is: ", product.productName, ", the price is: ", product.price, "and ¿Is available? : ", product.available);

//Agreagar propiedades al objeto

product.image = "multimetro.png";
console.log(product);

//Eliminar propiedad
delete product.price;
console.log(product);


