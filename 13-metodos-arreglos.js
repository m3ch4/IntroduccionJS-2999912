// // const numbers = [1, 2, 3, 87, 10];
// numbers[5] = 100;
// //Agregar elementos a mi array pero se requiere conocer la longitud. Si lo coloco en una posicion que se este usando reemplaza el valor original.
// console.table(numbers);
// //Agrega elemetos al final del array, puede agregar varios elementos.
// numbers.push(22);
// console.table(numbers);
// //Metodo para agregar elementos al inicio del arreglo.
// numbers.unshift(-2, -1, 0);
// console.table(numbers);
// //Elimina el ultimo elemento del arreglo
// numbers.pop();
// console.table(numbers);
// //Elimina el promer elemento del arreglo.
// numbers.shift();
// console.table(numbers);
// //Eliminar los elementos despues del indice asignado
// numbers.splice(3)
// console.table(numbers)


const fruits = ["Apple", "Strawberry", "Banana", "Grape"];

// fruits.push("Pineapple");
// console.table(fruits)
// fruits.unshift("Kiwi");
// console.table(fruits)
// fruits.splice(3);
// console.table(fruits)

//Recorrer arreglo con for
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

//Recorrer arreglo con ForEach.
const animals = ['Tiger', 'Cat', 'Dog', 'Fox']
animals.forEach((animal) => {
    console.log(animal);
});

//Map para transformar
const numbers = [1, 2, 3, 4];
const squares = numbers.map(num => num * num);
console.log(squares);


