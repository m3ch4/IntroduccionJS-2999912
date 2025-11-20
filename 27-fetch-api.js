//FETCH API
//Es una funcion de JS que permite realizar peticiones HTTP incluyendo GET, POST, PUT(Update), DELETE, etc, es una API moderna 
function getEmployees() {
    //Aqui se copiara el url https//www.555555.com
    const file = 'employees.json';
    fetch(file)
        //Aqui se obtienen los datos
        .then(result => {
            return result.json();
        })
        .then(data => {
            console.log(data);
            //Desestructuracion de objetos
            const { employees } = data;
            console.log(employees);
            employees.forEach(employ => {
                console.log(employ.id);
                console.log(employ.userName);
                console.log(employ.job);
                document.querySelector('.content').textContent += employ.userName;
            })
        })
}
getEmployees();