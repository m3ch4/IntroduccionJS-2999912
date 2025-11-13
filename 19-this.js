//THIS es una palabra reservada del sistema y no se usa para nombrar varaibles o funciones.

const reservation = {
    userName: "Jhonier",
    lastName: "Quintero",
    userAge: 27,
    totalPay: 250000,
    isPayed: true,

    information: function () {
        console.log(`el cliente ${this.userName} reservó y el total a pagar es ${this.totalPay}`);

    }
}
console.log(reservation.information());


const reservation2 = {
    userName: "Steven",
    lastName: "Duran",
    userAge: 27,
    totalPay: 250000,
    isPayed: true,
    //No funciona arrow functions para el uso del this
    information: () => {
        console.log(`el cliente ${this.userName} reservó y el total a pagar es ${this.totalPay}`);
    }
}
console.log(reservation2.information());
