//String o cadena de texto

const userName = "Dayana";
const name1 = 'Jhonier';

console.log(typeof(userName));
console.log(userName);

//Dos formas poco comunes de crear string
const userName2 = String('Vero');
const userName3 = new String('Vero'); //Construcor: Metido que me permite inicializar un objeto para llamarlo desde cualquier parte.
//Instanciar es el proceso mediante el cual yo creo un objeto a partir de una clase.
console.log(userName2);
console.log(typeof userName3);

let producto = 'Tv 50"';
console.log(producto);

let producto2 = "Tv 50\"";
console.log(producto2);


let phrase = "We are learning JS in CDITI"
console.log(phrase.length); //Los metodos se llaman con un punto.
console.log(phrase.indexOf("learning")); //Busca si una cadena existe y me da su indexación. Si el resultado es menor que 0 (-1) la cadena no existe.

console.log(phrase.includes("are")); //Metodo mas moderno para indicar si una cadena existe.








