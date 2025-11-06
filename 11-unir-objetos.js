//Unir dos objetos


const product = {
    productName: 'Multimetro',
    price: 150,
    available: true,
}
Object.freeze(product)

//Objeto que almacena medidas 
const measurements = {
    weight : "1kg",
    measurement : "15cm",
}

const features = {
    color : "red",
    brand : "Fluke",
}

//Rest operator

const newProduct = {...product, ...measurements, ...features}
console.log(newProduct);

console.log(product);
console.table(newProduct);


