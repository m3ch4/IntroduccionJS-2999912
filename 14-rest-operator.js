//Rest operator. Lo que se busca es no modificar el array original
const months = ['December', 'November', 'January', 'February'];
console.table(months);

//Crear un nuevo arreglo y lo unimos al anterior

const newArray = [...months, 'May'];
console.table(newArray);

const newArray2 = ['October', ...newArray];
console.table(newArray2);