//Programacio orientada a obejtos

class Product {
    constructor(productName, price, available) {
        this.productName = productName;
        this.price = price;
        this.available = available;
    }

    formatProduct() {
        return `El producto ${this.productName} tiene un valor de ${this.price} y en el momento esta es su disponibilidad: ${this.available}`;
    }
}
//Creacion de productos
const product1 = new Product("Marcador", 1800, true);
const product2 = new Product("Cauderno", 4700, false);
const product3 = new Product("Octavo de Cartulina", 900, true);
//Impresion
console.log(product1.formatProduct());
console.log(product2.formatProduct());
console.log(product3.formatProduct());
