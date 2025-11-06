//const numbers = [1, 2, 3, 87, 10, 5, 7,99];
//console.table(numbers);
//Instanciar es el proceso mediante le cual se crea un objeto a partir de una clase
const months = new Array("May", "July", "June", "October");
console.table(typeof months);

const userName = "Jhonier"
const myArray = ["Hello", userName, 30, true, false, null, {lastName: "Gutierrez", myJob : "Aprendiz"},[2999912, 7338415, 9.999999]]
console.table(myArray);
//Consultar el tipo de dato del elemnto en el indice dado.
console.log(myArray[3]);

console.log(`Jhonier, tu arreglo tiene ${myArray.length} elementos`);

//Iterador con forEach
const numbers = [1, 2, 3, 87, 10, 5, 7,99];
numbers.forEach(function(number) {
    console.log(number);
});

months.forEach(function(month){
    console.table(month);
    
})