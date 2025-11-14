//Programacio orientada a obejtos

class Product {
    constructor(productName, price) {
        this.productName = productName;
        this.price = price;
    }

    formatProduct() {
        return `${this.productName} tiene un valor de ${this.price} `;
    }
}

//Creacion de productos
const product1 = new Product("Marcador", 180);
const product2 = new Product("Cauderno", 4700);
const product3 = new Product("Octavo de Cartulina", 900);

//Impresion
/*console.log(product1.formatProduct());
console.log(product2.formatProduct());
console.log(product3.formatProduct());*/


//NUEVA CLASE

// class Book {
//     constructor(bookName, price, isbn) {
//         this.bookName = bookName
//         this.price = price
//         this.isbn = isbn
//     }
// }

// class Book extends Product {
//     constructor(bookName, price, isbn) {
//         super(bookName, price);
//         this.isbn = isbn;
//     }

//     formatProduct() {
//         return `El libro ${this.productName} tiene un valor de ${this.price} y su isbn es ${this.isbn}`;
//     }
// }

// const book1 = new Book("El vagabundo de Dios", 20000, 151515);
// const book2 = new Book("1987", 45000, 161616);
// const book3 = new Book("Rabia", 55000, 171717);

// console.log(book1.formatProduct());
// console.log(book2.formatProduct());
// console.log(book3.formatProduct());

//Herencia: Permite que los objetos y clases reutilicen metodos de otros

//HEREDAR METODOS
class Book extends Product {
    constructor(bookName, price, isbn) {
        super(bookName, price);
        this.isbn = isbn;
    }

    formatProduct() {
        return `${super.formatProduct()} y su ISBN es ${this.isbn}`;
    }
}

const book1 = new Book("El vagabundo de Dios", 20000, 151515);
const book2 = new Book("1987", 45000, 161616);
const book3 = new Book("Rabia", 55000, 171717);

/*console.log(book1.formatProduct());
console.log(book2.formatProduct());
console.log(book3.formatProduct());*/



//**************** EJEMPLO PRACTICO ****************//
// class Medicine {
//     constructor(medicineName, price, quantity) {
//         this.medicineName = medicineName;
//         this.price = price;
//         this.quantity = quantity;
//     }
//     formatProduct() {
//         return `${super.formatProduct()} y su ISBN es ${this.isbn}`;
//     }

// }

// const medicine1 = new Medicine("Clorfeniramina", 3500, 20);
// const medicine2 = new Medicine("Acetaminofem", 1500, 10);
// const medicine3 = new Medicine("Ibuprofeno", 5000, 10);



class Medicine extends Product {
    constructor(brand, price, quantity) {
        super(price);
        this.brand = brand;
        this.quantity = quantity;
    }
    formatProduct() {
        return `El producto provisto por ${this.brand} tiene un precio de ${super.formatProduct()} y  su cantidad es ${this.quantity}`
    }
}
/*
const medicine1 = new Medicine("Clorfeniramina", 3500, 20);
const medicine2 = new Medicine("Acetaminofem", 1500, 10);
const medicine3 = new Medicine("Ibuprofeno", 5000, 10);
*/

const medicine1 = new Medicine("Gedecol", 3500, 20);
const medicine2 = new Medicine("Gedecol", 1500, 10);
const medicine3 = new Medicine("Gedecol", 5000, 10);

console.log(medicine1.formatProduct());
console.log(medicine2.formatProduct());
console.log(medicine3.formatProduct());
