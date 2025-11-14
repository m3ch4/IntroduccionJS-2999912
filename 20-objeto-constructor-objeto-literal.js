//El objeto literal es la forma directa de crear un objeto usando {} y pares clave valor
//OBJETO LITERAL

const person = {
    userName: "Jhonier"
};

//OBJETO LITERAL
//Crea objetos mediante una funcion o clase usando new
//Instanciar es el proceso mediante el cual yo creo un objeto a partir de una clase.
//const person1 = new Person("Maria", 25, true);


//Objeto constructor
//Nos damos cuenta que es un objeto constructor por que el nombre de la funcion empieza con MAYUS.
function Producto(productName, price) {
    this.productName = productName;
    this.price = price;
}

const product1 = new Producto("Tablet", 550000);
const product2 = new Producto('Monitor Curvo 27" ', 850000);
const product3 = new Producto("Portatil", 750000);

console.log(product1);
console.log(product2);
console.log(product3);


//PROTOTYPE: Es como un modelo base. Cuando se crean muchos objetos que se parecen, no se escriben muchas veces lo mismo.


function Car(brand, color) {
    this.brand = brand;
    this.color = color;
}
//Definición de función común para todos los carros
Car.prototype.slowDown = function () {
    console.log(this.brand + 'esta frenando');

}
const car1 = new Car("Mazda ", "Red ");
const car2 = new Car("Kia ", "Gray");
const car3 = new Car("Audi ", "White");

car1.slowDown();

function Person(name, age, email) {
    this.name = name;
    this.age = age;
    this.email = email;
}
Person.prototype.personData = function () {
    return `El usuario ${this.name} tiene ${this.age} años y su correo es ${this.email}`;
}

const person1 = new Person("Juan", 22, "juan22@mail.com");
const person2 = new Person("Ana", 55, "ana55@mail.com");
const person3 = new Person("Lia", 18, "lia18@mail.com");

person1.personData();
person2.personData();
person3.personData();