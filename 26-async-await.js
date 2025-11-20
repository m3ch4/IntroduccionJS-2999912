function downloadClients() {
    return new Promise(resolve => {
        console.log('Descargando clientes...');

        //Estas lineas se ejecutan desoues de pasado el tiempo indicado en setTimeaou
        setTimeout(() => {
            resolve('Los clientes fueron descargados')
        }, 1000)
    })
}


async function app() {
    try {
        const clients = await (downloadClients())
        console.log('Este codigo si se bloquea');
        console.log(clients);

    }
    catch (error) {
        console.log(error);

    }
}
app();
console.log('Este codigo no se bloquea');
//-----------------------------------------------------------------------------------------------------------//
//----------------------------------------------------------------------------------------------------------//

async function downloadLastestOrders() {
    return new Promise(resolve => {
        console.log('Descargamdo ordenes...');

        setTimeout(() => {
            resolve('Las ordenes fueron descargadas')
        }, 12000)
    })
}

async function call() {
    try {
        const orders = await (downloadLastestOrders())
        console.log(orders);

    } catch (error) {
        console.log(error);

    }
}

call()
//Metodo mas eficiente que permite que se ejecuten los dos al mismo tiempo
function downloadClients() {
    return new Promise(resolve => {
        console.log('Descargando clientes...');

        //Estas lineas se ejecutan desoues de pasado el tiempo indicado en setTimeaou
        setTimeout(() => {
            resolve('Los clientes fueron descargados')
        }, 1000)
    })
}


async function app() {
    try {
        const result = await Promise.all([downloadClients(), downloadLastestOrders])
        console.log('Este codigo si se bloquea');
        console.log(result[0]);
        console.log(result[1]);

        console.log(result);

    }
    catch (error) {
        console.log(error);

    }
}
app();
console.log('Este codigo no se bloquea');